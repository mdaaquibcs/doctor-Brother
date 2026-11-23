import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "local_enquiries.json");

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
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    // If file doesn't exist yet, initialize it
    await writeDatabase(INITIAL_DATA);
    return INITIAL_DATA;
  }
}

async function writeDatabase(data: LocalDatabase): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function saveLocalBusinessEnquiry(
  item: Omit<StoredBusinessEnquiry, "id" | "created_at">
): Promise<StoredBusinessEnquiry> {
  const db = await readDatabase();
  const newRecord: StoredBusinessEnquiry = {
    ...item,
    id: `b2b-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    created_at: new Date().toISOString(),
  };

  db.business.unshift(newRecord);
  await writeDatabase(db);
  return newRecord;
}

export async function saveLocalPatientEnquiry(
  item: Omit<StoredPatientEnquiry, "id" | "created_at">
): Promise<StoredPatientEnquiry> {
  const db = await readDatabase();
  const newRecord: StoredPatientEnquiry = {
    ...item,
    id: `pat-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    created_at: new Date().toISOString(),
  };

  db.patients.unshift(newRecord);
  await writeDatabase(db);
  return newRecord;
}

export async function getLocalEnquiries(): Promise<LocalDatabase> {
  return readDatabase();
}
