import Image from "next/image";
import Box from "@/common/box";
import Button from "@/common/button";
import Container from "@/common/container";
import Lines from "@/common/lines";
import Typography from "@/common/typography";
import IconLaurel from "@/assets/home/icon.laurel";
import HomeStatRail from "@/components/ui/home/home.stat-rail";
import { homeHeroContent } from "@/data/content/home/content.home-hero";
import { homeStatRailContent } from "@/data/content/home/content.home-stat-rail";

export type HomeHeroProps = typeof homeHeroContent;

/**
 * Split hero: copy on the left, a framed campus photo on the right with the
 * crest laurel bleeding behind it, and the stat rail overlapping the lower
 * edge. No slider -- one still image, `priority` so it is the LCP element.
 *
 * Mount animation is CSS-only (staggered `fade`), which keeps this a server
 * component and is switched off automatically by the reduced-motion rule in
 * utils/_animation.scss. Only the stat rail's count-up needs the client.
 */
export default function HomeHero({
  eyebrow,
  headingLead,
  headingAccent,
  motto,
  mottoTranslation,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
}: HomeHeroProps) {
  return (
    <Box as="section" className="hero">
      <Box className="hero__tex" aria-hidden="true" />
      <IconLaurel className="hero__laurel" />

      <Container className="hero__inner">
        <Box className="hero__copy">
          <Typography as="span" classStyle="eyebrow" className="hero__eyebrow">
            {eyebrow}
          </Typography>
          <Typography as="h1" classStyle="main" className="hero__title">
            <Lines text={headingLead} />
            <Typography as="span" className="hero__accent">
              {headingAccent}
            </Typography>
          </Typography>
          <Box className="hero__motto" lang="ar">
            {motto}
          </Box>
          <Box className="hero__motto-tr">{mottoTranslation}</Box>
          <Typography as="p" className="hero__sub">
            {description}
          </Typography>
          <Box className="hero__cta">
            <Button classStyle="primary" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
            <Button classStyle="ghost" href={secondaryCta.href}>
              {secondaryCta.label}
              <span aria-hidden="true">→</span>
            </Button>
          </Box>
        </Box>

        <Box className="hero__media">
          <Box className="hero__frame">
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 860px) 100vw, 42vw"
              className="hero__img"
            />
          </Box>
        </Box>
      </Container>

      <Container className="hero__rail-wrap">
        <HomeStatRail stats={homeStatRailContent.stats} />
      </Container>
    </Box>
  );
}
