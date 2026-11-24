"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Building, User, Mail, Phone, MapPin, Send, AlertCircle } from "lucide-react";
import PhoneInputWithCountry from "./PhoneInputWithCountry";

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: "b2b" | "patient";
}

export default function QuickEnquiryModal({
  isOpen,
  onClose,
  initialType = "b2b"
}: QuickEnquiryModalProps) {
  const [activeTab, setActiveTab] = useState<"b2b" | "patient">(initialType);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    organization: "",
    city: "",
    category: "Hospital Operations Management",
    patientCountry: "India",
    medicalConcern: "",
    message: ""
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (formData.phone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }

    try {
      const isB2B = activeTab === "b2b";
      const formattedPhone = `${formData.countryCode} ${formData.phone}`;
      const payload = isB2B
        ? {
            fullName: formData.fullName,
            email: formData.email,
            phone: formattedPhone,
            organization: formData.organization || "Independent Healthcare Entity",
            city: formData.city || "",
            serviceType: formData.category,
            message: formData.message,
            category: "b2b" as const,
            sourceUrl: typeof window !== "undefined" ? window.location.pathname : "",
          }
        : {
            fullName: formData.fullName,
            email: formData.email || "",
            phone: formattedPhone,
            city: formData.city || "Delhi NCR",
            country: formData.patientCountry || "India",
            isInternational: formData.patientCountry !== "India",
            medicalConcern: formData.medicalConcern || "Specialist Doctor Consultation",
            specialty: "Super-Specialty Care",
            timeline: "Immediate / Within 1 Week",
            sourceUrl: typeof window !== "undefined" ? window.location.pathname : "",
          };

      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: isB2B ? "business" : "patient",
          payload,
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setErrorMessage(
          result.error || "Unable to log enquiry. Please check your inputs and try again."
        );
      } else {
        setReferenceId(result.referenceId || "DAC-CONFIRMED");
        setIsSubmitted(true);
      }
    } catch {
      setErrorMessage("Network connection error. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setReferenceId("");
    setErrorMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl glass-panel rounded-2xl shadow-2xl border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0A1E3F] text-white p-6 sm:p-7 relative">
          <button
            onClick={resetForm}
            className="absolute top-5 right-5 text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-2">
            Dr. AllCare • We Care Always For You
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            {activeTab === "b2b" ? "B2B Healthcare & Institutional Enquiry" : "Patient Treatment & Surgery Consultation"}
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Connect directly with our corporate healthcare management team or dedicated patient coordinators.
          </p>

          {/* Toggle Tabs */}
          {!isSubmitted && (
            <div className="flex bg-[#061226]/80 p-1 rounded-xl mt-5 border border-slate-700">
              <button
                type="button"
                onClick={() => setActiveTab("b2b")}
                className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "b2b"
                    ? "bg-teal-600 text-white shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                B2B & Hospital Solutions
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("patient")}
                className={`flex-1 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeTab === "patient"
                    ? "bg-teal-600 text-white shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Patient Treatment & Surgery
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 px-4">
              <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 border border-teal-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="inline-block bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-teal-800 mb-3">
                Ref ID: {referenceId}
              </div>
              <h4 className="text-xl font-bold text-slate-900">Enquiry Successfully Logged</h4>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.fullName}</span>. Your enquiry for{" "}
                <span className="font-semibold text-teal-700">{activeTab === "b2b" ? formData.category : formData.medicalConcern || "Specialist Care"}</span>{" "}
                has been safely registered in the Dr. AllCare database.
              </p>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6 text-left max-w-md mx-auto text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-800 mb-1">Expected Next Steps:</div>
                <div>• Initial review by clinical operations lead within 4 business hours.</div>
                <div>• Dedicated phone consultation to finalize scope and documentation.</div>
                <div>• Official proposal / treatment itinerary dispatched via secure channel.</div>
              </div>
              <button
                onClick={resetForm}
                className="mt-6 px-6 py-2.5 bg-[#0A1E3F] hover:bg-[#162F58] text-white text-sm font-semibold rounded-xl transition-all shadow"
              >
                Done & Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-start gap-2.5 animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{errorMessage}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Dr. Rajesh Sharma / Mr. Arun Verma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Official Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <PhoneInputWithCountry
                    value={formData.phone}
                    countryCode={formData.countryCode}
                    onChangePhone={(val) => setFormData({ ...formData, phone: val })}
                    onChangeCountryCode={(code) => setFormData({ ...formData, countryCode: code })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {activeTab === "b2b" ? "Hospital / Company Name *" : "Current City / State *"}
                  </label>
                  <div className="relative">
                    {activeTab === "b2b" ? (
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    ) : (
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    )}
                    <input
                      required
                      type="text"
                      placeholder={activeTab === "b2b" ? "Hospital, Factory, or Corporate name" : "e.g. Patna, Patna (Bihar) or Dhaka"}
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    />
                  </div>
                </div>
              </div>

              {activeTab === "b2b" ? (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Service Vertical of Interest *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white"
                  >
                    <option value="Hospital Operations Management">Hospital Operations Management & Turnaround</option>
                    <option value="Corporate Healthcare & Factory Clinics">Corporate Healthcare & Factory On-Site Clinics</option>
                    <option value="Healthcare Staffing (Doctors & Nurses)">Healthcare Staffing (Surgeons, Doctors & ICU Nurses)</option>
                    <option value="Hospital Setup & Turnkey Infrastructure">Hospital Setup, Architecture & Licensing</option>
                    <option value="Medical Equipment Procurement & Leasing">Medical Equipment Procurement & Maintenance</option>
                    <option value="Institutional Healthcare Partnership">Institutional Healthcare Partnership</option>
                  </select>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Patient Origin *
                    </label>
                    <select
                      value={formData.patientCountry}
                      onChange={(e) => setFormData({ ...formData, patientCountry: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white"
                    >
                      <option value="India">Domestic Patient (Within India)</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Middle East">Middle East (UAE / Saudi / Oman / Qatar)</option>
                      <option value="East Africa">East Africa (Kenya, Tanzania, Uganda, Nigeria)</option>
                      <option value="Central Asia">Central Asia (Uzbekistan, Kazakhstan)</option>
                      <option value="Other International">Other International</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Treatment / Surgery Required *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Cardiac Bypass, Knee Replacement, Oncology"
                      value={formData.medicalConcern}
                      onChange={(e) => setFormData({ ...formData, medicalConcern: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Brief Requirements / Message
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    activeTab === "b2b"
                      ? "Briefly describe bed count, current operational challenges, required timeline or staffing numbers..."
                      : "Briefly explain patient symptoms, diagnostic reports available, preferred city (Delhi, Mumbai, etc.)..."
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <AlertCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>Confidential corporate & clinical protocol. Non-disclosure protected.</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-teal-600 hover:bg-teal-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span>
                    {loading
                      ? "Submitting to Database..."
                      : activeTab === "b2b"
                      ? "Submit Business Enquiry"
                      : "Request Treatment Consultation"}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
