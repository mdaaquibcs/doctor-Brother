"use client";

import React, { useState } from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import PageHeader from "@/components/common/PageHeader";
import ContactEnquirySection from "@/components/home/ContactEnquirySection";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";

export default function ContactUsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Header onOpenModal={() => setModalOpen(true)} />

      <PageHeader
        badge="Connect Directly • We Care Always For You"
        title="Contact Dr. AllCare Healthcare Solutions Executive Desk"
        subtitle="Get in touch with our institutional healthcare management team, corporate occupational health specialists, or patient care coordination concierge."
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <ContactEnquirySection />

      <Footer />
      <QuickEnquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
