import PageHead from "@/features/page-head";
import ActivitiesTabs from "@/ui/activities/activities.tabs";
import {
  activitiesAcademicContent,
  activitiesClubsContent,
  activitiesCompetitionsContent,
  activitiesHeaderContent,
  activitiesSportsContent,
  activitiesTabLabels,
} from "@/data/content/activities/content.activities-tabs";

export const metadata = { title: "Activities" };

export default function ActivitiesPage() {
  const { crumb, eyebrow, heading, description } = activitiesHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <ActivitiesTabs
        labels={activitiesTabLabels}
        academic={activitiesAcademicContent}
        sports={activitiesSportsContent}
        clubs={activitiesClubsContent}
        competitions={activitiesCompetitionsContent}
      />
    </>
  );
}
