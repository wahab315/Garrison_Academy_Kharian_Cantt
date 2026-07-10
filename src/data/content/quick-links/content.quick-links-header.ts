import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const quickLinksHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Quick Links" }],
  eyebrow: "Academic Sections",
  heading: "Quick Links",
  description:
    "Choose a section to view its head, faculty, classes, results, scholarships and upcoming events.",
} satisfies BusinessHeaderSectionProps;
