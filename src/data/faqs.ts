export type FaqItem = { q: string; a: string };
export type FaqCategory = { label: string; items: readonly FaqItem[] };

export const FAQ_DATA = {
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
} satisfies Record<string, FaqCategory>;
