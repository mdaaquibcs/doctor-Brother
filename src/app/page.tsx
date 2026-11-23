"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import Hero from "@/components/home/Hero";
import CoreServices from "@/components/home/CoreServices";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck, Building2 } from "lucide-react";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"b2b" | "patient">("b2b");

  const handleOpenModal = (type: "b2b" | "patient" = "b2b") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 selection:bg-teal-600 selection:text-white">
      {/* 1. Clean Navigation Header */}
      <Header onOpenModal={handleOpenModal} />

      {/* 2. Hero Section with Medical Team, Floating Quick Enquiry & Category Strip */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 3. Our Business Solutions & Why Choose Dr. AllCare Strip (links to dedicated pages) */}
      <CoreServices />

      {/* 4. Streamlined Corporate Callout Banner (Connecting to dedicated service pages) */}
      <section className="py-12 bg-slate-100/70 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0A1E3F] via-[#0F294D] to-[#0A1E3F] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-teal-300 bg-teal-500/20 border border-teal-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                  <span>National Healthcare Governance</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Ready to Transform Your Healthcare Facility or Seek Specialist Treatment?
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Connect with our dedicated corporate advisory board for hospital operations contracts, 
                  occupational health centers, and certified medical staffing, or request an interstate patient concierge.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
                <button
                  onClick={() => handleOpenModal("b2b")}
                  className="w-full sm:w-auto px-6 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center justify-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Request Corporate Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-teal-300" />
                  <span>Contact Executive Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Corporate Footer */}
      <Footer />

      {/* Interactive Consultation / Inquiry Modal */}
      <QuickEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </main>
  );
}
