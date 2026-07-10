import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";

export const organogramHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Organogram" }],
  eyebrow: "Structure",
  heading: "School Organogram",
  description:
    "How Garrison Academy Kharian Cantt is organised — academic leadership and administrative governance.",
} satisfies BusinessHeaderSectionProps;

export type OrgNode = { title: string; sub?: string };
export type OrgChart = {
  tab: string;
  root: OrgNode;
  deputy: OrgNode;
  branches: readonly OrgNode[];
};

export const organogramChartsContent: readonly OrgChart[] = [
  {
    tab: "Academics",
    root: { title: "Principal", sub: "Head of Campus" },
    deputy: { title: "Vice Principal (Academics)" },
    branches: [
      { title: "Head — Pre-School", sub: "Early Years" },
      { title: "Head — Middle", sub: "Classes VI–VIII" },
      { title: "Head — Senior", sub: "FBISE" },
      { title: "Head — APSIS", sub: "Cambridge" },
    ],
  },
  {
    tab: "Administrative",
    root: { title: "Principal", sub: "Head of Campus" },
    deputy: { title: "Vice Principal (Administration)" },
    branches: [
      { title: "Accounts & Finance" },
      { title: "HR & Admin" },
      { title: "Examinations" },
      { title: "IT & LMS" },
    ],
  },
];
