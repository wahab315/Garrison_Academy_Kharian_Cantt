import type { BusinessStat } from "@/data/types/type.business-stats";

/**
 * The four figures on the rail that overlaps the hero's lower edge. Every one
 * is traceable: 40 years since 1985, the FBISE pass rate, the two board
 * streams (APSACS + APSIS), and the seven academic sections in sections.ts.
 */
export const homeStatRailContent = {
  stats: [
    { value: "40", label: "Years since 1985" },
    { value: "98%", label: "FBISE pass rate" },
    { value: "2", label: "Board streams" },
    { value: "7", label: "Academic sections" },
  ] satisfies BusinessStat[],
} as const;
