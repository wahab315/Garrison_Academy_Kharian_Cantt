import { z } from "zod";

export const CLASS_OPTIONS = [
  "Pre-School",
  "Prep – V",
  "VI – VIII",
  "IX (FBISE)",
  "IX (APSIS / Cambridge)",
  "XI",
] as const;

export const STREAM_OPTIONS = ["APSACS (FBISE)", "APSIS (Cambridge)"] as const;

/**
 * Shared by the client form and the server action. Messages are user-facing;
 * zod's defaults ("Invalid input") are not.
 */
export const admissionSchema = z.object({
  studentName: z.string().trim().min(3, "Please enter the student's full name"),
  classApplying: z.enum(CLASS_OPTIONS, { message: "Select a class" }),
  dob: z.string().optional(),
  stream: z.enum(STREAM_OPTIONS, { message: "Select a stream" }),
  guardianName: z.string().trim().min(3, "Please enter the guardian's name"),
  contact: z
    .string()
    .trim()
    .regex(/^03\d{2}-?\d{7}$/, "Use the format 03XX-XXXXXXX"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .optional()
    .or(z.literal("")),
  /** Honeypot: real users never see it, so a value means a bot. */
  website: z.string().max(0).optional(),
});

export type AdmissionInput = z.infer<typeof admissionSchema>;
