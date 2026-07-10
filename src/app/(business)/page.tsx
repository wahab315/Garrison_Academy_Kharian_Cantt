import NotificationTicker from "@/features/notification-ticker";
import HomeCtaBand from "@/ui/home/home.cta-band";
import HomeExplore from "@/ui/home/home.explore";
import HomeHero from "@/ui/home/home.hero";
import HomePrincipalMessage from "@/ui/home/home.principal-message";
import HomeQuickAccess from "@/ui/home/home.quick-access";
import { homeCtaBandContent } from "@/data/content/home/content.home-cta-band";
import { homeExploreContent } from "@/data/content/home/content.home-explore";
import { homeHeroContent } from "@/data/content/home/content.home-hero";
import { homePrincipalMessageContent } from "@/data/content/home/content.home-principal-message";
import { homeQuickAccessContent } from "@/data/content/home/content.home-quick-access";

export const metadata = {
  title: "Garrison Academy Kharian Cantt",
  description:
    "Academic excellence, discipline and character since 1985. Explore admissions for Session 2026, academic sections, scholarships and downloads.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero {...homeHeroContent} />
      <NotificationTicker />
      <HomeQuickAccess {...homeQuickAccessContent} />
      <HomePrincipalMessage {...homePrincipalMessageContent} />
      <HomeExplore {...homeExploreContent} />
      <HomeCtaBand {...homeCtaBandContent} />
    </>
  );
}
