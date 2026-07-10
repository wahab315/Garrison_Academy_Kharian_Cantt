import Box from "@/common/box";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import BusinessProse from "@/components/ui/business/business.prose";
import BusinessSteps from "@/components/ui/business/business.steps";
import BusinessTable from "@/components/ui/business/business.table";
import type { BusinessStep } from "@/components/ui/business/business.steps";
import type { BusinessTableProps } from "@/data/types/type.business-table";
import type {
  admissionsCriteriaContent,
  admissionsCriteriaLists,
} from "@/data/content/admissions/content.admissions-page";

export default function AdmissionsInfo({
  process,
  criteria,
  criteriaLists,
  schedule,
}: {
  process: { heading: string; steps: readonly BusinessStep[] };
  criteria: typeof admissionsCriteriaContent;
  criteriaLists: typeof admissionsCriteriaLists;
  schedule: BusinessTableProps;
}) {
  const lists = [criteriaLists.board, criteriaLists.nonBoard];

  return (
    <Box>
      <Typography as="h3" classStyle="secondary" className="admissions__heading">
        {process.heading}
      </Typography>
      <BusinessSteps steps={process.steps} className="admissions__steps" />

      <Typography as="h3" classStyle="secondary" className="admissions__heading--tight">
        {criteria.heading}
      </Typography>
      <Grid version="2" className="admissions__criteria">
        {criteria.cards.map((card, i) => (
          <Box className="card" key={card.title}>
            <Typography as="h3" className="card__title--xxs">
              {card.title}
            </Typography>
            <BusinessProse className="mt" blocks={[{ kind: "list", items: lists[i] }]} />
          </Box>
        ))}
      </Grid>

      <Typography as="h3" classStyle="secondary" className="admissions__heading--tight">
        {schedule.heading}
      </Typography>
      <BusinessTable {...schedule} />
    </Box>
  );
}
