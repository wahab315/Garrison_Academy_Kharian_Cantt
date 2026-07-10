import PageHead from "@/features/page-head";
import Chatbot from "@/features/chatbot";

export const metadata = { title: "Chatbot" };

export default function ChatbotPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Chatbot" }]} eyebrow="Ask GAK" title="GAK Assistant" intro="Instant answers to common queries — choose a level, then tap a question." />
      <div className="sec"><div className="wrap">
        <Chatbot />
        <div className="note-box mt2 chatbot__note">
          💬 The production chatbot ships with a <b>level-wise library of ~1,000 pre-defined queries</b> across sections; this prototype demonstrates the interaction.
        </div>
      </div></div>
    </>
  );
}
