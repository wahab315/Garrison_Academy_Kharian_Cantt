import type { ReactNode } from "react";
import Box from "@/common/box";
import Container from "@/common/container";
import Lines from "@/common/lines";
import Typography from "@/common/typography";
import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

export type BusinessSectionProps = {
  /** Halves the vertical padding. */
  tight?: boolean;
  /** Paints the alternate paper background. */
  alt?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

/** The vertical rhythm wrapper. Replaces `<div className="sec"><div className="wrap">`. */
export function BusinessSection({
  tight,
  alt,
  className,
  containerClassName,
  children,
}: BusinessSectionProps) {
  return (
    <Box
      as="section"
      className={["sec", tight && "tight", alt && "sec--alt", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Container className={containerClassName}>{children}</Container>
    </Box>
  );
}

/** Centred eyebrow + heading + description above a grid. */
export function BusinessSectionHead({
  eyebrow,
  heading,
  description,
}: BusinessLeadCopy) {
  if (!eyebrow && !heading && !description) return null;

  return (
    <Box className="sec-head">
      {eyebrow ? (
        <Typography as="span" classStyle="eyebrow">
          {eyebrow}
        </Typography>
      ) : null}
      {heading ? (
        <Typography as="h2" classStyle="primary" className="mt">
          <Lines text={heading} />
        </Typography>
      ) : null}
      {description ? <Typography as="p">{description}</Typography> : null}
    </Box>
  );
}
