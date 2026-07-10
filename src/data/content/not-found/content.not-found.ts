import { Routes } from "@/data/routes";

export const notFoundContent = {
  code: "404",
  eyebrow: "Error 404",
  heading: "This page could not be found.",
  description:
    "The page you are looking for does not exist, has been moved, or the address was mistyped.",
  primaryCta: { label: "Back to Home", href: Routes.home },
  secondaryCta: { label: "Contact us →", href: Routes.contact },
} as const;
