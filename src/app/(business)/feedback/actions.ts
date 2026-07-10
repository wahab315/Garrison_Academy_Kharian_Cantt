"use server";

import { feedbackSchema, type FeedbackInput } from "@/data/validation/feedback-schema";
import { sendMail } from "@/lib/mail";
import type { ActionResult } from "@/app/(business)/admissions/actions";

export async function submitFeedback(input: FeedbackInput): Promise<ActionResult> {
  const parsed = feedbackSchema.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false,
      message: "Please correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.website) return { ok: true };

  const d = parsed.data;
  const inbox = process.env.FEEDBACK_INBOX;
  if (!inbox) {
    return { ok: false, message: "Feedback inbox is not configured." };
  }

  try {
    await sendMail({
      to: inbox,
      subject: `${d.type} — ${d.regarding}`,
      replyTo: d.contact?.includes("@") ? d.contact : undefined,
      text: [
        `Type:      ${d.type}`,
        `Regarding: ${d.regarding}`,
        `Name:      ${d.name || "Anonymous"}`,
        `Contact:   ${d.contact || "—"}`,
        "",
        d.message,
      ].join("\n"),
    });
  } catch (error) {
    return {
      ok: false,
      message:
        error instanceof Error
          ? error.message
          : "Could not send your submission. Please try again later.",
    };
  }

  return { ok: true };
}
