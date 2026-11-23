import { NextRequest, NextResponse } from "next/server";
import { businessEnquirySchema, patientEnquirySchema } from "@/lib/validations/enquiry";
import { createAdminClient } from "@/lib/supabase/admin";
import { saveLocalBusinessEnquiry, saveLocalPatientEnquiry } from "@/lib/db/localStore";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const enquiryType = body.type || "business"; // "business" or "patient"

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const isConfigured =
      Boolean(supabaseUrl) &&
      !supabaseUrl?.includes("placeholder-project-id") &&
      Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY) &&
      !process.env.SUPABASE_SERVICE_ROLE_KEY?.includes("placeholder");

    if (enquiryType === "business") {
      const parseResult = businessEnquirySchema.safeParse(body.payload);
      if (!parseResult.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Validation failed",
            issues: parseResult.error.format(),
          },
          { status: 400 }
        );
      }

      const data = parseResult.data;
      const referenceId = `DAC-B2B-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;

      if (isConfigured) {
        const supabase = createAdminClient();
        const { data: inserted, error: insertError } = await supabase
          .from("business_enquiries")
          .insert({
            reference_id: referenceId,
            category: data.category,
            full_name: data.fullName,
            email: data.email,
            phone: data.phone,
            organization: data.organization,
            city: data.city || null,
            service_type: data.serviceType,
            message: data.message || null,
            source_url: data.sourceUrl || null,
            status: "new",
            priority: "normal",
          })
          .select()
          .single();

        if (insertError) {
          return NextResponse.json(
            {
              success: false,
              error: `Database insertion error: ${insertError.message}`,
            },
            { status: 500 }
          );
        }

        await supabase.from("audit_logs").insert({
          action: "business_enquiry_submitted",
          entity_type: "business_enquiries",
          entity_id: inserted.id,
          details: { referenceId, company: data.organization },
        });

        return NextResponse.json(
          {
            success: true,
            referenceId,
            record: inserted,
            storageMode: "supabase_cloud",
            message: "Enquiry stored in Supabase PostgreSQL database.",
          },
          { status: 201 }
        );
      } else {
        // Local Persistent Storage Mode
        const localRecord = await saveLocalBusinessEnquiry({
          reference_id: referenceId,
          category: data.category,
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          organization: data.organization,
          city: data.city || null,
          service_type: data.serviceType,
          message: data.message || null,
          source_url: data.sourceUrl || null,
          status: "new",
          priority: "normal",
        });

        return NextResponse.json(
          {
            success: true,
            referenceId,
            record: localRecord,
            storageMode: "local_database",
            message: "Enquiry stored in local database engine.",
          },
          { status: 201 }
        );
      }
    } else {
      // Patient enquiry
      const parseResult = patientEnquirySchema.safeParse(body.payload);
      if (!parseResult.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Validation failed",
            issues: parseResult.error.format(),
          },
          { status: 400 }
        );
      }

      const data = parseResult.data;
      const referenceId = `DAC-PAT-${new Date().getFullYear()}-${Math.floor(
        100000 + Math.random() * 900000
      )}`;

      if (isConfigured) {
        const supabase = createAdminClient();
        const { data: inserted, error: insertError } = await supabase
          .from("patient_enquiries")
          .insert({
            reference_id: referenceId,
            full_name: data.fullName,
            email: data.email || null,
            phone: data.phone,
            city: data.city,
            country: data.country,
            is_international: data.isInternational,
            specialty: data.specialty,
            medical_concern: data.medicalConcern,
            timeline: data.timeline,
            source_url: data.sourceUrl || null,
            status: "new",
            priority: "normal",
          })
          .select()
          .single();

        if (insertError) {
          return NextResponse.json(
            {
              success: false,
              error: `Database insertion error: ${insertError.message}`,
            },
            { status: 500 }
          );
        }

        await supabase.from("audit_logs").insert({
          action: "patient_enquiry_submitted",
          entity_type: "patient_enquiries",
          entity_id: inserted.id,
          details: { referenceId, patient: data.fullName },
        });

        return NextResponse.json(
          {
            success: true,
            referenceId,
            record: inserted,
            storageMode: "supabase_cloud",
            message: "Patient enquiry stored in Supabase PostgreSQL database.",
          },
          { status: 201 }
        );
      } else {
        // Local Persistent Storage Mode
        const localRecord = await saveLocalPatientEnquiry({
          reference_id: referenceId,
          full_name: data.fullName,
          email: data.email || null,
          phone: data.phone,
          city: data.city,
          country: data.country,
          is_international: data.isInternational,
          specialty: data.specialty || "General Specialty",
          medical_concern: data.medicalConcern,
          timeline: data.timeline || "Immediate",
          coordinator_name: "Operations Team",
          source_url: data.sourceUrl || null,
          status: "new",
          priority: "normal",
        });

        return NextResponse.json(
          {
            success: true,
            referenceId,
            record: localRecord,
            storageMode: "local_database",
            message: "Patient enquiry stored in local database engine.",
          },
          { status: 201 }
        );
      }
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unexpected server error";
    return NextResponse.json(
      {
        success: false,
        error: message,
      },
      { status: 500 }
    );
  }
}
