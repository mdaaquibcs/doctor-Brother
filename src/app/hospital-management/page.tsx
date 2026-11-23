"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import HospitalManagementSection from "@/components/home/HospitalManagementSection";
import OperationalApproach from "@/components/home/OperationalApproach";
import { DollarSign, Users, ShieldAlert, ArrowRight } from "lucide-react";

export default function HospitalManagementPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Vertical A • Hospital Management Services"
        title="Institutional Hospital Operations & Turnaround Management"
        subtitle="Complete hospital administration, billing and revenue cycle management, NABH 5th edition compliance, clinical workforce scheduling, and turnkey management outsourcing contracts."
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: "Hospital Management" }
        ]}
        ctaLabel="Request Hospital RFP / Audit"
        onCtaClick={() => setModalOpen(true)}
      />

      {/* Main Section */}
      <HospitalManagementSection onOpenModal={() => setModalOpen(true)} />

      {/* Operational Methodology */}
      <OperationalApproach />

      {/* Turnaround Scope Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Management Scope
            </span>
            <h3 className="text-xl font-bold text-[#0A1E3F] mt-1">
              What We Manage Under Our Institutional Contracts
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-teal-600" />
                Revenue & TPA Desk
              </div>
              <p>Reconciling patient bills, eliminating unbilled pharmacy consumables, speeding up insurance pre-authorizations, and slashing claim rejection rates.</p>
            </div>

            <div className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Users className="w-4 h-4 text-teal-600" />
                Clinical & Support Rostering
              </div>
              <p>Deployment of on-site Medical Superintendent, RMO shifts, ICU nurse nurse-to-patient ratio enforcement, and biometric duty tracking.</p>
            </div>

            <div className="space-y-2 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-teal-600" />
                Quality & Statutory Licensing
              </div>
              <p>Clinical Establishments Act compliance, AERB radiation permits, Biomedical Waste audits, and NABH mock inspection drills.</p>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2"
            >
              <span>Schedule a Hospital Operational Audit</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
