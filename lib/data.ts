// Central content/data for GAK Campus website.
// In production these would be served from a CMS / admin panel.

export type MegaLink = { label: string; href: string; icon: string; desc: string };
export type NavItem =
  | { label: string; href: string }
  | { label: string; mega: MegaLink[]; grid2?: boolean; alignRight?: boolean };

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    mega: [
      { label: "About Us", href: "/about", icon: "H", desc: "History, founder & facilities" },
      { label: "Messages", href: "/messages", icon: "M", desc: "Chairman, VC & Principal" },
      { label: "Organogram", href: "/organogram", icon: "O", desc: "Academic & admin structure" },
      { label: "Alumni — AMULNI", href: "/alumni", icon: "A", desc: "Ex-GAK & position holders" },
    ],
  },
  {
    label: "Academics",
    grid2: true,
    mega: [
      { label: "Pre-School", href: "/sections/pre", icon: "P", desc: "Foundation years" },
      { label: "Junior Section", href: "#", icon: "J", desc: "Primary classes" },
      { label: "Middle Girls Section", href: "#", icon: "MG", desc: "Middle years — girls" },
      { label: "Middle Boys Section", href: "#", icon: "MB", desc: "Middle years — boys" },
      { label: "Senior Girls Section", href: "#", icon: "SG", desc: "Board classes — girls" },
      { label: "Senior Boys Section", href: "#", icon: "SB", desc: "Board classes — boys" },
      { label: "APSIS", href: "/sections/apsis", icon: "A", desc: "Cambridge stream" },
      { label: "Scholarships", href: "/scholarships", icon: "$", desc: "Incentives & policy" },
      { label: "Activities", href: "/activities", icon: "★", desc: "Sports & co-curricular" },
    ],
  },
  {
    label: "Admissions",
    mega: [
      { label: "Admissions", href: "/admissions", icon: "A", desc: "Apply online & criteria" },
      { label: "School Uniform", href: "/uniform", icon: "U", desc: "Summer & winter" },
      { label: "Downloads", href: "/downloads", icon: "↓", desc: "Forms, circulars, papers" },
      { label: "FAQs", href: "/faqs", icon: "?", desc: "Common questions" },
    ],
  },
  {
    label: "More",
    alignRight: true,
    mega: [
      { label: "HR & Careers", href: "/hr", icon: "HR", desc: "Staff hiring" },
      { label: "External Links", href: "/links", icon: "↗", desc: "LMS, FBISE, social" },
      { label: "Chatbot", href: "/chatbot", icon: "◎", desc: "Quick answers" },
      { label: "Feedback / Complaints", href: "/feedback", icon: "✎", desc: "We're listening" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export type SectionKey = "pre" | "middle" | "senior" | "apsis";
export type SectionData = {
  name: string;
  sub: string;
  head: string;
  headMsg: string;
  cambridge?: boolean;
  board?: boolean;
  extra?: string;
};

export const SECTIONS: Record<SectionKey, SectionData> = {
  pre: {
    name: "Pre-School",
    sub: "Foundation Years",
    head: "Mrs. Rabia Tariq",
    headMsg:
      "Our Pre-School nurtures curiosity through play-based, child-centred learning in a warm and secure environment.",
    extra: "Same structure followed for Junior Section.",
  },
  middle: {
    name: "Middle School",
    sub: "Classes VI – VIII",
    head: "Mr. Imran Shah",
    headMsg:
      "The middle years build strong academic foundations and study habits that carry students confidently into the board classes.",
  },
  senior: {
    name: "Senior School",
    sub: "FBISE — Classes IX – XII",
    head: "Mrs. Farah Naz",
    headMsg:
      "Our senior school delivers rigorous, board-focused teaching with consistent top results in FBISE examinations.",
    board: true,
  },
  apsis: {
    name: "APSIS",
    sub: "Cambridge International Stream",
    head: "Mr. Daniyal Rauf",
    headMsg:
      "APSIS offers a globally benchmarked Cambridge education, opening doors to universities at home and abroad.",
    cambridge: true,
  },
};

export const HOME_GRID: { href: string; label: string; icon: string; desc: string }[] = [
  { href: "/messages", label: "Messages", icon: "💬", desc: "Chairman, VC & Principal" },
  { href: "/about", label: "About Us", icon: "🏛️", desc: "History, founder & facilities" },
  { href: "/organogram", label: "Organogram", icon: "🗂️", desc: "Academic & admin structure" },
  { href: "/quick-links", label: "Quick Links", icon: "🔗", desc: "Section-wise information" },
  { href: "/scholarships", label: "Scholarships", icon: "🎓", desc: "Incentives & policy" },
  { href: "/uniform", label: "School Uniform", icon: "👔", desc: "Summer & winter" },
  { href: "/alumni", label: "Alumni", icon: "🌟", desc: "Ex-GAK & top holders" },
  { href: "/activities", label: "Activities", icon: "⚽", desc: "Sports & co-curricular" },
  { href: "/admissions", label: "Admissions", icon: "✎", desc: "Apply for Session 2026" },
  { href: "/hr", label: "HR & Careers", icon: "💼", desc: "Staff hiring" },
  { href: "/links", label: "External Links", icon: "↗", desc: "LMS, FBISE, social" },
  { href: "/faqs", label: "FAQs", icon: "❓", desc: "Common questions" },
  { href: "/chatbot", label: "Chatbot", icon: "◎", desc: "Instant answers" },
  { href: "/contact", label: "Contact Us", icon: "📍", desc: "Numbers, email, map" },
  { href: "/downloads", label: "Downloads", icon: "↓", desc: "Forms & circulars" },
  { href: "/feedback", label: "Feedback", icon: "✍️", desc: "Complaints & suggestions" },
];

export const FAQ_DATA: Record<string, { label: string; items: { q: string; a: string }[] }> = {
  gen: {
    label: "General",
    items: [
      { q: "What are the school timings?", a: "School operates Monday–Friday, 7:45 AM to 1:45 PM, with adjusted winter timings announced via circular." },
      { q: "Which streams does GAK offer?", a: "Two parallel streams — APSACS (FBISE national curriculum) and APSIS (Cambridge international)." },
      { q: "Is transport available?", a: "Yes, school transport covers major routes within and around Kharian Cantt. Details are shared at enrolment." },
    ],
  },
  fee: {
    label: "Fee",
    items: [
      { q: "How is the fee structured?", a: "Fees are charged quarterly. The full structure by class is provided in the prospectus and at the accounts office." },
      { q: "Are there sibling concessions?", a: "Concessions apply as per APSACS policy. Please confirm eligibility with the accounts department." },
    ],
  },
  adm: {
    label: "Admissions",
    items: [
      { q: "When do admissions open?", a: "Main admissions open in January–February for the new session. Mid-session seats are subject to availability." },
      { q: "Is there an entry test?", a: "Yes, for Class I and above. Pre-School admissions are based on an interaction only." },
    ],
  },
  exam: {
    label: "Examinations",
    items: [
      { q: "How many terms are there?", a: "The academic year is divided into terms with periodic assessments and two major examinations." },
      { q: "Where can I see datesheets?", a: "Examination schedules are published on each section page and in the Downloads area." },
    ],
  },
  hire: {
    label: "Hiring",
    items: [
      { q: "How do I apply for a teaching post?", a: "Apply through the Google Form linked in the HR & Careers section against the relevant vacancy." },
    ],
  },
  promo: {
    label: "Promotions",
    items: [
      { q: "What is the promotion criteria?", a: "Promotion is based on cumulative assessment, attendance and conduct, as detailed on each section's page." },
    ],
  },
};

export const CHAT_QA: Record<string, { label: string; qa: [string, string][] }> = {
  general: {
    label: "General",
    qa: [
      ["What are the school timings?", "School runs Mon–Fri, 7:45 AM–1:45 PM. Winter timings are announced via circular."],
      ["Which streams do you offer?", "Two streams — APSACS (FBISE) and APSIS (Cambridge international)."],
      ["Is transport available?", "Yes, transport covers major routes in and around Kharian Cantt."],
    ],
  },
  admission: {
    label: "Admissions",
    qa: [
      ["When do admissions open?", "Main admissions open Jan–Feb for the new session. Apply online from the Admissions page."],
      ["Is there an entry test?", "Yes, for Class I and above. Pre-School is interaction-based only."],
      ["What documents are needed?", "Birth certificate, previous result, B-form/CNIC copies and passport photos."],
    ],
  },
  fee: {
    label: "Fee",
    qa: [
      ["How is fee charged?", "Fees are billed quarterly. Full structure is in the prospectus and at accounts."],
      ["Are concessions available?", "Sibling and merit concessions apply per APSACS policy."],
    ],
  },
  exam: {
    label: "Exams",
    qa: [
      ["Where are datesheets shared?", "On each section page and in the Downloads area."],
      ["How are students assessed?", "Through term assessments plus two major examinations per year."],
    ],
  },
};
