/**
 * Every path under `public/`, as a constant. No magic strings in components.
 * Folder layout mirrors the page that owns the asset; `common/` is shared.
 */
export const Assets = {
  logo: "/common/logo.png",
  home: {
    hero: [
      "/home/hero/hero-1.jpg",
      "/home/hero/hero-2.jpg",
      "/home/hero/hero-3.jpg",
    ],
  },
} as const;
