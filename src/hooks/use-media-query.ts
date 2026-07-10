"use client";

import { useEffect, useState } from "react";

/**
 * Replaces ad-hoc `window.innerWidth > n` checks inside event handlers, which
 * are read once per event and never react to a resize.
 *
 * Returns false on the server and on the first client render, so the markup
 * matches and hydration stays quiet.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const sync = () => setMatches(mql.matches);

    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, [query]);

  return matches;
}

/** The width above which the desktop nav is shown; mirrors `respond(desktop)`. */
export const DESKTOP_QUERY = "(min-width: 1081px)";
