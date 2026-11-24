"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { Building2, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function FindHospitalsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cityFilter, setCityFilter] = useState("All");

  const hospitals = [
    {
      name: "Indraprastha Medical Institute & Trauma Centre",
      city: "Delhi NCR",
      accreditation: "NABH & JCI Accredited",
      beds: "650+ Beds",
      centers: ["Comprehensive Cancer Center", "Advanced Cardiac Institute", "Multi-Organ Transplant Unit"]
    },
    {
      name: "Metro Health City Multispecialty",
      city: "Mumbai",
      accreditation: "NABH Accredited",
      beds: "500+ Beds",
      centers: ["Robotic Joint Replacement", "Interventional Cardiology", "Critical Care & ECMO Unit"]
    },
    {
      name: "Deccan Super-Specialty Medical Institute",
      city: "Hyderabad",
      accreditation: "NABH & NABL Accredited",
      beds: "450+ Beds",
      centers: ["Neurosciences & Stroke Unit", "Living Donor Liver Transplants", "Nephrology & Dialysis"]
    },
    {
      name: "Southern Medical Research & Hospital",
      city: "Bengaluru",
      accreditation: "JCI Accredited",
      beds: "550+ Beds",
      centers: ["Pediatric Cardiac Sciences", "Bone Marrow Transplant Center", "Minimally Invasive Spine Center"]
    },
    {
      name: "Madras Institute of Medical Sciences",
      city: "Chennai",
      accreditation: "NABH Accredited",
      beds: "600+ Beds",
      centers: ["Heart-Lung Transplant Center", "Radiation Oncology (CyberKnife)", "Advanced Orthopedics"]
    },
    {
      name: "Heritage City Healthcare Center",
      city: "Kolkata",
      accreditation: "NABH Accredited",
      beds: "400+ Beds",
      centers: ["Gastroenterology & Hepatobiliary", "Cardiac Sciences", "Emergency Trauma Center"]
    }
  ];

  const filtered = cityFilter === "All"
    ? hospitals
    : hospitals.filter(h => h.city.toLowerCase().includes(cityFilter.toLowerCase()));

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Accredited Clinical Network"
        title="Compare Verified Partner Hospitals Across India"
        subtitle="Empaneled tertiary and quaternary care medical institutions with NABH and JCI accreditation, high-end ICU infrastructure, and dedicated patient concierge desks."
        breadcrumb={[
          { label: "Patient Care", href: "/find-treatment" },
          { label: "Find Hospitals" }
        ]}
        ctaLabel="Compare Hospital Costs"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap gap-2">
          {["All", "Delhi NCR", "Mumbai", "Hyderabad", "Bengaluru", "Chennai", "Kolkata"].map((c) => (
            <button
              key={c}
              onClick={() => setCityFilter(c)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                cityFilter === c
                  ? "bg-[#0A1E3F] text-white shadow"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {c === "All" ? "All Locations" : c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((hosp, i) => (
            <div key={i} className="care-card rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center border border-teal-100">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    {hosp.accreditation}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0A1E3F]">{hosp.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{hosp.city} • {hosp.beds}</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-600 space-y-1.5 border-t border-slate-100">
                  <div className="font-semibold text-slate-700 text-[11px]">Centers of Excellence:</div>
                  <ul className="space-y-1 pl-1 text-[11px]">
                    {hosp.centers.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
                >
                  <span>Request Hospital Admission Assistance</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
