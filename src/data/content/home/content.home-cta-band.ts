import { Routes } from "@/data/routes";
import type { BusinessCtaBandProps } from "@/data/types/type.business-cta-band";

export const homeCtaBandContent = {
  eyebrow: "Admissions open",
  heading: "Come and see the\ncampus for yourself.",
  description:
    "Seats fill by section and they fill early. Apply online in a few minutes, or download the form and visit us — we are happy to show you around.",
  cta: { label: "Begin your application", href: Routes.admissions },
} satisfies BusinessCtaBandProps;
