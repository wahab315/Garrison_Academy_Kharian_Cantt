"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ElementType, ReactNode } from "react";

/**
 * Scroll-reveal primitives. The single place framer-motion is touched, so the
 * motion vocabulary (distance, easing, duration, stagger) is defined once.
 *
 * Sections stay server components and wrap only their animated children here,
 * so the page tree remains almost entirely RSC.
 *
 * Reduced motion: framer-motion animates via JS, so the global CSS kill-switch
 * in utils/_animation.scss can't reach it. Every export checks
 * `useReducedMotion()` and renders a plain, fully-visible element instead --
 * never a stuck `opacity: 0`.
 */

const RISE = 16;
const EASE = [0.4, 0, 0.2, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: RISE },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

type Common = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** Fade + rise once, when 20% of the element enters the viewport. */
export function Reveal({
  as = "div",
  className,
  amount = 0.2,
  children,
}: Common & { amount?: number }) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as ElementType;

  if (reduce) return <Comp className={className}>{children}</Comp>;

  return (
    <Comp
      className={className}
      data-reveal=""
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Comp>
  );
}

/**
 * Stagger container. Its direct children must be `<RevealItem>` -- framer
 * propagates the hidden/show state down, so the items animate in sequence
 * without each running its own viewport observer.
 */
export function RevealGroup({
  as = "div",
  className,
  amount = 0.15,
  stagger = 0.06,
  children,
}: Common & { amount?: number; stagger?: number }) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as ElementType;

  if (reduce) return <Comp className={className}>{children}</Comp>;

  return (
    <Comp
      className={className}
      data-reveal=""
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Comp>
  );
}

/** A single staggered child. Only meaningful inside `<RevealGroup>`. */
export function RevealItem({ as = "div", className, children }: Common) {
  const reduce = useReducedMotion();
  const Comp = motion[as as keyof typeof motion] as ElementType;

  if (reduce) return <Comp className={className}>{children}</Comp>;

  return (
    <Comp className={className} data-reveal="" variants={itemVariants}>
      {children}
    </Comp>
  );
}
