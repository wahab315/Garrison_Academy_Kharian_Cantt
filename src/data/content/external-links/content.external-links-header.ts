import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const externalLinksHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Important / External Links" }],
  eyebrow: "Quick Access",
  heading: "Important & External Links",
  description: "Learning portals, examination boards and official channels.",
} satisfies BusinessHeaderSectionProps;
