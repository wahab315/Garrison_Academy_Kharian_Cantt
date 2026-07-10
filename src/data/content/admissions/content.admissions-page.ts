import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";
import type { BusinessTableProps } from "@/data/types/type.business-table";
import type { BusinessStep } from "@/components/ui/business/business.steps";

export const admissionsHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Admissions" }],
  eyebrow: "Session 2026",
  heading: "Admissions",
  description:
    "Apply online, learn the process, review the criteria and check the admission test schedule.",
} satisfies BusinessHeaderSectionProps;

export const admissionsProcessContent = {
  heading: "Admission process",
  steps: [
    { title: "Submit application", desc: "Apply online below or download and submit the registration form manually." },
    { title: "Admission test", desc: "Appear for the entry assessment on the scheduled date for the relevant class." },
    { title: "Interview", desc: "Shortlisted students and parents attend a brief interaction." },
    { title: "Offer & enrolment", desc: "Confirm the seat by completing fee submission and documentation." },
  ] satisfies BusinessStep[],
} as const;

export const admissionsCriteriaContent = {
  heading: "Criteria for admission",
  version: "2",
  cards: [
    { title: "Board Classes (IX–XII)" },
    { title: "Non-Board Classes" },
  ],
} satisfies BusinessCardGridProps;

export const admissionsCriteriaLists = {
  board: [
    "Min. 70% in previous result",
    "Pass entry test & interview",
    "Stream availability (APSACS/APSIS)",
  ],
  nonBoard: [
    "Age-appropriate placement",
    "Assessment for class I and above",
    "Pre-School: interaction only",
  ],
} as const;

const text = (value: string) => ({ kind: "text", value }) as const;

export const admissionsScheduleContent = {
  heading: "Admission test schedule",
  columns: ["Class", "Test Date", "Reporting"],
  rows: [
    [text("Prep – V"), text("15 Feb 2026"), text("8:30 AM")],
    [text("VI – VIII"), text("17 Feb 2026"), text("8:30 AM")],
    [text("IX & XI"), text("20 Feb 2026"), text("9:00 AM")],
  ],
} satisfies BusinessTableProps;

export const admissionsFormContent = {
  heading: "Apply online",
  intro: "Submit an admission request — our office will contact you with next steps.",
  submitLabel: "Submit Application",
  successToast: "Admission request submitted — we'll be in touch soon!",
  footnote: {
    before: "Prefer paper? ",
    link: { label: "Download the registration form", href: Routes.downloads },
    after: " from Downloads.",
  },
} as const;
