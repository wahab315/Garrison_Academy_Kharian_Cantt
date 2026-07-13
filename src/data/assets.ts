/**
 * Every path under `public/`, as a constant. No magic strings in components.
 * Folder layout mirrors the page that owns the asset; `common/` is shared.
 *
 * ---------------------------------------------------------------------------
 * HOME PAGE IMAGES
 * Only the three hero stills exist in `public/` today, so every other slot
 * below currently REUSES one of them as an interim stand-in -- that is why the
 * page shows real photos rather than blank gradients. Each entry notes the real
 * shot it should hold; when the photographer supplies it, drop the file in the
 * commented path and point the entry at it.
 *
 *   heroPortrait   4:5   Campus facade, main gate, or a morning assembly.
 *   principal      1:1   Head-and-shoulders portrait of the Principal.
 *   pathway/*      3:2   One photo per academic section (pre..apsis).
 *   campus/*       3:2   Sports, science labs, the library, an event/function.
 * ---------------------------------------------------------------------------
 */
const HERO_1 = "/home/hero/hero-1.jpg";
const HERO_2 = "/home/hero/hero-2.jpg";
const HERO_3 = "/home/hero/hero-3.jpg";

export const Assets = {
  logo: "/common/logo.png",
  home: {
    // Legacy slider stills. The three real photos we currently have.
    hero: [HERO_1, HERO_2, HERO_3],

    // The rebuilt hero's framed image.  → real: /home/hero/hero-1.jpg (4:5 crop)
    heroPortrait: HERO_1,

    // Principal portrait.               → real: /home/principal.jpg
    principal: HERO_2,

    // One per academic section.         → real: /home/pathway/<key>.jpg
    pathway: {
      pre: HERO_1,
      junior: HERO_2,
      middle: HERO_3,
      senior: HERO_1,
      apsis: HERO_2,
    },

    // Campus-life carousel.             → real: /home/campus/<key>.jpg
    campus: {
      sports: HERO_3,
      labs: HERO_1,
      library: HERO_2,
      events: HERO_3,
    },
  },
} as const;
