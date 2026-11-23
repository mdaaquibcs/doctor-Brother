"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { MapPin, ArrowRight } from "lucide-react";

export default function CareersPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const jobs = [
    {
      title: "Senior Hospital Administrator (MHA / MBA)",
      dept: "Hospital Operations",
      location: "New Delhi / NCR",
      experience: "8 - 12 Years",
      desc: "Lead on-site hospital administration for a 250-bed partner facility, managing non-clinical departments, TPA billing, and NABH compliance."
    },
    {
      title: "Factory Medical Officer (AFIH Certified)",
      dept: "Corporate Healthcare",
      location: "Manesar / Greater Noida",
      experience: "4 - 8 Years",
      desc: "Manage on-site industrial occupational health center (OHC) for a leading automotive manufacturing plant under the Factories Act."
    },
    {
      title: "Patient Care Coordinator (Bilingual)",
      dept: "Medical Tourism & Concierge",
      location: "New Delhi / Gurugram",
      experience: "2 - 5 Years",
      desc: "Escort interstate and foreign patients through hospital admission, surgical scheduling, attendant accommodation, and discharge."
    },
    {
      title: "Biomedical Service Engineer",
      dept: "Medical Equipment",
      location: "Mumbai / Pune",
      experience: "3 - 6 Years",
      desc: "Conduct preventative maintenance, calibration, and emergency breakdown servicing for CT/MRI and ICU ventilators."
    },
    {
      title: "Business Development Manager (B2B Healthcare)",
      dept: "Corporate Partnerships",
      location: "Bengaluru / Hyderabad",
      experience: "5 - 9 Years",
      desc: "Acquire hospital management contracts, factory OHC agreements, and institutional healthcare tie-ups."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Join Our Team • We Care Always For You"
        title="Careers at Dr. AllCare Healthcare Solutions"
        subtitle="Build your career with India's fastest-growing healthcare management and solutions platform. Explore open roles across operations, corporate health, and patient care."
        breadcrumb={[{ label: "Careers" }]}
        ctaLabel="Submit Resume / CV"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-xl font-bold text-[#0A1E3F]">
            Current Professional Openings
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Competitive industry compensation, professional development, and impactful nationwide healthcare mandates.
          </p>
        </div>

        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:shadow-md transition">
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {job.dept}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {job.location}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500 font-medium">Exp: {job.experience}</span>
                </div>
                <h3 className="text-base font-bold text-[#0A1E3F]">{job.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{job.desc}</p>
              </div>

              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-semibold text-xs rounded-xl transition shadow flex items-center gap-1.5 flex-shrink-0"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
