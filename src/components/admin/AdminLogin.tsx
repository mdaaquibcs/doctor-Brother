"use client";
import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, LoaderCircle, HeartHandshake } from "lucide-react";

export default function AdminLogin({ configured }: { configured: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      const data = await response.json();
      if (!response.ok) { setError(data.error || "Unable to sign in. Please try again."); setBusy(false); return; }
      window.location.replace("/admin");
    } catch { setError("Unable to connect. Check your connection and try again."); setBusy(false); }
  }
  return (
    <main className="admin-login">
      <section className="admin-login-story">
        <Link href="/" aria-label="Dr. AllCare home"><Image src="/images/dr-all-care-logo-footer.svg" alt="Dr. AllCare" width={184} height={78} /></Link>
        <div className="admin-login-story-copy">
          <span className="admin-eyebrow"><HeartHandshake size={16} />CARE BEHIND THE CARE</span>
          <h1>A thoughtful response.<br /><span>A better care journey.</span></h1>
          <p>Your workspace for connecting people, coordinating enquiries and keeping every next step in view.</p>
        </div>
        <div className="admin-login-photo"><Image src="/images/pages/admin-enquiries.webp" alt="Illustrative care coordinator at a healthcare support desk" fill sizes="(max-width: 900px) 0px, 50vw" priority /><span>People first. Every day.</span></div>
        <p className="admin-login-story-note">Dr. AllCare Healthcare Solutions</p>
      </section>
      <section className="admin-login-form-area" aria-labelledby="login-heading">
        <Link href="/" className="admin-back-link">Back to website</Link>
        <div className="admin-login-card">
          <div className="admin-lock-symbol"><LockKeyhole size={26} /></div>
          <span className="admin-kicker">ADMINISTRATOR ACCESS</span>
          <h2 id="login-heading">Welcome back.</h2>
          <p>Sign in to your care coordination workspace.</p>
          <form onSubmit={submit}>
            <label htmlFor="admin-email">Email address</label>
            <div className="admin-field"><Mail size={18} /><input id="admin-email" name="email" type="email" autoComplete="username" placeholder="Enter your admin email" value={email} onChange={(e) => setEmail(e.target.value)} required disabled={busy} maxLength={254} /></div>
            <label htmlFor="admin-password">Password</label>
            <div className="admin-field"><LockKeyhole size={18} /><input id="admin-password" name="password" type={visible ? "text" : "password"} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required disabled={busy} maxLength={256} /><button type="button" aria-label={visible ? "Hide password" : "Show password"} aria-pressed={visible} onClick={() => setVisible(!visible)}>{visible ? <EyeOff size={18} /> : <Eye size={18} />}</button></div>
            {(!configured || error) && <div className="admin-alert" role="alert">{error || "Administrator access has not been configured. Contact the site owner."}</div>}
            <button className="admin-primary-button admin-login-submit" type="submit" disabled={busy || !configured}>{busy && <LoaderCircle size={18} className="admin-spin" />}{busy ? "Signing in…" : "Sign in to dashboard"}</button>
          </form>
          <div className="admin-login-access-note"><ShieldCheck size={17} /><span>Authorized team members only</span></div>
          <p className="admin-help">Need access? Contact your administrator.</p>
        </div>
        <p className="admin-login-copyright">© {new Date().getFullYear()} Dr. AllCare. We care. Always for you.</p>
      </section>
    </main>
  );
}
