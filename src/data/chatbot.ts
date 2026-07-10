export type ChatCategory = { label: string; qa: [question: string, answer: string][] };

export const CHAT_QA: Record<string, ChatCategory> = {
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
