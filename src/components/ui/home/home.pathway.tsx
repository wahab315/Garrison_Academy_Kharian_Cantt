import Image from "next/image";
import Box from "@/common/box";
import Button from "@/common/button";
import Typography from "@/common/typography";
import { Reveal } from "@/common/reveal";
import Carousel from "@/features/carousel";
import { BusinessSection, BusinessSectionHead } from "@/components/ui/business/business.section";
import { homePathwayContent } from "@/data/content/home/content.home-pathway";

export type HomePathwayProps = typeof homePathwayContent;

/** The seven academic sections as a step-numbered carousel, Pre-School to APSIS. */
export default function HomePathway({
  eyebrow,
  heading,
  description,
  steps,
}: HomePathwayProps) {
  const slides = steps.map((step, i) => (
    <Button key={step.key} href={step.href} className="pathway-card link">
      <Box className="pathway-card__media">
        <Image
          src={step.image}
          alt={step.imageAlt}
          fill
          sizes="(max-width: 860px) 85vw, 340px"
          className="pathway-card__img"
        />
        <Typography as="span" className="pathway-card__step" aria-hidden="true">
          {String(i + 1).padStart(2, "0")}
        </Typography>
      </Box>
      <Box className="pathway-card__body">
        <Typography as="span" className="pathway-card__sub">
          {step.sub}
        </Typography>
        <Typography as="h3" className="pathway-card__name">
          {step.name}
        </Typography>
        <Typography as="p" className="pathway-card__blurb">
          {step.blurb}
        </Typography>
        <Typography as="span" className="pathway-card__more">
          Visit section →
        </Typography>
      </Box>
    </Button>
  ));

  return (
    <BusinessSection>
      <Reveal>
        <BusinessSectionHead
          eyebrow={eyebrow}
          heading={heading}
          description={description}
        />
      </Reveal>
      <Carousel label="Academic pathway" slides={slides} />
    </BusinessSection>
  );
}
