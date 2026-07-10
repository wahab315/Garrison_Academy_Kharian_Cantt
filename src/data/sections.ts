export type SectionKey =
  | "pre"
  | "junior"
  | "middle-girls"
  | "middle-boys"
  | "senior-girls"
  | "senior-boys"
  | "apsis";

export type SectionData = {
  name: string;
  sub: string;
  /** Unset where the post is vacant or the appointment is not yet published. */
  head?: string;
  headMsg: string;
  cambridge?: boolean;
  board?: boolean;
  extra?: string;
};

/**
 * The gender-split middle and senior sections inherit the institutional copy
 * of the former combined `middle` / `senior` entries. Their section heads are
 * deliberately left unset rather than invented; render sites fall back to a
 * "to be announced" placeholder.
 */
export const SECTIONS = {
  pre: {
    name: "Pre-School",
    sub: "Foundation Years",
    head: "Mrs. Rabia Tariq",
    headMsg:
      "Our Pre-School nurtures curiosity through play-based, child-centred learning in a warm and secure environment.",
    extra: "Same structure followed for Junior Section.",
  },
  junior: {
    name: "Junior Section",
    sub: "Primary Classes",
    headMsg:
      "The junior years consolidate literacy, numeracy and study habits, carrying forward the child-centred approach of the Pre-School.",
  },
  "middle-girls": {
    name: "Middle Girls Section",
    sub: "Classes VI – VIII · Girls",
    headMsg:
      "The middle years build strong academic foundations and study habits that carry students confidently into the board classes.",
  },
  "middle-boys": {
    name: "Middle Boys Section",
    sub: "Classes VI – VIII · Boys",
    headMsg:
      "The middle years build strong academic foundations and study habits that carry students confidently into the board classes.",
  },
  "senior-girls": {
    name: "Senior Girls Section",
    sub: "FBISE — Classes IX – XII · Girls",
    headMsg:
      "Our senior school delivers rigorous, board-focused teaching with consistent top results in FBISE examinations.",
    board: true,
  },
  "senior-boys": {
    name: "Senior Boys Section",
    sub: "FBISE — Classes IX – XII · Boys",
    headMsg:
      "Our senior school delivers rigorous, board-focused teaching with consistent top results in FBISE examinations.",
    board: true,
  },
  apsis: {
    name: "APSIS",
    sub: "Cambridge International Stream",
    head: "Mr. Daniyal Rauf",
    headMsg:
      "APSIS offers a globally benchmarked Cambridge education, opening doors to universities at home and abroad.",
    cambridge: true,
  },
} satisfies Record<SectionKey, SectionData>;

export const SECTION_KEYS = Object.keys(SECTIONS) as SectionKey[];

/** Shown where a section head has not been appointed or announced. */
export const HEAD_TBA = "To be announced";
