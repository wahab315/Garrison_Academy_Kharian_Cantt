"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Box from "@/common/box";
import Button from "@/common/button";

export type CarouselProps = {
  /** Names the carousel region for assistive tech, e.g. "Academic pathway". */
  label: string;
  /** One node per slide. */
  slides: ReactNode[];
};

/**
 * A scroll-snap carousel. The track scrolls and snaps with zero JS; the JS layer
 * adds prev/next buttons, dots, arrow-key control and a live-region announcement.
 * It never auto-rotates -- the point of the rebuild was to remove the thing that
 * moved on its own. Lives in features/ because more than the home page will want it.
 */
export default function Carousel({ label, slides }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const count = slides.length;

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(i, count - 1));
      const el = track.querySelectorAll<HTMLElement>("[data-slide]")[clamped];
      if (el) track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
    },
    [count],
  );

  // Derive the active slide from scroll position (the nearest to centre).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const els = track.querySelectorAll<HTMLElement>("[data-slide]");
        const centre = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        els.forEach((el, i) => {
          const c = el.offsetLeft + el.clientWidth / 2;
          const d = Math.abs(c - centre);
          if (d < bestDist) {
            bestDist = d;
            best = i;
          }
        });
        setActive(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <Box
      as="section"
      className="carousel"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <Box
        ref={trackRef}
        className="carousel__track"
        tabIndex={0}
        onKeyDown={onKeyDown}
        role="group"
        aria-label={`${label}, ${count} items`}
      >
        {slides.map((slide, i) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key -- slides are positional and static
            key={i}
            className="carousel__slide"
            data-slide=""
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            {slide}
          </Box>
        ))}
      </Box>

      <Box className="carousel__controls">
        <Button
          className="carousel__arrow"
          aria-label="Previous"
          disabled={active === 0}
          onClick={() => goTo(active - 1)}
        >
          <span aria-hidden="true">‹</span>
        </Button>

        <Box className="carousel__dots" role="tablist" aria-label={`${label} slides`}>
          {slides.map((_, i) => (
            <Button
              // eslint-disable-next-line react/no-array-index-key -- positional dots
              key={i}
              className={`carousel__dot ${i === active ? "is-active" : ""}`}
              aria-label={`Go to item ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </Box>

        <Button
          className="carousel__arrow"
          aria-label="Next"
          disabled={active === count - 1}
          onClick={() => goTo(active + 1)}
        >
          <span aria-hidden="true">›</span>
        </Button>
      </Box>

      <Box className="sr-only" aria-live="polite">
        {`Item ${active + 1} of ${count}`}
      </Box>
    </Box>
  );
}
