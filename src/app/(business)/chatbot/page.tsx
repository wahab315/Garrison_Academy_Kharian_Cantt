import PageHead from "@/features/page-head";
import ChatbotAssistant from "@/ui/chatbot/chatbot.assistant";
import {
  chatbotHeaderContent,
  chatbotNoteContent,
} from "@/data/content/chatbot/content.chatbot-header";

export const metadata = { title: "Chatbot" };

export default function ChatbotPage() {
  const { crumb, eyebrow, heading, description } = chatbotHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <ChatbotAssistant note={chatbotNoteContent} />
    </>
  );
}
