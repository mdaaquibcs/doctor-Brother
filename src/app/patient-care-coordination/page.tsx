"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import PatientJourneySection from "@/components/home/PatientJourneySection";
// Section icons rendered internally

export default function PatientCareCoordinationPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Patient Concierge & Advocacy"
        title="Patient Care & Bedside Healthcare Coordination"
        subtitle="A dedicated Dr. AllCare personal care coordinator assigned to navigate your hospital journey—from pre-admission paperwork to surgical scheduling and post-discharge recovery. We Care Always For You."
        breadcrumb={[
          { label: "Patient Care", href: "/find-treatment" },
          { label: "Patient Coordination" }
        ]}
        ctaLabel="Request a Care Coordinator"
        onCtaClick={() => setModalOpen(true)}
      />

      <PatientJourneySection onOpenModal={() => setModalOpen(true)} />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Coordinator Responsibilities
            </span>
            <h3 className="text-xl font-bold text-[#0A1E3F] mt-1">
              What Your Personal Patient Coordinator Manages
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <strong className="text-slate-900 text-sm">Hospital Entry & Paperwork</strong>
              <p>Escorting patient through admission desk, managing deposits, verifying insurance pre-authorization, and securing assigned room category.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <strong className="text-slate-900 text-sm">Bedside Clinical Liaison</strong>
              <p>Communicating between the nursing station, attending doctors, and family members. Clarifying doctor notes and medication schedules.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <strong className="text-slate-900 text-sm">Discharge & Final Bill Audit</strong>
              <p>Thorough verification of itemized hospital bills, pharmacy returns, diagnostic report collation, and discharge medications supply.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
