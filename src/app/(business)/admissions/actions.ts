"use server";

import { admissionSchema, type AdmissionInput } from "@/data/validation/admission-schema";
import { sendMail } from "@/lib/mail";

export type ActionResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: Record<string, string[]> };

export async function submitAdmission(input: AdmissionInput): Promise<ActionResult> {
  // Never trust the client: the same schema runs on both sides.
  const parsed = admissionSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  // Honeypot filled -> a bot. Report success so it does not retry.
  if (parsed.data.website) return { ok: true };

  const d = parsed.data;
  const inbox = process.env.ADMISSIONS_INBOX;
  if (!inbox) {
    return { ok: false, message: "Admissions inbox is not configured." };
  }

  try {
    await sendMail({
      to: inbox,
      subject: `Admission request — ${d.studentName} (${d.classApplying})`,
      replyTo: d.email || undefined,
      text: [
        `Student name:   ${d.studentName}`,
        `Class applying: ${d.classApplying}`,
        `Date of birth:  ${d.dob || "—"}`,
        `Stream:         ${d.stream}`,
        `Guardian:       ${d.guardianName}`,
        `Contact:        ${d.contact}`,
        `Email:          ${d.email || "—"}`,
      ].join("\n"),
    });
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Could not send your request. Please phone the admissions office.",
    };
  }

  return { ok: true };
}
