"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { ArrowRight } from "lucide-react";

export default function DomesticPatientsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Interstate Patient Care"
        title="Domestic Patient Treatment Coordination Across India"
        subtitle="For patients traveling from Bihar, Uttar Pradesh, Odisha, Assam, Madhya Pradesh, or West Bengal to top super-specialty hospitals in Delhi NCR, Mumbai, Hyderabad, and Bengaluru."
        breadcrumb={[
          { label: "Patient Care", href: "/find-treatment" },
          { label: "Domestic Patients" }
        ]}
        ctaLabel="Get Patient Coordinator"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Real Example Walkthrough Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Operational Example
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#0A1E3F] mt-1">
              Case Study: Patient from Patna (Bihar) Needing Surgery in Delhi NCR
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              How Dr. AllCare coordinates every non-clinical detail to remove anxiety from your medical travel. We Care Always For You.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-slate-600">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center">1</div>
              <div className="font-bold text-slate-900 text-sm">Medical Review</div>
              <p>Angiogram and diagnostic reports sent via WhatsApp. Within 4 hours, 2 senior cardiac surgeons evaluate the case and provide clear cost estimates.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center">2</div>
              <div className="font-bold text-slate-900 text-sm">Travel & Station Pickup</div>
              <p>Train / flight booking assistance, train station or airport reception by pre-assigned car, and check-in to verified hygienic guest house.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center">3</div>
              <div className="font-bold text-slate-900 text-sm">Bedside Coordinator</div>
              <p>Dr. AllCare coordinator meets patient at the hospital entrance, handles admission formalities, expedites TPA insurance clearance, and assists attendants.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center">4</div>
              <div className="font-bold text-slate-900 text-sm">Discharge & Follow-Up</div>
              <p>Final bill audit, prescription medicines dispatch, return journey assistance, and scheduled tele-consultation with the surgeon back in Patna.</p>
            </div>
          </div>
        </div>

        {/* 6 Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-900 text-sm">Zero Broker / Agent Commission</div>
            <p>Direct institutional relationship with accredited hospitals ensures authentic hospital billing with zero middleman markups.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-900 text-sm">Attendant Accommodation</div>
            <p>Clean, verified budget and standard guest house options near hospital campuses for family members and caretakers.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2">
            <div className="font-bold text-slate-900 text-sm">TPA Cashless Support</div>
            <p>Assistance in filing pre-authorization paperwork with health insurance companies and government welfare schemes where applicable.</p>
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow inline-flex items-center gap-2"
          >
            <span>Request Interstate Patient Coordination</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
