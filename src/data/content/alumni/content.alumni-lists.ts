import type { BusinessRosterEntry } from "@/data/types/type.business-person";
import type { BusinessTableProps, PillTone } from "@/data/types/type.business-table";

export const alumniExStudentsContent = {
  heading: "Ex-GAK Students",
  entries: [
    { initials: "AM", name: "Dr. Aisha Malik", detail: "Cardiologist, AFIC Rawalpindi" },
    { initials: "UK", name: "Capt. Usman Khalid", detail: "Pakistan Army" },
    { initials: "SR", name: "Sana Raza", detail: "Software Engineer, Systems Ltd" },
    { initials: "BH", name: "Bilal Hussain", detail: "Chartered Accountant, ACCA" },
    { initials: "MN", name: "Maryam Nawaz", detail: "PhD Scholar, NUST" },
    { initials: "FK", name: "Farhan Khan", detail: "Civil Servant, CSS 2019" },
  ] satisfies BusinessRosterEntry[],
} as const;

/** 1st is highlighted orange, 2nd green, everything else blue. */
const toneFor = (position: string): PillTone =>
  position === "1st" ? "o" : position === "2nd" ? "g" : "b";

const text = (value: string) => ({ kind: "text", value }) as const;

const TOP: readonly (readonly [string, string, string, string])[] = [
  ["Ayesha Hameed", "XII (Pre-Med)", "1st", "2025"],
  ["Muhammad Umar", "XI (Pre-Eng)", "2nd", "2025"],
  ["Fatima Zahra", "X (Science)", "1st", "2024"],
  ["Zain Abbas", "XII (ICS)", "3rd", "2024"],
  ["Hira Saleem", "IX (Science)", "2nd", "2023"],
];

export const alumniTopHoldersContent = {
  heading: "Top Position Holders",
  description: "(overall top 3 per class, last 2–3 years)",
  columns: ["Student", "Class", "Position", "Session"],
  rows: TOP.map(([student, cls, position, session]) => [
    text(student),
    text(cls),
    { kind: "pill", value: position, tone: toneFor(position) } as const,
    text(session),
  ]),
} satisfies BusinessTableProps;
