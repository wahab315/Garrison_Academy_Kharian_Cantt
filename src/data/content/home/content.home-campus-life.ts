import { Assets } from "@/data/assets";
import { Routes } from "@/data/routes";

export const homeCampusLifeContent = {
  eyebrow: "Beyond the classroom",
  heading: "A day here is more\nthan lessons.",
  description:
    "Twenty-six clubs, a full sports calendar, science and the arts. The parts of school a child actually remembers.",
  items: [
    {
      tag: "Sports",
      title: "On the field",
      desc: "Cricket, football, athletics and more across twelve disciplines.",
      image: Assets.home.campus.sports,
      imageAlt: "Sports at Garrison Academy Kharian Cantt",
    },
    {
      tag: "Science",
      title: "In the labs",
      desc: "Hands-on physics, chemistry and biology, not only the textbook.",
      image: Assets.home.campus.labs,
      imageAlt: "Science laboratories at Garrison Academy Kharian Cantt",
    },
    {
      tag: "Reading",
      title: "The library",
      desc: "A quiet place to read, research and prepare for the board years.",
      image: Assets.home.campus.library,
      imageAlt: "The library at Garrison Academy Kharian Cantt",
    },
    {
      tag: "Events",
      title: "Functions & assemblies",
      desc: "Debates, speech days and annual functions the whole campus turns out for.",
      image: Assets.home.campus.events,
      imageAlt: "School functions at Garrison Academy Kharian Cantt",
    },
  ],
  cta: { label: "See all activities", href: Routes.activities },
} as const;
