import { Routes } from "@/data/routes";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";
import type { RichText } from "@/data/types/type.business-rich-text";

export const chatbotHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "Chatbot" }],
  eyebrow: "Ask GAK",
  heading: "GAK Assistant",
  description:
    "Instant answers to common queries — choose a level, then tap a question.",
} satisfies BusinessHeaderSectionProps;

export const chatbotNoteContent = [
  { text: "💬 The production chatbot ships with a " },
  { text: "level-wise library of ~1,000 pre-defined queries", bold: true },
  { text: " across sections; this prototype demonstrates the interaction." },
] satisfies RichText;
