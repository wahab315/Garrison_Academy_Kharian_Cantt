import { Routes } from "@/data/routes";
import type { HomeIconKey } from "@/assets/home";

export type ScholarshipHighlight = {
  icon: HomeIconKey;
  title: string;
  desc: string;
};

export const homeScholarshipsContent = {
  eyebrow: "Scholarships & concessions",
  heading: "A good student should\nnot leave over fees.",
  description:
    "We would rather keep a capable child in class than lose them to cost. Support is available on merit and on need — the details, and how to apply, are on the scholarships page.",
  highlights: [
    {
      icon: "board",
      title: "Merit concessions",
      desc: "Fee relief for strong academic and board performance.",
    },
    {
      icon: "alumni",
      title: "Position awards",
      desc: "Recognition for board and college position holders.",
    },
    {
      icon: "faculty",
      title: "Sibling & staff relief",
      desc: "Concessions for families with more than one child enrolled.",
    },
  ] satisfies readonly ScholarshipHighlight[],
  cta: { label: "Read the scholarship policy", href: Routes.scholarships },
} as const;
