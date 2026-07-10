import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

export type BusinessCrumb = { label: string; href?: string };

/** Props for the dark banner at the top of every business page. */
export type BusinessHeaderSectionProps = BusinessLeadCopy & {
  eyebrow: string;
  heading: string;
  crumb: readonly BusinessCrumb[];
};
