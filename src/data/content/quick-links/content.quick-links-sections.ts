import { Routes } from "@/data/routes";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";

const CTA = "View section →";

export const quickLinksSectionsContent = {
  version: "4",
  cards: [
    { href: Routes.section("pre"), icon: "P", title: "Pre-School", desc: "Foundation years — Nursery & Prep.", cta: CTA },
    { href: Routes.section("junior"), icon: "J", title: "Junior Section", desc: "Primary classes — building core foundations.", cta: CTA },
    { href: Routes.section("middle-girls"), icon: "MG", title: "Middle Girls Section", desc: "Middle years — girls.", cta: CTA },
    { href: Routes.section("middle-boys"), icon: "MB", title: "Middle Boys Section", desc: "Middle years — boys.", cta: CTA },
    { href: Routes.section("senior-girls"), icon: "SG", title: "Senior Girls Section", desc: "Board classes — girls.", cta: CTA },
    { href: Routes.section("senior-boys"), icon: "SB", title: "Senior Boys Section", desc: "Board classes — boys.", cta: CTA },
    { href: Routes.section("apsis"), icon: "A", title: "APSIS", desc: "Cambridge international stream.", cta: CTA },
  ],
} satisfies BusinessCardGridProps;
