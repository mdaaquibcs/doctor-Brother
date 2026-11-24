"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import PageHeader from "@/components/common/PageHeader";

export default function PrivacyPolicyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Legal & Compliance"
        title="Privacy Policy & Data Protection"
        subtitle="Our commitment to safeguarding corporate information and patient diagnostic records in strict adherence to India's Digital Personal Data Protection (DPDP) Act."
        breadcrumb={[{ label: "Privacy Policy" }]}
      />

      <section className="care-card care-content py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed  my-10 p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">1. Scope of Privacy Policy</h2>
          <p>
            Dr. AllCare Healthcare Solutions Private Limited (&ldquo;Dr. AllCare&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is dedicated 
            to protecting the personal, corporate, and medical data you provide. This Privacy Policy outlines our standards regarding data collection, 
            storage, processing, and disclosure in compliance with the Digital Personal Data Protection (DPDP) Act, 2023, Information Technology Act, 2000, 
            and relevant Indian healthcare regulations.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">2. Collection of Diagnostic & Clinical Information</h2>
          <p>
            When patients or guardians submit medical records, scans, imaging files, and discharge summaries for surgical evaluation, 
            such data is collected solely for the express purpose of facilitating medical opinions from verified, accredited medical specialists. 
            Data is transmitted across encrypted 256-bit SSL connections and accessed only by authorized clinical relationship managers.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">3. Corporate & B2B Data Security</h2>
          <p>
            Hospital financial records, occupancy metrics, employee registries, and contractual proposals exchanged during hospital turnaround 
            or factory occupational health engagements are protected under mutual Non-Disclosure Agreements (NDAs). We never monetize or sell client data.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">4. Data Retention & Deletion Rights</h2>
          <p>
            In accordance with statutory clinical record retention mandates and DPDP rules, patients and corporate clients retain the right 
            to request access, correction, or deletion of their non-statutory records by writing to privacy@drallcare.com.
          </p>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
