"use client";

import { useEffect, useState } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import Container from "@/common/container";
import Lines from "@/common/lines";
import Typography from "@/common/typography";
import { homeHeroContent } from "@/data/content/home/content.home-hero";

export type HomeHeroProps = typeof homeHeroContent;

export default function HomeHero({
  slides,
  eyebrow,
  headingLead,
  headingAccent,
  motto,
  mottoTranslation,
  description,
  primaryCta,
  secondaryCta,
}: HomeHeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <Box as="section" className="hero">
      <Box className="slides">
        {slides.map((src, i) => (
          <Box
            key={src}
            className={`slide ${i === index ? "active" : ""}`}
            // The one documented exception to the no-inline-style rule: the
            // image URL is data, not a build-time constant.
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <Box className="tex" />
        <Box className="ov" />
      </Box>

      <Container>
        <Box className="hcopy">
          <Typography as="span" classStyle="eyebrow">
            {eyebrow}
          </Typography>
          <Typography as="h1" classStyle="main">
            <Lines text={headingLead} />
            <Typography as="span" className="g">
              {headingAccent}
            </Typography>
          </Typography>
          <Box className="motto">{motto}</Box>
          <Box className="motto-tr">{mottoTranslation}</Box>
          <Typography as="p" className="hsub">
            {description}
          </Typography>
          <Box className="hero-cta">
            <Button classStyle="primary" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
            <Button classStyle="ghost" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          </Box>
        </Box>
      </Container>

      <Box className="hero-dots">
        {slides.map((src, i) => (
          <Button
            key={src}
            className={`dot ${i === index ? "active" : ""}`}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => setIndex(i)}
          />
        ))}
      </Box>
    </Box>
  );
}
