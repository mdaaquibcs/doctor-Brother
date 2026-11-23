import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { getLocalEnquiries } from "@/lib/db/localStore";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") || "all";

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const isConfigured =
      Boolean(supabaseUrl) &&
      !supabaseUrl?.includes("placeholder-project-id") &&
      Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY) &&
      !process.env.SUPABASE_SERVICE_ROLE_KEY?.includes("placeholder");

    if (!isConfigured) {
      // Read from local persistent database engine
      const localData = await getLocalEnquiries();
      let business = localData.business || [];
      let patients = localData.patients || [];

      if (filter === "new") {
        business = business.filter((b) => b.status === "new");
        patients = patients.filter((p) => p.status === "new");
      }

      const stats = {
        totalBusiness: business.length,
        totalPatients: patients.length,
        pendingReview:
          business.filter((b) => b.status === "new").length +
          patients.filter((p) => p.status === "new").length,
      };

      return NextResponse.json({
        isConfigured: false,
        storageMode: "local_database",
        message:
          "Currently running on Local Persistent Database. To switch to Cloud PostgreSQL, add your Supabase credentials in .env.local.",
        business,
        patients,
        stats,
      });
    }

    const supabase = createAdminClient();

    let businessQuery = supabase
      .from("business_enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    let patientQuery = supabase
      .from("patient_enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (filter === "new") {
      businessQuery = businessQuery.eq("status", "new");
      patientQuery = patientQuery.eq("status", "new");
    }

    const [businessRes, patientRes] = await Promise.all([
      businessQuery,
      patientQuery,
    ]);

    if (businessRes.error) {
      return NextResponse.json(
        { error: businessRes.error.message },
        { status: 500 }
      );
    }
    if (patientRes.error) {
      return NextResponse.json(
        { error: patientRes.error.message },
        { status: 500 }
      );
    }

    const businessData = businessRes.data || [];
    const patientData = patientRes.data || [];

    const stats = {
      totalBusiness: businessData.length,
      totalPatients: patientData.length,
      pendingReview:
        businessData.filter((b) => b.status === "new").length +
        patientData.filter((p) => p.status === "new").length,
    };

    return NextResponse.json({
      isConfigured: true,
      storageMode: "supabase_cloud",
      business: businessData,
      patients: patientData,
      stats,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, type, status, priority, notes } = body;

    if (!id || !type) {
      return NextResponse.json(
        { error: "Missing required id or type field" },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const isConfigured =
      Boolean(supabaseUrl) &&
      !supabaseUrl?.includes("placeholder-project-id") &&
      Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY) &&
      !process.env.SUPABASE_SERVICE_ROLE_KEY?.includes("placeholder");

    if (isConfigured) {
      const supabase = createAdminClient();
      const tableName =
        type === "business" ? "business_enquiries" : "patient_enquiries";

      const updatePayload: Record<string, unknown> = {};
      if (status) updatePayload.status = status;
      if (priority) updatePayload.priority = priority;
      if (notes) updatePayload.notes = notes;

      const { data, error } = await supabase
        .from(tableName)
        .update(updatePayload)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }

      return NextResponse.json({ success: true, record: data });
    }

    return NextResponse.json({ success: true, message: "Updated locally" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
