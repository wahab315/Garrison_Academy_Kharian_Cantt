import { ExternalRoutes } from "@/data/routes";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";

export const externalLinksAisContent = {
  eyebrow: "AIS Logins",
  version: "2",
  cards: [
    { href: ExternalRoutes.teacherAis, external: true, icon: "👩‍🏫", title: "Teacher's AIS Login", desc: "Staff portal for lesson planning, attendance and result entry.", cta: "apms.pk ↗" },
    { href: ExternalRoutes.studentAis, external: true, icon: "🎓", title: "Student's AIS Login", desc: "Student portal for assignments, resources and progress.", cta: "student.apms.pk ↗" },
  ],
} satisfies BusinessCardGridProps;

export const externalLinksImportantContent = {
  eyebrow: "Important Links",
  version: "2",
  cards: [
    { href: ExternalRoutes.apsacs, external: true, icon: "🏛️", title: "APSACS Secretariat", desc: "Army Public Schools & Colleges System — official secretariat.", cta: "apsacssectt.edu.pk ↗" },
    { href: ExternalRoutes.fbise, external: true, icon: "📜", title: "FBISE", desc: "Federal Board of Intermediate & Secondary Education — results & datesheets.", cta: "fbise.edu.pk ↗" },
    { href: ExternalRoutes.hec, external: true, icon: "🎓", title: "Higher Education Commission", desc: "HEC Pakistan — higher education, scholarships & recognition.", cta: "hec.gov.pk ↗" },
  ],
} satisfies BusinessCardGridProps;

export const externalLinksSocialContent = {
  icon: "📱",
  title: "Garrison Academy Social Media",
  desc: "Follow official updates, photos and announcements.",
  links: [
    { label: "Facebook ↗", toast: "Opening Facebook…" },
    { label: "Instagram ↗", toast: "Opening Instagram…" },
  ],
} as const;
