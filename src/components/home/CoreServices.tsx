"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Building2, 
  Briefcase, 
  Stethoscope, 
  Layers, 
  MonitorCheck, 
  Globe2, 
  ArrowRight, 
  Play, 
  ShieldCheck, 
  Network, 
  Handshake, 
  Headphones,
  X
} from "lucide-react";

export default function CoreServices() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const businessServices = [
    {
      id: "hospital-management",
      title: "Hospital Management",
      icon: <Building2 className="w-5 h-5 text-sky-600" />,
      bgIcon: "bg-sky-50 border-sky-100",
      type: "b2b",
      href: "/hospital-management"
    },
    {
      id: "corporate-healthcare",
      title: "Corporate Healthcare",
      icon: <Briefcase className="w-5 h-5 text-teal-600" />,
      bgIcon: "bg-teal-50 border-teal-100",
      type: "b2b",
      href: "/corporate-healthcare"
    },
    {
      id: "healthcare-staffing",
      title: "Healthcare Staffing",
      icon: <Stethoscope className="w-5 h-5 text-purple-600" />,
      bgIcon: "bg-purple-50 border-purple-100",
      type: "b2b",
      href: "/healthcare-staffing"
    },
    {
      id: "hospital-setup",
      title: "Hospital Setup & Consultancy",
      icon: <Layers className="w-5 h-5 text-teal-600" />,
      bgIcon: "bg-teal-50 border-teal-100",
      type: "b2b",
      href: "/hospital-setup-consultancy"
    },
    {
      id: "medical-equipment",
      title: "Medical Equipment Solutions",
      icon: <MonitorCheck className="w-5 h-5 text-amber-600" />,
      bgIcon: "bg-amber-50 border-amber-100",
      type: "b2b",
      href: "/medical-equipment"
    },
    {
      id: "medical-tourism",
      title: "Medical Tourism (Domestic & International)",
      icon: <Globe2 className="w-5 h-5 text-rose-500" />,
      bgIcon: "bg-rose-50 border-rose-100",
      type: "patient",
      href: "/international-patients"
    }
  ];

  return (
    <section id="services" className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. OUR BUSINESS SOLUTIONS ROW (Exact Match to Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Description Box (col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-teal-700 tracking-wide">
                <span>Our Business Solutions</span>
                <span className="w-8 h-[2px] bg-teal-600 inline-block"></span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1E3F] tracking-tight leading-tight">
                Comprehensive Healthcare Services Under One Roof
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                From hospital management to medical tourism, we deliver complete healthcare solutions.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="/services"
                className="px-5 py-2.5 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs rounded-xl transition shadow inline-flex items-center gap-2 group"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Middle 6-Card Interactive Grid (col-span-6) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {businessServices.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="bg-white hover:bg-slate-50/80 p-4 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${item.bgIcon} border flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    {item.icon}
                  </div>
                  <div className="text-xs font-bold text-[#0A1E3F] group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </div>
                </div>

                <div className="text-teal-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>

          {/* Right Card: Facility Promo with Video Trigger (col-span-3) */}
          <div className="lg:col-span-3 relative rounded-3xl overflow-hidden shadow-lg min-h-[260px] flex flex-col justify-between p-5 text-white group">
            <Image
              src="/images/hospital-facility.jpg"
              alt="Dr. AllCare Modern Healthcare Facilities"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/90 via-[#0A1E3F]/40 to-transparent pointer-events-none"></div>

            {/* Top Pill */}
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 text-slate-800 shadow">
                <ShieldCheck className="w-3 h-3 text-teal-600" />
                Modern Healthcare Facilities
              </span>
            </div>

            {/* Bottom Title & Play Video Button */}
            <div className="relative z-10 space-y-3">
              <h3 className="text-lg font-bold text-white leading-snug">
                Advanced Care.<br />
                Better Tomorrow.
              </h3>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-xs font-bold text-white transition border border-white/30"
              >
                <div className="w-5 h-5 rounded-full bg-white text-[#0A1E3F] flex items-center justify-center shadow">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

        </div>

        {/* 2. WHY CHOOSE DR. ALLCARE STRIP (We Care Always For You) */}
        <div className="bg-gradient-to-r from-teal-50/40 via-sky-50/40 to-teal-50/30 rounded-2xl border border-teal-100/80 p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Title Column */}
            <div className="border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-3 lg:pb-0 lg:pr-6 text-center lg:text-left flex-shrink-0">
              <h3 className="text-base font-black text-[#0A1E3F] tracking-tight">
                Why Choose Dr. AllCare?
              </h3>
              <p className="text-[11px] font-bold text-teal-700 mt-0.5">
                We Care Always For You
              </p>
            </div>

            {/* 4 Feature Items */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-grow">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-slate-800 leading-tight">
                  Trusted & Reliable<br />Healthcare Partner
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Network className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-slate-800 leading-tight">
                  Nationwide & Global<br />Network
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-slate-800 leading-tight">
                  Customized Solutions<br />for Your Needs
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-100/70 text-teal-700 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-bold text-slate-800 leading-tight">
                  Dedicated Support<br />24/7
                </div>
              </div>
            </div>

            {/* Right "Learn More ->" Button */}
            <div className="flex-shrink-0">
              <a
                href="/about-us"
                className="px-5 py-2.5 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs rounded-xl transition shadow inline-flex items-center gap-1.5"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:text-slate-900"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4 pt-2">
              <div className="text-lg font-bold text-[#0A1E3F]">
                Dr. AllCare Healthcare Infrastructure & Advanced Facilities
              </div>
              <div className="aspect-video bg-[#061226] rounded-2xl flex flex-col items-center justify-center text-white p-6 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center border border-teal-500/40">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <div className="text-sm font-semibold">Institutional Presentation Video</div>
                <p className="text-xs text-slate-400 max-w-md">
                  Experience our NABH-accredited partner hospitals, state-of-the-art modular OTs, and dedicated patient concierge facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
