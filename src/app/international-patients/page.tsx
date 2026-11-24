"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { Globe2, Plane, Languages, HeartPulse, ArrowRight } from "lucide-react";

export default function InternationalPatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Cross-Border Healthcare"
        title="International Medical Tourism & Global Patient Concierge in India"
        subtitle="World-class clinical treatment at 60-80% lower cost than Western healthcare. Official medical visa invitation letters, multilingual translators, airport transfers, and verified surgeon opinions."
        breadcrumb={[
          { label: "Patient Care", href: "/find-treatment" },
          { label: "International Patients" }
        ]}
        ctaLabel="Enquire as International Patient"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Core Services for Foreign Travelers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-600">
          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1E3F]">Medical Visa (M-Visa) Letters</h3>
            <p className="leading-relaxed">Official Visa Invitation Letters issued directly by accredited hospitals within 24 hours for patient and up to two medical attendants.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Plane className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1E3F]">Airport Chauffeur Reception</h3>
            <p className="leading-relaxed">Pre-arranged executive pickup from New Delhi (DEL), Mumbai (BOM), Hyderabad (HYD), or Bengaluru (BLR) international airports.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1E3F]">Multilingual Interpreters</h3>
            <p className="leading-relaxed">Dedicated professional translators available for Arabic, Russian, Bengali, French, and Persian throughout medical consultations.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#0A1E3F]">Post-Return Tele-Followup</h3>
            <p className="leading-relaxed">Scheduled tele-consultations with your operating surgeon after return to your home country to ensure uninterrupted recovery.</p>
          </div>
        </div>

        {/* Global Patient Corridors */}
        <div className="bg-[#0A1E3F] text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Key Geographic Corridors
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              Serving Patients Across Global Destinations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
              <strong className="text-white text-sm">Bangladesh & Nepal</strong>
              <p className="text-[11px] text-slate-400 mt-1">Cardiac bypass, renal transplants, medical oncology, robotic surgeries.</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
              <strong className="text-white text-sm">Middle East & GCC</strong>
              <p className="text-[11px] text-slate-400 mt-1">Advanced orthopedics, spinal deformity correction, neuro-rehabilitation.</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
              <strong className="text-white text-sm">East Africa</strong>
              <p className="text-[11px] text-slate-400 mt-1">Kenya, Tanzania, Uganda, Nigeria: Bone marrow transplants, pediatric surgery.</p>
            </div>
            <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-800">
              <strong className="text-white text-sm">Central Asia</strong>
              <p className="text-[11px] text-slate-400 mt-1">Uzbekistan, Kazakhstan: Complex spine fusion, joint replacement, cardiology.</p>
            </div>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow inline-flex items-center gap-2"
          >
            <span>Submit Medical Reports for Free Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
