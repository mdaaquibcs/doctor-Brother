export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole =
  | "super_admin"
  | "admin"
  | "corporate_client"
  | "hospital_administrator"
  | "hospital_manager"
  | "hr_manager"
  | "doctor"
  | "nurse"
  | "patient"
  | "international_patient"
  | "patient_coordinator"
  | "finance_manager"
  | "procurement_manager";

export type EnquiryStatus =
  | "new"
  | "contacted"
  | "in_review"
  | "meeting_scheduled"
  | "proposal_sent"
  | "converted"
  | "closed_lost";

export type LeadStage =
  | "new_lead"
  | "contacted"
  | "meeting_scheduled"
  | "requirement_analysis"
  | "proposal_sent"
  | "negotiation"
  | "contract_signed"
  | "project_started";

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string;
          phone: string | null;
          avatar_url: string | null;
          role: UserRole;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: UserRole;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      organizations: {
        Row: {
          id: string;
          name: string;
          type: "hospital" | "corporate" | "vendor" | "internal";
          contact_email: string;
          contact_phone: string;
          address: string | null;
          city: string | null;
          state: string | null;
          country: string;
          gstin: string | null;
          pan: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          type: "hospital" | "corporate" | "vendor" | "internal";
          contact_email: string;
          contact_phone: string;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          country?: string;
          gstin?: string | null;
          pan?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          type?: "hospital" | "corporate" | "vendor" | "internal";
          contact_email?: string;
          contact_phone?: string;
          address?: string | null;
          city?: string | null;
          state?: string | null;
          country?: string;
          gstin?: string | null;
          pan?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      business_enquiries: {
        Row: {
          id: string;
          enquiry_number: string;
          company_name: string;
          contact_person: string;
          work_email: string;
          phone: string;
          service_required: string;
          workforce_size: string | null;
          city: string | null;
          message: string | null;
          status: EnquiryStatus;
          assigned_to: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          enquiry_number?: string;
          company_name: string;
          contact_person: string;
          work_email: string;
          phone: string;
          service_required: string;
          workforce_size?: string | null;
          city?: string | null;
          message?: string | null;
          status?: EnquiryStatus;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          enquiry_number?: string;
          company_name?: string;
          contact_person?: string;
          work_email?: string;
          phone?: string;
          service_required?: string;
          workforce_size?: string | null;
          city?: string | null;
          message?: string | null;
          status?: EnquiryStatus;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      treatment_requests: {
        Row: {
          id: string;
          request_number: string;
          patient_name: string;
          contact_number: string;
          email: string | null;
          specialty: string;
          current_city: string;
          treatment_timeline: string | null;
          medical_notes: string | null;
          is_international: boolean;
          country: string;
          passport_number: string | null;
          status: EnquiryStatus;
          coordinator_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          request_number?: string;
          patient_name: string;
          contact_number: string;
          email?: string | null;
          specialty: string;
          current_city: string;
          treatment_timeline?: string | null;
          medical_notes?: string | null;
          is_international?: boolean;
          country?: string;
          passport_number?: string | null;
          status?: EnquiryStatus;
          coordinator_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          request_number?: string;
          patient_name?: string;
          contact_number?: string;
          email?: string | null;
          specialty?: string;
          current_city?: string;
          treatment_timeline?: string | null;
          medical_notes?: string | null;
          is_international?: boolean;
          country?: string;
          passport_number?: string | null;
          status?: EnquiryStatus;
          coordinator_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string | null;
          action: string;
          entity_type: string;
          entity_id: string | null;
          ip_address: string | null;
          user_agent: string | null;
          metadata: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          action: string;
          entity_type: string;
          entity_id?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          action?: string;
          entity_type?: string;
          entity_id?: string | null;
          ip_address?: string | null;
          user_agent?: string | null;
          metadata?: Json | null;
          created_at?: string;
        };
      };
      notifications: {
        Row: {
          id: string;
          user_id: string | null;
          role_target: UserRole | null;
          title: string;
          message: string;
          link: string | null;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          role_target?: UserRole | null;
          title: string;
          message: string;
          link?: string | null;
          is_read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          role_target?: UserRole | null;
          title?: string;
          message?: string;
          link?: string | null;
          is_read?: boolean;
          created_at?: string;
        };
      };
    };
  };
}
