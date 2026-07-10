import { z } from "zod";

export const FEEDBACK_TYPES = ["Complaint", "Feedback", "Suggestion"] as const;
export const FEEDBACK_SUBJECTS = ["Teachers", "Administrative Staff", "General"] as const;

export const feedbackSchema = z.object({
  name: z.string().trim().optional(),
  contact: z.string().trim().optional(),
  type: z.enum(FEEDBACK_TYPES, { message: "Choose a type" }),
  regarding: z.enum(FEEDBACK_SUBJECTS, { message: "Choose what this is about" }),
  message: z
    .string()
    .trim()
    .min(20, "Please describe your feedback in at least 20 characters"),
  /** Honeypot. */
  website: z.string().max(0).optional(),
});

export type FeedbackInput = z.infer<typeof feedbackSchema>;
