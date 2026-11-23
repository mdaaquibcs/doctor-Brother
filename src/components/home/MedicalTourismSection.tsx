"use client";

import React, { useState } from "react";
import { 
  Globe2, 
  MapPin, 
  Plane, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface MedicalTourismSectionProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function MedicalTourismSection({ onOpenModal }: MedicalTourismSectionProps) {
  const [activeTab, setActiveTab] = useState<"domestic" | "international">("domestic");

  return (
    <section id="medical-tourism" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <Globe2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Vertical F & G • Patient Care & Medical Tourism</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
            Domestic & International Medical Travel Coordination
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Eliminating the stress of seeking high-end surgical treatment away from home. 
            We match patients with premier accredited hospitals, verified specialist surgeons, 
            transparent package estimates, and personal bedside coordinators.
          </p>

          {/* Toggle Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="bg-slate-100 p-1 rounded-2xl flex max-w-md w-full border border-slate-200">
              <button
                type="button"
                onClick={() => setActiveTab("domestic")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "domestic"
                    ? "bg-[#0A1E3F] text-white shadow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Domestic Indian Patients</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("international")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "international"
                    ? "bg-[#0A1E3F] text-white shadow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Plane className="w-4 h-4 text-teal-400" />
                <span>International Medical Guests</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-12">
          {activeTab === "domestic" ? (
            <div className="bg-slate-50 rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left explanation */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white text-teal-800 border border-teal-200">
                    Interstate Care Logistics
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A1E3F]">
                    Patients from Any Indian State Connected to Top Metro Centers
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    A patient in Bihar, Uttar Pradesh, Odisha, Assam, or Madhya Pradesh needing advanced cardiac, 
                    neuro, or orthopedic surgery in Delhi NCR, Mumbai, Hyderabad, or Bengaluru receives end-to-end 
                    accompaniment.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Multiple Hospital Comparison & Transparent Surgery Estimates</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Dedicated Patient Coordinator at Hospital Bedside</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Family Accommodation & Attendant Guest Houses</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Post-Discharge Medicine Delivery & Tele-Followups</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={() => onOpenModal("patient")}
                      className="px-6 py-3 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2"
                    >
                      <span>Submit Reports for Doctor Opinion</span>
                      <ArrowRight className="w-4 h-4 text-teal-400" />
                    </button>
                  </div>
                </div>

                {/* Right example walkthrough card */}
                <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    Real-World Operational Flow:
                  </div>
                  <div className="font-bold text-slate-900 text-sm">
                    Example Case: Cardiac Bypass for Patient in Patna (Bihar)
                  </div>
                  
                  <div className="space-y-3 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center flex-shrink-0">
                        1
                      </div>
                      <div>
                        <strong>Report Review:</strong> Patient transmits angiogram scans to Dr. AllCare clinical desk.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center flex-shrink-0">
                        2
                      </div>
                      <div>
                        <strong>Surgeon Opinion:</strong> 2 senior cardiac surgeons in Delhi NCR provide surgery evaluation and itemized cost package.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center flex-shrink-0">
                        3
                      </div>
                      <div>
                        <strong>Station Reception:</strong> Train/flight ticket booking, station pickup, and check-in to pre-verified nearby attendant stay.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-800 font-bold flex items-center justify-center flex-shrink-0">
                        4
                      </div>
                      <div>
                        <strong>Personal Coordinator:</strong> Accompanies patient to hospital admission desk, expediting cashless TPA and surgery scheduling.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="bg-[#061226] text-white rounded-3xl p-7 sm:p-10 border border-slate-800 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left explanation */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    Cross-Border Medical Tourism
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    World-Class Clinical Care in India for International Patients
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Welcoming medical travelers from Bangladesh, Nepal, Middle East, East Africa, Central Asia, and beyond. 
                    Offering JCI & NABH accredited hospitals at a fraction of Western healthcare costs.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>Official Medical Visa (M-Visa) Invitation Letter Coordination</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>Dedicated Multilingual Interpreters (Arabic, Russian, Bengali, French)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>Airport Chauffeur Reception & Guest Accommodation Booking</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>Transparent Pre-Travel Surgery Quotes & Zero Hidden Fees</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <button
                      onClick={() => onOpenModal("patient")}
                      className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex items-center gap-2"
                    >
                      <span>International Patient Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right International Countries Grid */}
                <div className="lg:col-span-5 bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                    Key International Patient Corridors
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-slate-800/70 rounded-xl border border-slate-700/60">
                      <div className="font-bold text-white">Bangladesh</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Cardiac, Renal, Oncology</div>
                    </div>
                    <div className="p-3 bg-slate-800/70 rounded-xl border border-slate-700/60">
                      <div className="font-bold text-white">Middle East & GCC</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Orthopedics, Neuro, Rehab</div>
                    </div>
                    <div className="p-3 bg-slate-800/70 rounded-xl border border-slate-700/60">
                      <div className="font-bold text-white">East Africa</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Bone Marrow, Transplants</div>
                    </div>
                    <div className="p-3 bg-slate-800/70 rounded-xl border border-slate-700/60">
                      <div className="font-bold text-white">Central Asia</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">Spine, Joint Replacement</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800 flex items-center justify-between">
                    <span>Medical Visa Assistance Desk</span>
                    <span className="text-teal-400 font-semibold">24-Hour TAT for Visa Letters</span>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
