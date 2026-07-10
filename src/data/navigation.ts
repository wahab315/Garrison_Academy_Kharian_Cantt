import { ExternalRoutes, Routes } from "@/data/routes";

export type MegaLink = { label: string; href: string; icon: string; desc: string };

export type NavItem =
  | { label: string; href: string }
  | { label: string; mega: readonly MegaLink[]; grid2?: boolean; alignRight?: boolean };

export function hasMega(item: NavItem): item is Extract<NavItem, { mega: unknown }> {
  return "mega" in item;
}

export const NAV: readonly NavItem[] = [
  { label: "Home", href: Routes.home },
  {
    label: "About",
    mega: [
      { label: "About Us", href: Routes.about, icon: "H", desc: "History, founder & facilities" },
      { label: "Messages", href: Routes.messages, icon: "M", desc: "Chairman, VC & Principal" },
      { label: "Organogram", href: Routes.organogram, icon: "O", desc: "Academic & admin structure" },
      { label: "Alumni — AMULNI", href: Routes.alumni, icon: "A", desc: "Ex-GAK & position holders" },
    ],
  },
  {
    label: "Academics",
    grid2: true,
    mega: [
      { label: "Pre-School", href: Routes.section("pre"), icon: "P", desc: "Foundation years" },
      { label: "Junior Section", href: Routes.section("junior"), icon: "J", desc: "Primary classes" },
      { label: "Middle Girls Section", href: Routes.section("middle-girls"), icon: "MG", desc: "Middle years — girls" },
      { label: "Middle Boys Section", href: Routes.section("middle-boys"), icon: "MB", desc: "Middle years — boys" },
      { label: "Senior Girls Section", href: Routes.section("senior-girls"), icon: "SG", desc: "Board classes — girls" },
      { label: "Senior Boys Section", href: Routes.section("senior-boys"), icon: "SB", desc: "Board classes — boys" },
      { label: "APSIS", href: Routes.section("apsis"), icon: "A", desc: "Cambridge stream" },
      { label: "Scholarships", href: Routes.scholarships, icon: "$", desc: "Incentives & policy" },
      { label: "Activities", href: Routes.activities, icon: "★", desc: "Sports & co-curricular" },
    ],
  },
  {
    label: "Admissions",
    mega: [
      { label: "Admissions", href: Routes.admissions, icon: "A", desc: "Apply online & criteria" },
      { label: "School Uniform", href: Routes.uniform, icon: "U", desc: "Summer & winter" },
      { label: "Downloads", href: Routes.downloads, icon: "↓", desc: "Forms, circulars, papers" },
      { label: "FAQs", href: Routes.faqs, icon: "?", desc: "Common questions" },
    ],
  },
  {
    label: "More",
    alignRight: true,
    mega: [
      { label: "HR & Careers", href: Routes.hr, icon: "HR", desc: "Staff hiring" },
      { label: "External Links", href: Routes.externalLinks, icon: "↗", desc: "LMS, FBISE, social" },
      { label: "Chatbot", href: Routes.chatbot, icon: "◎", desc: "Quick answers" },
      { label: "Feedback / Complaints", href: Routes.feedback, icon: "✎", desc: "We're listening" },
    ],
  },
  { label: "Contact", href: Routes.contact },
];

export type FooterLink = { label: string; href: string; external?: boolean };
export type FooterColumn = { title: string; links: readonly FooterLink[] };

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: Routes.about },
      { label: "Messages", href: Routes.messages },
      { label: "Organogram", href: Routes.organogram },
      { label: "Alumni", href: Routes.alumni },
      { label: "Activities", href: Routes.activities },
    ],
  },
  {
    title: "For Parents",
    links: [
      { label: "Admissions", href: Routes.admissions },
      { label: "School Uniform", href: Routes.uniform },
      { label: "Scholarships", href: Routes.scholarships },
      { label: "Downloads", href: Routes.downloads },
      { label: "FAQs", href: Routes.faqs },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact Us", href: Routes.contact },
      { label: "Careers", href: Routes.hr },
      { label: "Student's AIS Login", href: ExternalRoutes.studentAis, external: true },
      { label: "Teacher's AIS Login", href: ExternalRoutes.teacherAis, external: true },
      { label: "Feedback", href: Routes.feedback },
    ],
  },
];
