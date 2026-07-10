import PageHead from "@/components/PageHead";
import Chatbot from "@/components/Chatbot";

export const metadata = { title: "Chatbot" };

export default function ChatbotPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Chatbot" }]} eyebrow="Ask GAK" title="GAK Assistant" intro="Instant answers to common queries — choose a level, then tap a question." />
      <div className="sec"><div className="wrap"><Chatbot /></div></div>
    </>
  );
}
