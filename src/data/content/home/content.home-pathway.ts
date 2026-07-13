import { Assets } from "@/data/assets";
import { Routes } from "@/data/routes";
import { SECTIONS, SECTION_KEYS, type SectionKey } from "@/data/sections";

/** Which pathway photo stands in for each section (stages share a photo). */
const IMAGE: Record<SectionKey, string> = {
  pre: Assets.home.pathway.pre,
  junior: Assets.home.pathway.junior,
  "middle-girls": Assets.home.pathway.middle,
  "middle-boys": Assets.home.pathway.middle,
  "senior-girls": Assets.home.pathway.senior,
  "senior-boys": Assets.home.pathway.senior,
  apsis: Assets.home.pathway.apsis,
};

/** Short, home-page blurbs. The section pages carry the full copy. */
const BLURB: Record<SectionKey, string> = {
  pre: "Play-based early years in a warm, secure setting.",
  junior: "Primary classes that build reading, writing and number sense.",
  "middle-girls": "Middle years for girls, building toward the board classes.",
  "middle-boys": "Middle years for boys, building toward the board classes.",
  "senior-girls": "FBISE board classes for girls, from IX to XII.",
  "senior-boys": "FBISE board classes for boys, from IX to XII.",
  apsis: "The Cambridge stream — university at home or abroad.",
};

export const homePathwayContent = {
  eyebrow: "The academic pathway",
  heading: "From Pre-School\nto A Levels.",
  description:
    "A child can spend their whole schooling here without changing gates. Seven sections, one campus — each step handing on to the next.",
  // Single source of truth: the sections come straight from sections.ts.
  steps: SECTION_KEYS.map((key) => ({
    key,
    name: SECTIONS[key].name,
    sub: SECTIONS[key].sub,
    blurb: BLURB[key],
    href: Routes.section(key),
    image: IMAGE[key],
    imageAlt: `${SECTIONS[key].name} at Garrison Academy Kharian Cantt`,
  })),
} as const;
