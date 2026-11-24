"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { ArrowRight } from "lucide-react";

export default function NursingStaffingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Critical Care & Ward Teams"
        title="Nursing Staffing & Paramedical Technical Teams"
        subtitle="Deployment of certified ICU nurses, Operation Theatre scrub nurses, dialysis technicians, and radiology technologists trained in NABH standards."
        breadcrumb={[
          { label: "Staffing", href: "/healthcare-staffing" },
          { label: "Nursing Staffing" }
        ]}
        ctaLabel="Hire Nursing Staff"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-[#0A1E3F]">ICU & Critical Care Nurses</h3>
            <p className="leading-relaxed">Trained in mechanical ventilation, arterial blood gas (ABG) monitoring, central line care, and 1:1 patient-nurse protocols.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-[#0A1E3F]">Operation Theatre (OT) Nurses</h3>
            <p className="leading-relaxed">Scrub nurses and circulating nurses adept at aseptic techniques, laparoscopic stack management, and surgical inventory counts.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-[#0A1E3F]">Dialysis Technicians</h3>
            <p className="leading-relaxed">Experienced hemodialysis machine operators with vascular access cannulation and dialyzer reuse protocol certification.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-[#0A1E3F]">Radiology Technologists</h3>
            <p className="leading-relaxed">AERB-certified MRI, CT scan, digital X-ray, and C-arm technologists operating advanced diagnostic modalities.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-[#0A1E3F]">Laboratory Technicians</h3>
            <p className="leading-relaxed">NABL-compliant pathology, hematology, biochemistry, and microbiology technicians managing automated analyzers.</p>
          </div>

          <div className="care-card p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-[#0A1E3F]">Hospital Administrators</h3>
            <p className="leading-relaxed">Trained MHA / MBA healthcare professionals overseeing patient admission desks, billing audit, and TPA desks.</p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-teal-50 border border-teal-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-teal-900">Need Immediate Shift Coverage for ICU or Wards?</h4>
            <p className="text-xs text-teal-700 mt-0.5">We maintain active rosters of verified nursing staff ready for deployment within 48 hours.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-2 flex-shrink-0"
          >
            <span>Request Nursing Deployment</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
