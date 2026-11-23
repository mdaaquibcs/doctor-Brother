import React from "react";
import { 
  Scale, 
  TrendingUp, 
  HeartHandshake, 
  Award, 
  Building2 
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Building2 className="w-6 h-6 text-teal-600" />,
      title: "Comprehensive B2B Healthcare Infrastructure",
      description: "Unlike generic doctor-booking apps or single-point vendors, we manage end-to-end hospital administration, revenue cycle, clinical staffing, and capital medical equipment under one institutional contract."
    },
    {
      icon: <Scale className="w-6 h-6 text-teal-600" />,
      title: "Strict Regulatory & Ethical Governance",
      description: "Full compliance with the Clinical Establishments Act, National Medical Commission regulations, AERB guidelines, and the Digital Personal Data Protection (DPDP) Act."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
      title: "Performance-Linked Hospital Turnarounds",
      description: "Our management contracts align our interests directly with your hospital's operational stability, average length of stay (ALOS) reduction, and revenue margin improvements."
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-teal-600" />,
      title: "Dedicated Bedside Patient Concierge",
      description: "For domestic and international patients, we don't just book appointments—we provide a personal patient coordinator who stays at the bedside throughout the hospital journey."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>Institutional Differentiators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1E3F] tracking-tight">
            Why Enterprise Leaders & Patients Trust Dr. AllCare
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            <strong className="text-teal-700 font-semibold block mb-1">We Care Always For You</strong>
            Engineered from the ground up to solve structural inefficiencies in India&apos;s healthcare ecosystem—bridging 
            clinical excellence with enterprise-grade operational discipline.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((pt, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm border border-slate-200/90 flex items-start gap-5 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                {pt.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#0A1E3F]">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
