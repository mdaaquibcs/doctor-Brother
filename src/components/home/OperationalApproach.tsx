import React from "react";
import { OPERATIONAL_PILLARS } from "@/data/services";
import { Activity, ShieldCheck } from "lucide-react";

export default function OperationalApproach() {
  return (
    <section id="operational-approach" className="care-content py-20 bg-transparent relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#0A1E3F]">
            <Activity className="w-3.5 h-3.5 text-teal-600" />
            <span>Structured Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
            Our 4-Phase Operational Approach
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every engagement follows a systematic institutional playbook—combining 
            rigorous clinical governance with robust operational metrics and automated monitoring.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {OPERATIONAL_PILLARS.map((pillar, index) => (
            <div
              key={pillar.step}
              className="care-card rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-teal-600 font-mono">
                    {pillar.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded">
                    Phase {index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0A1E3F] mt-4 group-hover:text-teal-700 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-teal-700 font-semibold">
                <span>Standardized Protocol</span>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Governance Quote Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#061226] text-slate-300 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-teal-400 flex-shrink-0" />
            <span>
              All operational manuals are indexed and audited against <strong>NABH 5th Edition</strong> and <strong>NABL ISO 15189:2022</strong> standards.
            </span>
          </div>
          <span className="text-teal-400 font-mono font-bold whitespace-nowrap">
            ISO / NABH GOVERNANCE
          </span>
        </div>

      </div>
    </section>
  );
}
