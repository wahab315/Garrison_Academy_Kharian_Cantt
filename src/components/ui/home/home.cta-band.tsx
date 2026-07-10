import BusinessCtaBand from "@/components/ui/business/business.cta-band";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { BusinessCtaBandProps } from "@/data/types/type.business-cta-band";

export default function HomeCtaBand(props: BusinessCtaBandProps) {
  return (
    <BusinessSection tight>
      <BusinessCtaBand {...props} />
    </BusinessSection>
  );
}
