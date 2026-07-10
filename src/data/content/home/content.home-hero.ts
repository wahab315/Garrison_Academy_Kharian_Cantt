import { Assets } from "@/data/assets";
import { Routes } from "@/data/routes";

export const homeHeroContent = {
  slides: Assets.home.hero,
  eyebrow: "Garrison Academy · Kharian Cantt",
  headingLead: "Where knowledge\nlights the ",
  headingAccent: "way.",
  motto: "رَبِّ زِدْنِي عِلْمًا",
  mottoTranslation: "“My Lord, increase me in knowledge”",
  description:
    "A tradition of academic excellence, discipline and character-building in the heart of Kharian Cantt — nurturing future leaders from Pre-School through college.",
  primaryCta: { label: "Apply for Admission", href: Routes.admissions },
  secondaryCta: { label: "Explore the campus →", href: Routes.about },
} as const;
