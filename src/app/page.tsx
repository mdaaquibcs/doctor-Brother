"use client";

import React, { useState } from "react";
import Footer from "@/components/common/Footer";
import QuickEnquiryModal from "@/components/common/QuickEnquiryModal";
import HomeExperience from "@/components/home/HomeExperience";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"b2b" | "patient">("b2b");

  const handleOpenModal = (type: "b2b" | "patient" = "b2b") => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen selection:bg-teal-500 selection:text-white">
      <HomeExperience onOpenModal={handleOpenModal} />
      <Footer />
      <QuickEnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </div>
  );
}
