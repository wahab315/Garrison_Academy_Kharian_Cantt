import type { SectionKey } from "@/data/sections";

/**
 * The single source of truth for every URL on the site.
 * Nothing outside this file may contain a literal internal path.
 */
export const Routes = {
  home: "/",
  about: "/about",
  activities: "/activities",
  admissions: "/admissions",
  alumni: "/alumni",
  chatbot: "/chatbot",
  contact: "/contact",
  downloads: "/downloads",
  externalLinks: "/external-links",
  faqs: "/faqs",
  feedback: "/feedback",
  hr: "/hr",
  messages: "/messages",
  organogram: "/organogram",
  quickLinks: "/quick-links",
  scholarships: "/scholarships",
  uniform: "/uniform",
  section: (slug: SectionKey) => `/sections/${slug}` as const,
} as const;

/** Outbound URLs we link to but do not own. */
export const ExternalRoutes = {
  teacherAis: "https://apms.pk",
  studentAis: "https://student.apms.pk",
  apsacs: "https://apsacssectt.edu.pk",
  fbise: "https://fbise.edu.pk",
  hec: "https://hec.gov.pk",
} as const;
