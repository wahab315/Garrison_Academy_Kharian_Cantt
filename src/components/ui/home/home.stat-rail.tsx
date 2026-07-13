"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Box from "@/common/box";
import Typography from "@/common/typography";
import type { BusinessStat } from "@/data/types/type.business-stats";

/** Splits "98%" into the number 98 and the suffix "%". */
function parseValue(value: string) {
  const num = parseFloat(value);
  return { num, suffix: value.replace(/[0-9.]/g, ""), hasNum: !Number.isNaN(num) };
}

function useCountUp(target: number, run: boolean) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1100;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run]);
  return n;
}

function StatCell({
  stat,
  run,
  reduce,
}: {
  stat: BusinessStat;
  run: boolean;
  reduce: boolean;
}) {
  const { num, suffix, hasNum } = parseValue(stat.value);
  const counted = useCountUp(hasNum ? num : 0, run && !reduce && hasNum);
  const display = !hasNum || reduce ? stat.value : `${counted}${suffix}`;

  return (
    <Box className="stat-rail__cell">
      <Typography as="span" className="stat-rail__value">
        {display}
      </Typography>
      <Typography as="span" className="stat-rail__label">
        {stat.label}
      </Typography>
    </Box>
  );
}

/**
 * The figures that overlap the hero's lower edge. They count up once, the first
 * time the rail scrolls into view. Under reduced motion they render final on
 * first paint. Client-only because the count needs a frame loop and an observer.
 */
export default function HomeStatRail({ stats }: { stats: readonly BusinessStat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setRun(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <Box ref={ref} className="stat-rail">
      {stats.map((stat) => (
        <StatCell key={stat.label} stat={stat} run={run} reduce={!!reduce} />
      ))}
    </Box>
  );
}
