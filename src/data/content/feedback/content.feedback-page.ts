import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const feedbackHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Feedback / Complaints" }],
  eyebrow: "We're Listening",
  heading: "Feedback & Complaints",
  description:
    "Share suggestions or raise a concern — about teachers, administrative staff or anything else.",
} satisfies BusinessHeaderSectionProps;

export const feedbackFormContent = {
  submitLabel: "Submit",
  successToast: "Thank you — your submission has been received.",
  footnote:
    "All submissions are reviewed confidentially by the administration. Genuine complaints receive a follow-up where contact details are provided.",
} as const;
