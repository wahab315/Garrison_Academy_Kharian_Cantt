import type { BusinessRosterEntry } from "@/data/types/type.business-person";
import type { SectionData } from "@/data/sections";

export const sectionDetailCopy = {
  backLabel: "← All sections",
  headRole: "Section Head",
  facultyHeading: "Faculty",
  facultyNote: "Each teacher card shows name, qualification & photo.",
  crumbQuickLinks: "Quick Links",
} as const;

export const sectionFacultyContent: readonly BusinessRosterEntry[] = [
  { initials: "T1", name: "Teacher Name", detail: "M.Phil · 8 yrs" },
  { initials: "T2", name: "Teacher Name", detail: "M.Sc · 6 yrs" },
  { initials: "T3", name: "Teacher Name", detail: "M.A · 10 yrs" },
  { initials: "T4", name: "Teacher Name", detail: "B.Ed · 5 yrs" },
];

/** Cards depend on the section, so they are derived rather than static. */
export function sectionCardsFor(data: SectionData) {
  const resultLabel = data.cambridge
    ? "Cambridge Results"
    : data.board
      ? "Board Results"
      : "Results";
  const resultBody = data.cambridge ? "Cambridge (O/A-Level)" : "FBISE board";

  const cards = [
    { icon: "🏫", title: "Classes", desc: `Class-wise sections, strength and class teachers for ${data.name}.` },
    { icon: "🗓️", title: "Examination Schedule", desc: "Term assessments and major examination datesheets." },
    { icon: "🏆", title: resultLabel, desc: `Latest ${resultBody} results & top performers.` },
  ];

  if (data.board || data.cambridge) {
    cards.push({ icon: "$", title: "Scholarships", desc: "Merit scholarships available for this section." });
  }

  cards.push(
    { icon: "📈", title: "Promotion Criteria", desc: "Assessment, attendance and conduct requirements for promotion." },
    { icon: "★", title: "Activities", desc: "Section-specific clubs, trips and co-curricular events." },
    { icon: "🎖️", title: "Achievements", desc: `Awards and recognitions earned by ${data.name} students.` },
    { icon: "🏛️", title: "Facilities", desc: "Dedicated rooms, labs and resources for this section." },
    { icon: "📣", title: "Upcoming Events", desc: `What's next on the ${data.name} calendar.` },
  );

  return cards;
}
