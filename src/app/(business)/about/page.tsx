import PageHead from "@/features/page-head";
import AboutTabs from "@/ui/about/about.tabs";
import {
  aboutConductContent,
  aboutFacilitiesContent,
  aboutFounderContent,
  aboutHeaderContent,
  aboutHistoryContent,
  aboutMilestonesContent,
  aboutPrincipalsContent,
  aboutTabLabels,
} from "@/data/content/about/content.about-tabs";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  const { crumb, eyebrow, heading, description } = aboutHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <AboutTabs
        labels={aboutTabLabels}
        history={aboutHistoryContent}
        milestones={aboutMilestonesContent}
        founder={aboutFounderContent}
        principals={aboutPrincipalsContent}
        conduct={aboutConductContent}
        facilities={aboutFacilitiesContent}
      />
    </>
  );
}
