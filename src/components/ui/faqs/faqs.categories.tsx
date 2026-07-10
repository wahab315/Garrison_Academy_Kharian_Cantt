import Box from "@/common/box";
import Accordion from "@/components/features/accordion";
import Tabs from "@/components/features/tabs";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { FaqCategory } from "@/data/faqs";

export default function FaqsCategories({
  categories,
}: {
  categories: Record<string, FaqCategory>;
}) {
  const items = Object.values(categories).map((category) => ({
    label: category.label,
    panel: (
      <Box className="faqs__panel">
        <Accordion items={category.items} />
      </Box>
    ),
  }));

  return (
    <BusinessSection>
      <Tabs items={items} centered />
    </BusinessSection>
  );
}
