import { Routes } from "@/data/routes";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";

export const homeQuickAccessContent = {
  version: "4",
  cards: [
    { href: Routes.admissions, icon: "✎", title: "Admissions", desc: "Apply online or download the registration form for Session 2026.", cta: "Start application →" },
    { href: Routes.downloads, icon: "↓", title: "Downloads", desc: "Notifications, circulars, past papers and forms in one place.", cta: "Open library →" },
    { href: Routes.externalLinks, icon: "↗", title: "Student & Teacher LMS", desc: "Access apms.pk and student.apms.pk learning portals.", cta: "Go to portals →" },
    { href: Routes.contact, icon: "📍", title: "Contact & Location", desc: "Reach the right department — numbers, emails and campus map.", cta: "Get in touch →" },
  ],
} satisfies BusinessCardGridProps;
