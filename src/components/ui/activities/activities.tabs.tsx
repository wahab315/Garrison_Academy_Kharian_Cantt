import Typography from "@/common/typography";
import Tabs from "@/components/features/tabs";
import BusinessCardGrid from "@/components/ui/business/business.card-grid";
import { BusinessSection } from "@/components/ui/business/business.section";
import BusinessTable from "@/components/ui/business/business.table";
import BusinessTileGrid from "@/components/ui/business/business.tile-grid";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";
import type { BusinessTableProps } from "@/data/types/type.business-table";
import type { BusinessTileGridProps } from "@/data/types/type.business-tile-grid";
import type { activitiesTabLabels } from "@/data/content/activities/content.activities-tabs";

export default function ActivitiesTabs({
  labels,
  academic,
  sports,
  clubs,
  competitions,
}: {
  labels: typeof activitiesTabLabels;
  academic: BusinessTileGridProps;
  sports: BusinessTileGridProps;
  clubs: BusinessCardGridProps;
  competitions: BusinessTableProps;
}) {
  return (
    <BusinessSection>
      <Tabs
        items={[
          { label: labels.academics, panel: <BusinessTileGrid {...academic} /> },
          { label: labels.sports, panel: <BusinessTileGrid {...sports} /> },
          {
            label: labels.coCurricular,
            panel: (
              <>
                <Typography as="h3" classStyle="secondary" className="activities__heading">
                  {clubs.heading}
                </Typography>
                <BusinessCardGrid
                  {...clubs}
                  heading={undefined}
                  titleSize="xxs"
                  className="activities__clubs"
                />
                <Typography as="h3" classStyle="secondary" className="activities__heading">
                  {competitions.heading}
                </Typography>
                <BusinessTable {...competitions} />
              </>
            ),
          },
        ]}
      />
    </BusinessSection>
  );
}
