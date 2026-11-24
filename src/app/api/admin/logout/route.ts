import { NextRequest } from "next/server";
import { ADMIN_COOKIE, adminJson, isSameOrigin, revokeSession } from "@/lib/admin/auth";
export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return adminJson({ error: "Invalid request origin." }, 403);
  try {
    await revokeSession(request.cookies.get(ADMIN_COOKIE)?.value);
    const response = adminJson({ success: true });
    response.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: 0 });
    return response;
  } catch { return adminJson({ error: "Unable to sign out. Please try again." }, 500); }
}
