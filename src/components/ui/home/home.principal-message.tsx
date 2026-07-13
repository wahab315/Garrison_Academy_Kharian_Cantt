import Image from "next/image";
import Box from "@/common/box";
import Button from "@/common/button";
import Lines from "@/common/lines";
import Typography from "@/common/typography";
import { Reveal } from "@/common/reveal";
import { BusinessSection } from "@/components/ui/business/business.section";
import IconTorch from "@/assets/home/icon.torch";
import { homePrincipalMessageContent } from "@/data/content/home/content.home-principal-message";

export type HomePrincipalMessageProps = typeof homePrincipalMessageContent;

/** The Principal's message: portrait beside a short, personal note. */
export default function HomePrincipalMessage({
  eyebrow,
  heading,
  message,
  principal,
  cta,
}: HomePrincipalMessageProps) {
  return (
    <BusinessSection alt containerClassName="principal">
      <Reveal className="principal__media">
        <Box className="principal__frame">
          <Image
            src={principal.image}
            alt={principal.imageAlt}
            fill
            sizes="(max-width: 840px) 100vw, 40vw"
            className="principal__img"
          />
        </Box>
        <Box className="principal__plate">
          <IconTorch className="principal__mark" />
          <Box>
            <Typography as="span" className="principal__name">
              {principal.name}
            </Typography>
            <Typography as="span" className="principal__role">
              {principal.role}
            </Typography>
          </Box>
        </Box>
      </Reveal>

      <Reveal className="principal__body">
        <Typography as="span" classStyle="eyebrow">
          {eyebrow}
        </Typography>
        <Typography as="h2" classStyle="primary" className="principal__heading">
          <Lines text={heading} />
        </Typography>
        {message.map((para) => (
          <Typography as="p" key={para.slice(0, 32)} className="principal__para">
            {para}
          </Typography>
        ))}
        <Button classStyle="primary" href={cta.href} className="principal__cta">
          {cta.label}
        </Button>
      </Reveal>
    </BusinessSection>
  );
}
