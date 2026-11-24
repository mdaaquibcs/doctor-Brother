import fs from "fs/promises";
import path from "path";
import { randomBytes } from "node:crypto";

const DATA_FILE = process.env.LOCAL_ENQUIRIES_FILE || path.join(process.cwd(), "src", "data", "local_enquiries.json");
const storageGlobal = globalThis as typeof globalThis & { allcareEnquiryQueue?: Promise<unknown> };
function mutateDatabase<T>(operation: () => Promise<T>): Promise<T> {
  const task = (storageGlobal.allcareEnquiryQueue || Promise.resolve()).catch(() => {}).then(operation);
  storageGlobal.allcareEnquiryQueue = task;
  return task;
}

export interface StoredBusinessEnquiry {
  id: string;
  reference_id: string;
  category: string;
  full_name: string;
  email: string;
  phone: string;
  organization: string;
  city: string | null;
  service_type: string;
  message: string | null;
  status: string;
  priority: string;
  source_url: string | null;
  created_at: string;
}

export interface StoredPatientEnquiry {
  id: string;
  reference_id: string;
  full_name: string;
  email: string | null;
  phone: string;
  city: string;
  country: string;
  is_international: boolean;
  specialty: string | null;
  medical_concern: string;
  timeline: string | null;
  status: string;
  priority: string;
  coordinator_name: string | null;
  source_url: string | null;
  created_at: string;
}

interface LocalDatabase {
  business: StoredBusinessEnquiry[];
  patients: StoredPatientEnquiry[];
}

const INITIAL_DATA: LocalDatabase = {
  business: [
    {
      id: "demo-b2b-01",
      reference_id: "DAC-B2B-2026-101010",
      category: "b2b",
      full_name: "Dr. Vikram Sethi",
      email: "v.sethi@apollo-metro.org",
      phone: "+91 98110 54321",
      organization: "Metro Heart & Surgical Institute",
      city: "New Delhi",
      service_type: "Hospital Operations Management",
      message: "Exploring 180-bed turnkey hospital management and clinical audit.",
      status: "new",
      priority: "high",
      source_url: "/",
      created_at: new Date(Date.now() - 3600000).toISOString(),
    },
  ],
  patients: [
    {
      id: "demo-pat-01",
      reference_id: "DAC-PAT-2026-202020",
      full_name: "Farhan Al-Mansoor",
      email: "farhan.m@gulfcare.ae",
      phone: "+971 50 123 4567",
      city: "Dubai",
      country: "UAE",
      is_international: true,
      specialty: "Cardiac Sciences",
      medical_concern: "Minimally invasive TAVI valve replacement surgery quote.",
      timeline: "Within 2 Weeks",
      status: "new",
      priority: "normal",
      coordinator_name: "Senior Care Team",
      source_url: "/find-treatment",
      created_at: new Date(Date.now() - 7200000).toISOString(),
    },
  ],
};

async function readDatabase(): Promise<LocalDatabase> {
  try {
    // Mutable enquiry data belongs on persistent storage, never in the deploy bundle.
    const content = await fs.readFile(/* turbopackIgnore: true */ DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") throw error;
    // Initialize only a missing database; never overwrite a damaged file.
    await writeDatabase(INITIAL_DATA);
    return INITIAL_DATA;
  }
}

async function writeDatabase(data: LocalDatabase): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  const temporary = `${DATA_FILE}.${randomBytes(6).toString("hex")}.tmp`;
  await fs.writeFile(temporary, JSON.stringify(data, null, 2), { mode: 0o600 });
  await fs.rename(temporary, DATA_FILE);
}

export async function saveLocalBusinessEnquiry(
  item: Omit<StoredBusinessEnquiry, "id" | "created_at">
): Promise<StoredBusinessEnquiry> {
  return mutateDatabase(async () => {
    const db = await readDatabase();
    const newRecord: StoredBusinessEnquiry = {
      ...item,
      id: `b2b-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      created_at: new Date().toISOString(),
    };

    db.business.unshift(newRecord);
    await writeDatabase(db);
    return newRecord;
  });
}

export async function saveLocalPatientEnquiry(
  item: Omit<StoredPatientEnquiry, "id" | "created_at">
): Promise<StoredPatientEnquiry> {
  return mutateDatabase(async () => {
    const db = await readDatabase();
    const newRecord: StoredPatientEnquiry = {
      ...item,
      id: `pat-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      created_at: new Date().toISOString(),
    };

    db.patients.unshift(newRecord);
    await writeDatabase(db);
    return newRecord;
  });
}

export async function getLocalEnquiries(): Promise<LocalDatabase> {
  return readDatabase();
}

export async function updateLocalEnquiry(
  type: "business" | "patient",
  id: string,
  updates: { status?: string; priority?: string },
) {
  return mutateDatabase(async () => {
    const db = await readDatabase();
    const records = type === "business" ? db.business : db.patients;
    const record = records.find((item) => item.id === id);
    if (!record) return null;
    if (updates.status !== undefined) record.status = updates.status;
    if (updates.priority !== undefined) record.priority = updates.priority;
    await writeDatabase(db);
    return record;
  });
}
