"use client";

import React from "react";
import { 
  Handshake, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface CorporatePartnershipSectionProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function CorporatePartnershipSection({ onOpenModal }: CorporatePartnershipSectionProps) {
  return (
    <section className="care-content py-20 bg-transparent text-slate-700 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-500/30">
              <Handshake className="w-3.5 h-3.5 text-teal-700" />
              <span>Institutional B2B Partnerships</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
              Hospital Operations Contracts & Corporate Healthcare SLAs
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We collaborate with healthcare trusts, private hospital owners, real-estate conglomerates, 
              and industrial corporations to create sustainable, profitable, and patient-centric healthcare operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Turnkey Hospital Operations Outsourcing</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Annual Occupational Healthcare (OHC) Contracts</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Diagnostic Equipment Revenue-Share Leases</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <span>Strict Key Performance Indicator (KPI) SLA Agreements</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenModal("b2b")}
                className="px-7 py-3.5 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2"
              >
                <span>Initiate Corporate Partnership Dialogue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Pillar Card */}
          <div className="lg:col-span-5 bg-slate-900/90 rounded-3xl p-7 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
                Institutional Partnership Lifecycle
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                8-STAGE PIPELINE
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <span>1. Requirement Analysis & Site Audit</span>
                <span className="text-teal-400 font-bold">Week 1</span>
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <span>2. Financial Modeling & Revenue Blueprint</span>
                <span className="text-teal-400 font-bold">Week 2</span>
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <span>3. Formal SLA & Management Contract</span>
                <span className="text-teal-400 font-bold">Week 3</span>
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-xl border border-slate-700/60 flex items-center justify-between">
                <span>4. On-Site Administrator & Staff Deployment</span>
                <span className="text-teal-400 font-bold">Week 4</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 pt-1 leading-relaxed">
              Standardized corporate governance ensures transparent reporting to hospital boards and corporate HR leadership.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
