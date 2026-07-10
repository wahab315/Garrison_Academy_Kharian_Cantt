import type { BusinessTableProps } from "@/data/types/type.business-table";

const PDF = { kind: "action", value: "↓ PDF", toast: "Downloading PDF…" } as const;
const text = (value: string) => ({ kind: "text", value }) as const;

export const downloadsNotificationsContent = {
  columns: ["Title", "Date", "File"],
  rows: [
    [text("Session 2026 Admissions Notification"), text("05 Jan 2026"), PDF],
    [text("Winter Vacation Notice"), text("18 Dec 2025"), PDF],
    [text("Parent-Teacher Meeting Schedule"), text("02 Dec 2025"), PDF],
  ],
} satisfies BusinessTableProps;

export const downloadsCircularsContent = {
  columns: ["Circular No.", "Subject", "File"],
  rows: [
    [text("18/26"), text("Winter Uniform Implementation"), PDF],
    [text("17/26"), text("Sports Gala Participation"), PDF],
    [text("16/26"), text("Fee Submission Deadline"), PDF],
  ],
} satisfies BusinessTableProps;

export const downloadsPapersContent = {
  columns: ["Subject", "Class", "Year", "File"],
  rows: [
    [text("Mathematics"), text("IX"), text("2025"), PDF],
    [text("Physics"), text("X"), text("2025"), PDF],
    [text("English"), text("XI"), text("2024"), PDF],
  ],
} satisfies BusinessTableProps;

export const downloadsFormContent = {
  icon: "📄",
  title: "Admission Registration Form",
  desc: "Download, print and submit the manual application form at the admissions office along with required documents.",
  cta: { label: "↓ Download Form (PDF)", toast: "Downloading admission form…" },
} as const;

export const downloadsTabLabels = {
  notifications: "Notifications",
  circulars: "Circulars",
  papers: "Past Papers",
  form: "Admission Form",
} as const;
