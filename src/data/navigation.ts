import { NavItem } from "@/types";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    title: "About",
    href: "/about-us",
    children: [
      {
        title: "About Dr. AllCare",
        href: "/about-us",
        description: "National healthcare management & solutions platform headquartered in India."
      },
      {
        title: "Vision & Mission",
        href: "/vision-and-mission",
        description: "Our core corporate vision, ethical clinical values, and nationwide expansion strategy."
      },
      {
        title: "Our Operational Approach",
        href: "#operational-approach",
        description: "Standardized protocols, NABH-aligned governance, and technology-driven healthcare operations."
      },
      {
        title: "Careers",
        href: "/careers",
        description: "Join our healthcare management team, medical consultants, and operations network."
      }
    ]
  },
  {
    title: "B2B Solutions",
    href: "/services",
    children: [
      {
        title: "Hospital Management Services",
        href: "/hospital-management",
        description: "End-to-end administration, billing, NABH compliance, clinical operations, and revenue growth."
      },
      {
        title: "Corporate Healthcare Solutions",
        href: "/corporate-healthcare",
        description: "Factory clinics, corporate wellness, occupational health centers, and on-site emergency care."
      },
      {
        title: "Hospital Setup & Consultancy",
        href: "/hospital-setup-consultancy",
        description: "Turnkey planning, architectural layout, OT/ICU design, regulatory licensing, and commissioning."
      },
      {
        title: "Medical Equipment Solutions",
        href: "/medical-equipment",
        description: "Procurement, lease contracts, installation, biomedical maintenance, and vendor management."
      },
      {
        title: "Corporate Partnerships",
        href: "/corporate-partnerships",
        description: "Institutional healthcare contracts, industrial group tie-ups, and long-term service agreements."
      }
    ]
  },
  {
    title: "Medical Staffing",
    href: "/healthcare-staffing",
    children: [
      {
        title: "Healthcare Staffing Overview",
        href: "/healthcare-staffing",
        description: "Comprehensive medical staffing for multispecialty hospitals, clinics, and corporate facilities."
      },
      {
        title: "Doctor Recruitment",
        href: "/doctor-recruitment",
        description: "Verified consultants, surgeons, super-specialists, and resident medical officers."
      },
      {
        title: "Nursing & Paramedical Staffing",
        href: "/nursing-staffing",
        description: "ICU nurses, OT technicians, ward nursing, lab technicians, and radiology experts."
      }
    ]
  },
  {
    title: "Patient Care",
    href: "/find-treatment",
    children: [
      {
        title: "Find Treatment",
        href: "/find-treatment",
        description: "Search specialized treatment protocols, oncology, cardiology, neurology, and orthopedics."
      },
      {
        title: "Find Doctors",
        href: "/find-doctors",
        description: "Discover top verified specialists and experienced surgeons across India."
      },
      {
        title: "Find Hospitals",
        href: "/find-hospitals",
        description: "Compare accredited partner hospitals in Delhi NCR, Mumbai, Bengaluru, Chennai, and Hyderabad."
      },
      {
        title: "Surgery Packages",
        href: "/surgery-packages",
        description: "Transparent, predictable package estimates for major and elective surgical procedures."
      },
      {
        title: "Domestic Patient Care",
        href: "/domestic-patients",
        description: "Interstate patient support with travel, lodging, hospital admission, and dedicated coordinator."
      },
      {
        title: "International Medical Tourism",
        href: "/international-patients",
        description: "Medical visa assistance, multilingual interpreters, airport transfer, and doctor opinions."
      },
      {
        title: "Patient Coordination Concierge",
        href: "/patient-care-coordination",
        description: "Dedicated patient relationship managers navigating hospital stays from admission to discharge."
      }
    ]
  },
  {
    title: "Contact",
    href: "/contact-us"
  }
];

export const FOOTER_LINKS = {
  solutions: [
    { label: "Hospital Management", href: "/hospital-management" },
    { label: "Corporate Healthcare", href: "/corporate-healthcare" },
    { label: "Medical Staffing Solutions", href: "/healthcare-staffing" },
    { label: "Doctor Recruitment", href: "/doctor-recruitment" },
    { label: "Nursing & Technical Staff", href: "/nursing-staffing" },
    { label: "Hospital Setup Consultancy", href: "/hospital-setup-consultancy" },
    { label: "Medical Equipment Procurement", href: "/medical-equipment" },
  ],
  patients: [
    { label: "Find Treatment", href: "/find-treatment" },
    { label: "Find Doctors", href: "/find-doctors" },
    { label: "Find Hospitals", href: "/find-hospitals" },
    { label: "Surgery Packages", href: "/surgery-packages" },
    { label: "Domestic Patient Assistance", href: "/domestic-patients" },
    { label: "International Medical Tourism", href: "/international-patients" },
    { label: "Patient Care & Coordination", href: "/patient-care-coordination" },
  ],
  company: [
    { label: "About Dr. AllCare", href: "/about-us" },
    { label: "Vision & Mission", href: "/vision-and-mission" },
    { label: "Corporate Partnerships", href: "/corporate-partnerships" },
    { label: "Careers & Talent Network", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ]
};
