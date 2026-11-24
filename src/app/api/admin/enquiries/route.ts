import { NextRequest } from "next/server";
import { z } from "zod";
import { createAdminClient } from "@/lib/supabase/admin";
import { getLocalEnquiries, updateLocalEnquiry } from "@/lib/db/localStore";
import { adminJson, authorizeAdmin, isSameOrigin } from "@/lib/admin/auth";
import { BUSINESS_STATUSES, PATIENT_STATUSES, PRIORITIES } from "@/lib/admin/enquiry-options";
export const runtime = "nodejs";

function cloudConfigured() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
  return Boolean(url && key) && !/placeholder|your-project/i.test(url) && !/placeholder|your-service/i.test(key);
}

export async function GET(request: NextRequest) {
  try {
    if (!await authorizeAdmin(request)) return adminJson({ error: "Please sign in to continue." }, 401);
    const isConfigured = cloudConfigured();
    let business, patients;
    if (!isConfigured) {
      const local = await getLocalEnquiries();
      business = local.business;
      patients = local.patients;
    } else {
      const supabase = createAdminClient();
      const [b, p] = await Promise.all([
        supabase.from("business_enquiries").select("*").order("created_at", { ascending: false }),
        supabase.from("patient_enquiries").select("*").order("created_at", { ascending: false }),
      ]);
      if (b.error || p.error) return adminJson({ error: "Unable to load enquiries. Please try again." }, 500);
      business = b.data || [];
      patients = p.data || [];
    }
    // Summary counts cover all enquiries, independent of the selected view.
    const stats = {
      totalBusiness: business.length,
      totalPatients: patients.length,
      pendingReview: business.filter((b) => b.status === "new").length + patients.filter((p) => p.status === "new").length,
    };
    if (request.nextUrl.searchParams.get("filter") === "new") {
      business = business.filter((b) => b.status === "new");
      patients = patients.filter((p) => p.status === "new");
    }
    return adminJson({ business, patients, stats });
  } catch { return adminJson({ error: "Unable to load enquiries. Please try again." }, 500); }
}

const updateSchema = z.object({
  id: z.string().min(1).max(100),
  type: z.enum(["business", "patient"]),
  status: z.string().optional(),
  priority: z.enum(PRIORITIES).optional(),
}).strict().refine((value) => value.status !== undefined || value.priority !== undefined)
  .refine((value) => value.status === undefined || (value.type === "business" ? [...BUSINESS_STATUSES] : [...PATIENT_STATUSES]).some((status) => status === value.status));

export async function PATCH(request: NextRequest) {
  try {
    if (!await authorizeAdmin(request)) return adminJson({ error: "Please sign in to continue." }, 401);
    if (!isSameOrigin(request)) return adminJson({ error: "Invalid request origin." }, 403);
    let body;
    try { body = await request.json(); } catch { return adminJson({ error: "Invalid update." }, 400); }
    const parsed = updateSchema.safeParse(body);
    if (!parsed.success) return adminJson({ error: "Choose a valid enquiry, status and priority." }, 400);
    const { id, type, status, priority } = parsed.data;
    const updates: { status?: string; priority?: string } = {};
    if (status !== undefined) updates.status = status;
    if (priority !== undefined) updates.priority = priority;
    if (!cloudConfigured()) {
      const record = await updateLocalEnquiry(type, id, updates);
      return record ? adminJson({ success: true, record }) : adminJson({ error: "Enquiry not found." }, 404);
    }
    const { data, error } = await createAdminClient().from(type === "business" ? "business_enquiries" : "patient_enquiries").update(updates).eq("id", id).select().maybeSingle();
    if (error) return adminJson({ error: "Unable to save changes. Please try again." }, 500);
    return data ? adminJson({ success: true, record: data }) : adminJson({ error: "Enquiry not found." }, 404);
  } catch { return adminJson({ error: "Unable to save changes. Please try again." }, 500); }
}
