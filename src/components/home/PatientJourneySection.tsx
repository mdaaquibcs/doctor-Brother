import React from "react";
import { PATIENT_JOURNEY_STEPS } from "@/data/services";
import { HeartPulse, CheckCircle2, ArrowRight } from "lucide-react";

interface PatientJourneySectionProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

export default function PatientJourneySection({ onOpenModal }: PatientJourneySectionProps) {
  return (
    <section className="care-content py-20 bg-transparent relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <HeartPulse className="w-3.5 h-3.5 text-teal-600" />
            <span>Patient Concierge Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
            The Dr. AllCare Patient Treatment Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            <strong className="text-teal-700 font-semibold block mb-0.5">We Care Always For You</strong>
            From the initial medical report submission to post-surgical tele-consultations, 
            every step is overseen by an experienced Patient Coordinator for stress-free healing.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PATIENT_JOURNEY_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="care-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white font-black text-sm flex items-center justify-center shadow-md">
                  {step.stepNumber}
                </div>
                <h3 className="text-base font-bold text-[#0A1E3F] mt-5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-teal-700 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                <span>Verified Clinical Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenModal("patient")}
            className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm sm:text-base rounded-xl transition shadow-lg shadow-teal-900/20 inline-flex items-center gap-2"
          >
            <span>Start Your Treatment Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
