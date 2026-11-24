"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import {
  Building2,
  ArrowRight,
  UserCheck,
  ShieldAlert,
  HeartPulse,
  ClipboardCheck,
  Users,
  Syringe,
  TrendingUp,
  Handshake,
  ShieldCheck,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function CorporateHealthcarePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const corporateServices = [
    {
      title: "On-Site Medical Facilities",
      desc: "Complete medical facilities at your workplace.",
      icon: <Building2 className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      title: "Qualified Medical Professionals",
      desc: "Doctors, nurses and specialist staff.",
      icon: <UserCheck className="w-5 h-5 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-200"
    },
    {
      title: "Emergency Medical Support",
      desc: "24/7 emergency response and care.",
      icon: <ShieldAlert className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      title: "Occupational Health Management",
      desc: "Workplace health & safety programs.",
      icon: <HeartPulse className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      title: "Health Check-up Programs",
      desc: "Regular health screening and wellness programs.",
      icon: <ClipboardCheck className="w-5 h-5 text-cyan-600" />,
      iconBg: "bg-cyan-50 border-cyan-200"
    },
    {
      title: "Employee Wellness Solutions",
      desc: "Physical and mental wellness support.",
      icon: <Users className="w-5 h-5 text-blue-600" />,
      iconBg: "bg-blue-50 border-blue-200"
    },
    {
      title: "Vaccination Drives",
      desc: "On-site vaccination and immunization.",
      icon: <Syringe className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      title: "Healthcare Analytics",
      desc: "Data-driven insights for better decisions.",
      icon: <TrendingUp className="w-5 h-5 text-cyan-600" />,
      iconBg: "bg-cyan-50 border-cyan-200"
    }
  ];

  const handleDownloadBrochure = () => {
    // Generate and trigger download for corporate brochure
    const brochureContent = `DR. ALLCARE HEALTHCARE SOLUTIONS - CORPORATE HEALTHCARE BROCHURE 2026
=============================================================
National Corporate & Industrial Healthcare Provider
Tagline: We Care Always For You
Headquarters: Plot No 284, Sector 6, Pocket 5, Jasola Vihar, New Delhi, Delhi 110025
Website: www.drallcare.com | Email: info@drallcare.com
Mobile / Helpline: +91 7050011164

CORPORATE HEALTHCARE SOLUTIONS OVERVIEW:
----------------------------------------
1. On-Site Medical Facilities (Factory & Corporate OHCs)
   - Turnkey ambulance room setup complying with Factories Act 1948 Section 45.
   - Equipped with ECG, defibrillators, oxygen, trauma emergency kits.

2. Qualified Medical Professionals
   - AFIH-certified Occupational Health Doctors.
   - Industrial Emergency Nurses, paramedics, and certified first-aid staff.

3. 24/7 Emergency Medical Support & ALS Corridor
   - Dedicated Advanced Life Support (ALS) ambulances on-site or on-call.
   - Tie-ups with tertiary multi-specialty trauma centers within 15 mins.

4. Occupational Health & Statutory Compliance
   - Form 32 statutory health registers and periodic medical examinations.
   - Audiometry, Spirometry, vision screening, heavy metal toxicity tests.

5. Preventive Check-ups & Executive Wellness
   - Comprehensive on-site executive health screening.
   - Customized packages for corporate headquarters and factory workforces.

6. Enterprise Vaccination & Wellness Drives
   - On-site flu, hepatitis, tetanus and booster immunization programs.
   - Ergonomics assessment and mental wellness workshops.

7. Healthcare Analytics & Management Dashboard
   - Workforce health index, absenteeism reduction metrics, and ROI reports.

REQUEST A CUSTOMIZED PROPOSAL:
Contact our Enterprise Solutions Team at proposal@drallcare.com
=============================================================`;

    const blob = new Blob([brochureContent], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Dr-AllCare-Corporate-Healthcare-Brochure-2026.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setToastMessage("Dr. AllCare Corporate Healthcare Brochure 2026 downloaded successfully!");
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <main className="care-page min-h-screen flex flex-col selection:bg-teal-500 selection:text-white">
      {/* Global Header */}
      <Header 
        activeNav="For Businesses" 
        onOpenModal={() => setModalOpen(true)} 
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 z-40 bg-[#0A1E3F] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-teal-500/30 animate-in fade-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* ============================================================== */}
      {/* 1. HERO SECTION (Matches Screenshot Exactly)                   */}
      {/* ============================================================== */}
      <PageHeader
        breadcrumb={[{ label: "For Businesses" }]}
        ctaLabel="Request a proposal"
        onCtaClick={() => setModalOpen(true)}
        secondaryLabel="Download brochure"
        onSecondaryClick={handleDownloadBrochure}
      />


      {/* ============================================================== */}
      {/* 2. OUR CORPORATE HEALTHCARE SERVICES (8 Cards Grid)             */}
      {/* ============================================================== */}
      <section className="care-content py-10 sm:py-12 bg-transparent border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column Description */}
            <div className="w-full lg:w-[27%] flex-shrink-0">
              <div className="w-7 h-1 bg-teal-500 rounded-full mb-3"></div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] leading-snug">
                Our Corporate Healthcare Services
              </h2>

              <p className="text-slate-600 text-xs sm:text-sm mt-3.5 leading-relaxed font-normal">
                We deliver end-to-end healthcare solutions for companies, industries and institutions, ensuring the health and productivity of your workforce.
              </p>

              <div className="mt-6">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-[#0A1E3F] hover:bg-[#132A54] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-xs transition-all hover:gap-3"
                >
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right 8-Card Grid (4 cols x 2 rows) */}
            <div className="w-full min-w-0 lg:flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-3.5">
                {corporateServices.map((service, idx) => (
                  <div 
                    key={idx}
                    className="care-card rounded-2xl border border-slate-200/90 p-4 hover:border-teal-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center border mb-3 group-hover:scale-110 transition-transform ${service.iconBg}`}>
                        {service.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-xs sm:text-sm font-bold text-[#0A1E3F] group-hover:text-teal-700 transition-colors leading-snug">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-1.5 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* 3. TRUST STRIP WITH ECG PULSE (Matches Reference Screenshot)   */}
          {/* ============================================================== */}
          <div className="mt-8 bg-gradient-to-r from-teal-50/70 via-slate-50 to-teal-50/70 border border-teal-100 rounded-2xl px-5 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4 shadow-2xs">
            
            {/* Trust Item 1 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100/70 flex items-center justify-center text-teal-700 flex-shrink-0">
                <Handshake className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0A1E3F]">
                Trusted Partner for Your Business
              </span>
            </div>

            {/* Trust Item 2 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100/70 flex items-center justify-center text-teal-700 flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0A1E3F]">
                Compliant & Secure Healthcare Solutions
              </span>
            </div>

            {/* Trust Item 3 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100/70 flex items-center justify-center text-teal-700 flex-shrink-0">
                <Users className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0A1E3F]">
                Expert Team of Healthcare Professionals
              </span>
            </div>

            {/* Trust Item 4 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-100/70 flex items-center justify-center text-teal-700 flex-shrink-0">
                <Clock className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-[#0A1E3F]">
                24/7 Support & Dedicated Care
              </span>
            </div>

            {/* ECG Pulse Graphic on Far Right */}
            <div className="hidden 2xl:flex items-center gap-2 pl-3 border-l border-teal-200/80">
              <svg className="w-20 h-6 text-teal-500" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 15 H35 L42 5 L48 25 L54 10 L60 20 L66 15 H100" />
              </svg>
              <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                <HeartPulse className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* ============================================================== */}
          {/* 4. BOTTOM PARTNER BANNER (Navy to Teal Gradient)               */}
          {/* ============================================================== */}
          <div className="mt-8 bg-gradient-to-r from-[#07162E] via-[#0A264F] to-[#0A4E68] rounded-3xl p-5 sm:p-6 md:p-7 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            {/* Background shimmer */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Left Thumbnail Image of Corporate Facility */}
            <div className="flex items-center gap-4 sm:gap-5 w-full md:w-auto">
              <div className="relative w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-white/20 shadow-md">
                <Image
                  src="/images/pages/corporate-healthcare.webp"
                  alt="Illustrative workplace healthcare consultation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center Content */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10 text-teal-300 hidden sm:flex">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-snug">
                    Partner with Dr. AllCare for Your Corporate Healthcare Needs
                  </h3>
                  <p className="text-xs sm:text-sm text-teal-100/80 mt-0.5">
                    We Care Always For You • Let&apos;s build a healthier, more productive workplace together.
                  </p>
                </div>
              </div>
            </div>

            {/* Right White Pill Action Button */}
            <div className="w-full md:w-auto flex justify-end">
              <button
                onClick={() => setModalOpen(true)}
                className="w-full md:w-auto bg-white hover:bg-slate-100 text-[#0A1E3F] text-xs sm:text-sm font-bold px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 whitespace-nowrap"
              >
                <span>Contact Our Business Team</span>
                <ArrowRight className="w-4 h-4 text-teal-600" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Corporate Enquiry Modal */}
      <QuickEnquiryModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        initialType="b2b" 
      />
    </main>
  );
}
