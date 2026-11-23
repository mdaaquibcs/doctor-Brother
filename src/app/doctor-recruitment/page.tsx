"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { ArrowRight } from "lucide-react";

export default function DoctorRecruitmentPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Specialized Medical Talent"
        title="Verified Doctor & Specialist Surgeon Recruitment"
        subtitle="Empanelment and recruitment of experienced Super-Specialists, Senior Surgeons, Resident Medical Officers (RMOs), and ICU Intensivists for leading hospitals across India."
        breadcrumb={[
          { label: "Staffing", href: "/healthcare-staffing" },
          { label: "Doctor Recruitment" }
        ]}
        ctaLabel="Hire Specialists"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              1
            </div>
            <h3 className="text-base font-bold text-[#0A1E3F]">Surgeons & Super-Specialists</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              MCh / DNB super-specialists in Surgical Oncology, CTVS (Cardiac Surgery), Neurosurgery, Orthopedic Joint Replacement, and Advanced Laparoscopy.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              2
            </div>
            <h3 className="text-base font-bold text-[#0A1E3F]">ICU Intensivists & Anesthesiologists</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              IDCCM / FNB qualified Critical Care Specialists and Anesthesiologists ensuring round-the-clock coverage for 20+ bed intensive care units.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
              3
            </div>
            <h3 className="text-base font-bold text-[#0A1E3F]">Resident Medical Officers (RMOs)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              ACLS & BLS certified MBBS resident doctors deployed on continuous 8/12-hour rotational shifts for emergency triage and inpatient floors.
            </p>
          </div>
        </div>

        <div className="bg-[#0A1E3F] text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">Looking to Empanel as a Specialist Doctor with Dr. AllCare?</h4>
            <p className="text-xs text-slate-300">Submit your CV and NMC credentials to our National Medical Advisory Board.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-2 flex-shrink-0"
          >
            <span>Apply for Empanelment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
