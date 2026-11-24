"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutUsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="About Our Enterprise"
        title="Nationwide Healthcare Solutions & Institutional Management"
        subtitle="Headquartered in India, Dr. AllCare delivers integrated B2B hospital administration, industrial occupational health, certified medical staffing, and end-to-end patient care coordination. We Care Always For You."
        breadcrumb={[{ label: "About Us" }]}
        ctaLabel="Partner With Us"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
              Corporate Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1E3F] tracking-tight">
              Bridging Clinical Quality with Enterprise-Grade Management Discipline
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Dr. AllCare Healthcare Solutions was established to address the critical operational bottlenecks 
              in India&apos;s healthcare infrastructure. While clinical advancements continue to accelerate, 
              private hospitals and industrial facilities frequently struggle with administrative fragmentation, 
              billing leakages, staffing deficits, and complex patient navigation.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate as a single institutional partner—taking full accountability for hospital operations, 
              factory clinics, credentialed medical staffing, biomedical equipment procurement, and structured 
              domestic & international patient treatment coordination.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="care-card p-4  rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#0A1E3F]">100%</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">NABH / NABL Standards</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Strict clinical quality adherence</div>
              </div>
              <div className="care-card p-4  rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-black text-[#0A1E3F]">24/7/365</div>
                <div className="text-xs font-semibold text-slate-700 mt-1">Emergency Operations</div>
                <div className="text-[11px] text-slate-500 mt-0.5">National coordination desk</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#0A1E3F] text-white p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-400" />
              Our Core Institutional Tenets
            </h3>
            
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Clinical Primacy:</strong> Medical decisions remain solely with qualified, verified physicians. We provide the management backbone.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Financial Transparency:</strong> Performance-linked SLAs eliminate hidden fees and align directly with hospital occupancy and revenue growth.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Compassionate Care:</strong> Every domestic and international patient receives a dedicated bedside coordinator.
                </div>
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-2"
            >
              <span>Explore Partnership Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
