import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const hrHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "HR Management" }],
  eyebrow: "Join Our Team",
  heading: "HR & Careers",
  description:
    "Current openings, how to apply, and recruitment advertisements at Garrison Academy Kharian Cantt.",
} satisfies BusinessHeaderSectionProps;
