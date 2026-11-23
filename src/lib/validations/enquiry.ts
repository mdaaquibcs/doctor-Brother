import { z } from "zod";

export const businessEnquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid corporate or official email address"),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(20, "Phone number cannot exceed 20 characters"),
  organization: z
    .string()
    .trim()
    .min(2, "Organization or hospital name is required")
    .max(150, "Organization name cannot exceed 150 characters"),
  city: z.string().trim().max(100).optional().default(""),
  serviceType: z
    .string()
    .trim()
    .min(3, "Please select an engagement area or service"),
  message: z.string().trim().max(2000).optional().default(""),
  category: z
    .enum(["b2b", "hospital_management", "corporate_health", "staffing", "equipment"])
    .optional()
    .default("b2b"),
  sourceUrl: z.string().optional().default(""),
});

export type BusinessEnquiryInput = z.infer<typeof businessEnquirySchema>;

export const patientEnquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Patient or contact name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .min(10, "Contact number must be at least 10 digits")
    .max(20, "Contact number cannot exceed 20 characters"),
  city: z
    .string()
    .trim()
    .min(2, "Current city or state is required")
    .max(100),
  country: z.string().trim().default("India"),
  isInternational: z.boolean().default(false),
  medicalConcern: z
    .string()
    .trim()
    .min(3, "Please describe the medical concern or required procedure")
    .max(2000),
  specialty: z.string().trim().optional().default("General Specialty"),
  timeline: z.string().trim().optional().default("Immediate / Within 1 Week"),
  sourceUrl: z.string().optional().default(""),
});

export type PatientEnquiryInput = z.infer<typeof patientEnquirySchema>;
