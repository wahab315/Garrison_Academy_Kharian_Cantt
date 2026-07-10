import "server-only";
import { Resend } from "resend";

export type MailPayload = {
  to: string;
  subject: string;
  /** Plain text. The two forms send tabular data, not marketing HTML. */
  text: string;
  replyTo?: string;
};

/**
 * Fails loudly rather than silently swallowing a submission. Callers surface
 * the thrown message as a form-level error.
 */
export async function sendMail({ to, subject, text, replyTo }: MailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;

  if (!apiKey || !from) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY and MAIL_FROM (see .env.example).",
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    subject,
    text,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) throw new Error(error.message);
}
