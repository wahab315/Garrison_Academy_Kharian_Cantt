import { ExternalRoutes } from "@/data/routes";

/** Institutional details rendered in the header strip and the footer. */
export const Site = {
  name: "Garrison Academy",
  location: "Kharian Cantt",
  crestAlt: "Garrison Academy Kharian Cantt crest",
  blurb:
    "Garrison Academy Kharian Cantt — an institution committed to knowledge, discipline and character since 1985.",
  copyright:
    "© 2026 IT Department, Garrison Academy Kharian Cantt. All rights reserved.",
  phone: "053-9240263",
  email: "info@garrisonacademy.edu.pk",
  applyCta: "Apply for Admission",
} as const;

export const UtilityLinks = [
  { label: "Teacher's AIS Login", href: ExternalRoutes.teacherAis },
  { label: "Student's AIS Login", href: ExternalRoutes.studentAis },
] as const;

export type SocialKey = "facebook" | "instagram" | "youtube";

export const Socials: { key: SocialKey; label: string; toast: string }[] = [
  { key: "facebook", label: "Facebook", toast: "Opening Facebook…" },
  { key: "instagram", label: "Instagram", toast: "Opening Instagram…" },
  { key: "youtube", label: "YouTube", toast: "Opening YouTube…" },
];
