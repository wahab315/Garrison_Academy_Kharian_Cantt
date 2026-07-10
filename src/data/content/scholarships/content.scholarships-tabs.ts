import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";
import type { BusinessPerson } from "@/data/types/type.business-person";
import type { ProseBlock } from "@/components/ui/business/business.prose";
import type { RichText } from "@/data/types/type.business-rich-text";

export const scholarshipsHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Scholarships & Incentives" }],
  eyebrow: "Merit & Support",
  heading: "Scholarships & Incentives",
  description:
    "Recognising academic excellence among students and rewarding our core teaching faculty.",
} satisfies BusinessHeaderSectionProps;

export const scholarshipsTabLabels = {
  students: "Board Class Students",
  teachers: "Core Teachers",
} as const;

export const scholarshipsPolicyContent: readonly ProseBlock[] = [
  { kind: "heading", text: "Scholarship policy" },
  {
    kind: "paragraph",
    text: "Garrison Academy Kharian Cantt offers merit-based scholarships to board-class students (IX–XII) who demonstrate outstanding academic performance, with additional need-based support for deserving families of the garrison.",
  },
];

export const scholarshipsEligibilityContent = {
  icon: "📋",
  title: "Eligibility criteria",
  items: [
    "Minimum 85% aggregate in previous annual exam",
    "Clean disciplinary record",
    "Regular attendance above 90%",
    "Renewable each session on performance",
  ],
} as const;

export const scholarshipsStudentsContent = {
  heading: "Students availing scholarships",
  people: [
    { initials: "AH", name: "Ayesha Hameed", role: "Class XII · 96%" },
    { initials: "MU", name: "Muhammad Umar", role: "Class XI · 94%" },
    { initials: "FZ", name: "Fatima Zahra", role: "Class X · 95%" },
    { initials: "HA", name: "Hassan Ali", role: "Class IX · 93%" },
  ] satisfies BusinessPerson[],
} as const;

export const scholarshipsTeachersContent = {
  lead: [
    { text: "Teachers availing the GAK " },
    { text: "Core Teacher Incentive", bold: true },
    { text: " — recognised for exceptional results and dedication." },
  ] satisfies RichText,
  people: [
    { initials: "SK", name: "Sadia Kamal", role: "Mathematics" },
    { initials: "RA", name: "Rashid Ahmed", role: "Physics" },
    { initials: "NB", name: "Nadia Bashir", role: "English" },
    { initials: "TI", name: "Tahir Iqbal", role: "Chemistry" },
  ] satisfies BusinessPerson[],
} as const;
