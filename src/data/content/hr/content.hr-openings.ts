import { Routes } from "@/data/routes";
import type { BusinessTableProps } from "@/data/types/type.business-table";

const APPLY_TOAST = "Opening the Google application form…";
const text = (value: string) => ({ kind: "text", value }) as const;
const pill = (value: string, tone: "g" | "o" | "b") => ({ kind: "pill", value, tone }) as const;
const apply = { kind: "action", value: "Apply ↗", toast: APPLY_TOAST } as const;

export const hrOpeningsContent = {
  heading: "Staff hiring / current openings",
  columns: ["Position", "Section", "Type", "Apply"],
  rows: [
    [text("Subject Teacher — Mathematics"), text("Senior School"), pill("Full-time", "g"), apply],
    [text("Montessori Directress"), text("Pre-School"), pill("Full-time", "g"), apply],
    [text("Lab Assistant — Chemistry"), text("Senior School"), pill("Contract", "b"), apply],
    [text("Admin Officer"), text("Administration"), pill("Full-time", "g"), apply],
  ],
} satisfies BusinessTableProps;

export const hrPanelsContent = {
  apply: {
    icon: "📝",
    title: "How to apply",
    desc: "All applications are submitted through the official Google Form linked against each opening. Shortlisted candidates are contacted for a demo lesson and interview.",
    cta: { label: "Open Application Form ↗", toast: APPLY_TOAST },
  },
  adverts: {
    icon: "📰",
    title: "Advertisements",
    desc: "Recruitment drives are advertised here and on GAK's official social media pages. Subscribe to notifications in the Downloads section to stay updated.",
    link: { label: "See latest adverts →", href: Routes.downloads },
  },
} as const;
