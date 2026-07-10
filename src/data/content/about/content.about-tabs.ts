import { Routes } from "@/data/routes";
import type { ProseBlock } from "@/components/ui/business/business.prose";
import type { BusinessHeaderSectionProps } from "@/data/types/type.business-header-section";
import type { BusinessPerson } from "@/data/types/type.business-person";
import type { BusinessTileGridProps } from "@/data/types/type.business-tile-grid";

export const aboutHeaderContent = {
  crumb: [{ label: "Home", href: Routes.home }, { label: "About Us" }],
  eyebrow: "Our Story",
  heading: "About Garrison Academy Kharian Cantt",
  description:
    "Four decades of educating Kharian Cantt — heritage, leadership, conduct and facilities.",
} satisfies BusinessHeaderSectionProps;

export const aboutTabLabels = {
  history: "History",
  founder: "The Founder",
  principals: "Principals",
  conduct: "Code of Conduct",
  facilities: "Facilities",
} as const;

export const aboutHistoryContent: readonly ProseBlock[] = [
  { kind: "heading", text: "A legacy since 1985" },
  {
    kind: "paragraph",
    text: "Established in 1985 within Kharian Cantonment, Garrison Academy Kharian Cantt began as a modest institution serving the families of the garrison. Over four decades it has grown into one of the region's most respected schools, educating thousands of students across Pre-School, Middle, Senior and the Cambridge-aligned APSIS stream.",
  },
  {
    kind: "paragraph",
    text: "Today the campus operates under the umbrella of the Army Public Schools & Colleges System (APSACS), combining the discipline of a cantonment institution with modern, child-centred pedagogy.",
  },
];

export const aboutMilestonesContent = {
  icon: "🏛️",
  title: "Milestones",
  items: [
    [{ text: "1985", bold: true }, { text: " — Campus founded in Kharian Cantt" }],
    [{ text: "1998", bold: true }, { text: " — Senior School & FBISE affiliation" }],
    [{ text: "2011", bold: true }, { text: " — APSIS Cambridge stream launched" }],
    [{ text: "2020", bold: true }, { text: " — ICT labs & digital LMS introduced" }],
  ],
} as const;

export const aboutFounderContent = {
  person: { initials: "FP", name: "Lt Col (R) Iftikhar Ahmed", role: "Founder Principal" } satisfies BusinessPerson,
  prose: [
    { kind: "heading", text: "The founding vision" },
    {
      kind: "paragraph",
      text: "The campus owes its foundation to Lt Col (R) Iftikhar Ahmed, whose conviction that quality education should be available to every garrison family shaped GAK's enduring ethos. Under his leadership the school's first building, library and assembly traditions were established.",
    },
    {
      kind: "paragraph",
      text: "His emphasis on discipline tempered with compassion remains the cultural cornerstone of Garrison Academy Kharian Cantt to this day.",
    },
  ] satisfies ProseBlock[],
} as const;

export const aboutPrincipalsContent = {
  lead: "Photographs, names and tenure of every Principal who has led Garrison Academy Kharian Cantt.",
  people: [
    { initials: "IA", name: "Lt Col (R) Iftikhar Ahmed", role: "1985 – 1996" },
    { initials: "NB", name: "Col (R) Nadeem Baig", role: "1996 – 2008" },
    { initials: "RF", name: "Brig (R) Rukhsana Farooq", role: "2008 – 2019" },
    { initials: "AK", name: "Brig (R) Asad Khan", role: "2019 – Present" },
  ] satisfies BusinessPerson[],
} as const;

export const aboutConductContent = {
  prose: [
    { kind: "heading", text: "General rules & regulations" },
    {
      kind: "paragraph",
      text: "The GAK code of conduct ensures a safe, respectful and focused learning environment for every member of the campus community.",
    },
    {
      kind: "list",
      items: [
        "Punctuality and full attendance in proper uniform are expected daily.",
        "Respect for teachers, staff, peers and campus property is non-negotiable.",
        "Mobile phones and electronic devices are not permitted during school hours.",
        "Bullying, harassment and dishonesty of any form result in disciplinary action.",
        "Students must observe Islamic and national values with dignity and tolerance.",
        "Parents are partners — regular PTM attendance is strongly encouraged.",
      ],
    },
  ] satisfies ProseBlock[],
  note: {
    before: "📘 The full code of conduct handbook is available in the ",
    link: { label: "Downloads", href: Routes.downloads },
    after: " section.",
  },
} as const;

export const aboutFacilitiesContent = {
  lead: "Purpose-built spaces that support academics, creativity and well-being.",
  version: "3",
  tiles: [
    { icon: "💻", title: "ICT Labs", desc: "Modern computer labs with high-speed internet for digital learning and coding." },
    { icon: "🔬", title: "Science Laboratories", desc: "Fully equipped Physics, Chemistry and Biology labs for hands-on experiments." },
    { icon: "📚", title: "Library", desc: "A well-stocked library with reference, fiction and digital resources." },
    { icon: "🎨", title: "Art & Music Room", desc: "Dedicated studios nurturing creativity in visual and performing arts." },
    { icon: "⚽", title: "Sports Grounds", desc: "Cricket, football, hockey grounds and an athletics track." },
    { icon: "🧩", title: "Activity Rooms", desc: "Flexible spaces for clubs, societies and early-years play-based learning." },
  ],
} satisfies BusinessTileGridProps & { lead: string };
