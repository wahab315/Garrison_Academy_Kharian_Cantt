import Image from "next/image";
import Box from "@/common/box";
import Button from "@/common/button";
import Typography from "@/common/typography";
import { Reveal } from "@/common/reveal";
import Carousel from "@/features/carousel";
import { BusinessSection, BusinessSectionHead } from "@/components/ui/business/business.section";
import { homeCampusLifeContent } from "@/data/content/home/content.home-campus-life";

export type HomeCampusLifeProps = typeof homeCampusLifeContent;

/** Campus life: a carousel of illustrative cards, closing on a link to Activities. */
export default function HomeCampusLife({
  eyebrow,
  heading,
  description,
  items,
  cta,
}: HomeCampusLifeProps) {
  const slides = items.map((item) => (
    <Box key={item.title} className="campus-card">
      <Box className="campus-card__media">
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes="(max-width: 860px) 85vw, 340px"
          className="campus-card__img"
        />
        <Typography as="span" className="campus-card__tag">
          {item.tag}
        </Typography>
      </Box>
      <Box className="campus-card__body">
        <Typography as="h3" className="campus-card__title">
          {item.title}
        </Typography>
        <Typography as="p" className="campus-card__desc">
          {item.desc}
        </Typography>
      </Box>
    </Box>
  ));

  return (
    <BusinessSection alt>
      <Reveal>
        <BusinessSectionHead
          eyebrow={eyebrow}
          heading={heading}
          description={description}
        />
      </Reveal>
      <Carousel label="Campus life" slides={slides} />
      <Reveal className="campus-foot">
        <Button classStyle="primary" href={cta.href}>
          {cta.label}
        </Button>
      </Reveal>
    </BusinessSection>
  );
}
