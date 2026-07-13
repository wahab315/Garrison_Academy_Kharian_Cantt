import { Assets } from "@/data/assets";
import { Routes } from "@/data/routes";

export const homeHeroContent = {
  eyebrow: "Garrison Academy · Kharian Cantt",
  // The accent word is drawn in gold and finishes the line -- keep it short.
  headingLead: "Where knowledge\nlights the ",
  headingAccent: "way.",
  motto: "رَبِّ زِدْنِي عِلْمًا",
  mottoTranslation: "“My Lord, increase me in knowledge”",
  description:
    "For four decades, families across Kharian Cantt have trusted us with their children — from Pre-School to college, across two board streams, on one disciplined campus.",
  primaryCta: { label: "Apply for Admission", href: Routes.admissions },
  secondaryCta: { label: "Explore the campus", href: Routes.about },
  image: Assets.home.heroPortrait,
  imageAlt: "Garrison Academy Kharian Cantt campus",
} as const;
