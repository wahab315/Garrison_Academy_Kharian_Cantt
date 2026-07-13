import NotificationTicker from "@/features/notification-ticker";
import HomeHero from "@/ui/home/home.hero";
import HomeQuickAccess from "@/ui/home/home.quick-access";
import HomeWhyGak from "@/ui/home/home.why-gak";
import HomePathway from "@/ui/home/home.pathway";
import HomeStreams from "@/ui/home/home.streams";
import HomePrincipalMessage from "@/ui/home/home.principal-message";
import HomeCampusLife from "@/ui/home/home.campus-life";
import HomeScholarships from "@/ui/home/home.scholarships";
import HomeExplore from "@/ui/home/home.explore";
import HomeCtaBand from "@/ui/home/home.cta-band";
import { homeCampusLifeContent } from "@/data/content/home/content.home-campus-life";
import { homeCtaBandContent } from "@/data/content/home/content.home-cta-band";
import { homeExploreContent } from "@/data/content/home/content.home-explore";
import { homeHeroContent } from "@/data/content/home/content.home-hero";
import { homePathwayContent } from "@/data/content/home/content.home-pathway";
import { homePrincipalMessageContent } from "@/data/content/home/content.home-principal-message";
import { homeQuickAccessContent } from "@/data/content/home/content.home-quick-access";
import { homeScholarshipsContent } from "@/data/content/home/content.home-scholarships";
import { homeStreamsContent } from "@/data/content/home/content.home-streams";
import { homeWhyGakContent } from "@/data/content/home/content.home-why-gak";

export const metadata = {
  // `absolute` opts out of the root layout's "%s · Garrison Academy Kharian
  // Cantt" template, which would otherwise repeat the school's name twice.
  title: { absolute: "Garrison Academy Kharian Cantt" },
  description:
    "Academic excellence, discipline and character since 1985. Explore admissions, the seven academic sections, our FBISE and Cambridge streams, scholarships and more.",
};

/**
 * The home page as an admissions funnel: who we are (hero, start-here, why),
 * what we teach (pathway, streams), proof (principal, campus, scholarships),
 * then the full index and the closing call to apply.
 */
export default function HomePage() {
  return (
    <>
      <NotificationTicker />
      <HomeHero {...homeHeroContent} />
      <HomeQuickAccess {...homeQuickAccessContent} />
      <HomeWhyGak {...homeWhyGakContent} />
      <HomePathway {...homePathwayContent} />
      <HomeStreams {...homeStreamsContent} />
      <HomePrincipalMessage {...homePrincipalMessageContent} />
      <HomeCampusLife {...homeCampusLifeContent} />
      <HomeScholarships {...homeScholarshipsContent} />
      <HomeExplore {...homeExploreContent} />
      <HomeCtaBand {...homeCtaBandContent} />
    </>
  );
}
