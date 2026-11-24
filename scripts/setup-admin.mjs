import { randomBytes, scryptSync } from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';

const dir = path.join(process.cwd(), '.local');
const configFile = path.join(dir, 'admin-config.json');
await fs.mkdir(dir, {recursive:true, mode:0o700});
const exists = await fs.access(configFile).then(()=>true,()=>false);
if (exists && !process.argv.includes('--reset')) {
  console.log('An administrator is already configured. Use --reset to rotate the local credentials.');
  process.exit(0);
}
const email = process.env.ADMIN_SETUP_EMAIL || 'admin@drallcare.com';
const password = randomBytes(18).toString('base64url');
const salt = randomBytes(16).toString('hex');
const passwordHash = `scrypt:${salt}:${scryptSync(password, salt, 64).toString('hex')}`;
await fs.writeFile(configFile, JSON.stringify({email, passwordHash, name:'Administrator'},null,2),{mode:0o600});
await fs.writeFile(path.join(dir, 'admin-sessions.json'), JSON.stringify({sessions:[],attempts:[]}),{mode:0o600});
await fs.writeFile(path.join(dir,'admin-login.txt'), `Dr. AllCare local administrator\n\nURL: http://127.0.0.1:3000/admin\nEmail: ${email}\nPassword: ${password}\n\nKeep this file private. It is excluded from Git and is not served by the website.\nRotate local credentials: node scripts/setup-admin.mjs --reset\n`,{mode:0o600});
console.log('Local administrator configured. Credentials saved privately in .local/admin-login.txt');
