import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

export type PillTone = "g" | "o" | "b";

/** A cell is plain text, or a coloured pill, or a download/apply action. */
export type BusinessCell =
  | { kind: "text"; value: string }
  | { kind: "pill"; value: string; tone: PillTone }
  | { kind: "action"; value: string; toast: string };

export type BusinessTableProps = BusinessLeadCopy & {
  columns: readonly string[];
  rows: readonly (readonly BusinessCell[])[];
};
