import { Routes } from "@/data/routes";
import type { HomeCardGridProps } from "@/data/types/type.home-card";

export const homeQuickAccessContent = {
  eyebrow: "Start here",
  heading: "The four things parents\nask us for most.",
  description:
    "Apply, download a form, sign in to the portals, or find the right person to call. No hunting through menus.",
  version: "4",
  cards: [
    {
      href: Routes.admissions,
      icon: "admissions",
      title: "Admissions",
      desc: "Apply online or download the registration form for the new session.",
      cta: "Start application",
    },
    {
      href: Routes.downloads,
      icon: "downloads",
      title: "Downloads",
      desc: "Notifications, circulars, past papers and forms, all in one library.",
      cta: "Open library",
    },
    {
      href: Routes.externalLinks,
      icon: "lms",
      title: "Student & Teacher LMS",
      desc: "Sign in to the apms.pk and student.apms.pk learning portals.",
      cta: "Go to portals",
    },
    {
      href: Routes.contact,
      icon: "contact",
      title: "Contact & Location",
      desc: "Department numbers, email addresses and directions to the campus.",
      cta: "Get in touch",
    },
  ],
} satisfies HomeCardGridProps;
