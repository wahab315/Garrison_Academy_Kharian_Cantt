import Box from "@/common/box";
import Button from "@/common/button";
import Typography from "@/common/typography";
import { Reveal, RevealGroup, RevealItem } from "@/common/reveal";
import { BusinessSection, BusinessSectionHead } from "@/components/ui/business/business.section";
import { HomeIcons } from "@/assets/home";
import IconCheck from "@/assets/home/icon.check";
import { homeStreamsContent } from "@/data/content/home/content.home-streams";

export type HomeStreamsProps = typeof homeStreamsContent;

/** The two curriculum streams, shown side by side so the choice is legible. */
export default function HomeStreams({
  eyebrow,
  heading,
  description,
  streams,
}: HomeStreamsProps) {
  return (
    <BusinessSection>
      <Reveal>
        <BusinessSectionHead
          eyebrow={eyebrow}
          heading={heading}
          description={description}
        />
      </Reveal>

      <RevealGroup className="streams">
        {streams.map((stream) => {
          const Icon = HomeIcons[stream.icon];
          return (
            <RevealItem key={stream.name} className="stream">
              <Box className="stream__head">
                <Box className="stream__ic" aria-hidden="true">
                  <Icon />
                </Box>
                <Box>
                  <Typography as="span" className="stream__tag">
                    {stream.tag}
                  </Typography>
                  <Typography as="h3" className="stream__name">
                    {stream.name}
                  </Typography>
                </Box>
              </Box>

              <Typography as="p" className="stream__desc">
                {stream.description}
              </Typography>

              <Box as="ul" className="stream__points">
                {stream.points.map((point) => (
                  <Box as="li" key={point}>
                    <IconCheck className="stream__check" />
                    <span>{point}</span>
                  </Box>
                ))}
              </Box>

              <Button classStyle="chip" href={stream.cta.href} className="stream__cta">
                {stream.cta.label}
                <span aria-hidden="true">→</span>
              </Button>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </BusinessSection>
  );
}
