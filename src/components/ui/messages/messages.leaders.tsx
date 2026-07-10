import Grid from "@/common/grid";
import BusinessNote from "@/components/ui/business/business.note";
import { BusinessPersonCard } from "@/components/ui/business/business.person-grid";
import BusinessRichText from "@/components/ui/business/business.rich-text";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { BusinessPerson } from "@/data/types/type.business-person";
import type { RichText } from "@/data/types/type.business-rich-text";

export default function MessagesLeaders({
  leaders,
  note,
}: {
  leaders: readonly BusinessPerson[];
  note: RichText;
}) {
  return (
    <BusinessSection>
      <Grid className="messages__grid">
        {leaders.map((leader) => (
          <BusinessPersonCard key={leader.name} person={leader} />
        ))}
      </Grid>
      <BusinessNote className="mt2">
        <BusinessRichText runs={note} />
      </BusinessNote>
    </BusinessSection>
  );
}
