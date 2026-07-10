import { Routes } from "@/data/routes";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";
import type { BusinessTableProps } from "@/data/types/type.business-table";
import type { BusinessTileGridProps } from "@/data/types/type.business-tile-grid";

export const activitiesHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Activities" }],
  eyebrow: "Beyond the Classroom",
  heading: "Activities",
  description:
    "A full calendar of academic, sporting and co-curricular life at Garrison Academy Kharian Cantt.",
} satisfies BusinessHeaderSectionProps;

export const activitiesTabLabels = {
  academics: "Academics",
  sports: "Sports",
  coCurricular: "Co-curricular",
} as const;

export const activitiesAcademicContent = {
  version: "3",
  tiles: [
    { icon: "🧠", title: "Science Olympiad", desc: "Inter-house competition fostering scientific inquiry and innovation." },
    { icon: "📖", title: "Spelling Bee & Quiz", desc: "Language and general-knowledge contests across all sections." },
    { icon: "🎤", title: "Debates & Declamation", desc: "Urdu and English public-speaking forums building confidence." },
  ],
} satisfies BusinessTileGridProps;

export const activitiesSportsContent = {
  version: "4",
  tiles: [
    { icon: "🏏", title: "Cricket" },
    { icon: "⚽", title: "Football" },
    { icon: "🏑", title: "Hockey" },
    { icon: "🏃", title: "Athletics" },
    { icon: "🏀", title: "Basketball" },
    { icon: "🏸", title: "Badminton" },
    { icon: "🏓", title: "Table Tennis" },
    { icon: "🥋", title: "Taekwondo" },
  ],
} satisfies BusinessTileGridProps;

export const activitiesClubsContent = {
  heading: "Clubs & Societies",
  version: "4",
  cards: [
    { icon: "🎭", title: "Dramatics Society" },
    { icon: "🔭", title: "Astronomy Club" },
    { icon: "🌱", title: "Eco / Green Club" },
    { icon: "🤖", title: "Robotics & STEM" },
  ],
} satisfies BusinessCardGridProps;

const text = (value: string) => ({ kind: "text", value }) as const;
const award = (value: string) => ({ kind: "pill", value, tone: "o" }) as const;

export const activitiesCompetitionsContent = {
  heading: "National & International Competitions",
  columns: ["Student", "Event", "Position / Award", "Level"],
  rows: [
    [text("GAK Robotics Team"), text("National STEM Challenge"), award("Gold"), text("National")],
    [text("Ayesha Hameed"), text("Int'l Math Olympiad"), award("Merit"), text("International")],
    [text("Debating Society"), text("Inter-APS Debates"), award("Winner"), text("National")],
    [text("Athletics Team"), text("Garrison Sports Gala"), award("Runner-up"), text("Regional")],
  ],
} satisfies BusinessTableProps;
