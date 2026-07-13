import { Routes } from "@/data/routes";
import type { HomeCardGridProps } from "@/data/types/type.home-card";

export const homeWhyGakContent = {
  eyebrow: "Why Garrison Academy",
  heading: "What forty years on\none campus builds.",
  description:
    "We are not a new name. Parents who studied here now send their own children — and they come for reasons that do not fit on a banner.",
  version: "3",
  cards: [
    {
      icon: "board",
      title: "Results that hold up",
      desc: "A 98% pass rate in the FBISE board year on year, with position holders most sessions — not a one-off good year.",
      href: Routes.alumni,
      cta: "See our alumni",
    },
    {
      icon: "cambridge",
      title: "Two boards, one roof",
      desc: "Choose the national FBISE stream or the Cambridge stream at APSIS. Both run under the same staff and the same standards.",
      href: Routes.section("apsis"),
      cta: "About APSIS",
    },
    {
      icon: "discipline",
      title: "Cantonment discipline",
      desc: "A structured, secure campus where punctuality, uniform and conduct are taken seriously — and it shows in the classroom.",
      href: Routes.about,
      cta: "About the school",
    },
    {
      icon: "faculty",
      title: "Teachers who stay",
      desc: "Many of our staff have taught here for over a decade. Your child is taught by people who know the school, not a rotating bench.",
      href: Routes.organogram,
      cta: "Our structure",
    },
    {
      icon: "sports",
      title: "More than the syllabus",
      desc: "Twenty-six clubs and societies and a full sports programme — debating, science, arts and the field, not just the desk.",
      href: Routes.activities,
      cta: "Explore activities",
    },
    {
      icon: "scholarship",
      title: "Merit is rewarded",
      desc: "Fee concessions and scholarships for strong results and for families who need the support to keep a good student in class.",
      href: Routes.scholarships,
      cta: "Scholarship policy",
    },
  ],
} satisfies HomeCardGridProps;
