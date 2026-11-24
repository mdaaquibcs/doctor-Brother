export const BUSINESS_STATUSES = ["new", "contacted", "in_review", "meeting_scheduled", "proposal_sent", "converted", "closed_lost"] as const;
export const PATIENT_STATUSES = ["new", "contacted", "documents_requested", "doctor_assigned", "estimate_shared", "admitted", "completed", "cancelled"] as const;
export const PRIORITIES = ["low", "normal", "high", "urgent"] as const;
export function readable(value: string) { return value.replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase()); }
