import "server-only";
import { createHash, randomBytes, scrypt as scryptCallback, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";
import fs from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const scrypt = promisify(scryptCallback);
const AUTH_DIR = process.env.ADMIN_DATA_DIR || path.join(process.cwd(), ".local");
const CONFIG_FILE = path.join(AUTH_DIR, "admin-config.json");
const STATE_FILE = path.join(AUTH_DIR, "admin-sessions.json");
export const ADMIN_COOKIE = "allcare_admin_session";
export const SESSION_SECONDS = 8 * 60 * 60;
const ATTEMPT_WINDOW = 15 * 60 * 1000;
const MAX_ATTEMPTS = 10;

type AdminConfig = { email: string; passwordHash: string; name: string };
type Session = { hash: string; email: string; name: string; expiresAt: number; credentialVersion: string };
type AuthState = { sessions: Session[]; attempts: number[] };
const globalAuth = globalThis as typeof globalThis & { allcareAuthQueue?: Promise<unknown> };

export async function getAdminConfig(): Promise<AdminConfig | null> {
  if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD_HASH) {
    return { email: process.env.ADMIN_EMAIL.trim().toLowerCase(), passwordHash: process.env.ADMIN_PASSWORD_HASH, name: "Administrator" };
  }
  // Local bootstrap is intentionally disabled in production; use environment configuration.
  if (process.env.NODE_ENV === "production") return null;
  try {
    const config = JSON.parse(await fs.readFile(/* turbopackIgnore: true */ CONFIG_FILE, "utf8")) as AdminConfig;
    return config.email && config.passwordHash ? config : null;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

function digest(value: string) { return createHash("sha256").update(value).digest("hex"); }
function credentialVersion(config: AdminConfig) { return digest(config.email + config.passwordHash); }

async function readState(): Promise<AuthState> {
  try { return JSON.parse(await fs.readFile(/* turbopackIgnore: true */ STATE_FILE, "utf8")) as AuthState; }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return { sessions: [], attempts: [] };
    throw error;
  }
}

async function withState<T>(operation: (state: AuthState) => Promise<T> | T): Promise<T> {
  const task = (globalAuth.allcareAuthQueue || Promise.resolve()).catch(() => {}).then(async () => {
    const state = await readState();
    const now = Date.now();
    state.sessions = state.sessions.filter((s) => s.expiresAt > now);
    state.attempts = state.attempts.filter((at) => now - at < ATTEMPT_WINDOW);
    const result = await operation(state);
    await fs.mkdir(AUTH_DIR, { recursive: true, mode: 0o700 });
    const temp = `${STATE_FILE}.${randomBytes(6).toString("hex")}.tmp`;
    await fs.writeFile(temp, JSON.stringify(state), { mode: 0o600 });
    await fs.rename(temp, STATE_FILE);
    return result;
  });
  globalAuth.allcareAuthQueue = task;
  return task;
}

export async function loginAdmin(email: string, password: string): Promise<
  { ok: true; token: string } | { ok: false; status: number; message: string; retryAfter?: number }
> {
  const config = await getAdminConfig();
  if (!config) return { ok: false, status: 503, message: "Administrator access has not been configured. Contact the site owner." };
  return withState(async (state) => {
    if (state.attempts.length >= MAX_ATTEMPTS) {
      return { ok: false as const, status: 429, message: "Too many sign-in attempts. Please try again in 15 minutes.", retryAfter: Math.ceil((state.attempts[0] + ATTEMPT_WINDOW - Date.now()) / 1000) };
    }
    const [algorithm, salt, expected] = config.passwordHash.split(":");
    if (algorithm !== "scrypt" || !/^[a-f0-9]{32}$/.test(salt || "") || !/^[a-f0-9]{128}$/.test(expected || "")) {
      return { ok: false as const, status: 503, message: "Administrator access is unavailable. Contact the site owner." };
    }
    const actual = await scrypt(password, salt, 64) as Buffer;
    const passwordMatches = timingSafeEqual(actual, Buffer.from(expected, "hex"));
    if (!passwordMatches || email.trim().toLowerCase() !== config.email) {
      state.attempts.push(Date.now());
      return { ok: false as const, status: 401, message: "Email or password is incorrect." };
    }
    state.attempts = [];
    const token = randomBytes(32).toString("base64url");
    state.sessions.push({ hash: digest(token), email: config.email, name: config.name, expiresAt: Date.now() + SESSION_SECONDS * 1000, credentialVersion: credentialVersion(config) });
    state.sessions = state.sessions.slice(-20);
    return { ok: true as const, token };
  });
}

export async function getAdminSession(token?: string) {
  if (!token || !/^[A-Za-z0-9_-]{43}$/.test(token)) return null;
  const config = await getAdminConfig();
  if (!config) return null;
  const state = await readState();
  const session = state.sessions.find((s) => s.hash === digest(token) && s.expiresAt > Date.now() && s.credentialVersion === credentialVersion(config));
  return session ? { email: session.email, name: session.name } : null;
}

export async function currentAdmin() { return getAdminSession((await cookies()).get(ADMIN_COOKIE)?.value); }
export async function revokeSession(token?: string) {
  if (!token) return;
  await withState((state) => { state.sessions = state.sessions.filter((s) => s.hash !== digest(token)); });
}
export function adminJson(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store, private", "Vary": "Cookie", "X-Content-Type-Options": "nosniff" } });
}
export function isSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  // Next may normalize loopback hostnames in nextUrl. Compare the browser's
  // origin with the actual HTTP Host, retaining the request's protocol.
  const host = request.headers.get("host");
  return Boolean(host) && origin === `${request.nextUrl.protocol}//${host}` && request.headers.get("sec-fetch-site") !== "cross-site";
}
export async function authorizeAdmin(request: NextRequest) {
  return getAdminSession(request.cookies.get(ADMIN_COOKIE)?.value);
}
