"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import StaffingSolutionsSection from "@/components/home/StaffingSolutionsSection";
import HealthcareProfessionalsSection from "@/components/home/HealthcareProfessionalsSection";
// Lucide icons rendered within components

export default function HealthcareStaffingPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="care-page min-h-screen flex flex-col">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Vertical C • Healthcare Staffing Solutions"
        title="Verified Medical Staffing & Healthcare Talent Sourcing"
        subtitle="Specialist surgeons, consultant physicians, critical care ICU nurses, and paramedical technologists with 100% primary source credential verification under NMC and State Medical Councils."
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: "Healthcare Staffing" }
        ]}
        ctaLabel="Request Clinical Staffing"
        onCtaClick={() => setModalOpen(true)}
      />

      <StaffingSolutionsSection onOpenModal={() => setModalOpen(true)} />

      <HealthcareProfessionalsSection onOpenModal={() => setModalOpen(true)} />

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
