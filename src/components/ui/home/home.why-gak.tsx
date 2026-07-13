import HomeCardGrid from "@/components/ui/home/home.card-grid";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { HomeCardGridProps } from "@/data/types/type.home-card";

/** "Why Garrison Academy" — the value-proposition grid, on the alt paper. */
export default function HomeWhyGak(props: HomeCardGridProps) {
  return (
    <BusinessSection alt>
      <HomeCardGrid {...props} />
    </BusinessSection>
  );
}
