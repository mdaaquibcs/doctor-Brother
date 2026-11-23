import { createClient as createSupabaseClient } from "@supabase/supabase-js";

/**
 * Creates a privileged Supabase client using the Service Role Key.
 *
 * CRITICAL SECURITY NOTICE:
 * - This client BYPASSES Row Level Security (RLS).
 * - MUST ONLY be used in server-side API routes, background jobs, or server actions.
 * - NEVER expose this client, the service role key, or import this file in client components.
 */
export function createAdminClient() {
  if (typeof window !== "undefined") {
    throw new Error(
      "SECURITY ERROR: createAdminClient() cannot be called from the browser environment."
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      "Missing Supabase admin environment variables: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be defined."
    );
  }

  return createSupabaseClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
