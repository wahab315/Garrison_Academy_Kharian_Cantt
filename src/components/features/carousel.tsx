"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import IconChevron from "@/assets/home/icon.chevron";

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
  // `active` drives the dot highlight (nearest slide to the viewport centre).
  const [active, setActive] = useState(0);
  // Arrow disabling is based on real scroll position, not `active` -- with
  // several cards visible the centre slide is well ahead of the left edge, so
  // the two must not be conflated (that bug made the back arrow a no-op).
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const count = slides.length;

  const slideEls = () =>
    Array.from(
      trackRef.current?.querySelectorAll<HTMLElement>("[data-slide]") ?? [],
    );

  /** Scroll a specific slide to the left edge (used by the dots). */
  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    const el = slideEls()[Math.max(0, Math.min(i, count - 1))];
    if (track && el) track.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  /** Step one slide from the CURRENT scroll position (used by the arrows). */
  const step = useCallback((dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const els = slideEls();
    const cur = track.scrollLeft;
    const EPS = 4; // ignore sub-pixel / snap rounding
    let target: HTMLElement | undefined;
    if (dir > 0) {
      target = els.find((el) => el.offsetLeft > cur + EPS);
    } else {
      const before = els.filter((el) => el.offsetLeft < cur - EPS);
      target = before[before.length - 1];
    }
    track.scrollTo({ left: target ? target.offsetLeft : 0, behavior: "smooth" });
  }, []);

  // Recompute dot highlight + arrow-disable state from scroll position.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const measure = () => {
      const els = slideEls();
      // The "current" slide is the one aligned to the left edge -- the same
      // slide the arrows snap to -- so the dot highlight tracks the scroll
      // position (dot 1 lit at the start).
      const edge = track.scrollLeft;
      let best = 0;
      let bestDist = Infinity;
      els.forEach((el, i) => {
        const d = Math.abs(el.offsetLeft - edge);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(measure);
    };
    measure(); // initial (e.g. all slides fit -> next disabled)
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      step(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      step(-1);
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
          disabled={atStart}
          onClick={() => step(-1)}
        >
          <IconChevron className="carousel__chevron" />
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
          className="carousel__arrow carousel__arrow--next"
          aria-label="Next"
          disabled={atEnd}
          onClick={() => step(1)}
        >
          <IconChevron className="carousel__chevron" />
        </Button>
      </Box>

      <Box className="sr-only" aria-live="polite">
        {`Item ${active + 1} of ${count}`}
      </Box>
    </Box>
  );
}
