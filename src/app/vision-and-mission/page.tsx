"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { Eye, Target } from "lucide-react";

export default function VisionMissionPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Strategic Foundation"
        title="Our Vision, Mission & Core Values"
        subtitle="Transforming healthcare delivery across India and beyond through institutional excellence, clinical transparency, and compassionate patient care."
        breadcrumb={[
          { label: "About Us", href: "/about-us" },
          { label: "Vision & Mission" }
        ]}
        ctaLabel="Contact Advisory"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Box */}
          <div className="care-card p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#0A1E3F]">
              Our Vision
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be the premier national healthcare management enterprise in India, recognized globally 
              for establishing benchmarks in hospital operational efficiency, workplace occupational health, 
              and patient-centric healthcare coordination across domestic and international borders.
            </p>
          </div>

          {/* Mission Box */}
          <div className="care-card p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0A1E3F] text-teal-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-black text-[#0A1E3F]">
              Our Mission
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To empower hospitals with world-class operational governance, provide corporate employers 
              with uncompromised occupational medical care, deploy credential-verified healthcare practitioners, 
              and guide every patient through a transparent, escorted treatment journey.
            </p>
          </div>

        </div>

        {/* 4 Guiding Principles */}
        <div className="bg-[#0A1E3F] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Ethical Pillars
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Guiding Principles of Dr. AllCare Healthcare
            </h3>
            <p className="text-xs text-teal-300 font-semibold tracking-wide">
              We Care Always For You
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-teal-400 font-bold text-sm">Integrity & Ethics</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Adhering strictly to NMC and state clinical establishment guidelines. Zero fabricated data or artificial testimonials.
              </p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-teal-400 font-bold text-sm">Operational Rigor</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                NABH 5th Edition quality controls, biometric workforce attendance, and automated charge capture auditing.
              </p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-teal-400 font-bold text-sm">Patient Equity</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ensuring patients from any Indian state or international origin receive equal dignity and transparent package estimates.
              </p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="text-teal-400 font-bold text-sm">Data Privacy</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Full compliance with India&apos;s Digital Personal Data Protection (DPDP) Act for medical record governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
