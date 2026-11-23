"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import InfrastructureSection from "@/components/home/InfrastructureSection";
// Lucide icons rendered within sections

export default function HospitalSetupPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Vertical E • Turnkey Infrastructure"
        title="Hospital Setup & Healthcare Infrastructure Consultancy"
        subtitle="Turnkey guidance for greenfield & brownfield hospitals: architectural space programming, AERB & PCB licensing, modular OT layout, and commissioning protocols."
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: "Hospital Setup Consultancy" }
        ]}
        ctaLabel="Enquire for Setup Project"
        onCtaClick={() => setModalOpen(true)}
      />

      <InfrastructureSection onOpenModal={() => setModalOpen(true)} />

      {/* 5-Step Launch Roadmap */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Execution Roadmap
            </span>
            <h3 className="text-xl font-bold text-[#0A1E3F] mt-1">
              Greenfield Hospital Project Commissioning Stages
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs text-slate-600">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <span className="text-sm font-bold text-teal-700">01. Feasibility</span>
              <p>Catchment area analysis, demographic disease burden, competitive benchmarking and financial CAPEX/OPEX model.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <span className="text-sm font-bold text-teal-700">02. Architecture</span>
              <p>NABH-compliant zoning, MEP engineering, medical gas pipeline (MGPS) design, and cleanroom air handling units (AHU).</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <span className="text-sm font-bold text-teal-700">03. Statutory</span>
              <p>State Clinical Establishment Act, AERB type approval for radiation equipment, Fire NOC, and Pollution Board consent.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <span className="text-sm font-bold text-teal-700">04. Equipment</span>
              <p>BOQ preparation, vendor negotiations, equipment delivery logistics, biomedical testing and installation verification.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
              <span className="text-sm font-bold text-teal-700">05. Launch</span>
              <p>Departmental SOP handbooks, HIS software deployment, mock patient evacuation drills, and formal commissioning.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
