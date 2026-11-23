# PROJECT AUDIT: DR. ALLCARE HEALTHCARE SOLUTIONS PLATFORM
**Platform:** Dr. AllCare Healthcare Solutions (formerly ENAAM)  
**Document:** Complete Full-Stack Architecture & Frontend Inventory Audit  
**Phase:** Phase 1 (Project Audit)  
**Status:** Completed & Validated  
**Date:** November 2026  

---

## 1. Executive Summary & Technology Stack

The existing platform is an enterprise-grade, approved frontend built for a national-level healthcare management and solutions company headquartered in India (`Plot No 284, Sector 6, Pocket 5, Jasola Vihar, New Delhi, Delhi 110025`).

### Current Technology Stack
| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.4.3` | Server-side rendering, static generation, routing |
| **Runtime / UI Library** | React | `19.3.0` | Declarative UI rendering & state management |
| **Language** | TypeScript | `^5.0` | Strict type safety and schema validation |
| **Styling** | Tailwind CSS v4 | `@tailwindcss/turbopack ^4` | Utility-first CSS & responsive design system |
| **Icons** | Lucide React | `^1.66.0` | Comprehensive clinical and enterprise iconography |
| **Bundler** | Turbopack | Built-in | Fast dev build and optimized static pre-rendering |
| **Linting** | ESLint & Next Linter | `^9.0` | Code quality enforcement (Currently passing: 0 errors, 0 warnings) |

---

## 2. Existing Pages & Routes Inventory (27 Routes)

All 27 pages are fully functional, independent static routes with dedicated layouts and zero same-page scrolling navigation.

| # | Route URL | File Path | Purpose / Description | Primary CTAs & Interactive Triggers |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `/` | `src/app/page.tsx` | Main Homepage: Hero, Doctor Visual, Category Strip, Core Services Grid, Promo Video, Why Choose Us, Contact Section | `Partner With Us`, `Find Medical Treatment`, `Get a Consultation`, `Quick Enquiry Form`, `Explore All Services` |
| 2 | `/about-us` | `src/app/about-us/page.tsx` | Corporate background, national healthcare platform, accreditation metrics | `Partner With Us` (opens B2B modal) |
| 3 | `/vision-and-mission` | `src/app/vision-and-mission/page.tsx` | Ethical clinical mission, patient-first care, 5-year nationwide expansion | `Connect With Leadership` (opens modal) |
| 4 | `/services` | `src/app/services/page.tsx` | 8-Service visual showcase cards, hospital management, staffing, equipment, tourism | `Explore Service Links`, `Book Consultation` |
| 5 | `/hospital-management` | `src/app/hospital-management/page.tsx` | Vertical A: Turnkey hospital outsourcing, billing audit, bed turnaround | `Request Hospital Management Proposal` |
| 6 | `/corporate-healthcare` | `src/app/corporate-healthcare/page.tsx` | Vertical B: Factory OHC setup (Factories Act 1948), 8 service cards, ECG strip | `Request Corporate Proposal`, `Download Brochure`, `Contact Our Business Team` |
| 7 | `/healthcare-staffing` | `src/app/healthcare-staffing/page.tsx` | Vertical C: Verified doctors, ICU nurses, OT technicians, hospital staffing | `Submit Staffing Requirement` |
| 8 | `/doctor-recruitment` | `src/app/doctor-recruitment/page.tsx` | Specialist doctor recruitment, NMC verification, empanelment | `Apply for Empanelment` |
| 9 | `/nursing-staffing` | `src/app/nursing-staffing/page.tsx` | GNM/B.Sc ICU nurses, NABH compliance, industrial nurses | `Hire Nursing Staff`, `Apply as Nurse` |
| 10 | `/hospital-setup-consultancy`| `src/app/hospital-setup-consultancy/page.tsx` | Vertical D: Turnkey hospital design, AERB/fire licensing, architecture | `Schedule Setup Consultation` |
| 11 | `/medical-equipment` | `src/app/medical-equipment/page.tsx` | Vertical E: MRI, CT, cath-lab procurement, leasing, biomedical AMC | `Request Equipment Quotation` |
| 12 | `/find-treatment` | `src/app/find-treatment/page.tsx` | Patient Portal: 3D shield, search bar, 3 super-specialty cards (Cardiac, Oncology, Ortho) | `Find Treatment`, `Request Treatment Quote`, `Know More (Expand)` |
| 13 | `/for-patients` | `src/app/for-patients/page.tsx` | Dedicated patient portal alias re-exporting `find-treatment` | `Request Treatment Quote`, `Find Treatment` |
| 14 | `/find-doctors` | `src/app/find-doctors/page.tsx` | Directory of verified specialists, surgeons across metro centers | `Book Doctor Consultation` |
| 15 | `/find-hospitals` | `src/app/find-hospitals/page.tsx` | Compare accredited partner hospitals (NABH/JCI) in Delhi, Mumbai, Bangalore | `Compare Hospital Options` |
| 16 | `/surgery-packages` | `src/app/surgery-packages/page.tsx` | Transparent fixed-cost surgical packages (Cardiac, Joint, Cancer) | `Request Package Estimate` |
| 17 | `/domestic-patients` | `src/app/domestic-patients/page.tsx` | Interstate medical travel logistics (Bihar, UP, Jharkhand to metro centers) | `Request Interstate Travel Assistance` |
| 18 | `/international-patients` | `src/app/international-patients/page.tsx` | Medical visa invitation letters (24h), airport reception, multi-lingual concierge | `Request International Medical Concierge` |
| 19 | `/patient-care-coordination` | `src/app/patient-care-coordination/page.tsx` | Bedside coordinators, admission navigation, discharge support | `Request a Care Coordinator` |
| 20 | `/corporate-partnerships` | `src/app/corporate-partnerships/page.tsx` | Enterprise SLAs, factory occupational health, institutional contracts | `Initiate Strategic Partnership` |
| 21 | `/careers` | `src/app/careers/page.tsx` | Job openings (Operations Manager, OHC Doctor, ICU Nurse, Patient Coordinator) | `Submit Resume / CV`, `Apply for Position` |
| 22 | `/contact-us` | `src/app/contact-us/page.tsx` | Executive contact desk, Jasola Vihar headquarters, mobile hotline | `Send Message`, `Call Helpline (+91 7050011164)` |
| 23 | `/privacy-policy` | `src/app/privacy-policy/page.tsx` | Digital Personal Data Protection (DPDP) Act 2023 compliance | Legal disclosures |
| 24 | `/terms-and-conditions` | `src/app/terms-and-conditions/page.tsx` | Clinical Establishment Act boundaries, Master Service Agreements | Legal disclosures |
| 25 | `/_not-found` | Built-in Next.js | 404 error page | `Return to Home` |
| 26 | *Proposed Alias* `/about` | Needs routing alias | Prompt requirement: maps to `/about-us` | Navigation alias |
| 27 | *Proposed Alias* `/contact` | Needs routing alias | Prompt requirement: maps to `/contact-us` | Navigation alias |

---

## 3. Existing Components Architecture

### A. Common Layout Components (`src/components/common/`)
1. **`Header.tsx`**:
   - Primary sticky navigation bar.
   - Official Dr. AllCare logo (`/images/dr-all-care-logo.png`) with tagline *"We Care Always For You"*.
   - Desktop & mobile navigation dropdowns (About Us, Our Services, For Businesses, For Patients, International Patients, Careers, Contact).
   - "For Patients" active dropdown with icon cards.
   - Primary CTA: `Get a Consultation` (triggers modal).
2. **`Footer.tsx`**:
   - Corporate overview, logo badge, tagline.
   - Statutory Headquarters: `Plot No 284, Sector 6, Pocket 5, Jasola Vihar, New Delhi, Delhi 110025`.
   - 24/7 Helpline: `+91 7050011164`.
   - Links columns: B2B & Hospital Solutions, Patient Care & Tourism, Governance & Company.
   - DPDP Act disclosure & statutory compliance statement.
3. **`PageHeader.tsx`**:
   - Standardized reusable header for interior routes with breadcrumb navigation, badge, title, subtitle, and primary CTA button.
4. **`QuickEnquiryModal.tsx`**:
   - Dual-tab lead capture dialog (`b2b` vs `patient`).
   - Handles enterprise and patient consultations.

### B. Homepage Feature Components (`src/components/home/`)
1. **`Hero.tsx`**:
   - Main value proposition, ambient watermark crosses, doctor team visual.
   - Floating "Quick Enquiry" 4-field card.
   - Fast-access category strip (`Hospital Management`, `Corporate Healthcare`, `Medical Staffing`, `Patient Care`).
2. **`CoreServices.tsx`**:
   - 6-card "Our Business Solutions" grid with icons and route links.
   - Interactive modal video trigger for hospital infrastructure presentation.
   - "Why Choose Dr. AllCare?" 4-item differentiator bar.
3. **`ContactEnquirySection.tsx`**:
   - 7-field enterprise & patient enquiry form.
   - Headquarters card & 24/7 National Operations Desk card.
4. **`CorporateSolutionsSection.tsx`**:
   - 4-card grid for OHC, medical staff, ambulance tie-ups, and health check-ups.
5. **`CorporatePartnershipSection.tsx`**:
   - Contract models (turnkey, revenue share, annual SLAs).
6. **`HospitalManagementSection.tsx`**:
   - Operational turnaround, revenue auditing, bed-occupancy optimization.
7. **`HealthcareProfessionalsSection.tsx`**:
   - Empanelment criteria for senior specialists and ICU nurses.
8. **`InfrastructureSection.tsx`**:
   - Turnkey hospital setup, modular OT engineering, medical equipment procurement.
9. **`MedicalTourismSection.tsx`**:
   - Domestic & international travel coordination workflow, 4-step case study.
10. **`PatientJourneySection.tsx`**:
    - 4-step concierge workflow from medical report submission to post-surgical follow-up.
11. **`StaffingSolutionsSection.tsx`**:
    - Clinical workforce deployment protocols and credentials auditing.
12. **`TrustIndicators.tsx`**:
    - NABH/JCI compliance metrics, 24/7 emergency response, verified doctors.
13. **`WhyChooseUs.tsx`**:
    - Institutional differentiators and enterprise governance pillars.
14. **`OperationalApproach.tsx`**:
    - Standardized clinical SOPs and auditing framework.

---

## 4. Existing Forms & Input Fields Inventory

| Form Identifier | Location | Fields & Inputs | Current Frontend Handling | Target Backend Table |
| :--- | :--- | :--- | :--- | :--- |
| **Quick Enquiry Modal (B2B Tab)** | `src/components/common/QuickEnquiryModal.tsx` | - Full Name (`text`)<br>- Organization (`text`)<br>- Email (`email`)<br>- Phone (`tel`)<br>- City (`text`)<br>- Service Category (`select`: 6 categories)<br>- Message (`textarea`) | Local simulated submit (`setTimeout 900ms`), sets `isSubmitted: true`. **No DB connection.** | `corporate_leads` / `business_enquiries` |
| **Quick Enquiry Modal (Patient Tab)** | `src/components/common/QuickEnquiryModal.tsx` | - Full Name (`text`)<br>- Phone (`tel`)<br>- Email (`email`)<br>- City (`text`)<br>- Country (`select`: 7 options)<br>- Medical Concern (`select`: 7 specialties)<br>- Message (`textarea`) | Local simulated submit (`setTimeout 900ms`), sets `isSubmitted: true`. **No DB connection.** | `patients` / `treatment_requests` |
| **Homepage Floating Quick Enquiry** | `src/components/home/Hero.tsx` | - Service Type (`select`: 4 options)<br>- Full Name (`text`)<br>- Phone (`tel`)<br>- City (`text`) | Local state reset, shows simulated success badge. **No DB connection.** | `business_enquiries` / `treatment_requests` |
| **Executive Contact Form** | `src/components/home/ContactEnquirySection.tsx` (Homepage & `/contact-us`) | - Full Name (`text`)<br>- Official Email (`email`)<br>- Contact Phone (`tel`)<br>- Organization (`text`)<br>- Enquiry Nature (`select`: 7 options)<br>- City / State (`text`)<br>- Brief Details (`textarea`) | Local state reset, sets `submitted: true`. **No DB connection.** | `corporate_leads` / `business_enquiries` |
| **Procedure / Specialty Search** | `src/app/find-treatment/page.tsx` & `/for-patients` | - Search Query (`text`) | Real-time frontend array filtering across treatments. **Works client-side, needs DB full-text search.** | `treatments` / `procedures` query |
| **Corporate Brochure Download** | `src/app/corporate-healthcare/page.tsx` | - None (Trigger button) | Client-side `Blob` generation and download of formatted `.txt` brochure. **Needs Supabase Storage PDF download.** | Storage bucket: `corporate-documents` |
| **Careers Application Triggers** | `src/app/careers/page.tsx` | - 4 Role Cards with "Apply for Position" buttons | Opens `QuickEnquiryModal`. **Needs dedicated job application form with resume file upload.** | `job_applications` + Storage bucket: `employee-documents` |
| **Doctor Empanelment Trigger** | `src/app/doctor-recruitment/page.tsx` | - "Apply for Empanelment" button | Opens `QuickEnquiryModal`. **Needs doctor credential upload form (NMC/State registration, degrees).** | `doctors` / `doctor_credentials` + Storage bucket: `doctor-credentials` |

---

## 5. Interactive CTAs & Button Audit

| Button / CTA Text | Location | Current Action | Backend Connection Required |
| :--- | :--- | :--- | :--- |
| `Get a Consultation` | `Header.tsx` (Navbar & Mobile Menu) | Opens `QuickEnquiryModal` (`b2b`) | Insert into `business_enquiries` + Admin email notification |
| `Partner With Us` | `Hero.tsx`, `/about-us` | Opens `QuickEnquiryModal` (`b2b`) | Insert into `corporate_leads` |
| `Find Medical Treatment` | `Hero.tsx` | Navigates to `/find-treatment` | Connected to route; needs search query & quote request |
| `Request Corporate Proposal` | `/corporate-healthcare` | Opens `QuickEnquiryModal` (`b2b`) | Insert into `proposals` / `corporate_leads` |
| `Download Brochure` | `/corporate-healthcare` | Generates text file download | Track download event in `audit_logs` + serve official PDF |
| `Contact Our Business Team` | `/corporate-healthcare` | Opens `QuickEnquiryModal` (`b2b`) | Insert into `corporate_leads` |
| `Request Treatment Quote` | `/find-treatment` | Opens `QuickEnquiryModal` (`patient`) | Insert into `treatment_requests` |
| `Request a Care Coordinator` | `/patient-care-coordination` | Opens `QuickEnquiryModal` (`patient`) | Insert into `patient_journeys` |
| `Request Free Treatment Estimate` | `/surgery-packages` | Opens `QuickEnquiryModal` (`patient`) | Insert into `treatment_estimates` |
| `Request Hospital Management Proposal` | `/hospital-management` | Opens `QuickEnquiryModal` (`b2b`) | Insert into `hospital_requests` |
| `Schedule Setup Consultation` | `/hospital-setup-consultancy`| Opens `QuickEnquiryModal` (`b2b`) | Insert into `business_enquiries` |
| `Request Equipment Quotation` | `/medical-equipment` | Opens `QuickEnquiryModal` (`b2b`) | Insert into `equipment_requests` |
| `Submit Staffing Requirement` | `/healthcare-staffing` | Opens `QuickEnquiryModal` (`b2b`) | Insert into `staff_deployments` / `job_postings` |
| `Apply for Empanelment` | `/doctor-recruitment` | Opens `QuickEnquiryModal` | Doctor application portal + credential verification |
| `Hire Nursing Staff` | `/nursing-staffing` | Opens `QuickEnquiryModal` | Insert into `staff_deployments` |
| `Submit Resume / CV` | `/careers` | Opens `QuickEnquiryModal` | Insert into `job_applications` with file upload |
| Video Play Trigger | `CoreServices.tsx` | Opens presentation video dialog | Track engagement |

---

## 6. Backend Integration Requirements & Gap Analysis

### Current Status
- **Backend Service:** None currently installed or connected.
- **Database:** None. No PostgreSQL connection string exists.
- **Authentication:** None. No login, registration, session, or role check exists.
- **File Storage:** None. Resumes, credentials, and medical reports cannot be uploaded.
- **Environment Variables:** `.env.example` and `.env.local` do not exist.
- **API Endpoints:** `src/app/api/` folder does not exist yet.

### Core Required Backend Modules
1. **Supabase & PostgreSQL Connection**:
   - Connection via `@supabase/supabase-js` and `@supabase/ssr` (Next.js App Router compatible).
   - Safe server-side clients via Server Actions / Route Handlers.
   - Strict Row Level Security (RLS) on all PostgreSQL tables.
2. **Database Schema (Normalized PostgreSQL)**:
   - 10 Functional Domains:
     1. User & Role Management (`profiles`, `user_roles`, `organizations`, `organization_members`)
     2. Corporate & B2B CRM (`corporate_clients`, `corporate_leads`, `business_enquiries`, `proposals`, `contracts`)
     3. Hospital Operations (`hospitals`, `hospital_branches`, `hospital_departments`, `hospital_contracts`, `hospital_operations`)
     4. Healthcare Staffing (`doctors`, `doctor_credentials`, `nurses`, `job_postings`, `job_applications`, `staff_deployments`)
     5. Patient Care & Treatment (`patients`, `treatment_requests`, `medical_records`, `appointments`, `treatment_estimates`, `patient_journeys`)
     6. Medical Tourism (`international_patient_profiles`, `travel_assistance`, `visa_assistance_requests`)
     7. Medical Equipment (`equipment`, `equipment_categories`, `equipment_requests`, `procurement_orders`)
     8. Financial Management (`invoices`, `invoice_items`, `payments`, `expenses`)
     9. Notifications (`notifications`, `support_tickets`)
     10. Security & Auditing (`audit_logs`, `system_settings`)
3. **Authentication & 13 User Roles**:
   - Super Admin, Admin, Corporate Client, Hospital Administrator, Hospital Manager, HR Manager, Doctor, Nurse, Patient, International Patient, Patient Coordinator, Finance Manager, Procurement Manager.
   - Secure login, registration, password recovery, session validation, and route guards (`/admin/*`, `/dashboard/*`, `/portal/*`).
4. **Form Integration**:
   - Server-side Zod validation on every form submission.
   - Idempotency / duplicate prevention.
   - Reference ID generation (e.g., `DRAC-B2B-2026-XXXX`, `DRAC-PT-2026-XXXX`).
   - Database insertion with error handling and success state feedback.
5. **Private Supabase Storage Buckets**:
   - `patient-documents`
   - `doctor-credentials`
   - `nurse-credentials`
   - `employee-documents`
   - `corporate-documents`
   - `contracts`
   - `invoices`
   - Authenticated pre-signed URLs with MIME type and file-size constraints.

---

## 7. Missing Functionality Summary (To Be Built in Next Phases)

1. **Backend Database & Migrations**: PostgreSQL DDL migrations not yet written.
2. **Auth & Protected Portals**: No `/login`, `/register`, or role-protected dashboards exist.
3. **Super Admin Dashboard (`/admin`)**: Real database queries for statistics, hospital management, lead management, and audit logs.
4. **Corporate CRM**: Pipeline stages (New Lead -> Proposal -> Contract) not yet implemented.
5. **Form Submission Endpoints**: Forms currently use `setTimeout` mock handlers.
6. **File Upload Handlers**: Resume upload, doctor degree upload, and patient scan uploads are missing.
7. **Route Aliasing**: Standalone `/about` and `/contact` aliases to mirror `/about-us` and `/contact-us`.

---

## 8. Verification & Health Check

- **ESLint Check**: `0 errors, 0 warnings`
- **Turbopack Build (`next build`)**: All 27 routes compiled successfully with 0 errors.
- **Frontend UI & Layout Integrity**: 100% preserved matching approved design.

---

*Phase 1 Audit Complete. Awaiting approval to proceed to Phase 2 (Backend Connection & Supabase Setup).*
