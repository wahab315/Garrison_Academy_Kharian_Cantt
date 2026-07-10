import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

export type BusinessCtaBandProps = BusinessLeadCopy & {
  eyebrow: string;
  heading: string;
  description: string;
  cta: { label: string; href: string };
};
