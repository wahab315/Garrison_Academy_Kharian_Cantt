import Box from "@/common/box";
import Button from "@/common/button";
import Lines from "@/common/lines";
import Typography from "@/common/typography";
import BusinessNote from "@/components/ui/business/business.note";
import BusinessRichText from "@/components/ui/business/business.rich-text";
import { BusinessSection } from "@/components/ui/business/business.section";
import BusinessStats from "@/components/ui/business/business.stats";
import type { homePrincipalMessageContent } from "@/data/content/home/content.home-principal-message";

export type HomePrincipalMessageProps = typeof homePrincipalMessageContent;

export default function HomePrincipalMessage({
  eyebrow,
  heading,
  description,
  principal,
  cta,
  stats,
  note,
}: HomePrincipalMessageProps) {
  return (
    <BusinessSection alt containerClassName="split">
      <Box>
        <Typography as="span" classStyle="eyebrow">
          {eyebrow}
        </Typography>
        <Typography as="h2" classStyle="primary" className="mt">
          <Lines text={heading} />
        </Typography>
        <Typography as="p" classStyle="large" className="mt">
          {description}
        </Typography>

        <Box className="mt2 home-principal__byline">
          <Box className="person person--inline">
            <Box className="ph" aria-hidden="true">
              {principal.initials}
            </Box>
          </Box>
          <Box>
            <Typography as="span" className="home-principal__name">
              {principal.name}
            </Typography>
            <Typography as="span" className="home-principal__role">
              {principal.role}
            </Typography>
          </Box>
        </Box>

        <Button classStyle="primary" className="mt2 home-principal__cta" href={cta.href}>
          {cta.label}
        </Button>
      </Box>

      <Box>
        <BusinessStats stats={stats} compact />
        <BusinessNote className="mt">
          <BusinessRichText runs={note} />
        </BusinessNote>
      </Box>
    </BusinessSection>
  );
}
