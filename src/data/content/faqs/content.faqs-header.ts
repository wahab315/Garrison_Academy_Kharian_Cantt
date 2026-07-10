import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const faqsHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "FAQs" }],
  eyebrow: "Help Centre",
  heading: "Frequently Asked Questions",
  description:
    "Answers grouped by category — admissions, fees, examinations, hiring and more.",
} satisfies BusinessHeaderSectionProps;
