"use client";
import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, Bell, Building2, Check, ChevronLeft, ChevronRight, Clock3, ExternalLink, HeartPulse, Inbox, LayoutDashboard, LoaderCircle, LogOut, Mail, Menu, Phone, RefreshCw, Search, ShieldCheck, SlidersHorizontal, Users, X } from "lucide-react";
import type { StoredBusinessEnquiry, StoredPatientEnquiry } from "@/lib/db/localStore";
import { BUSINESS_STATUSES, PATIENT_STATUSES, PRIORITIES, readable } from "@/lib/admin/enquiry-options";

type RecordItem = (StoredBusinessEnquiry & { kind: "business" }) | (StoredPatientEnquiry & { kind: "patient" });
type View = "all" | "business" | "patient" | "attention";
type ResponseData = { business: StoredBusinessEnquiry[]; patients: StoredPatientEnquiry[] };
const pageSize = 8;
const dateFormat = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata" });
function date(value: string) { const time = new Date(value); return Number.isNaN(time.getTime()) ? "—" : dateFormat.format(time); }
function initials(name: string) { return name.trim().split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase(); }
function subject(item: RecordItem) { return item.kind === "business" ? item.service_type : item.medical_concern; }

export default function AdminDashboard({ admin }: { admin: { name: string; email: string } }) {
  const [records, setRecords] = useState<RecordItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [view, setView] = useState<View>("all");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [sort, setSort] = useState("newest");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<RecordItem | null>(null);
  const [mobileNav, setMobileNav] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [notice, setNotice] = useState("");
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const load = useCallback((signal?: AbortSignal) => {
    return fetch("/api/admin/enquiries", { cache: "no-store", signal }).then(async (response) => {
      if (response.status === 401) { window.location.replace("/admin"); return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to load enquiries.");
      const result = data as ResponseData;
      setRecords([...result.business.map((item): RecordItem => ({ ...item, kind: "business" })), ...result.patients.map((item): RecordItem => ({ ...item, kind: "patient" }))]);
      setUpdatedAt(new Date());
    }).catch((err: Error) => {
      if ((err as Error).name !== "AbortError") setError((err as Error).message || "Unable to connect. Please try again.");
    }).finally(() => { if (!signal?.aborted) setLoading(false); });
  }, []);
  function refreshEnquiries() { setLoading(true); setError(""); void load(); }
  useEffect(() => { const controller = new AbortController(); void load(controller.signal); return () => controller.abort(); }, [load]);
  useEffect(() => { if (!notice) return; const timer = setTimeout(() => setNotice(""), 5000); return () => clearTimeout(timer); }, [notice]);
  function chooseView(next: View) { setView(next); setStatus("all"); setPage(1); setMobileNav(false); }
  async function logout() {
    setSigningOut(true);
    try {
      const response = await fetch("/api/admin/logout", { method: "POST" });
      if (!response.ok) throw new Error("Unable to sign out. Please try again.");
      window.location.replace("/admin");
    } catch (err) { setError((err as Error).message); setSigningOut(false); }
  }
  const counts = useMemo(() => ({
    total: records.length,
    business: records.filter((r) => r.kind === "business").length,
    patients: records.filter((r) => r.kind === "patient").length,
    pending: records.filter((r) => r.status === "new").length,
    priority: records.filter((r) => ["high", "urgent"].includes(r.priority)).length,
  }), [records]);
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    const weights: Record<string, number> = { urgent: 4, high: 3, normal: 2, low: 1 };
    return records.filter((item) =>
      (view === "all" || (view === "attention" ? item.status === "new" : item.kind === view)) &&
      (status === "all" || item.status === status) &&
      [item.reference_id, item.full_name, item.email, item.phone, item.city, subject(item), item.kind === "business" ? item.organization : item.specialty].join(" ").toLowerCase().includes(query)
    ).sort((a, b) => sort === "priority" ? (weights[b.priority] || 0) - (weights[a.priority] || 0) || Date.parse(b.created_at) - Date.parse(a.created_at) : sort === "oldest" ? Date.parse(a.created_at) - Date.parse(b.created_at) : Date.parse(b.created_at) - Date.parse(a.created_at));
  }, [records, view, search, status, sort]);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const activePage = Math.min(page, totalPages);
  const rows = filtered.slice((activePage - 1) * pageSize, activePage * pageSize);
  const statusOptions = [...new Set([...BUSINESS_STATUSES, ...PATIENT_STATUSES])];
  const nav = [
    { value: "all" as const, label: "Overview", icon: LayoutDashboard, count: counts.total },
    { value: "business" as const, label: "Business enquiries", icon: Building2, count: counts.business },
    { value: "patient" as const, label: "Patient enquiries", icon: HeartPulse, count: counts.patients },
    { value: "attention" as const, label: "Needs review", icon: Bell, count: counts.pending },
  ];
  const title = view === "all" ? "Overview" : nav.find((item) => item.value === view)?.label;
  return (
    <div className="admin-workspace">
      {mobileNav && <button className="admin-nav-backdrop" onClick={() => setMobileNav(false)} aria-label="Close navigation" />}
      <aside id="admin-sidebar" className={`admin-sidebar ${mobileNav ? "admin-sidebar-open" : ""}`} onKeyDown={(event) => { if (event.key === "Escape") { setMobileNav(false); document.querySelector<HTMLButtonElement>(".admin-mobile-toggle")?.focus(); } }}>
        <Link href="/" aria-label="Dr. AllCare home" className="admin-sidebar-brand"><Image src="/images/dr-all-care-logo-footer.svg" width={170} height={72} alt="Dr. AllCare" /></Link>
        <div className="admin-workspace-label"><span>WORKSPACE</span><button className="admin-mobile-close" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X size={20} /></button></div>
        <nav aria-label="Admin navigation">{nav.map((item) => <button key={item.value} onClick={() => chooseView(item.value)} className={view === item.value ? "is-active" : ""} aria-current={view === item.value ? "page" : undefined}><item.icon size={19} /><span>{item.label}</span><small>{loading ? "—" : item.count}</small></button>)}</nav>
        <div className="admin-sidebar-bottom">
          <div className="admin-team-note"><ShieldCheck size={24} /><strong>A connected care team.</strong><p>Keep every enquiry moving toward the right next step.</p></div>
          <Link href="/" className="admin-website-link"><ExternalLink size={17} />View website</Link>
          <button onClick={logout} disabled={signingOut} className="admin-logout"><LogOut size={18} />{signingOut ? "Signing out…" : "Sign out"}</button>
        </div>
      </aside>
      <div className="admin-main-shell">
        <header className="admin-topbar">
          <div className="admin-topbar-location"><button className="admin-mobile-toggle" onClick={() => setMobileNav(true)} aria-label="Open navigation" aria-expanded={mobileNav} aria-controls="admin-sidebar"><Menu size={22} /></button><span>Workspace</span><ChevronRight size={14} /><strong>{title}</strong></div>
          <div className="admin-account"><span className="admin-account-avatar">A</span><div><strong>{admin.name}</strong><span>{admin.email}</span></div></div>
        </header>
        <main className="admin-main">
          <section className="admin-page-heading"><div><p className="admin-kicker">YOUR CARE COORDINATION DESK</p><h1>{view === "all" ? "Welcome back." : title}</h1><p>One workspace. Every enquiry. A thoughtful next step.</p></div><button className="admin-secondary-button" onClick={refreshEnquiries} disabled={loading}><RefreshCw size={17} className={loading ? "admin-spin" : ""} />{loading ? "Refreshing…" : "Refresh enquiries"}</button></section>
          {error && <div className="admin-alert" role="alert">{error}<button onClick={refreshEnquiries} disabled={loading}>Try again</button></div>}
          {notice && <div className="admin-success" role="status"><Check size={17} />{notice}</div>}
          <section className="admin-stats" aria-label="Enquiry summary">
            {[{ label: "Total enquiries", count: counts.total, icon: Inbox, note: "Across all care services", target: "all" as View, tone: "teal" }, { label: "Needs review", count: counts.pending, icon: Clock3, note: "New enquiries awaiting review", target: "attention" as View, tone: "amber" }, { label: "Business enquiries", count: counts.business, icon: Building2, note: "Hospitals, staffing & organizations", target: "business" as View, tone: "blue" }, { label: "Patient enquiries", count: counts.patients, icon: Users, note: "Treatment & care coordination", target: "patient" as View, tone: "violet" }].map((item) => <button className="admin-stat-card" key={item.label} onClick={() => chooseView(item.target)}><div><span>{item.label}</span><span className={`admin-stat-icon ${item.tone}`}><item.icon size={21} /></span></div><strong>{loading && !records.length ? "—" : item.count}</strong><p>{item.note}</p></button>)}
          </section>
          <section className="admin-overview-strip" aria-label="Workspace insights">
            <div className="admin-focus-card"><span className="admin-focus-icon"><Activity size={22} /></span><div><strong>{counts.pending ? `${counts.pending} enquiries ready for your review` : "Keep your care journey moving"}</strong><p>{counts.priority ? `${counts.priority} high or urgent priority enquiries across your workspace.` : "Open an enquiry to review its details and plan the next step."}</p></div><button onClick={() => chooseView("attention")}>Review new enquiries</button></div>
            <div className="admin-mix-card"><div><strong>Enquiry mix</strong><span>{counts.total} total</span></div><div className="admin-mix-track" role="img" aria-label={`${counts.business} business enquiries and ${counts.patients} patient enquiries`}><span style={{ width: `${counts.total ? counts.business / counts.total * 100 : 0}%` }} /><span style={{ width: `${counts.total ? counts.patients / counts.total * 100 : 0}%` }} /></div><p><span>Business <b>{counts.business}</b></span><span>Patients <b>{counts.patients}</b></span></p></div>
          </section>
          <section className="admin-enquiries-panel" aria-labelledby="enquiries-title">
            <div className="admin-panel-heading"><div><h2 id="enquiries-title">{view === "all" ? "All enquiries" : title}<span>{filtered.length}</span></h2><p>A clear view of the people and organizations reaching out.</p></div>{updatedAt && <span className="admin-updated">Updated {updatedAt.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</span>}</div>
            <div className="admin-table-controls"><label className="admin-search"><Search size={18} /><span className="admin-sr-only">Search enquiries</span><input type="search" placeholder="Search name, reference, service or phone…" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} /></label><label className="admin-select"><SlidersHorizontal size={16} /><span className="admin-sr-only">Filter by status</span><select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }}><option value="all">All statuses</option>{statusOptions.map((option) => <option key={option} value={option}>{readable(option)}</option>)}</select></label><label className="admin-select"><span className="admin-sr-only">Sort enquiries</span><select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }}><option value="newest">Newest first</option><option value="oldest">Oldest first</option><option value="priority">Priority first</option></select></label></div>
            {loading && !records.length ? <div className="admin-empty" role="status"><LoaderCircle className="admin-spin" size={28} /><h3>Loading your enquiries…</h3><p>Bringing your workspace up to date.</p></div> : error && !records.length ? <div className="admin-empty"><Inbox size={32} /><h3>Enquiries could not be loaded</h3><p>Please use Refresh enquiries to try again.</p></div> : rows.length === 0 ? <div className="admin-empty"><Inbox size={34} /><h3>{records.length ? "No matching enquiries" : "Your workspace is ready"}</h3><p>{records.length ? "Try another search or clear your filters." : "Enquiries submitted on the website will appear here."}</p>{records.length > 0 && <button className="admin-secondary-button" onClick={() => { chooseView("all"); setSearch(""); }}>Clear filters</button>}</div> : <div className="admin-table-scroll"><table><caption className="admin-sr-only">Enquiries with contact details, category, status and priority</caption><thead><tr><th>Contact</th><th>Enquiry</th><th>Category</th><th>Status</th><th>Priority</th><th>Received</th><th><span className="admin-sr-only">Actions</span></th></tr></thead><tbody>{rows.map((item) => <tr key={`${item.kind}-${item.id}`}><td><div className="admin-contact-cell"><span className={`admin-contact-avatar ${item.kind}`}>{initials(item.full_name)}</span><div><button className="admin-name-button" onClick={() => setSelected(item)}>{item.full_name}</button><span>{item.kind === "business" ? item.organization : [item.city, item.country].filter(Boolean).join(", ")}</span></div></div></td><td><div className="admin-subject" title={subject(item)}>{subject(item)}</div><span className="admin-reference">{item.reference_id}</span></td><td><span className={`admin-category ${item.kind}`}>{item.kind === "business" ? "Business" : "Patient"}</span></td><td><span className={`admin-status ${item.status === "new" ? "new" : ["converted", "completed"].includes(item.status) ? "complete" : "progress"}`}>{readable(item.status)}</span></td><td><span className={`admin-priority ${item.priority}`}>{readable(item.priority)}</span></td><td className="admin-date">{date(item.created_at)}</td><td><button className="admin-open-button" onClick={() => setSelected(item)} aria-label={`View enquiry ${item.reference_id}`}>View<ChevronRight size={15} /></button></td></tr>)}</tbody></table></div>}
            {rows.length > 0 && <div className="admin-enquiry-cards" aria-label="Enquiries">
              {rows.map((item) => <article className="admin-enquiry-card" key={`${item.kind}-${item.id}`}>
                <div className="admin-contact-cell"><span className={`admin-contact-avatar ${item.kind}`}>{initials(item.full_name)}</span><div><h3>{item.full_name}</h3><span>{item.kind === "business" ? item.organization : [item.city, item.country].filter(Boolean).join(", ")}</span></div></div>
                <p className="admin-card-subject">{subject(item)}</p>
                <span className="admin-reference">{item.reference_id}</span>
                <dl><div><dt>Category</dt><dd><span className={`admin-category ${item.kind}`}>{item.kind === "business" ? "Business" : "Patient"}</span></dd></div><div><dt>Status</dt><dd><span className={`admin-status ${item.status === "new" ? "new" : ["converted", "completed"].includes(item.status) ? "complete" : "progress"}`}>{readable(item.status)}</span></dd></div><div><dt>Priority</dt><dd><span className={`admin-priority ${item.priority}`}>{readable(item.priority)}</span></dd></div><div><dt>Received</dt><dd>{date(item.created_at)}</dd></div></dl>
                <button className="admin-secondary-button" onClick={() => setSelected(item)} aria-label={`View enquiry ${item.reference_id}`}>View enquiry</button>
              </article>)}
            </div>}
            <div className="admin-pagination"><span>{filtered.length ? `Showing ${(activePage - 1) * pageSize + 1}–${Math.min(activePage * pageSize, filtered.length)} of ${filtered.length} enquiries` : "0 enquiries"}</span><div><button onClick={() => setPage(activePage - 1)} disabled={activePage <= 1} aria-label="Previous page"><ChevronLeft size={17} /></button><span>Page {activePage} of {totalPages}</span><button onClick={() => setPage(activePage + 1)} disabled={activePage >= totalPages} aria-label="Next page"><ChevronRight size={17} /></button></div></div>
          </section>
          <footer className="admin-workspace-footer"><span>Dr. AllCare · Care coordination workspace</span><span><ShieldCheck size={14} />Authorized access</span></footer>
        </main>
      </div>
      {selected && <EnquiryDetails key={`${selected.kind}-${selected.id}`} item={selected} onClose={() => setSelected(null)} onSaved={(item) => { setRecords((current) => current.map((row) => row.id === item.id && row.kind === item.kind ? item : row)); setSelected(null); setNotice("Enquiry updated successfully."); }} />}
    </div>
  );
}

