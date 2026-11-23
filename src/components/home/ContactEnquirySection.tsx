"use client";

import React, { useState } from "react";
import PhoneInputWithCountry from "@/components/common/PhoneInputWithCountry";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  User,
  Briefcase,
  AlertCircle
} from "lucide-react";

export default function ContactEnquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    organization: "",
    serviceType: "Hospital Operations Management",
    message: ""
  });

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
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "business",
          payload: {
            fullName: formData.name,
            email: formData.email,
            phone: `${formData.countryCode} ${formData.phone}`,
            organization: formData.organization,
            serviceType: formData.serviceType,
            message: formData.message,
            category: "hospital_management",
            sourceUrl: typeof window !== "undefined" ? window.location.pathname : "",
          },
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setErrorMessage(
          result.error || "Unable to submit enquiry. Please verify all details and try again."
        );
      } else {
        setReferenceId(result.referenceId || "DAC-B2B-CONFIRMED");
        setSubmitted(true);
      }
    } catch {
      setErrorMessage(
        "Network connection error. Please check your internet connection or try again shortly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
              <Phone className="w-3.5 h-3.5 text-teal-600" />
              <span>National Operations Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
              Connect with Our Healthcare Management Executive Desk
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you are evaluating full-scope hospital management, corporate occupational health (OHC) 
              mandates, specialist doctor deployment, or patient treatment coordination—our senior leadership 
              is available to assist.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Corporate Headquarters
                  </div>
                  <div className="text-sm font-bold text-[#0A1E3F] mt-0.5">
                    Dr. AllCare Healthcare Solutions Pvt. Ltd.
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Plot No 284, Sector 6, Pocket 5, Jasola Vihar, New Delhi, Delhi 110025
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    24/7 National Operations Desk & Mobile
                  </div>
                  <div className="text-sm font-bold text-[#0A1E3F] mt-0.5">
                    <a href="tel:+917050011164" className="hover:text-teal-700 transition-colors">
                      +91 7050011164
                    </a>
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    We Care Always For You • Round-the-clock hospital admission, corporate enquiry and patient assistance.
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Executive Communication
                  </div>
                  <div className="text-sm font-bold text-[#0A1E3F] mt-0.5">
                    solutions@drallcare.com
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Formal RFPs, hospital management enquiries, and vendor partnerships.
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto border border-teal-200">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="inline-block bg-teal-50 border border-teal-200 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-teal-800">
                  Ref ID: {referenceId}
                </div>
                <h3 className="text-2xl font-bold text-[#0A1E3F]">Thank You, {formData.name}</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your enquiry regarding <span className="font-semibold text-teal-700">{formData.serviceType}</span> has been securely stored in our healthcare operations database. 
                  A healthcare business development director will contact you directly within 4 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setReferenceId("");
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        countryCode: "+91",
                        organization: "",
                        serviceType: "Hospital Operations Management",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 bg-[#0A1E3F] hover:bg-[#122A54] text-white text-xs font-bold rounded-xl transition"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-bold text-[#0A1E3F]">
                    Submit Corporate or Institutional Requirement
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    All discussions are protected under standard corporate mutual non-disclosure agreements.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-50 border border-red-200 text-red-800 rounded-xl text-xs flex items-start gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        placeholder="e.g. Dr. K. S. Murthy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Corporate / Official Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        required
                        type="email"
                        placeholder="murthy@hospitalgroup.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Contact Number / WhatsApp *
                    </label>
                    <PhoneInputWithCountry
                      value={formData.phone}
                      countryCode={formData.countryCode}
                      onChangePhone={(val) => setFormData({ ...formData, phone: val })}
                      onChangeCountryCode={(code) => setFormData({ ...formData, countryCode: code })}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Organization / Hospital Name *
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        required
                        type="text"
                        placeholder="Hospital, Industrial Plant, or Enterprise"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Primary Area of Engagement *
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-white"
                  >
                    <option value="Hospital Operations Management">Hospital Operations Management & Turnaround</option>
                    <option value="Corporate Healthcare & Factory Clinics">Corporate Healthcare & On-Site Factory Clinics</option>
                    <option value="Healthcare Staffing (Surgeons, Doctors & Nurses)">Healthcare Staffing (Surgeons, Doctors & ICU Nurses)</option>
                    <option value="Hospital Setup & Turnkey Infrastructure">Hospital Setup, Architecture & Licensing Consultancy</option>
                    <option value="Medical Equipment Procurement & Maintenance">Medical Equipment Procurement & Leasing</option>
                    <option value="Domestic / International Patient Coordination">Domestic / International Patient Care Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Project Details / Requirement Summary
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on bed capacity, location, current challenges, required clinical specialties, or target launch timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 bg-[#0A1E3F] hover:bg-[#122A54] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition shadow flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Send className="w-4 h-4 text-teal-400" />
                    )}
                    <span>{loading ? "Submitting Requirement..." : "Submit Executive Requirement"}</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-500 text-center pt-1">
                  Confidential Corporate Process • DPDP Act Compliant
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
