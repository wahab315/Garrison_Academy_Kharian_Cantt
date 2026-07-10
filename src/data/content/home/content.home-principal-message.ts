import { Routes } from "@/data/routes";
import type { BusinessStat } from "@/data/types/type.business-stats";
import type { RichText } from "@/data/types/type.business-rich-text";

export const homePrincipalMessageContent = {
  eyebrow: "From the Principal's Desk",
  heading: "Building character before\nbuilding careers.",
  description:
    "At Garrison Academy Kharian Cantt, we believe education is more than examinations. The ability to reason with clarity, to lead with character, and to embrace change with resilience will remain timeless — that is the character we build before careers.",
  principal: { initials: "SR", name: "Mrs Shahida Rehman", role: "Principal GAK" },
  cta: { label: "Read all messages", href: Routes.messages },
  stats: [
    { value: "40", label: "Years of service" },
    { value: "98%", label: "Board pass rate" },
    { value: "26", label: "Clubs & societies" },
    { value: "12", label: "Sports disciplines" },
  ] satisfies BusinessStat[],
  note: [
    { text: "🎓 GAK runs two parallel streams — " },
    { text: "APSACS (FBISE)", bold: true },
    { text: " and " },
    { text: "APSIS (Cambridge)", bold: true },
    { text: " — under one disciplined campus culture." },
  ] satisfies RichText,
} as const;
