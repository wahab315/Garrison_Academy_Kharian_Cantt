import Box from "@/common/box";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import { BusinessSection } from "@/components/ui/business/business.section";
import BusinessTable from "@/components/ui/business/business.table";
import type { BusinessRosterEntry } from "@/data/types/type.business-person";
import type { BusinessTableProps } from "@/data/types/type.business-table";

export default function AlumniLists({
  exStudents,
  topHolders,
}: {
  exStudents: { heading: string; entries: readonly BusinessRosterEntry[] };
  topHolders: BusinessTableProps;
}) {
  return (
    <BusinessSection>
      <Typography as="h3" classStyle="secondary" className="alumni__heading">
        {exStudents.heading}
      </Typography>

      <Grid version="3" className="alumni__roster">
        {exStudents.entries.map((entry) => (
          <Box className="alum" key={entry.name}>
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

      <Typography as="h3" classStyle="secondary" className="alumni__heading">
        {topHolders.heading}{" "}
        <Typography as="span" className="alumni__heading-note">
          {topHolders.description}
        </Typography>
      </Typography>

      <BusinessTable {...topHolders} />
    </BusinessSection>
  );
}
