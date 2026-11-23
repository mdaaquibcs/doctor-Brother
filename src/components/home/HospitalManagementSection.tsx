"use client";

import React, { useState } from "react";
import { 
  Building2, 
  TrendingUp, 
  FileText, 
  Users, 
  CheckCircle2, 
  Activity, 
  DollarSign, 
  ShieldAlert,
  ArrowRight
} from "lucide-react";

interface HospitalManagementSectionProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function HospitalManagementSection({ onOpenModal }: HospitalManagementSectionProps) {
  const [activeTab, setActiveTab] = useState<"operations" | "revenue" | "quality">("operations");

  return (
    <section id="hospital-management" className="py-20 bg-white relative border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#0A1E3F]">
              <Building2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Vertical A • Hospital Management Services</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
              Institutional Operations & Hospital Turnaround Management
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We assume end-to-end administrative and operational responsibility for private hospitals, 
              charitable trusts, and healthcare institutions. We transform operational efficiency, eliminate 
              billing leakages, implement standardized clinical protocols, and improve bed occupancy.
            </p>

            {/* Interactive Feature Tabs */}
            <div className="pt-2 flex gap-2 border-b border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab("operations")}
                className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
                  activeTab === "operations"
                    ? "border-teal-600 text-[#0A1E3F]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Operations & Administration
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("revenue")}
                className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
                  activeTab === "revenue"
                    ? "border-teal-600 text-[#0A1E3F]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                Revenue Cycle & Billing
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("quality")}
                className={`pb-2.5 text-xs sm:text-sm font-bold border-b-2 transition-all ${
                  activeTab === "quality"
                    ? "border-teal-600 text-[#0A1E3F]"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                NABH & Quality Governance
              </button>
            </div>

            {/* Tab Details */}
            <div className="pt-2 space-y-3">
              {activeTab === "operations" && (
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Day-to-day administration:</strong> Senior Hospital Administrators on-site managing non-clinical & facility staff.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Patient admission & discharge workflows:</strong> Reduced turnaround times from 4 hours to under 45 minutes.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Pharmacy & Inventory:</strong> Centralized formulary, stock shrinkage audits, and automated reorder levels.</span>
                  </div>
                </div>
              )}

              {activeTab === "revenue" && (
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Billing Leakage Prevention:</strong> Automated charge capture for consumables, OT hours, and specialized procedures.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Insurance & TPA Optimization:</strong> Accelerated pre-authorizations and clean claim submission to slash claim denials.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Financial Analytics:</strong> Departmental profit-and-loss reports, doctor revenue contributions, and margin forecasts.</span>
                  </div>
                </div>
              )}

              {activeTab === "quality" && (
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Accreditation Readiness:</strong> Full preparation, mock audits, and documentation for NABH 5th Edition.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Infection Control & Bio-Waste:</strong> Strict Biomedical Waste Management rules & hospital-acquired infection (HAI) monitoring.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Statutory Compliance:</strong> Clinical Establishments Act, AERB licenses, Pharmacy licenses, and fire certifications.</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onOpenModal("b2b")}
                className="px-6 py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2"
              >
                <span>Request Hospital Management Consultation</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Operational Framework Graphic Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#061226] text-white rounded-3xl p-7 shadow-xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-white">Full-Scope Outsourcing Model</h4>
                    <p className="text-xs text-slate-400">Institutional Governance & Revenue Growth</p>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 bg-teal-900/60 text-teal-300 rounded-md font-mono border border-teal-800">
                  B2B SLA
                </span>
              </div>

              {/* 4 Pillars of Hospital Ops */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <div className="text-teal-400 font-bold text-sm flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Staff Governance
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Doctor rosters, nurse nurse-to-patient ratios, paramedic shifts, biometric attendance and performance-linked compensation.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <div className="text-teal-400 font-bold text-sm flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Billing & TPA Audits
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Full reconciliation of insurance claims, direct settlement protocols with TPAs, and real-time cash collection monitoring.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <div className="text-teal-400 font-bold text-sm flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Clinical Yield & Occupancy
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Surgeon empanelment, OT block utilization efficiency, day-care procedure packages, and institutional outreach camps.
                  </p>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                  <div className="text-teal-400 font-bold text-sm flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" />
                    Risk & Legal Compliance
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Informed consent documentation, medicolegal case protocols, biomedical waste audits, and clinical establishment compliances.
                  </p>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="bg-teal-950/40 border border-teal-800/40 p-4 rounded-2xl text-xs text-teal-200 flex items-center gap-3">
                <FileText className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <span>
                  &ldquo;Our outsourced management contracts align our remuneration directly with the hospital&apos;s operational turnaround and revenue milestones.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
