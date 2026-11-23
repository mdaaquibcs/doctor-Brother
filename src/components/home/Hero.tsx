"use client";

import React, { useState } from "react";
import Image from "next/image";
import PhoneInputWithCountry from "@/components/common/PhoneInputWithCountry";
import { 
  ShieldCheck, 
  Handshake, 
  HeartPulse, 
  ArrowRight, 
  User, 
  Mail, 
  LayoutGrid, 
  MessageSquare, 
  Lock, 
  CheckCircle2,
  Building2,
  Users,
  Briefcase,
  Activity,
  Heart,
  Phone
} from "lucide-react";

interface HeroProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [service, setService] = useState("Hospital Management");
  const [message, setMessage] = useState("");

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    if (phone.length !== 10) {
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
            fullName: name,
            email: email,
            phone: `${countryCode} ${phone}`,
            organization: "Homepage Quick Enquiry Lead",
            serviceType: service,
            message: message,
            category: "b2b",
            sourceUrl: "/",
          },
        }),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        setErrorMessage(
          result.error || "Unable to log enquiry. Please check your inputs and try again."
        );
      } else {
        setReferenceId(result.referenceId || "DAC-CONFIRMED");
        setFormSubmitted(true);
      }
    } catch {
      setErrorMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-[#F0F7FD] via-[#F8FBFE] to-white pt-8 pb-16 overflow-hidden">
      
      {/* Decorative Cross Watermarks on Left (Exact match to screenshot) */}
      <div className="absolute left-6 top-16 text-teal-500/15 text-5xl font-light select-none pointer-events-none">
        +
      </div>
      <div className="absolute left-10 top-40 text-teal-500/20 text-6xl font-light select-none pointer-events-none">
        +
      </div>
      <div className="absolute left-4 top-80 text-teal-500/15 text-4xl font-light select-none pointer-events-none">
        +
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO MAIN ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          {/* Left Column: Headline, Pill, Subtitle & CTAs (col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-800 bg-teal-50/90 border border-teal-200/90 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              <span>Dr. AllCare • We Care Always For You</span>
            </div>

            {/* 3-Line Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-black tracking-tight text-[#0A1E3F] leading-[1.18]">
              Transforming Healthcare.<br />
              Managing Excellence.<br />
              Connecting Care.
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              Integrated Hospital Management, Corporate Healthcare, Medical Staffing, Infrastructure Solutions and End-to-End Patient Care.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onOpenModal("b2b")}
                className="w-full sm:w-auto px-6 py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow-md flex items-center justify-center gap-2 group"
              >
                <Handshake className="w-4 h-4 text-teal-300" />
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenModal("patient")}
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-teal-300 font-bold text-xs sm:text-sm rounded-xl transition shadow-sm flex items-center justify-center gap-2"
              >
                <HeartPulse className="w-4 h-4 text-teal-600" />
                <span>Find Medical Treatment</span>
              </button>
            </div>
          </div>

          {/* Center Column: Dr. AllCare Healthcare Center Photo (col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[390px] sm:max-w-[410px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/90 bg-slate-100">
              <Image
                src="/images/dr-allcare-hospital-facility.png"
                alt="Dr. AllCare Healthcare Center Reception & Hospital Facility"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            {/* Facility Credibility Pill */}
            <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-slate-200/90 shadow-sm text-[11px] font-bold text-[#0A1E3F]">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <span>Dr. AllCare Executive Facility & Reception Desk</span>
            </div>
          </div>

          {/* Right Column: Floating "Quick Enquiry" Card (col-span-3) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-5 shadow-xl border border-slate-200/90 relative">
              
              {/* Card Header */}
              <div className="flex items-start gap-2.5 pb-3 border-b border-slate-100">
                <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 border border-teal-100">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A1E3F]">
                    Quick Enquiry
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    Get expert consultation for your healthcare needs
                  </p>
                </div>
              </div>

              {/* Form or Success State */}
              {formSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
                  <div className="inline-block bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full text-[11px] font-mono font-bold text-teal-800">
                    Ref ID: {referenceId}
                  </div>
                  <div className="text-xs font-bold text-[#0A1E3F]">Request Received</div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    Thank you, {name}. Your enquiry has been safely recorded in the Dr. AllCare database. Our healthcare advisor will connect with you within 4 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setReferenceId("");
                      setName("");
                      setEmail("");
                      setPhone("");
                      setMessage("");
                    }}
                    className="text-[11px] text-teal-700 font-bold underline mt-2"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="mt-3.5 space-y-2.5">
                  {errorMessage && (
                    <div className="p-2 bg-red-50 border border-red-200 text-red-700 rounded-lg text-[11px] leading-tight">
                      {errorMessage}
                    </div>
                  )}
                  {/* Name Input */}
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="Your Name *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-slate-50/50"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      required
                      type="email"
                      placeholder="Your Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-slate-50/50"
                    />
                  </div>

                  {/* Phone Input with Country Code Selector on Right */}
                  <PhoneInputWithCountry
                    size="sm"
                    placeholder="Phone / WhatsApp *"
                    value={phone}
                    countryCode={countryCode}
                    onChangePhone={setPhone}
                    onChangeCountryCode={setCountryCode}
                  />

                  {/* Service Dropdown */}
                  <div className="relative">
                    <LayoutGrid className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-slate-50/50 appearance-none text-slate-700"
                    >
                      <option value="Hospital Management">Hospital Management</option>
                      <option value="Medical Staffing">Medical Staffing</option>
                      <option value="Corporate Healthcare">Corporate Healthcare</option>
                      <option value="Hospital Setup & Consultancy">Hospital Setup & Consultancy</option>
                      <option value="Medical Equipment Solutions">Medical Equipment Solutions</option>
                      <option value="Medical Tourism">Medical Tourism (Domestic/Intl)</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <textarea
                      rows={2}
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full pl-8 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none bg-slate-50/50 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-1.5"
                  >
                    {loading ? (
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5" />
                    )}
                    <span>{loading ? "Submitting..." : "Submit Request"}</span>
                  </button>

                  {/* Security Note */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
                    <Lock className="w-3 h-3 text-teal-600" />
                    <span>Your information is secure</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* 4. FLOATING CATEGORY STRIP (Exact match to screenshot) */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-4 sm:p-5">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
            
            {/* 1. Hospital Management */}
            <a href="/hospital-management" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-[#0A1E3F]">
                Hospital<br />Management
              </div>
            </a>

            {/* 2. Medical Staffing */}
            <a href="/healthcare-staffing" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 border border-teal-100">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-[#0A1E3F]">
                Medical<br />Staffing
              </div>
            </a>

            {/* 3. Corporate Healthcare */}
            <a href="/corporate-healthcare" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-[#0A1E3F]">
                Corporate<br />Healthcare
              </div>
            </a>

            {/* 4. Patient Care */}
            <a href="/find-treatment" className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-[#0A1E3F]">
                Patient<br />Care
              </div>
            </a>

            {/* 5. Trust Message with ECG Pulse graphic (Col 5) */}
            <div className="col-span-2 md:col-span-1 border-t md:border-t-0 md:border-l border-slate-200 pt-3 md:pt-0 md:pl-4 flex items-center justify-between gap-3">
              <div className="text-[11px] font-bold text-[#0A1E3F] leading-tight">
                Your Trusted Healthcare Partner for a Healthier Tomorrow
              </div>
              {/* ECG Pulse Graphic */}
              <div className="flex items-center text-teal-600 flex-shrink-0">
                <svg className="w-12 h-6" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M0 20 H30 L38 5 L46 35 L54 10 L62 25 L70 20 H100" />
                </svg>
                <Heart className="w-4 h-4 text-teal-500 fill-teal-500 -ml-1" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
