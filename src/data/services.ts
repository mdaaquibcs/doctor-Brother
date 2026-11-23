import { ServiceVertical, MetricCard } from "@/types";

export const TRUST_METRICS: MetricCard[] = [
  {
    value: "6+",
    label: "Core Healthcare Verticals",
    subtext: "End-to-end B2B & patient solutions under one umbrella"
  },
  {
    value: "100%",
    label: "NABH / NABL Compliance",
    subtext: "Strict clinical quality & statutory governance standards"
  },
  {
    value: "Pan-India",
    label: "Operational Presence",
    subtext: "Coordinating healthcare from Tier 1 to Tier 3 hubs"
  },
  {
    value: "24/7/365",
    label: "Critical Coordination Desk",
    subtext: "Emergency medical response & patient concierge"
  }
];

export const SERVICE_VERTICALS: ServiceVertical[] = [
  {
    id: "hospital-management",
    code: "HM-01",
    category: "b2b",
    title: "Hospital Management Services",
    tagline: "Turnkey Hospital Administration, Revenue Cycle & Clinical Operations",
    description: "Complete institutional operations management for private and trust hospitals. We deploy seasoned healthcare administrators, optimize billing, digitize workflows, ensure NABH accreditation, and improve clinical margins.",
    iconName: "Building2",
    bullets: [
      "Full hospital operations & day-to-day administrative governance",
      "Revenue cycle management, billing audit & insurance desk streamlining",
      "NABH/NABL accreditation compliance & clinical audit frameworks",
      "Pharmacy, OT, ICU, OPD, IPD, and emergency department workflow optimization",
      "Comprehensive hospital management outsourcing contracts"
    ],
    ctaLabel: "Explore Hospital Management",
    ctaHref: "#hospital-management"
  },
  {
    id: "corporate-healthcare",
    code: "CH-02",
    category: "b2b",
    title: "Corporate Healthcare Solutions",
    tagline: "Enterprise Occupational Health, Factory Clinics & On-Site Medical Teams",
    description: "Tailored industrial and corporate medical services for manufacturing plants, IT campuses, and conglomerates. We establish and operate compliant on-site occupational health centers (OHCs) with certified medical staff.",
    iconName: "Briefcase",
    bullets: [
      "On-site factory medical centers and corporate occupational clinics",
      "Deployment of permanent industrial doctors, RMOs, and emergency nurses",
      "Statutory compliance for Factories Act, pre-employment & periodic medical checkups",
      "24/7 on-site emergency triage, advanced cardiac life support ambulance tie-ups",
      "Annual Corporate Healthcare SLAs & tailored corporate health plans"
    ],
    ctaLabel: "Corporate Solutions",
    ctaHref: "#corporate-solutions"
  },
  {
    id: "healthcare-staffing",
    code: "HS-03",
    category: "staffing",
    title: "Healthcare Staffing & Recruitment",
    tagline: "Credential-Verified Doctors, Surgeons, ICU Nurses & Paramedics",
    description: "Elite medical talent sourcing and workforce management for healthcare institutions. Rigorous credential verification under NMC and state medical councils ensures high-caliber clinical deployment.",
    iconName: "Users",
    bullets: [
      "Super-specialist doctors, consultants, surgeons & resident medical officers",
      "Critical care ICU nurses, OT scrub nurses, and specialized ward teams",
      "NABH-trained medical administrators, lab technicians & radiology technologists",
      "Temporary locum tenens, emergency surge rosters & permanent staffing",
      "Strict primary source credential verification & background screening"
    ],
    ctaLabel: "Staffing Solutions",
    ctaHref: "#staffing-solutions"
  },
  {
    id: "medical-equipment",
    code: "ME-04",
    category: "infrastructure",
    title: "Medical Equipment & Procurement",
    tagline: "Strategic Sourcing, Leasing, Biomedical Maintenance & Capital Equipment",
    description: "Enterprise procurement partnerships with leading medical technology manufacturers. We assist hospitals in obtaining cutting-edge diagnostic, surgical, and ICU equipment with flexible financial models.",
    iconName: "Stethoscope",
    bullets: [
      "Capital diagnostic equipment: MRI, CT, cath labs, digital X-ray, ultrasound",
      "Critical care units: ICU ventilators, multipara monitors, anesthesia workstations",
      "Flexible equipment procurement: outright purchase, lease, or revenue-sharing",
      "Biomedical engineering maintenance contracts (AMC/CMC) & uptime guarantees",
      "Vendor consolidation, consumable pricing audits, and supply chain management"
    ],
    ctaLabel: "Equipment Sourcing",
    ctaHref: "#infrastructure-solutions"
  },
  {
    id: "hospital-setup",
    code: "HS-05",
    category: "infrastructure",
    title: "Hospital Setup & Infrastructure Consultancy",
    tagline: "Architectural Planning, AERB/Pollution Licensing & Turnkey Commissioning",
    description: "End-to-end guidance for greenfield and brownfield hospital projects. From feasibility analysis and architectural space-programming to equipment layout, statutory licensing, and launch readiness.",
    iconName: "Layers",
    bullets: [
      "Hospital feasibility studies, financial modeling & capacity planning",
      "NABH-compliant architectural space programming & MEP layout design",
      "Statutory licensing assistance: AERB, Fire NOC, Clinical Establishment Act, PCB",
      "Modular OT, central sterilization (CSSD), and ICU infrastructure engineering",
      "Pre-launch hiring, commissioning protocols, and standard operating procedures (SOPs)"
    ],
    ctaLabel: "Setup Consultancy",
    ctaHref: "#infrastructure-solutions"
  },
  {
    id: "medical-tourism",
    code: "MT-06",
    category: "patient_care",
    title: "Domestic & International Medical Tourism",
    tagline: "Seamless Treatment Coordination, Surgery Estimates & Patient Concierge",
    description: "Bridging patients from across India and global destinations with premier accredited medical centers. Complete non-clinical logistics including verified opinions, transparent cost estimates, travel, and dedicated bedside support.",
    iconName: "Globe2",
    bullets: [
      "Specialist doctor opinions and multidisciplinary treatment estimates",
      "Dedicated bilingual patient coordinators accompanying patients throughout admission",
      "Interstate logistics for domestic patients: Delhi NCR, Mumbai, Hyderabad, Chennai, Bengaluru",
      "International concierge: Medical visa invitation letter, airport transfers, hotel lodging, interpreters",
      "Post-discharge tele-consultations, rehabilitation planning, and longitudinal follow-up"
    ],
    ctaLabel: "Patient Concierge",
    ctaHref: "#medical-tourism"
  }
];

