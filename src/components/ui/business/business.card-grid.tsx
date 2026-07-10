import type { ReactNode } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import type { BusinessCard, BusinessCardGridProps } from "@/data/types/type.business-card-grid";
import { BusinessSectionHead } from "@/components/ui/business/business.section";

/**
 * The original stylesheet gave card headings four different sizes depending on
 * the page. Preserved as explicit modifiers rather than inline styles.
 */
export type CardTitleSize = "md" | "sm" | "xs" | "xxs";

const TITLE_CLASS: Record<CardTitleSize, string | undefined> = {
  md: undefined, // .card h3 -> 1.18rem
  sm: "card__title--sm", // 1.12rem
  xs: "card__title--xs", // 1.10rem
  xxs: "card__title--xxs", // 1.05rem
};

export type CardGridProps = BusinessCardGridProps & {
  titleSize?: CardTitleSize;
};

function CardBody({ card, titleSize = "md" }: { card: BusinessCard; titleSize?: CardTitleSize }) {
  return (
    <>
      {card.icon ? (
        <Box className="ic" aria-hidden="true">
          {card.icon}
        </Box>
      ) : null}
      <Typography as="h3" className={TITLE_CLASS[titleSize]}>
        {card.title}
      </Typography>
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
export function BusinessCardItem({
  card,
  titleSize,
}: {
  card: BusinessCard;
  titleSize?: CardTitleSize;
}): ReactNode {
  if (!card.href) {
    return (
      <Box className="card">
        <CardBody card={card} titleSize={titleSize} />
      </Box>
    );
  }

  return (
    <Button
      href={card.href}
      external={card.external}
      className="card link"
    >
      <CardBody card={card} titleSize={titleSize} />
    </Button>
  );
}

/**
 * Heading + card grid. Used by home quick-access, home explore, quick-links,
 * external-links, admissions criteria, activities clubs and section detail.
 */
export default function BusinessCardGrid({
  eyebrow,
  heading,
  description,
  version = "4",
  cards,
  titleSize,
  className,
}: CardGridProps & { className?: string }) {
  return (
    <>
      <BusinessSectionHead
        eyebrow={eyebrow}
        heading={heading}
        description={description}
      />
      <Grid version={version} className={className}>
        {cards.map((card) => (
          <BusinessCardItem
            key={card.title + (card.href ?? "")}
            card={card}
            titleSize={titleSize}
          />
        ))}
      </Grid>
    </>
  );
}
