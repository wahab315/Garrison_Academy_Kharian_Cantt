import { Routes } from "@/data/routes";
import type { HomeIconKey } from "@/assets/home";

export type StreamContent = {
  tag: string;
  icon: HomeIconKey;
  name: string;
  description: string;
  points: readonly string[];
  cta: { label: string; href: string };
};

export const homeStreamsContent = {
  eyebrow: "Two streams",
  heading: "One national board.\nOne international.",
  description:
    "Families choose the path that fits the child. Both run on the same campus, under the same staff, held to the same standard of conduct.",
  streams: [
    {
      tag: "National",
      icon: "board",
      name: "APSACS · FBISE",
      description:
        "The Federal Board route, Pre-School through Intermediate, taught in gender-split sections from the middle years onward.",
      points: [
        "Federal Board (FBISE) syllabus and examinations",
        "Separate girls and boys sections in middle and senior school",
        "Consistent position holders at board level",
      ],
      cta: { label: "View senior sections", href: Routes.section("senior-boys") },
    },
    {
      tag: "International",
      icon: "cambridge",
      name: "APSIS · Cambridge",
      description:
        "The Cambridge route for families planning on university abroad — a globally recognised qualification without leaving Kharian.",
      points: [
        "Cambridge O and A Level pathway",
        "Recognised by universities at home and overseas",
        "Smaller cohorts with close academic mentoring",
      ],
      cta: { label: "About APSIS", href: Routes.section("apsis") },
    },
  ] satisfies readonly StreamContent[],
} as const;
