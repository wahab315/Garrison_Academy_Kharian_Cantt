import Box from "@/common/box";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import type { GridVersion } from "@/common/grid";
import type { BusinessRosterProps } from "@/data/types/type.business-person";
import { BusinessSectionHead } from "@/components/ui/business/business.section";

/** Compact avatar + name + one-line detail. Alumni list and section faculty. */
export default function BusinessRoster({
  eyebrow,
  heading,
  description,
  entries,
  version = "3",
  className,
}: BusinessRosterProps & { version?: GridVersion; className?: string }) {
  return (
    <>
      <BusinessSectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <Grid version={version} className={className}>
        {entries.map((entry) => (
          <Box className="alum" key={entry.name + entry.detail}>
            <Box className="ph" aria-hidden="true">
              {entry.initials}
            </Box>
            <Box>
              <Typography as="span" className="nm">
                {entry.name}
              </Typography>
              <Typography as="span" className="ps">
                {entry.detail}
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
}
