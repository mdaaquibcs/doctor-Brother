"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { 
  Building2, 
  Handshake, 
  Users, 
  MonitorCheck, 
  Layers, 
  MapPin, 
  Globe2, 
  HeartHandshake, 
  ShieldCheck, 
  ArrowRight,
  Heart,
  CheckCircle2
} from "lucide-react";

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const servicesGrid = [
    {
      id: "hospital-management",
      title: "Hospital Management Services",
      description: "Complete hospital operations management and outsourcing.",
      href: "/hospital-management",
      image: "/images/hospital-facility.jpg",
      icon: <Building2 className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      id: "corporate-healthcare",
      title: "Corporate Healthcare Solutions",
      description: "Tailored healthcare solutions for businesses and industries.",
      href: "/corporate-healthcare",
      image: "/images/corporate-handshake.jpg",
      icon: <Handshake className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      id: "healthcare-staffing",
      title: "Healthcare Staffing & Recruitment",
      description: "Skilled doctors, nurses and medical professionals.",
      href: "/healthcare-staffing",
      image: "/images/medical-team.jpg",
      icon: <Users className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      id: "medical-equipment",
      title: "Medical Equipment Solutions",
      description: "Advanced medical equipment and procurement.",
      href: "/medical-equipment",
      image: "/images/hospital-facility.jpg",
      icon: <MonitorCheck className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      id: "hospital-setup",
      title: "Hospital Setup & Consultancy",
      description: "End-to-end hospital planning and infrastructure.",
      href: "/hospital-setup-consultancy",
      image: "/images/hospital-facility.jpg",
      icon: <Layers className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      id: "domestic-tourism",
      title: "Domestic Medical Tourism",
      description: "Get the best treatment in India with complete support.",
      href: "/domestic-patients",
      image: "/images/medical-team.jpg",
      icon: <MapPin className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      id: "international-tourism",
      title: "International Medical Tourism",
      description: "World-class treatment for international patients.",
      href: "/international-patients",
      image: "/images/medical-team.jpg",
      icon: <Globe2 className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    },
    {
      id: "patient-care",
      title: "Patient Care & Coordination",
      description: "Dedicated support throughout your treatment journey.",
      href: "/patient-care-coordination",
      image: "/images/hospital-facility.jpg",
      icon: <HeartHandshake className="w-5 h-5 text-teal-600" />,
      iconBg: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      {/* 1. TOP HERO BANNER (Exact Match to Screenshot) */}
      <section className="relative bg-gradient-to-b from-[#F0F7FD] via-[#F8FBFE] to-white pt-8 pb-14 overflow-hidden border-b border-slate-100">
        
        {/* Decorative Wave Accent */}
        <div className="absolute left-0 bottom-0 w-64 h-32 bg-gradient-to-tr from-teal-400/20 to-transparent rounded-tr-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column (col-span-6) */}
            <div className="lg:col-span-6 space-y-4">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200/90 shadow-sm">
                <HeartHandshake className="w-4 h-4 text-teal-600" />
                <span>Our Services</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-black tracking-tight text-[#0A1E3F] leading-[1.18]">
                Comprehensive Healthcare<br />
                Solutions <span className="text-[#00A389]">Under One Roof</span>
              </h1>

              {/* Subheading */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                From hospital management to medical tourism, we deliver end-to-end healthcare solutions for hospitals, businesses and patients.
              </p>

              {/* 3 Trust Badges */}
              <div className="flex flex-wrap items-center gap-5 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Trusted Partner</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Proven Results</span>
                </div>
              </div>

              {/* Explore Button */}
              <div className="pt-3">
                <a
                  href="#core-services-grid"
                  className="px-6 py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow inline-flex items-center gap-2 group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Visual Columns (col-span-6): Doctor Team & Hospital Facade */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              {/* Doctor Team Photo */}
              <div className="relative w-full h-[260px] sm:h-[300px] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/images/medical-team.jpg"
                  alt="Dr. AllCare Healthcare Verified Doctors and Staff"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Hospital Building with 'Better Healthcare A Healthier Tomorrow' Sign */}
              <div className="relative w-full h-[260px] sm:h-[300px] rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                <Image
                  src="/images/hospital-facility.jpg"
                  alt="Modern Hospital Facility"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Corporate Healthcare Sign Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg flex items-center gap-2.5 border border-white/50">
                  <div className="w-8 h-8 rounded-xl bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 fill-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0A1E3F] leading-tight">Better Healthcare</div>
                    <div className="text-[11px] text-teal-700 font-semibold">A Healthier Tomorrow</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR CORE SERVICES TITLE (Exact Match to Screenshot) */}
      <section id="core-services-grid" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 sm:w-14 h-[2px] bg-teal-500 inline-block"></span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0A1E3F] tracking-tight">
              Our Core Services
            </h2>
            <span className="w-10 sm:w-14 h-[2px] bg-teal-500 inline-block"></span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            End-to-End Healthcare Solutions for a Healthier Tomorrow
          </p>
        </div>

        {/* 3. 8-CARD SERVICES GRID (2 rows of 4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesGrid.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/90 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Thumbnail Image */}
                <div className="relative w-full h-36 rounded-xl overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Icon & Title */}
                <div className="flex items-start gap-2.5 pt-1">
                  <div className={`w-8 h-8 rounded-lg ${card.iconBg} border flex items-center justify-center flex-shrink-0`}>
                    {card.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1E3F] leading-snug group-hover:text-teal-700 transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 leading-relaxed pl-0.5">
                  {card.description}
                </p>
              </div>

              {/* Learn More -> Link */}
              <div className="pt-3 mt-3 border-t border-slate-100">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900 group/link"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. BOTTOM GRADIENT BANNER STRIP (Exact Match to Screenshot) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-[#008F87] via-[#00A389] to-[#01807A] text-white rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          
          {/* Subtle Background Cross */}
          <div className="absolute right-40 top-1/2 -translate-y-1/2 text-white/10 text-9xl font-light pointer-events-none select-none">
            +
          </div>

          {/* Left: ECG Pulse & Text */}
          <div className="flex items-center gap-4 relative z-10">
            {/* ECG Pulse Waveform Graphic */}
            <div className="hidden sm:flex items-center text-teal-200 flex-shrink-0">
              <svg className="w-14 h-8" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0 20 H30 L38 5 L46 35 L54 10 L62 25 L70 20 H100" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Your Health. Our Commitment.
              </h3>
              <p className="text-xs text-teal-100 mt-0.5 font-medium">
                Partner with us for world-class healthcare solutions.
              </p>
            </div>
          </div>

          {/* Right: "Get in Touch ->" Pill Button */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              href="/contact-us"
              className="px-6 py-2.5 bg-white hover:bg-slate-50 text-teal-900 font-bold text-xs sm:text-sm rounded-full transition shadow-md inline-flex items-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 text-teal-700" />
            </Link>
          </div>

        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
