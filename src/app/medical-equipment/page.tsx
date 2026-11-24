"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function MedicalEquipmentPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const equipmentList = [
    {
      category: "Diagnostic & Radiology",
      items: ["1.5T & 3.0T MRI Scanners", "64 / 128 / 256 Slice CT Scanners", "Digital Flat Panel Cath Labs", "Color Doppler 4D Ultrasound", "Direct Digital X-Ray (Floor & Ceiling Mounted)"]
    },
    {
      category: "Critical Care & ICU",
      items: ["High-End ICU Invasive & Non-Invasive Ventilators", "Multiparameter Patient Monitors (Cardiac, ETCO2, IBP)", "Syringe Infusion & Volumetric Pumps", "Biphasic Defibrillators with Pacer", "Dialysis Machines (Fresenius / Nipro)"]
    },
    {
      category: "Operation Theatre (OT)",
      items: ["Advanced Anesthesia Workstations with Gas Analyzers", "Electro-Hydraulic C-Arm Compatible OT Tables", "LED Surgical OT Shadowless Lights with HD Cameras", "Laparoscopic 4K Imaging Stacks (Karl Storz / Stryker)", "Harmonic Scalpels & Vessel Sealers"]
    }
  ];

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Vertical D • Medical Equipment Sourcing"
        title="Medical Equipment Procurement, Leasing & Biomedical Maintenance"
        subtitle="Direct manufacturer tie-ups, flexible equipment leasing models, revenue-sharing partnerships, and comprehensive biomedical maintenance (AMC/CMC) with 98% uptime SLAs."
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: "Medical Equipment" }
        ]}
        ctaLabel="Request Equipment Catalogue"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {equipmentList.map((cat, i) => (
            <div key={i} className="care-card p-7 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
                  Modality Tier
                </span>
                <h3 className="text-lg font-bold text-[#0A1E3F] mt-1 mb-4">
                  {cat.category}
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-600">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 bg-slate-50 hover:bg-[#0A1E3F] text-slate-700 hover:text-white font-semibold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  <span>Request Pricing & Lease</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* AMC/CMC Assurance */}
        <div className="bg-[#0A1E3F] text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">Biomedical Engineering Maintenance (AMC / CMC)</h4>
            <p className="text-xs text-slate-300">
              Guaranteed 98% machine uptime, scheduled calibration, rapid response breakdown teams, and QA certifications.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-2 flex-shrink-0"
          >
            <span>Enquire for Equipment AMC</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
