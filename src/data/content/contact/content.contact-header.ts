import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const contactHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Contact Us" }],
  eyebrow: "Get in Touch",
  heading: "Contact Us",
  description:
    "Reach the right department by phone or email, and find us in Kharian Cantt.",
} satisfies BusinessHeaderSectionProps;
