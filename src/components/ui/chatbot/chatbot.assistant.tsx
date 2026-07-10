import Chatbot from "@/components/features/chatbot";
import BusinessNote from "@/components/ui/business/business.note";
import BusinessRichText from "@/components/ui/business/business.rich-text";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { RichText } from "@/data/types/type.business-rich-text";

export default function ChatbotAssistant({ note }: { note: RichText }) {
  return (
    <BusinessSection>
      <Chatbot />
      <BusinessNote className="mt2 chatbot__note">
        <BusinessRichText runs={note} />
      </BusinessNote>
    </BusinessSection>
  );
}
