import HomeCardGrid from "@/components/ui/home/home.card-grid";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { HomeCardGridProps } from "@/data/types/type.home-card";

/** The full 16-tile site index. Compact variant so the grid stays scannable. */
export default function HomeExplore(props: HomeCardGridProps) {
  return (
    <BusinessSection alt>
      <HomeCardGrid {...props} variant="compact" />
    </BusinessSection>
  );
}