function EnquiryDetails({ item, onClose, onSaved }: { item: RecordItem; onClose: () => void; onSaved: (item: RecordItem) => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState(item.status);
  const [priority, setPriority] = useState(item.priority);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => { const element = dialog.current; const previous = document.activeElement as HTMLElement | null; element?.showModal(); return () => { element?.close(); previous?.focus(); }; }, []);
  async function save(event: FormEvent) {
    event.preventDefault(); setSaving(true); setError("");
    try {
      const response = await fetch("/api/admin/enquiries", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: item.id, type: item.kind, status, priority }) });
      if (response.status === 401) { window.location.replace("/admin"); return; }
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to save changes.");
      onSaved({ ...item, ...data.record, kind: item.kind });
    } catch (err) { setError((err as Error).message); setSaving(false); }
  }
  return <dialog ref={dialog} className="admin-detail-dialog" aria-labelledby="enquiry-detail-title" onCancel={(event) => { if (saving) event.preventDefault(); else onClose(); }}>
    <div className="admin-detail-header"><div><span className="admin-kicker">ENQUIRY DETAILS</span><h2 id="enquiry-detail-title">{item.full_name}</h2><p>{item.reference_id}</p></div><button aria-label="Close enquiry details" onClick={onClose} disabled={saving}><X size={21} /></button></div>
    <div className="admin-detail-body"><div className="admin-detail-tags"><span className={`admin-category ${item.kind}`}>{item.kind === "business" ? "Business enquiry" : "Patient enquiry"}</span><span>Received {date(item.created_at)}</span></div><h3>{item.kind === "business" ? item.service_type : item.specialty || "Patient care request"}</h3><p className="admin-detail-message">{item.kind === "business" ? item.message || "No additional message provided." : item.medical_concern}</p><dl>{item.kind === "business" && <><dt>Organization</dt><dd>{item.organization}</dd></>}<dt>Location</dt><dd>{[item.city, item.kind === "patient" ? item.country : null].filter(Boolean).join(", ") || "Not provided"}</dd>{item.kind === "patient" && <><dt>Treatment timeline</dt><dd>{item.timeline || "Not specified"}</dd><dt>Patient type</dt><dd>{item.is_international ? "International" : "Domestic"}</dd></>}</dl><div className="admin-detail-contact"><a href={`tel:${item.phone.replace(/[^+\d]/g, "")}`}><Phone size={17} />{item.phone}</a>{item.email && <a href={`mailto:${item.email}`}><Mail size={17} />{item.email}</a>}</div><form onSubmit={save}><h3>Update enquiry</h3><label htmlFor="detail-status">Status</label><select id="detail-status" value={status} onChange={(e) => setStatus(e.target.value)} disabled={saving}>{(item.kind === "business" ? BUSINESS_STATUSES : PATIENT_STATUSES).map((value) => <option key={value} value={value}>{readable(value)}</option>)}</select><label htmlFor="detail-priority">Priority</label><select id="detail-priority" value={priority} onChange={(e) => setPriority(e.target.value)} disabled={saving}>{PRIORITIES.map((value) => <option key={value} value={value}>{readable(value)}</option>)}</select>{error && <div className="admin-alert" role="alert">{error}</div>}<div className="admin-detail-actions"><button type="button" className="admin-secondary-button" onClick={onClose} disabled={saving}>Cancel</button><button type="submit" className="admin-primary-button" disabled={saving || (status === item.status && priority === item.priority)}>{saving && <LoaderCircle size={17} className="admin-spin" />}{saving ? "Saving…" : "Save changes"}</button></div></form></div>
  </dialog>;
}
