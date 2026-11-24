// Integration checks run against an isolated production server and synthetic records.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { randomBytes, scryptSync } from 'node:crypto';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const fixture = await fs.mkdtemp(path.join(os.tmpdir(),'allcare-admin-check-'));
const email = 'admin-test@example.invalid';
const password = randomBytes(20).toString('base64url');
const salt = randomBytes(16).toString('hex');
const passwordHash = `scrypt:${salt}:${scryptSync(password,salt,64).toString('hex')}`;
const recordsFile = path.join(fixture,'enquiries.json');
await fs.writeFile(recordsFile,JSON.stringify({
 business:[{id:'test-business',reference_id:'TEST-B2B-1',category:'b2b',full_name:'Test Business Contact',email:'contact@example.invalid',phone:'+91 00000 00000',organization:'Test Organization',city:'Test City',service_type:'Test Service',message:'Synthetic integration record',status:'new',priority:'normal',source_url:'/',created_at:new Date().toISOString()}],
 patients:[{id:'test-patient',reference_id:'TEST-PAT-1',full_name:'Test Patient',email:null,phone:'+91 00000 00000',city:'Test City',country:'India',is_international:false,specialty:'Test Specialty',medical_concern:'Synthetic integration concern',timeline:null,status:'new',priority:'normal',coordinator_name:null,source_url:'/',created_at:new Date().toISOString()}]
}),{mode:0o600});
const port = Number(process.env.ADMIN_TEST_PORT || 3101);
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port',String(port)],{
 cwd:process.cwd(),env:{...process.env,NODE_ENV:'production',ADMIN_EMAIL:email,ADMIN_PASSWORD_HASH:passwordHash,ADMIN_DATA_DIR:fixture,LOCAL_ENQUIRIES_FILE:recordsFile,NEXT_PUBLIC_SUPABASE_URL:'',SUPABASE_SERVICE_ROLE_KEY:''},stdio:['ignore','pipe','pipe']
});
let serverError='';server.stderr.on('data',data=>{serverError+=data.toString();});server.stdout.resume();
let passed=0;
function ok(label){passed++;console.log(`PASS ${label}`);}
async function request(route, {method='GET',body,cookie,origin=base,raw}={}) {
 const headers={};if(method!=='GET')headers.Origin=origin;if(body!==undefined||raw!==undefined)headers['Content-Type']='application/json';if(cookie)headers.Cookie=cookie;
 return fetch(base+route,{method,headers,body:raw??(body===undefined?undefined:JSON.stringify(body)),redirect:'manual'});
}
async function login(){return request('/api/admin/login',{method:'POST',body:{email,password}});}
try {
 let ready=false;
 for(let i=0;i<80;i++){
  if(server.exitCode!==null)throw Error('Test server exited: '+serverError);
  try{const r=await request('/admin');if(r.status===200){ready=true;break;}}catch{}
  await delay(150);
 }
 assert(ready,'Test server readiness');
 let r=await request('/admin');let html=await r.text();
 assert.equal(r.status,200);assert(html.includes('admin-password'));assert(!html.includes('admin-enquiries-panel'));assert.match(r.headers.get('cache-control')||'',/no-store/);ok('anonymous /admin shows login and is not cached');
 for(const route of ['/admin/enquiries','/admin/inquiries']){r=await request(route);assert.equal(r.status,307);assert.equal(r.headers.get('location'),'/admin');}ok('both legacy admin URLs redirect to /admin');
 for(const method of ['GET','PATCH']){r=await request('/api/admin/enquiries',{method,body:method==='PATCH'?{id:'test-business',type:'business',status:'contacted'}:undefined});assert.equal(r.status,401);assert(!(await r.text()).includes('Test Business Contact'));}ok('anonymous read and mutation rejected');
 r=await request('/api/admin/login',{method:'POST',origin:'https://untrusted.example',body:{email,password}});assert.equal(r.status,403);ok('cross-origin login rejected');
 r=await request('/api/admin/login',{method:'POST',raw:'{'});assert.equal(r.status,400);ok('malformed login rejected');
 r=await request('/api/admin/login',{method:'POST',body:{email,password:'incorrect'}});assert.equal(r.status,401);ok('incorrect password rejected');
 r=await login();assert.equal(r.status,200);const setCookie=r.headers.get('set-cookie');assert.match(setCookie,/HttpOnly/i);assert.match(setCookie,/Secure/i);assert.match(setCookie,/SameSite=strict/i);const cookie=setCookie.split(';')[0];ok('valid login creates protected session cookie');
 r=await request('/admin',{cookie});html=await r.text();assert(html.includes('admin-enquiries-panel'));assert(!html.includes('admin-password'));assert(!html.includes(passwordHash));assert(!html.includes(password));ok('authenticated /admin renders dashboard without secrets');
 r=await request('/api/admin/enquiries',{cookie});assert.equal(r.status,200);const data=await r.json();assert.equal(data.business.length,1);assert.equal(data.patients.length,1);assert.equal(data.stats.pendingReview,2);assert.match(r.headers.get('cache-control'),/no-store/);ok('authenticated API returns isolated enquiries');
 r=await request('/api/admin/enquiries',{method:'PATCH',cookie,origin:'https://untrusted.example',body:{id:'test-business',type:'business',status:'contacted'}});assert.equal(r.status,403);ok('cross-origin updates rejected');
 for(const body of [{id:'test-business',type:'other',status:'contacted'},{id:'test-patient',type:'patient',status:'converted'},{id:'test-business',type:'business',priority:'invalid'},{id:'test-business',type:'business'}]){r=await request('/api/admin/enquiries',{method:'PATCH',cookie,body});assert.equal(r.status,400);}ok('invalid type, status, priority and empty updates rejected');
 r=await request('/api/admin/enquiries',{method:'PATCH',cookie,body:{id:'missing',type:'business',status:'contacted'}});assert.equal(r.status,404);ok('missing enquiry returns 404');
 const updates=await Promise.all([
  request('/api/admin/enquiries',{method:'PATCH',cookie,body:{id:'test-business',type:'business',status:'contacted',priority:'high'}}),
  request('/api/admin/enquiries',{method:'PATCH',cookie,body:{id:'test-patient',type:'patient',status:'doctor_assigned',priority:'urgent'}})
 ]);assert(updates.every(response=>response.status===200));
 const saved=JSON.parse(await fs.readFile(recordsFile,'utf8'));assert.equal(saved.business[0].status,'contacted');assert.equal(saved.business[0].priority,'high');assert.equal(saved.patients[0].status,'doctor_assigned');assert.equal(saved.patients[0].priority,'urgent');ok('concurrent status and priority updates persist without lost records');
 r=await request('/api/admin/enquiries?filter=new',{cookie});const filtered=await r.json();assert.equal(filtered.business.length+filtered.patients.length,0);assert.equal(filtered.stats.totalBusiness,1);ok('new filter preserves workspace totals');
 const tampered=cookie.slice(0,-1)+(cookie.endsWith('A')?'B':'A');r=await request('/api/admin/enquiries',{cookie:tampered});assert.equal(r.status,401);ok('tampered session rejected');
 r=await request('/api/admin/logout',{method:'POST',cookie,origin:'https://untrusted.example'});assert.equal(r.status,403);ok('cross-origin logout rejected');
 r=await request('/api/admin/logout',{method:'POST',cookie});assert.equal(r.status,200);assert.match(r.headers.get('set-cookie'),/Max-Age=0/i);r=await request('/api/admin/enquiries',{cookie});assert.equal(r.status,401);ok('logout revokes the server session and clears the cookie');
 r=await login();const expiredCookie=r.headers.get('set-cookie').split(';')[0];const stateFile=path.join(fixture,'admin-sessions.json');let state=JSON.parse(await fs.readFile(stateFile,'utf8'));state.sessions.forEach(session=>session.expiresAt=Date.now()-1);await fs.writeFile(stateFile,JSON.stringify(state));r=await request('/api/admin/enquiries',{cookie:expiredCookie});assert.equal(r.status,401);ok('expired session rejected');
 for(let i=0;i<10;i++){r=await request('/api/admin/login',{method:'POST',body:{email,password:'incorrect'}});assert.equal(r.status,401);}r=await login();assert.equal(r.status,429);assert(Number(r.headers.get('retry-after'))>0);ok('repeated failed login attempts are rate limited');
 state=JSON.parse(await fs.readFile(stateFile,'utf8'));state.attempts=state.attempts.map(()=>Date.now()-16*60*1000);await fs.writeFile(stateFile,JSON.stringify(state));r=await login();assert.equal(r.status,200);ok('login recovers after rate-limit window');
 const contact={fullName:'Responsive Test Contact',phone:'+91 0000000000',sourceUrl:'/contact-us'};
 r=await request('/api/enquiries',{method:'POST',body:{type:'business',payload:{...contact,email:'responsive@example.invalid',organization:'Test Clinic',city:'',category:'b2b',serviceType:'Hospital Operations Management',message:'Synthetic layout verification'}}});assert.equal(r.status,201);assert((await r.json()).referenceId);ok('business enquiry form payload is accepted');
 r=await request('/api/enquiries',{method:'POST',body:{type:'patient',payload:{...contact,email:'',city:'Test City',country:'India',isInternational:false,medicalConcern:'Test care request\n\nAdditional information',specialty:'Super-Specialty Care',timeline:'Immediate / Within 1 Week'}}});assert.equal(r.status,201);assert((await r.json()).referenceId);const updatedRecords=JSON.parse(await fs.readFile(recordsFile,'utf8'));assert.equal(updatedRecords.patients[0].city,'Test City');assert.match(updatedRecords.patients[0].medical_concern,/Additional information/);ok('patient enquiry preserves city and additional details with optional email');
 console.log(`\n${passed} enquiry and admin integration checks passed. Only isolated synthetic data was used.`);
} finally {
 server.kill('SIGTERM');await new Promise(resolve=>server.exitCode!==null?resolve():server.once('exit',resolve));await fs.rm(fixture,{recursive:true,force:true});
}
