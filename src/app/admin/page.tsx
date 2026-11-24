import { currentAdmin, getAdminConfig } from "@/lib/admin/auth";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export default async function AdminPage() {
  const admin = await currentAdmin();
  if (!admin) return <AdminLogin configured={Boolean(await getAdminConfig())} />;
  return <AdminDashboard admin={admin} />;
}