export const OPERATIONAL_PILLARS = [
  {
    step: "01",
    title: "Institutional Audit & Clinical Due Diligence",
    description: "We initiate every engagement with a rigorous operational audit, evaluating clinical governance, statutory licenses, billing leaks, and infrastructure readiness."
  },
  {
    step: "02",
    title: "Standardized SOP Deployment",
    description: "Implementation of NABH-aligned standard operating protocols across patient admission, nursing handovers, inventory tracking, and medical records handling."
  },
  {
    step: "03",
    title: "Credentialed Workforce & Equipment Allocation",
    description: "Direct deployment of verified medical practitioners, critical care nurses, and certified biomedical machinery tailored to institutional patient volume."
  },
  {
    step: "04",
    title: "Real-Time Tele-Governance & Analytics",
    description: "Continuous monitoring of occupancy, average length of stay (ALOS), infection control rates, and financial key performance indicators."
  }
];

export const PATIENT_JOURNEY_STEPS = [
  {
    stepNumber: "1",
    title: "Medical Record Submission",
    description: "The patient or guardian shares diagnostic reports, imaging scans, and current clinical history securely through our platform."
  },
  {
    stepNumber: "2",
    title: "Multi-Specialist Opinion & Estimate",
    description: "Our medical panel coordinates verified opinions from senior surgeons and produces transparent, itemized treatment cost estimates."
  },
  {
    stepNumber: "3",
    title: "Logistics & Admission Support",
    description: "For domestic or international patients, we coordinate travel, accommodation, visa clearance, and assign a dedicated Patient Coordinator."
  },
  {
    stepNumber: "4",
    title: "Bedside Coordination & Discharge Care",
    description: "Our coordinator handles hospital formalities, billing queries, pharmacy coordination, and ensures seamless post-treatment follow-up."
  }
];
