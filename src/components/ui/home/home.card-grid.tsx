import type { ReactNode } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import { RevealGroup, RevealItem } from "@/common/reveal";
import { BusinessSectionHead } from "@/components/ui/business/business.section";
import { HomeIcons } from "@/assets/home";
import type { HomeCard, HomeCardGridProps } from "@/data/types/type.home-card";

/** Card size, so the same grid renders a dense 16-tile index and a roomy 4-tile row. */
export type HomeCardVariant = "default" | "compact";

function CardBody({ card }: { card: HomeCard }) {
  const Icon = card.icon ? HomeIcons[card.icon] : null;
  return (
    <>
      {Icon ? (
        <Box className="ic" aria-hidden="true">
          <Icon />
        </Box>
      ) : null}
      <Typography as="h3">{card.title}</Typography>
      {card.desc ? <Typography as="p">{card.desc}</Typography> : null}
      {card.cta ? (
        <Typography as="span" className="more">
          {card.cta}
        </Typography>
      ) : null}
    </>
  );
}

/** A single card. Linked cards render as an anchor so the whole tile is clickable. */
function HomeCardItem({ card }: { card: HomeCard }): ReactNode {
  if (!card.href) {
    return (
      <Box className="home-card">
        <CardBody card={card} />
      </Box>
    );
  }
  return (
    <Button href={card.href} external={card.external} className="home-card link">
      <CardBody card={card} />
    </Button>
  );
}

/**
 * Heading + a grid of icon cards, revealed with a stagger. The home page's
 * workhorse: powers "Start here", "Why Garrison Academy" and the full explore
 * index by varying only the content and the column count.
 */
export default function HomeCardGrid({
  eyebrow,
  heading,
  description,
  version = "4",
  cards,
  variant = "default",
}: HomeCardGridProps & { variant?: HomeCardVariant }) {
  return (
    <>
      <BusinessSectionHead
        eyebrow={eyebrow}
        heading={heading}
        description={description}
      />
      <RevealGroup
        className={`grid grid__version--${version} home-cards home-cards--${variant}`}
      >
        {cards.map((card) => (
          <RevealItem key={card.title + (card.href ?? "")}>
            <HomeCardItem card={card} />
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}
