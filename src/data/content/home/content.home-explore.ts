import { Routes } from "@/data/routes";
import type { HomeCardGridProps } from "@/data/types/type.home-card";

export const homeExploreContent = {
  eyebrow: "Everything else",
  heading: "The whole school,\none page away.",
  description:
    "Every section of the site, in one place — from leadership messages and academics to careers, downloads and feedback.",
  version: "4",
  cards: [
    { href: Routes.messages, icon: "messages", title: "Messages", desc: "From the Chairman, VC and Principal" },
    { href: Routes.about, icon: "about", title: "About Us", desc: "History, founder and facilities" },
    { href: Routes.organogram, icon: "organogram", title: "Organogram", desc: "Academic and admin structure" },
    { href: Routes.quickLinks, icon: "quickLinks", title: "Quick Links", desc: "Section-wise information" },
    { href: Routes.scholarships, icon: "scholarship", title: "Scholarships", desc: "Incentives and policy" },
    { href: Routes.uniform, icon: "uniform", title: "School Uniform", desc: "Summer and winter" },
    { href: Routes.alumni, icon: "alumni", title: "Alumni", desc: "Ex-GAK and position holders" },
    { href: Routes.activities, icon: "sports", title: "Activities", desc: "Sports and co-curricular" },
    { href: Routes.admissions, icon: "admissions", title: "Admissions", desc: "Apply for the new session" },
    { href: Routes.hr, icon: "hr", title: "HR & Careers", desc: "Teaching and staff vacancies" },
    { href: Routes.externalLinks, icon: "external", title: "External Links", desc: "LMS, FBISE and social" },
    { href: Routes.faqs, icon: "faqs", title: "FAQs", desc: "Questions we hear often" },
    { href: Routes.chatbot, icon: "chatbot", title: "Chatbot", desc: "Quick answers, any time" },
    { href: Routes.contact, icon: "contact", title: "Contact Us", desc: "Numbers, email and map" },
    { href: Routes.downloads, icon: "downloads", title: "Downloads", desc: "Forms and circulars" },
    { href: Routes.feedback, icon: "feedback", title: "Feedback", desc: "Complaints and suggestions" },
  ],
} satisfies HomeCardGridProps;
