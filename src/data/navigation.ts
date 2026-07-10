import { ExternalRoutes, Routes } from "@/data/routes";

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
