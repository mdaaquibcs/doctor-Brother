import React from "react";
import { TRUST_METRICS } from "@/data/services";
import { Award, CheckCircle2 } from "lucide-react";

export default function TrustIndicators() {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {TRUST_METRICS.map((metric, idx) => (
            <div 
              key={metric.label} 
              className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                idx !== 0 ? "pt-4 lg:pt-0 lg:pl-6" : ""
              }`}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A1E3F] tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5 leading-snug">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Strip */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-semibold text-[#0A1E3F]">
            <Award className="w-4 h-4 text-teal-600" />
            <span>Enterprise Healthcare Frameworks:</span>
          </div>
          <div className="flex items-center gap-6 flex-wrap font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              NABH Hospital Standards
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              NABL Diagnostic Compliance
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              Factories Act Occupational Health (OHC)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              Digital Personal Data Protection (DPDP)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
