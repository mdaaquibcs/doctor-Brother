"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import CorporatePartnershipSection from "@/components/home/CorporatePartnershipSection";
// Lucide icons loaded within sections

export default function CorporatePartnershipsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Enterprise Alliances"
        title="Corporate Healthcare Partnerships & Institutional SLAs"
        subtitle="Collaborating with large conglomerates, healthcare trusts, and industrial corporations to operate premier healthcare facilities, on-site clinics, and clinical service agreements."
        breadcrumb={[
          { label: "About Us", href: "/about-us" },
          { label: "Corporate Partnerships" }
        ]}
        ctaLabel="Initiate Partnership Dialogue"
        onCtaClick={() => setModalOpen(true)}
      />

      <CorporatePartnershipSection onOpenModal={() => setModalOpen(true)} />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="care-card rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Partnership Models
            </span>
            <h3 className="text-xl font-bold text-[#0A1E3F] mt-1">
              Structured Engagement Models for Healthcare Organizations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Full Turnkey Management Contract</div>
              <p>Dr. AllCare assumes end-to-end administration, clinical staffing, billing auditing, and revenue growth with performance-linked remuneration. We Care Always For You.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Annual Corporate Healthcare SLA</div>
              <p>Fixed annual contracts covering industrial factory medical centers (OHCs), emergency ambulance networks, and executive employee health checkups.</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="font-bold text-slate-900 text-sm">Clinical Department Management</div>
              <p>Specialized management of intensive care units (ICUs), modular operation theatres, or radiology diagnostic centers under revenue-sharing terms.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
