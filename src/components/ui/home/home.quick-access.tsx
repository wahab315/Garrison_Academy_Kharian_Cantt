import BusinessCardGrid from "@/components/ui/business/business.card-grid";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";

export default function HomeQuickAccess(props: BusinessCardGridProps) {
  return (
    <BusinessSection tight>
      <BusinessCardGrid {...props} />
    </BusinessSection>
  );
}
