import HomeCardGrid from "@/components/ui/home/home.card-grid";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { HomeCardGridProps } from "@/data/types/type.home-card";

/** "Start here" — the four things parents reach for first. */
export default function HomeQuickAccess(props: HomeCardGridProps) {
  return (
    <BusinessSection>
      <HomeCardGrid {...props} />
    </BusinessSection>
  );
}
