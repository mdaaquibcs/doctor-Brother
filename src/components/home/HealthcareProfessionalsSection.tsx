"use client";

import React from "react";
import { 
  Stethoscope, 
  UserCheck, 
  Calendar, 
  ArrowRight,
  ShieldAlert
} from "lucide-react";

interface HealthcareProfessionalsProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function HealthcareProfessionalsSection({ onOpenModal }: HealthcareProfessionalsProps) {
  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
              <Stethoscope className="w-3.5 h-3.5 text-teal-600" />
              <span>For Doctors, Surgeons & Medical Staff</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
              Join Dr. AllCare’s Verified Clinical & Medical Faculty Network
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We empower medical professionals with transparent hospital empanelment, guaranteed surgical theater 
              access, credential verification, and flexible duty scheduling across leading institutions in India.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <UserCheck className="w-4 h-4 text-teal-600" />
                  Direct Hospital Empanelment
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Opportunity to practice at top multi-specialty partner hospitals with verified surgical bed availability.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-teal-800 font-bold text-sm">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  Predictable Duty Rosters
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Structured shift scheduling for ICU Intensivists, Resident Medical Officers, and Critical Care Nurses.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onOpenModal("b2b")}
                className="px-6 py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2"
              >
                <span>Empanel as Consultant / Specialist</span>
                <ArrowRight className="w-4 h-4 text-teal-400" />
              </button>
            </div>
          </div>

          {/* Right Portal Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="text-sm font-bold text-[#0A1E3F]">Medical Professional Verification Gateway</div>
              <span className="text-[11px] font-mono bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded font-bold">
                NMC / INC
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>Registration Primary Verification</span>
                <span className="text-teal-700 font-bold">100% Verified</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>OT Surgical Time Blocking</span>
                <span className="text-slate-800 font-semibold">Priority Corridor</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                <span>Professional Indemnity Auditing</span>
                <span className="text-slate-800 font-semibold">Standardized</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-amber-900 text-xs flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                All medical professionals undergo rigorous NMC registration checks. We strictly uphold medical ethics.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
