"use client";

import React from "react";
import { 
  Users, 
  ShieldCheck, 
  CalendarClock, 
  FileCheck2, 
  ArrowRight
} from "lucide-react";

interface StaffingSolutionsProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function StaffingSolutionsSection({ onOpenModal }: StaffingSolutionsProps) {
  const staffCategories = [
    {
      role: "Surgeons & Super-Specialists",
      subtext: "Oncology, Cardiology, Orthopedics, Neuro, Laparoscopy",
      type: "Full-Time / Visiting",
      verification: "NMC & State Council Verified"
    },
    {
      role: "Consultant Physicians & RMOs",
      subtext: "Internal Medicine, Emergency Triage, ICU Intensivists",
      type: "Shift & Rotational",
      verification: "ACLS / BLS Certified"
    },
    {
      role: "Critical Care & ICU Nurses",
      subtext: "SICU, MICU, NICU, Dialysis & Operation Theatre Teams",
      type: "Permanent & Locum",
      verification: "INC / State Nursing Council"
    },
    {
      role: "Paramedical & Lab Technicians",
      subtext: "Radiology, CT/MRI Technologists, Cath Lab, Pathology",
      type: "Turnkey Departmental",
      verification: "NABL / AERB Qualified"
    },
    {
      role: "Hospital Administrators",
      subtext: "Medical Superintendents, Operations Heads, NABH Quality Leads",
      type: "Executive Placement",
      verification: "MHA / MBA Healthcare Verified"
    },
    {
      role: "Pharmacists & Support Personnel",
      subtext: "Registered Pharmacists, Patient Care Attendants, Ward Boys",
      type: "Managed Contracts",
      verification: "Pharmacy Council Certified"
    }
  ];

  return (
    <section id="staffing-solutions" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-[#0A1E3F]">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span>Vertical C • Healthcare Staffing Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
            Verified Doctors, Specialist Surgeons & Critical Care Nursing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Eliminate critical clinical vacancies. We recruit, thoroughly verify credentials at primary source, 
            and deploy high-caliber healthcare professionals for hospitals, diagnostic chains, and medical institutions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffCategories.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200/80 px-2.5 py-1 rounded-lg">
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    Verified
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0A1E3F] mt-4 group-hover:text-teal-700 transition-colors">
                  {item.role}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 flex items-center justify-between">
                <span>{item.verification}</span>
                <span className="font-semibold text-slate-700">Immediate Roster</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credential Verification Assurance Banner */}
        <div className="mt-12 bg-[#0A1E3F] text-white rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-300 text-sm font-bold">
                <FileCheck2 className="w-4 h-4" />
                Primary Source Verification
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct authentication of degrees, registration certificates with National Medical Commission (NMC), and state medical boards.
              </p>
            </div>

            <div className="space-y-2 pt-4 md:pt-0 md:pl-6">
              <div className="flex items-center gap-2 text-teal-300 text-sm font-bold">
                <CalendarClock className="w-4 h-4" />
                Duty Scheduling & Roster Management
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Automated monthly shift rosters, emergency backup on-call surgeons, and zero-dropout hospital coverage guarantees.
              </p>
            </div>

            <div className="space-y-3 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
              <button
                onClick={() => onOpenModal("b2b")}
                className="w-full py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center justify-center gap-2"
              >
                <span>Request Medical Staffing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
