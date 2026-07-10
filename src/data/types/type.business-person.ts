import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

export type BusinessPerson = {
  /** Shown in the portrait circle until real photographs exist. */
  initials: string;
  name: string;
  role?: string;
  /** Long-form message, one entry per paragraph. */
  message?: readonly string[];
};

export type BusinessPersonGridProps = BusinessLeadCopy & {
  people: readonly BusinessPerson[];
};

/** The compact avatar + name + one-line detail row used by alumni and faculty. */
export type BusinessRosterEntry = {
  initials: string;
  name: string;
  detail: string;
};

export type BusinessRosterProps = BusinessLeadCopy & {
  entries: readonly BusinessRosterEntry[];
};
