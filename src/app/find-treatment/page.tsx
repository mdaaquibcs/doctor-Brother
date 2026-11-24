"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import {
  Search,
  ArrowRight,
  Activity,
  CheckCircle2,
  Sparkles,
  Shield
} from "lucide-react";

export default function FindTreatmentPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const treatments = [
    {
      specialty: "Cardiac Sciences",
      procedures: [
        "Coronary Artery Bypass Graft (CABG)", 
        "TAVI / TAVR Minimally Invasive Valve Replacement", 
        "Pediatric Congenital Heart Surgery", 
        "Angioplasty & Drug-Eluting Stents",
        "Electrophysiology & Pacemaker Implantation"
      ],
      recovery: "3 - 7 Days",
      hospitals: "NABH / JCI Accredited Cardiac Centers"
    },
    {
      specialty: "Oncology & Cancer Care",
      procedures: [
        "Robotic Precision Onco-Surgery", 
        "Linear Accelerator (TrueBeam) Radiotherapy", 
        "Targeted Immunotherapy & Chemotherapy", 
        "Bone Marrow Transplant (Allogeneic & Autologous)",
        "HIPEC Cytoreductive Surgery"
      ],
      recovery: "Varies by Protocol",
      hospitals: "Comprehensive Cancer Institutes"
    },
    {
      specialty: "Orthopedics & Joint Replacement",
      procedures: [
        "Robotic Total Knee Replacement", 
        "Minimally Invasive Total Hip Replacement", 
        "Endoscopic Spine Decompression & Fusion", 
        "Arthroscopic ACL / Meniscus Repair",
        "Complex Revision Joint Surgery"
      ],
      recovery: "2 - 5 Days",
      hospitals: "Center of Orthopedic Excellence"
    },
    {
      specialty: "Neurosciences & Spine",
      procedures: [
        "Brain Tumor Navigation Microsurgery", 
        "Deep Brain Stimulation (DBS) for Parkinson's", 
        "Minimally Invasive Microdiscectomy", 
        "Endovascular Aneurysm Coiling"
      ],
      recovery: "5 - 10 Days",
      hospitals: "Advanced Neuro Centers"
    },
    {
      specialty: "Organ Transplants",
      procedures: [
        "Living Donor Liver Transplantation", 
        "Renal (Kidney) Transplantation", 
        "Corneal Grafting & Keratoplasty", 
        "Pediatric Organ Transplantation"
      ],
      recovery: "10 - 18 Days",
      hospitals: "Government-Authorized State Transplant Centers"
    },
    {
      specialty: "Gastroenterology & GI Surgery",
      procedures: [
        "Bariatric Sleeve Gastrectomy & Bypass", 
        "Laparoscopic Gallbladder & Advanced Hernia", 
        "Advanced ERCP & Endoscopic Ultrasound", 
        "GI Tract Cancer Resections"
      ],
      recovery: "1 - 3 Days",
      hospitals: "Surgical Day-Care & GI Centers"
    }
  ];

  const filtered = treatments.filter(t => 
    t.specialty.toLowerCase().includes(search.toLowerCase()) ||
    t.procedures.some(p => p.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="care-page min-h-screen flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Global Header with For Patients active in navbar */}
      <Header 
        activeNav="For Patients" 
        onOpenModal={() => setModalOpen(true)} 
      />

      {/* ============================================================== */}
      {/* 1. HERO SECTION (Matches Screenshot Exactly)                   */}
      {/* ============================================================== */}
      <PageHeader
        breadcrumb={[{ label: "For Patients" }]}
        ctaLabel="Find treatment"
        onCtaClick={() => document.getElementById("treatment-search-input")?.focus()}
        secondaryLabel="Talk to our team"
        onSecondaryClick={() => setModalOpen(true)}
      />

      {/* ============================================================== */}
      {/* 2. SEARCH & REQUEST QUOTE BAR (Floating Pill Card)             */}
      {/* ============================================================== */}
      <section className="care-content relative z-20 -mt-6 sm:-mt-7 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl sm:rounded-full border border-slate-200/90 shadow-xl p-2 sm:p-2.5 flex flex-col sm:flex-row items-center gap-3">
          
          {/* Input field */}
          <div className="flex items-center gap-3 pl-3 sm:pl-4 flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
            <input
              id="treatment-search-input"
              type="text"
              placeholder="Search by procedure or specialty (e.g., Bypass, Knee Replacement, Oncology, Spine)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-slate-800 placeholder-slate-400 outline-none py-2"
            />
            {search && (
              <button 
                onClick={() => setSearch("")}
                className="text-xs text-slate-400 hover:text-slate-600 px-2"
              >
                Clear
              </button>
            )}
          </div>

          {/* Action button */}
          <button
            onClick={() => setModalOpen(true)}
            className="w-full sm:w-auto bg-[#009688] hover:bg-[#00796B] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-xl sm:rounded-full transition flex items-center justify-center gap-2 shadow-sm flex-shrink-0"
          >
            <span>Request Treatment Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. 3 SUPER-SPECIALTY CARDS (Cardiac, Oncology, Orthopedics)    */}
      {/* ============================================================== */}
      <section className="care-content py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* ------------------------------------------------------------ */}
          {/* CARD 1: CARDIAC SCIENCES                                     */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-gradient-to-br from-white via-white to-blue-50/40 rounded-3xl border border-slate-200/90 hover:border-blue-300 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden group">
            {/* Soft background glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-blue-100/50 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Circular Icon on Left */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 mb-4 group-hover:scale-105 transition-transform">
                  <Activity className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-md inline-block">
                  Super-Specialty
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#0A1E3F] mt-2 leading-tight">
                  Cardiac Sciences
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-normal">
                  Advanced care for a healthier heart.
                </p>

                <button 
                  onClick={() => setSelectedSpecialty(selectedSpecialty === "Cardiac Sciences" ? null : "Cardiac Sciences")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 mt-4 group-hover:gap-2.5 transition-all"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3D Anatomical Heart SVG Illustration */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center relative">
                <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="heart3D" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#1D4ED8" />
                    </linearGradient>
                    <linearGradient id="vessels3D" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#93C5FD" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  {/* Superior Vena Cava & Aorta */}
                  <path d="M42 12 C42 8 50 8 50 12 L50 26 L42 26 Z" fill="url(#vessels3D)" />
                  <path d="M52 8 C52 4 64 4 64 8 L64 24 L52 24 Z" fill="url(#vessels3D)" />
                  <path d="M66 14 C66 10 74 12 74 16 L70 28 L64 26 Z" fill="url(#vessels3D)" />
                  {/* Anatomical Heart Body */}
                  <path 
                    d="M34 26 C20 26 14 42 16 56 C20 74 38 86 54 94 C70 86 86 72 88 52 C90 34 76 24 64 26 C58 26 54 30 52 34 C48 30 42 26 34 26 Z" 
                    fill="url(#heart3D)" 
                  />
                  {/* Subtle Shimmer highlight */}
                  <path 
                    d="M26 38 C24 46 26 56 32 64 C30 54 32 44 40 38 C32 36 28 36 26 38 Z" 
                    fill="white" 
                    opacity="0.35" 
                  />
                  {/* Coronary artery branches */}
                  <path d="M52 38 Q48 56 40 70 M48 54 Q40 60 36 64 M50 48 Q58 58 64 68" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            {/* Expandable Procedure Details */}
            {selectedSpecialty === "Cardiac Sciences" && (
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1.5 animate-in fade-in duration-200">
                <div className="font-bold text-[#0A1E3F]">Key Procedures:</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                  <li>Coronary Artery Bypass Graft (CABG)</li>
                  <li>TAVI / TAVR Minimally Invasive Valve Replacement</li>
                  <li>Pediatric Heart Surgeries & Stenting</li>
                </ul>
                <div className="pt-2">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    Request Cardiac Estimate <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 2: ONCOLOGY & CANCER CARE                               */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-gradient-to-br from-white via-white to-purple-50/40 rounded-3xl border border-slate-200/90 hover:border-purple-300 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden group">
            {/* Soft background glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-purple-100/50 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Circular Icon on Left */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20 mb-4 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-md inline-block">
                  Super-Specialty
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#0A1E3F] mt-2 leading-tight">
                  Oncology & Cancer Care
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-normal">
                  Comprehensive cancer treatment.
                </p>

                <button 
                  onClick={() => setSelectedSpecialty(selectedSpecialty === "Oncology & Cancer Care" ? null : "Oncology & Cancer Care")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 mt-4 group-hover:gap-2.5 transition-all"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3D Cancer Awareness Ribbon Illustration */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center relative">
                <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="ribbon3D" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#C084FC" />
                      <stop offset="40%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#7E22CE" />
                    </linearGradient>
                    <linearGradient id="ribbonBack" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#7E22CE" />
                      <stop offset="100%" stopColor="#581C87" />
                    </linearGradient>
                  </defs>

                  {/* Ribbon Loop Top */}
                  <path 
                    d="M32 30 C32 14 68 14 68 30 C68 44 54 58 50 64 C46 58 32 44 32 30 Z" 
                    fill="url(#ribbon3D)" 
                  />
                  {/* Ribbon Inner Negative Space */}
                  <ellipse cx="50" cy="30" rx="10" ry="12" fill="#FAF5FF" />
                  
                  {/* Ribbon Left Tail */}
                  <path 
                    d="M38 52 L22 84 L34 88 L46 62 Z" 
                    fill="url(#ribbon3D)" 
                  />
                  {/* Ribbon Right Tail */}
                  <path 
                    d="M62 52 L78 84 L66 88 L54 62 Z" 
                    fill="url(#ribbonBack)" 
                  />
                  {/* Glossy Sheen */}
                  <path 
                    d="M36 24 C40 18 60 18 64 24" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    opacity="0.45" 
                  />
                </svg>
              </div>
            </div>

            {/* Expandable Procedure Details */}
            {selectedSpecialty === "Oncology & Cancer Care" && (
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1.5 animate-in fade-in duration-200">
                <div className="font-bold text-[#0A1E3F]">Key Treatments:</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                  <li>Robotic Onco-Surgery & TrueBeam Radiation</li>
                  <li>Targeted Immunotherapy & Chemotherapy</li>
                  <li>Bone Marrow Transplant (BMT) Protocols</li>
                </ul>
                <div className="pt-2">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    Request Oncology Estimate <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* ------------------------------------------------------------ */}
          {/* CARD 3: ORTHOPEDICS & JOINT REPLACEMENT                      */}
          {/* ------------------------------------------------------------ */}
          <div className="bg-gradient-to-br from-white via-white to-teal-50/40 rounded-3xl border border-slate-200/90 hover:border-teal-300 hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden group">
            {/* Soft background glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-teal-100/50 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

            <div className="relative z-10 flex items-start justify-between gap-4">
              <div className="flex-1">
                {/* Circular Icon on Left */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-teal-500/20 mb-4 group-hover:scale-105 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-md inline-block">
                  Super-Specialty
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#0A1E3F] mt-2 leading-tight">
                  Orthopedics & Joint Replacement
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-normal">
                  Move better. Live stronger.
                </p>

                <button 
                  onClick={() => setSelectedSpecialty(selectedSpecialty === "Orthopedics & Joint Replacement" ? null : "Orthopedics & Joint Replacement")}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 mt-4 group-hover:gap-2.5 transition-all"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* 3D Knee Joint Articulation Illustration */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center relative">
                <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 100 100" fill="none">
                  <defs>
                    <linearGradient id="joint3D" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A7F3D0" />
                      <stop offset="50%" stopColor="#2DD4BF" />
                      <stop offset="100%" stopColor="#0F766E" />
                    </linearGradient>
                    <linearGradient id="boneHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#CCFBF1" />
                    </linearGradient>
                  </defs>

                  {/* Femur (Upper Bone) */}
                  <path 
                    d="M42 10 L58 10 L58 35 C66 38 72 45 70 52 C68 56 60 58 54 55 L50 56 L46 55 C40 58 32 56 30 52 C28 45 34 38 42 35 Z" 
                    fill="url(#joint3D)" 
                  />
                  {/* Artificial Implant Spacer */}
                  <path 
                    d="M32 55 Q50 58 68 55 Q50 62 32 55 Z" 
                    fill="#38BDF8" 
                    opacity="0.8" 
                  />
                  {/* Tibia & Fibula (Lower Bones) */}
                  <path 
                    d="M36 62 C42 60 58 60 64 62 C68 68 62 76 56 80 L56 94 L44 94 L44 80 C38 76 32 68 36 62 Z" 
                    fill="url(#joint3D)" 
                  />
                  <path d="M68 66 L72 90 L68 94" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Bone highlight sheen */}
                  <path d="M46 16 L46 32" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                  <path d="M48 78 L48 90" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                </svg>
              </div>
            </div>

            {/* Expandable Procedure Details */}
            {selectedSpecialty === "Orthopedics & Joint Replacement" && (
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-600 space-y-1.5 animate-in fade-in duration-200">
                <div className="font-bold text-[#0A1E3F]">Key Procedures:</div>
                <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                  <li>Robotic Total Knee Replacement</li>
                  <li>Anterior Total Hip Replacement</li>
                  <li>Arthroscopic ACL & Sports Medicine</li>
                </ul>
                <div className="pt-2">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="text-xs font-bold text-teal-700 hover:underline flex items-center gap-1"
                  >
                    Request Orthopedic Estimate <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* ============================================================== */}
        {/* Additional Filtered Search Results (if searching)              */}
        {/* ============================================================== */}
        {search && (
          <div className="care-card mt-12  rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#0A1E3F]">
                Matching Treatments & Procedures ({filtered.length})
              </h3>
              <span className="text-xs text-teal-700 font-semibold">
                Query: &quot;{search}&quot;
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((item, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wider bg-teal-50 px-2 py-0.5 rounded">
                      Super-Specialty
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {item.recovery}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-[#0A1E3F]">
                    {item.specialty}
                  </h4>

                  <ul className="space-y-1 text-xs text-slate-600">
                    {item.procedures.map((p, pi) => (
                      <li key={pi} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full mt-2 py-2 bg-[#0A1E3F] hover:bg-[#132A54] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Quick Enquiry Modal for Patients */}
      <QuickEnquiryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialType="patient" 
      />
    </main>
  );
}
