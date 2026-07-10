import Box from "@/common/box";
import Button from "@/common/button";
import Lines from "@/common/lines";
import Typography from "@/common/typography";
import type { BusinessCtaBandProps } from "@/data/types/type.business-cta-band";

/** The dark rounded band with a single call to action. */
export default function BusinessCtaBand({
  eyebrow,
  heading,
  description,
  cta,
}: BusinessCtaBandProps) {
  return (
    <Box className="ctaband">
      <Typography as="span" classStyle="eyebrow" className="ctaband__eyebrow">
        {eyebrow}
      </Typography>
      <Typography as="h2" classStyle="primary" className="mt ctaband__heading">
        <Lines text={heading} />
      </Typography>
      <Typography as="p">{description}</Typography>
      <Button classStyle="primary" href={cta.href}>
        {cta.label}
      </Button>
    </Box>
  );
}
