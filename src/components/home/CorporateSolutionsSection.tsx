"use client";

import React from "react";
import { 
  Briefcase, 
  Factory, 
  Stethoscope, 
  Siren, 
  HeartHandshake, 
  FileCheck, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";

interface CorporateSolutionsProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function CorporateSolutionsSection({ onOpenModal }: CorporateSolutionsProps) {
  const corporateFeatures = [
    {
      icon: <Factory className="w-5 h-5 text-teal-600" />,
      title: "Factory & Industrial Medical Centers (OHCs)",
      description: "Compliant on-site Occupational Health Centers engineered to satisfy the Factories Act 1948 and state occupational safety mandates."
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-teal-600" />,
      title: "Dedicated On-Site Doctors & Nurses",
      description: "Deployment of certified Factory Medical Officers (AFIH certified), Emergency Medical Technicians (EMTs), and industrial nurses for shift rotations."
    },
    {
      icon: <Siren className="w-5 h-5 text-teal-600" />,
      title: "24/7 Emergency Triage & ALS Ambulance",
      description: "Advanced Cardiac Life Support (ALS) ambulances stationed on-site, paired with dedicated priority admission corridors at partner trauma centers."
    },
    {
      icon: <FileCheck className="w-5 h-5 text-teal-600" />,
      title: "Executive & Periodic Health Audits",
      description: "End-to-end statutory health records, audiometry, pulmonary function tests (PFT), and targeted wellness camps for corporate employees."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-teal-600" />,
      title: "Annual Corporate Healthcare SLAs",
      description: "Comprehensive annual maintenance agreements covering medical staffing, pharmaceuticals, biomedical waste, and executive health tracking."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
      title: "Customized Campus Health Infrastructure",
      description: "Planning and turnkey execution of on-campus first aid rooms, executive medical suites, and industrial paramedic dispatch stations."
    }
  ];

  return (
    <section id="corporate-solutions" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <Briefcase className="w-3.5 h-3.5 text-teal-600" />
            <span>Vertical B • Corporate & Industrial Healthcare</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
            Corporate Healthcare Solutions & Factory Medical Facilities
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Delivering statutory compliance, workplace safety, on-site clinical teams, and 
            round-the-clock emergency medical response for large enterprises, industrial plants, 
            and corporate conglomerates across India.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corporateFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A1E3F]">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 bg-gradient-to-r from-[#0A1E3F] to-[#122A54] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">
              Need an Occupational Health Center (OHC) for your facility?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              From statutory compliance audits under the Factories Act to turnkey doctor deployment, our corporate advisory team is ready.
            </p>
          </div>
          <button
            onClick={() => onOpenModal("b2b")}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2 flex-shrink-0"
          >
            <span>Request Corporate RFP / Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
