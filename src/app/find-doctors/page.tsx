"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import { User, ShieldCheck, MapPin, Calendar } from "lucide-react";

export default function FindDoctorsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const doctors = [
    {
      name: "Dr. Rajesh K. Sharma",
      qualifications: "MBBS, MS (General Surgery), MCh (CTVS)",
      specialty: "Senior Cardiac Surgeon",
      experience: "24+ Years Experience",
      city: "Delhi NCR",
      focus: "Adult & Pediatric Minimally Invasive Bypass, Valve Repairs"
    },
    {
      name: "Dr. Sunita Ramanathan",
      qualifications: "MBBS, MD (Medicine), DM (Medical Oncology)",
      specialty: "Senior Medical Oncologist",
      experience: "19+ Years Experience",
      city: "Mumbai",
      focus: "Precision Targeted Therapy, Breast & GI Malignancies"
    },
    {
      name: "Dr. Vikramaditya Reddy",
      qualifications: "MBBS, MS (Orthopedics), MCh (Ortho, UK)",
      specialty: "Joint Replacement & Spine Surgeon",
      experience: "21+ Years Experience",
      city: "Hyderabad / Bengaluru",
      focus: "Robotic Knee Replacement, Micro-Endoscopic Spine Surgery"
    },
    {
      name: "Dr. Ananya Mukherjee",
      qualifications: "MBBS, MS (Surgery), MCh (Neurosurgery)",
      specialty: "Consultant Neurosurgeon",
      experience: "16+ Years Experience",
      city: "Kolkata / Delhi NCR",
      focus: "Skull Base Surgery, Brain Tumors, Deep Brain Stimulation"
    },
    {
      name: "Dr. Arvind Chawla",
      qualifications: "MBBS, MD (Medicine), DM (Gastroenterology)",
      specialty: "Senior Gastroenterologist & Hepatologist",
      experience: "22+ Years Experience",
      city: "Delhi NCR",
      focus: "Advanced Interventional Endoscopy, Liver Disease Management"
    },
    {
      name: "Dr. Meenakshi Sundaram",
      qualifications: "MBBS, MS (Surgery), MCh (Surgical Oncology)",
      specialty: "Robotic Onco-Surgeon",
      experience: "18+ Years Experience",
      city: "Chennai",
      focus: "Robotic Gynecologic & Thoracic Onco-Surgeries"
    }
  ];

  const filtered = selectedSpecialty === "All" 
    ? doctors 
    : doctors.filter(d => d.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase()));

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Verified Medical Faculty"
        title="Find Verified Specialist Doctors & Senior Surgeons in India"
        subtitle="Connect with pre-verified super-specialists across top accredited hospital institutions. Book second opinions and surgical evaluations."
        breadcrumb={[
          { label: "Patient Care", href: "/find-treatment" },
          { label: "Find Doctors" }
        ]}
        ctaLabel="Consult a Specialist"
        onCtaClick={() => setModalOpen(true)}
      />

      <section className="care-content py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["All", "Cardiac", "Oncologist", "Orthopedic", "Neurosurgeon", "Gastroenterologist"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedSpecialty(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedSpecialty === tab
                  ? "bg-[#0A1E3F] text-white shadow"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab === "All" ? "All Specialties" : tab}
            </button>
          ))}
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((doc, idx) => (
            <div key={idx} className="care-card rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 font-bold flex items-center justify-center text-lg border border-teal-100">
                    <User className="w-6 h-6" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                    NMC Verified
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0A1E3F]">{doc.name}</h3>
                  <div className="text-xs font-semibold text-teal-700 mt-0.5">{doc.specialty}</div>
                  <div className="text-[11px] text-slate-500 mt-1">{doc.qualifications}</div>
                </div>

                <div className="pt-2 text-xs text-slate-600 space-y-1 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 font-medium text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>Location: {doc.city} • {doc.experience}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-snug">
                    <strong>Focus:</strong> {doc.focus}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full py-2.5 bg-[#0A1E3F] hover:bg-[#122A54] text-white font-bold text-xs rounded-xl transition flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-teal-300" />
                  <span>Book Consultation</span>
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
