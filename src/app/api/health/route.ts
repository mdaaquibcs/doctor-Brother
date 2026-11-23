import { NextResponse } from "next/server";

export async function GET() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const hasAnonKey = Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const hasServiceKey = Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY);

  const isConfigured =
    Boolean(supabaseUrl) &&
    !supabaseUrl?.includes("placeholder-project-id") &&
    hasAnonKey &&
    hasServiceKey;

  return NextResponse.json({
    status: isConfigured ? "configured" : "pending_credentials",
    timestamp: new Date().toISOString(),
    backend: {
      provider: "Supabase PostgreSQL",
      supabaseUrl: isConfigured ? supabaseUrl : "Placeholder / Not yet configured",
      hasAnonKey,
      hasServiceKey,
      clientSdkReady: true,
      serverSdkReady: true,
      adminSdkReady: true,
    },
    message: isConfigured
      ? "Supabase backend connection initialized and ready for migrations."
      : "Backend SDK is configured. Please provide your Supabase Project URL and API Keys in .env.local to activate live database connection.",
  });
}
