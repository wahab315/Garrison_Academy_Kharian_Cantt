/**
 * Every path under `public/`, as a constant. No magic strings in components.
 * Folder layout mirrors the page that owns the asset; `common/` is shared.
 *
 * ---------------------------------------------------------------------------
 * HOME PAGE SHOT LIST (for the client's photographer)
 * The home page is built to these paths. Until a real photo is dropped in, each
 * <Image> falls back to a brand gradient, so a missing file never breaks the
 * layout -- it just looks plain. Replace, keeping the filename and ratio.
 *
 *   hero.portrait   4:5   Campus facade, main gate, or a morning assembly.
 *                         The single most important photo -- it is the hero.
 *   principal       1:1   Head-and-shoulders portrait of the Principal.
 *   pathway/*       3:2   One photo per academic section (pre..apsis).
 *   campus/*        3:2   Sports, science labs, the library, an event/function.
 * ---------------------------------------------------------------------------
 */
export const Assets = {
  logo: "/common/logo.png",
  home: {
    // Legacy slider stills. Kept so nothing else that references them breaks;
    // hero.portrait is what the rebuilt hero uses.
    hero: [
      "/home/hero/hero-1.jpg",
      "/home/hero/hero-2.jpg",
      "/home/hero/hero-3.jpg",
    ],
    // The rebuilt hero's framed image. Defaults to the first legacy still until
    // a proper 4:5 campus photo is supplied.
    heroPortrait: "/home/hero/hero-1.jpg",
    principal: "/home/principal.jpg",
    pathway: {
      pre: "/home/pathway/pre.jpg",
      junior: "/home/pathway/junior.jpg",
      middle: "/home/pathway/middle.jpg",
      senior: "/home/pathway/senior.jpg",
      apsis: "/home/pathway/apsis.jpg",
    },
    campus: {
      sports: "/home/campus/sports.jpg",
      labs: "/home/campus/labs.jpg",
      library: "/home/campus/library.jpg",
      events: "/home/campus/events.jpg",
    },
  },
} as const;
