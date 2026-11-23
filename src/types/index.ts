export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  description?: string;
  children?: {
    title: string;
    href: string;
    description: string;
    icon?: string;
  }[];
}

export interface ServiceVertical {
  id: string;
  code: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  category: 'b2b' | 'staffing' | 'infrastructure' | 'patient_care';
}

export interface MetricCard {
  value: string;
  label: string;
  subtext: string;
}

export interface LeadSubmission {
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  interestType: 'hospital_management' | 'corporate_healthcare' | 'staffing' | 'equipment' | 'infrastructure' | 'patient_treatment';
  city: string;
  message: string;
}
