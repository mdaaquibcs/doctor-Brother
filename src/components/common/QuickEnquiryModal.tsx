"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, CheckCircle2, Building2, HeartPulse, ShieldCheck, LoaderCircle, AlertCircle } from "lucide-react";
import PhoneInputWithCountry from "./PhoneInputWithCountry";
import "./QuickEnquiryModal.css";

type EnquiryType = "b2b" | "patient";
interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: EnquiryType;
}

export default function QuickEnquiryModal({ isOpen, onClose, initialType = "b2b" }: QuickEnquiryModalProps) {
  return isOpen ? <EnquiryDialog key={initialType} onClose={onClose} initialType={initialType} /> : null;
}

function EnquiryDialog({ onClose, initialType }: { onClose: () => void; initialType: EnquiryType }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const [activeTab, setActiveTab] = useState<EnquiryType>(initialType);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", countryCode: "+91", organization: "", city: "", category: "Hospital Operations Management", patientCountry: "India", medicalConcern: "", message: "" });
  const isBusiness = activeTab === "b2b";

  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    heading.current?.focus({ preventScroll: true });
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus({ preventScroll: true });
    };
  }, []);

  function selectType(type: EnquiryType) { setActiveTab(type); setErrorMessage(""); }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    if (formData.phone.length !== 10) { setErrorMessage("Please enter a valid 10-digit mobile number."); return; }
    setLoading(true);
    const phone = `${formData.countryCode} ${formData.phone}`;
    const sourceUrl = window.location.pathname;
    const payload = isBusiness
      ? { fullName: formData.fullName, email: formData.email, phone, organization: formData.organization, city: "", serviceType: formData.category, message: formData.message, category: "b2b", sourceUrl }
      : { fullName: formData.fullName, email: formData.email, phone, city: formData.city, country: formData.patientCountry, isInternational: formData.patientCountry !== "India", medicalConcern: [formData.medicalConcern, formData.message].filter(Boolean).join("\n\n"), specialty: "Super-Specialty Care", timeline: "Immediate / Within 1 Week", sourceUrl };
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: isBusiness ? "business" : "patient", payload }) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.error || "Unable to send your enquiry. Please try again.");
      setReferenceId(result.referenceId || "DAC-CONFIRMED");
      dialog.current?.querySelector(".enquiry-scroll")?.scrollTo({ top: 0 });
    } catch (error) { setErrorMessage(error instanceof Error ? error.message : "Unable to connect. Please try again."); }
    finally { setLoading(false); }
  }

  return <dialog ref={dialog} className="enquiry-dialog" aria-labelledby="enquiry-title" aria-describedby="enquiry-description"
    onCancel={(event) => { event.preventDefault(); if (!loading) onClose(); }}
    onClick={(event) => {
      if (event.target !== event.currentTarget || loading) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    }}>
    <button type="button" className="enquiry-close" onClick={onClose} disabled={loading} aria-label="Close enquiry"><X size={21} /></button>
    <div className="enquiry-scroll">
      <header className="enquiry-header">
        <span className="enquiry-eyebrow"><ShieldCheck size={16} aria-hidden="true" />DR. ALLCARE · HERE TO HELP</span>
        <h2 id="enquiry-title" tabIndex={-1} ref={heading}>{referenceId ? "Thank you for reaching out." : isBusiness ? "Business & hospital enquiry" : "Let’s plan your care."}</h2>
        <p id="enquiry-description">{referenceId ? "Your enquiry has been received by our team." : isBusiness ? "Tell us what your organization needs. Our healthcare team will help with the next step." : "Share a few details so our patient care team can help you find the right support."}</p>
        {!referenceId && <div className="enquiry-types" role="group" aria-label="Enquiry type">
          <button type="button" aria-pressed={isBusiness} onClick={() => selectType("b2b")} disabled={loading}><Building2 size={18} aria-hidden="true" /><span>Business & hospitals</span></button>
          <button type="button" aria-pressed={!isBusiness} onClick={() => selectType("patient")} disabled={loading}><HeartPulse size={18} aria-hidden="true" /><span>Patient care</span></button>
        </div>}
      </header>
      <div className="enquiry-body">
        {referenceId ? <div className="enquiry-success" role="status">
          <CheckCircle2 size={48} aria-hidden="true" />
          <h3>Enquiry sent successfully</h3>
          <p>Thank you, {formData.fullName}. Our team will contact you using the details you provided.</p>
          <div className="enquiry-reference">Reference: <strong>{referenceId}</strong></div>
          <button type="button" className="enquiry-submit" onClick={onClose}>Done</button>
        </div> : <form onSubmit={handleSubmit} aria-busy={loading}>
          <p className="enquiry-required-note">Fields marked <span>*</span> are required.</p>
          {errorMessage && <div className="enquiry-error" role="alert"><AlertCircle size={19} aria-hidden="true" /><span>{errorMessage}</span></div>}
          <fieldset disabled={loading} className="enquiry-fields">
            <legend className="sr-only">Your enquiry details</legend>
            <div className="enquiry-grid">
              <div className="enquiry-field"><label htmlFor="enquiry-name">Full name <span>*</span></label><input id="enquiry-name" name="fullName" autoComplete="name" minLength={2} maxLength={100} required placeholder="Your full name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} /></div>
              <div className="enquiry-field"><label htmlFor="enquiry-email">{isBusiness ? "Work email" : "Email address"} {isBusiness ? <span>*</span> : <small>(optional)</small>}</label><input id="enquiry-email" name="email" type="email" maxLength={254} autoComplete="email" required={isBusiness} placeholder={isBusiness ? "you@organization.com" : "you@example.com"} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} /></div>
              <div className="enquiry-field"><label htmlFor="enquiry-phone">Phone / WhatsApp <span>*</span></label><PhoneInputWithCountry id="enquiry-phone" value={formData.phone} countryCode={formData.countryCode} onChangePhone={(phone) => setFormData({ ...formData, phone })} onChangeCountryCode={(countryCode) => setFormData({ ...formData, countryCode })} /></div>
              <div className="enquiry-field"><label htmlFor="enquiry-organization">{isBusiness ? "Hospital / company" : "Current city / state"} <span>*</span></label><input id="enquiry-organization" name={isBusiness ? "organization" : "city"} autoComplete={isBusiness ? "organization" : "address-level2"} minLength={2} maxLength={isBusiness ? 150 : 100} required placeholder={isBusiness ? "Organization name" : "e.g. New Delhi"} value={isBusiness ? formData.organization : formData.city} onChange={(e) => setFormData({ ...formData, [isBusiness ? "organization" : "city"]: e.target.value })} /></div>
            </div>
            {isBusiness ? <div className="enquiry-field"><label htmlFor="enquiry-service">Service of interest <span>*</span></label><select id="enquiry-service" name="service" required value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
              <option value="Hospital Operations Management">Hospital management</option><option value="Corporate Healthcare & Factory Clinics">Corporate healthcare & factory clinics</option><option value="Healthcare Staffing (Doctors & Nurses)">Healthcare staffing</option><option value="Hospital Setup & Turnkey Infrastructure">Hospital setup & consultancy</option><option value="Medical Equipment Procurement & Leasing">Medical equipment solutions</option><option value="Institutional Healthcare Partnership">Institutional partnerships</option>
            </select></div> : <div className="enquiry-grid">
              <div className="enquiry-field"><label htmlFor="enquiry-country">Patient location <span>*</span></label><select id="enquiry-country" name="country" value={formData.patientCountry} onChange={(e) => setFormData({ ...formData, patientCountry: e.target.value })}><option>India</option><option>Bangladesh</option><option>Nepal</option><option>Middle East</option><option>East Africa</option><option>Central Asia</option><option>Other International</option></select></div>
              <div className="enquiry-field"><label htmlFor="enquiry-treatment">Treatment needed <span>*</span></label><input id="enquiry-treatment" name="medicalConcern" minLength={3} maxLength={200} required placeholder="e.g. Knee replacement" value={formData.medicalConcern} onChange={(e) => setFormData({ ...formData, medicalConcern: e.target.value })} /></div>
            </div>}
            <div className="enquiry-field"><label htmlFor="enquiry-message">How can we help? <small>(optional)</small></label><textarea id="enquiry-message" name="message" rows={3} maxLength={isBusiness ? 2000 : 1700} placeholder={isBusiness ? "Tell us about your requirements and preferred timeline." : "Share any additional details about the care you need."} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} /></div>
            <p className="enquiry-privacy"><ShieldCheck size={17} aria-hidden="true" /><span>Our team will use these details to respond to your enquiry.</span></p>
            <button className="enquiry-submit" type="submit" disabled={loading}>{loading && <LoaderCircle size={19} className="enquiry-spinner" aria-hidden="true" />}{loading ? "Sending enquiry…" : isBusiness ? "Send business enquiry" : "Request care support"}</button>
          </fieldset>
        </form>}
      </div>
    </div>
  </dialog>;
}
