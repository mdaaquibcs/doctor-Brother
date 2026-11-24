"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function SurgeryPackagesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const packages = [
    {
      title: "Coronary Artery Bypass Graft (CABG)",
      subtext: "Open Heart / Beating Heart Bypass Surgery",
      stay: "6 - 8 Days (2 Days ICU)",
      priceIndia: "₹ 2,40,000 - ₹ 3,80,000",
      priceIntl: "$ 4,200 - $ 6,000 USD",
      inclusions: ["Surgeon & OT charges", "Cardiac ICU & room stay", "Standard pre-op workup", "Dedicated Bedside Coordinator"]
    },
    {
      title: "Robotic Total Knee Replacement (Unilateral)",
      subtext: "High-flexion implant with robotic arm precision",
      stay: "3 - 5 Days",
      priceIndia: "₹ 1,80,000 - ₹ 2,60,000",
      priceIntl: "$ 3,500 - $ 4,80,000 USD",
      inclusions: ["FDA approved knee implant", "Pre-op 3D CT scan mapping", "Physiotherapy sessions", "Post-discharge rehabilitation plan"]
    },
    {
      title: "Minimally Invasive Spine Fusion (TLIF)",
      subtext: "Decompression and pedicle screw stabilization",
      stay: "4 - 6 Days",
      priceIndia: "₹ 2,20,000 - ₹ 3,20,000",
      priceIntl: "$ 4,000 - $ 5,500 USD",
      inclusions: ["Titanium implants & cages", "Neuro-monitoring during OT", "Physiotherapy & lumbar brace", "Dedicated Bedside Coordinator"]
    },
    {
      title: "Laparoscopic Cholecystectomy (Gallbladder)",
      subtext: "Day-care / 24-hour discharge laparoscopic removal",
      stay: "1 - 2 Days",
      priceIndia: "₹ 55,000 - ₹ 90,000",
      priceIntl: "$ 1,400 - $ 2,200 USD",
      inclusions: ["Surgical consumables", "Histopathology biopsy", "Private room accommodation", "Post-op follow-up consultation"]
    },
    {
      title: "Renal (Kidney) Transplant",
      subtext: "Living related donor kidney transplant protocol",
      stay: "10 - 14 Days",
      priceIndia: "₹ 7,50,000 - ₹ 11,00,000",
      priceIntl: "$ 12,000 - $ 16,500 USD",
      inclusions: ["Donor & recipient surgeries", "Immunosuppressive induction", "Transplant ICU care", "State authorization documentation"]
    },
    {
      title: "Comprehensive Cancer Radiation (IGRT / VMAT)",
      subtext: "Precision targeted radiotherapy course",
      stay: "Outpatient / Day Care",
      priceIndia: "₹ 1,80,000 - ₹ 3,50,000",
      priceIntl: "$ 3,200 - $ 5,500 USD",
      inclusions: ["4D CT simulation planning", "Daily linear accelerator delivery", "Oncologist weekly reviews", "Nutritional counseling"]
    }
  ];

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Transparent Cost Estimates"
        title="Predictable Surgery Packages & Treatment Estimates"
        subtitle="Transparent cost guidelines with verified accredited hospitals. Every estimate includes pre-operative evaluation, ICU care, implants, and dedicated personal bedside coordinator support."
        breadcrumb={[
          { label: "Patient Care", href: "/find-treatment" },
          { label: "Surgery Packages" }
        ]}
        ctaLabel="Get Itemized Estimate"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className="care-card rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-bold text-[#0A1E3F]">{pkg.title}</h3>
                  <div className="text-xs text-slate-500 mt-0.5">{pkg.subtext}</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Domestic Estimate:</span>
                    <span className="font-bold text-[#0A1E3F]">{pkg.priceIndia}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">International Quote:</span>
                    <span className="font-bold text-teal-700">{pkg.priceIntl}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-200/60">
                    Hospital Stay: <span className="text-slate-700 font-medium">{pkg.stay}</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="font-semibold text-slate-800 text-[11px]">Package Inclusions:</div>
                  <ul className="space-y-1 pl-1 text-[11px]">
                    {pkg.inclusions.map((inc, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <span>Request Custom Package Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-5 text-amber-900 text-xs">
          <strong>Transparency Note:</strong> Package quotes represent typical ranges based on standard non-complicated clinical courses. Final quotes are confirmed after senior surgeon review of your diagnostic scans and co-morbidities.
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
