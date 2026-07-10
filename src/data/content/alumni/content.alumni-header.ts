import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const alumniHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Alumni (AMULNI)" }],
  eyebrow: "Once a GAKian",
  heading: "Alumni",
  description:
    "Celebrating Ex-GAK students making their mark, and the top achievers of recent years.",
} satisfies BusinessHeaderSectionProps;
