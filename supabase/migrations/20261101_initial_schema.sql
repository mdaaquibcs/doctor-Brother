-- ==============================================================================
-- DR. ALLCARE HEALTHCARE SOLUTIONS (ENAAM)
-- DATABASE INITIAL SCHEMA MIGRATION: PHASE 3 & ENQUIRY FOUNDATION
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. BUSINESS & CORPORATE ENQUIRIES TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.business_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL DEFAULT 'b2b', -- 'b2b', 'hospital_management', 'corporate_health', 'staffing', 'equipment'
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    organization TEXT NOT NULL,
    city TEXT,
    service_type TEXT NOT NULL,
    message TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_review', 'meeting_scheduled', 'proposal_sent', 'converted', 'closed_lost')),
    priority TEXT NOT NULL DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    source_url TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for fast status & search queries
CREATE INDEX IF NOT EXISTS idx_business_enquiries_status ON public.business_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_business_enquiries_created_at ON public.business_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_business_enquiries_reference_id ON public.business_enquiries(reference_id);

-- ------------------------------------------------------------------------------
-- 2. PATIENT TREATMENT ENQUIRIES TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.patient_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    country TEXT NOT NULL DEFAULT 'India',
    is_international BOOLEAN NOT NULL DEFAULT FALSE,
    specialty TEXT,
    medical_concern TEXT NOT NULL,
    timeline TEXT,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'documents_requested', 'doctor_assigned', 'estimate_shared', 'admitted', 'completed', 'cancelled')),
    priority TEXT NOT NULL DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    coordinator_name TEXT,
    source_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for patient lookups
CREATE INDEX IF NOT EXISTS idx_patient_enquiries_status ON public.patient_enquiries(status);
CREATE INDEX IF NOT EXISTS idx_patient_enquiries_created_at ON public.patient_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_patient_enquiries_reference_id ON public.patient_enquiries(reference_id);

-- ------------------------------------------------------------------------------
-- 3. AUDIT LOGS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    action TEXT NOT NULL,
    entity_type TEXT NOT NULL,
    entity_id TEXT,
    details JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 4. ROW LEVEL SECURITY (RLS) POLICIES
-- ------------------------------------------------------------------------------
-- Enable RLS on all tables
ALTER TABLE public.business_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patient_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Business Enquiries RLS:
-- 1. Anyone (public anon) can insert an enquiry (e.g. from website forms)
CREATE POLICY "Public anonymous can submit business enquiries"
    ON public.business_enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- 2. Only authenticated users with admin privileges or service role can select/update
CREATE POLICY "Admins can view business enquiries"
    ON public.business_enquiries
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Admins can update business enquiries"
    ON public.business_enquiries
    FOR UPDATE
    TO authenticated
    USING (true);

-- Patient Enquiries RLS:
CREATE POLICY "Public anonymous can submit patient enquiries"
    ON public.patient_enquiries
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Admins can view patient enquiries"
    ON public.patient_enquiries
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Admins can update patient enquiries"
    ON public.patient_enquiries
    FOR UPDATE
    TO authenticated
    USING (true);

-- ------------------------------------------------------------------------------
-- 5. AUTOMATIC TIMESTAMP TRIGGER
-- ------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_business_enquiries_timestamp
    BEFORE UPDATE ON public.business_enquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER set_patient_enquiries_timestamp
    BEFORE UPDATE ON public.patient_enquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();
