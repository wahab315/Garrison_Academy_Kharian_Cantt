import Grid from "@/common/grid";
import Typography from "@/common/typography";
import { BusinessCardItem } from "@/components/ui/business/business.card-grid";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";
import type { ReactNode } from "react";

/**
 * Like BusinessCardGrid, but the eyebrow sits flush-left above the grid rather
 * than inside a centred `.sec-head`.
 */
export default function ExternalLinksGroup({
  eyebrow,
  version = "2",
  cards,
  spaced,
  children,
}: BusinessCardGridProps & { spaced?: boolean; children?: ReactNode }) {
  return (
    <>
      {eyebrow ? (
        <Typography as="span" classStyle="eyebrow">
          {eyebrow}
        </Typography>
      ) : null}
      <Grid
        version={version}
        className={`external-links__grid ${spaced ? "external-links__grid--spaced" : ""}`}
      >
        {cards.map((card) => (
          <BusinessCardItem key={card.title} card={card} />
        ))}
        {children}
      </Grid>
    </>
  );
}
