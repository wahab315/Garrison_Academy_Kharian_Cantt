import Box from "@/common/box";
import Button from "@/common/button";
import Lines from "@/common/lines";
import Typography from "@/common/typography";
import { Reveal, RevealGroup, RevealItem } from "@/common/reveal";
import { BusinessSection } from "@/components/ui/business/business.section";
import IconLaurel from "@/assets/home/icon.laurel";
import { HomeIcons } from "@/assets/home";
import { homeScholarshipsContent } from "@/data/content/home/content.home-scholarships";

export type HomeScholarshipsProps = typeof homeScholarshipsContent;

/** The scholarships band: a dark, crest-backed panel around a single message. */
export default function HomeScholarships({
  eyebrow,
  heading,
  description,
  highlights,
  cta,
}: HomeScholarshipsProps) {
  return (
    <BusinessSection>
      <Reveal>
        <Box className="schol">
          <IconLaurel className="schol__laurel" />
          <Box className="schol__intro">
            <Typography as="span" classStyle="eyebrow" className="schol__eyebrow">
              {eyebrow}
            </Typography>
            <Typography as="h2" classStyle="primary" className="schol__heading">
              <Lines text={heading} />
            </Typography>
            <Typography as="p" className="schol__desc">
              {description}
            </Typography>
            <Button classStyle="primary" href={cta.href} className="schol__cta">
              {cta.label}
            </Button>
          </Box>

          <RevealGroup as="ul" className="schol__list">
            {highlights.map((item) => {
              const Icon = HomeIcons[item.icon];
              return (
                <RevealItem as="li" key={item.title} className="schol__item">
                  <Box className="schol__ic" aria-hidden="true">
                    <Icon />
                  </Box>
                  <Box>
                    <Typography as="span" className="schol__item-title">
                      {item.title}
                    </Typography>
                    <Typography as="p" className="schol__item-desc">
                      {item.desc}
                    </Typography>
                  </Box>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </Box>
      </Reveal>
    </BusinessSection>
  );
}
