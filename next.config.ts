import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/contact", destination: "/contact-us", permanent: true },
      { source: "/consultation", destination: "/contact-us", permanent: false },
      { source: "/services/hospital-management", destination: "/hospital-management", permanent: true },
      { source: "/services/corporate-healthcare", destination: "/corporate-healthcare", permanent: true },
      { source: "/services/healthcare-staffing", destination: "/healthcare-staffing", permanent: true },
      { source: "/services/hospital-setup", destination: "/hospital-setup-consultancy", permanent: true },
      { source: "/services/medical-equipment", destination: "/medical-equipment", permanent: true },
      { source: "/services/medical-tourism", destination: "/international-patients", permanent: true },
      { source: "/businesses", destination: "/corporate-healthcare", permanent: true },
      { source: "/businesses/corporate-solutions", destination: "/corporate-healthcare", permanent: true },
      { source: "/businesses/hospital-partnership", destination: "/corporate-partnerships", permanent: true },
      { source: "/patients", destination: "/find-treatment", permanent: true },
      { source: "/patients/find-treatment", destination: "/find-treatment", permanent: true },
      { source: "/patients/find-doctor", destination: "/find-doctors", permanent: true },
      { source: "/patients/find-hospital", destination: "/find-hospitals", permanent: true },
    ];
  },
};

export default nextConfig;
