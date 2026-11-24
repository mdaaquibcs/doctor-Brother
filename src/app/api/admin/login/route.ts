import { NextRequest } from "next/server";
import { ADMIN_COOKIE, SESSION_SECONDS, adminJson, isSameOrigin, loginAdmin } from "@/lib/admin/auth";
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return adminJson({ error: "Invalid request origin." }, 403);
  let body;
  try { body = await request.json(); } catch { return adminJson({ error: "Invalid request." }, 400); }
  if (!body || typeof body.email !== "string" || body.email.length > 254 || typeof body.password !== "string" || body.password.length < 1 || body.password.length > 256) {
    return adminJson({ error: "Enter your email and password." }, 400);
  }
  try {
    const result = await loginAdmin(body.email, body.password);
    if (!result.ok) {
      const response = adminJson({ error: result.message }, result.status);
      if (result.retryAfter) response.headers.set("Retry-After", String(result.retryAfter));
      return response;
    }
    const response = adminJson({ success: true });
    response.cookies.set(ADMIN_COOKIE, result.token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/", maxAge: SESSION_SECONDS });
    return response;
  } catch { return adminJson({ error: "Sign-in is temporarily unavailable. Please try again." }, 500); }
}
