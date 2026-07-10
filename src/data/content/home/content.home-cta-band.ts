import { Routes } from "@/data/routes";
import type { BusinessCtaBandProps } from "@/data/types/type.business-cta-band";

export const homeCtaBandContent = {
  eyebrow: "Session 2026",
  heading: "Admissions are now open.",
  description:
    "Secure your child's seat at one of Kharian's most trusted institutions. Apply online in minutes or download the form.",
  cta: { label: "Begin Application", href: Routes.admissions },
} satisfies BusinessCtaBandProps;
