"use client";

import React from "react";
import { 
  Layers, 
  Cpu, 
  Building, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface InfrastructureSectionProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function InfrastructureSection({ onOpenModal }: InfrastructureSectionProps) {
  return (
    <section id="infrastructure-solutions" className="care-content py-20 bg-transparent relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <Layers className="w-3.5 h-3.5 text-teal-600" />
            <span>Verticals D & E • Equipment & Hospital Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
            Hospital Setup Consultancy & Advanced Medical Equipment
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From architectural feasibility and licensing of greenfield hospital projects to 
            high-value diagnostic equipment leasing, biomedical AMC/CMC contracts, and turnkey OT commissioning.
          </p>
        </div>

        {/* 2-Column Split: Setup Consultancy & Equipment Solutions */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Box 1: Hospital Setup & Architecture */}
          <div className="care-card rounded-3xl p-7 sm:p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A1E3F] text-teal-300 flex items-center justify-center shadow-md">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1E3F]">
                New Hospital Setup & Consultancy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Comprehensive advisory for developers, doctors, and healthcare trusts launching 50 to 500+ bed hospitals across India.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Architectural Space Planning:</strong> NABH-compliant circulation, isolation negative pressure rooms & OT zoning.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Statutory Approvals:</strong> AERB approval, Fire Safety NOC, State Pollution Control Board & Clinical Establishments Act.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Commissioning SOPs:</strong> Pre-launch clinical drills, IT / HIS integration, and departmental standard operating manuals.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onOpenModal("b2b")}
                className="w-full py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                <span>Enquire for Hospital Setup Project</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>

          {/* Box 2: Medical Equipment & Procurement */}
          <div className="care-card rounded-3xl p-7 sm:p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1E3F]">
                Medical Equipment Sourcing & Procurement
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Direct procurement partnerships with tier-1 biomedical manufacturers, lowering hospital capital expenditure through flexible acquisition models.
              </p>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Capital Modalities:</strong> 1.5T / 3T MRI, 128-slice CT scanners, digital cath labs, and digital mammography units.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span><strong>ICU & OT Engineering:</strong> Advanced anesthesia workstations, high-end ICU ventilators, multipara cardiac monitors.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Maintenance & AMC/CMC:</strong> Certified biomedical engineering on-call support with guaranteed 98% uptime SLAs.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button
                onClick={() => onOpenModal("b2b")}
                className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                <span>Request Equipment Catalogue & Leasing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
