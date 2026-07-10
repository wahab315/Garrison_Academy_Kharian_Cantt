import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const downloadsHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Downloads" }],
  eyebrow: "Resource Library",
  heading: "Downloads",
  description:
    "Notifications, circulars, past papers and the admission registration form.",
} satisfies BusinessHeaderSectionProps;
