"use client";

import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header />

      <PageHeader
        badge="Legal & Terms"
        title="Terms and Conditions & Healthcare Disclosures"
        subtitle="Standard terms of engagement, clinical establishment boundaries, and institutional facilitation agreements."
        breadcrumb={[{ label: "Terms & Conditions" }]}
      />

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white my-10 p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm">
        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">1. Institutional & Facilitation Boundaries</h2>
          <p>
            Dr. AllCare Healthcare Solutions acts as an institutional management enterprise, hospital operations consultant, healthcare staffing facilitator, 
            and patient travel coordination partner. Dr. AllCare does not directly practice medicine or provide medical diagnoses. All surgical treatments, 
            diagnoses, medical advice, and clinical decisions remain the sole, sovereign professional responsibility of registered medical practitioners 
            and licensed hospitals registered under the Clinical Establishments Act.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">2. Hospital & Corporate SLAs</h2>
          <p>
            All business-to-business (B2B) engagements, hospital management contracts, factory clinic setups, and staffing deployments are governed by 
            individual Master Service Agreements (MSAs), Statements of Work (SOWs), and Service Level Agreements (SLAs) executed between Dr. AllCare and the respective organization.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">3. Treatment Estimates & Package Costs</h2>
          <p>
            Estimates provided on the platform reflect standard package guidelines based on preliminary diagnostic review. Final inpatient billing is determined 
            by the treating hospital based on actual OT duration, consumables, implants, and patient clinical response during admission.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-bold text-[#0A1E3F]">4. Jurisdiction</h2>
          <p>
            These terms are governed by the laws of the Republic of India. Any legal disputes arising in connection with platform usage or corporate contracts 
            shall be subject to the exclusive jurisdiction of the competent courts in New Delhi, India.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
