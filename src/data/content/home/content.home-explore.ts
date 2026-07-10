import { Routes } from "@/data/routes";
import type { BusinessCardGridProps } from "@/data/types/type.business-card-grid";

export const homeExploreContent = {
  eyebrow: "Explore the Campus",
  heading: "Everything about GAK, in one place.",
  description:
    "Browse every section of the school — from messages and academics to admissions, alumni and downloads.",
  version: "4",
  centered: true,
  cards: [
    { href: Routes.messages, title: "Messages", icon: "💬", desc: "Chairman, VC & Principal", cta: "Open →" },
    { href: Routes.about, title: "About Us", icon: "🏛️", desc: "History, founder & facilities", cta: "Open →" },
    { href: Routes.organogram, title: "Organogram", icon: "🗂️", desc: "Academic & admin structure", cta: "Open →" },
    { href: Routes.quickLinks, title: "Quick Links", icon: "🔗", desc: "Section-wise information", cta: "Open →" },
    { href: Routes.scholarships, title: "Scholarships", icon: "🎓", desc: "Incentives & policy", cta: "Open →" },
    { href: Routes.uniform, title: "School Uniform", icon: "👔", desc: "Summer & winter", cta: "Open →" },
    { href: Routes.alumni, title: "Alumni", icon: "🌟", desc: "Ex-GAK & top holders", cta: "Open →" },
    { href: Routes.activities, title: "Activities", icon: "⚽", desc: "Sports & co-curricular", cta: "Open →" },
    { href: Routes.admissions, title: "Admissions", icon: "✎", desc: "Apply for Session 2026", cta: "Open →" },
    { href: Routes.hr, title: "HR & Careers", icon: "💼", desc: "Staff hiring", cta: "Open →" },
    { href: Routes.externalLinks, title: "External Links", icon: "↗", desc: "LMS, FBISE, social", cta: "Open →" },
    { href: Routes.faqs, title: "FAQs", icon: "❓", desc: "Common questions", cta: "Open →" },
    { href: Routes.chatbot, title: "Chatbot", icon: "◎", desc: "Instant answers", cta: "Open →" },
    { href: Routes.contact, title: "Contact Us", icon: "📍", desc: "Numbers, email, map", cta: "Open →" },
    { href: Routes.downloads, title: "Downloads", icon: "↓", desc: "Forms & circulars", cta: "Open →" },
    { href: Routes.feedback, title: "Feedback", icon: "✍️", desc: "Complaints & suggestions", cta: "Open →" },
  ],
} satisfies BusinessCardGridProps;
