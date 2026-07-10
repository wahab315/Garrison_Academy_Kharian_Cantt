export type ContactRow = {
  icon: string;
  label: string;
  value: string;
  /** Secondary line rendered under the value. */
  sub?: string;
};

export type ContactGroup = { eyebrow: string; rows: readonly ContactRow[] };

export const contactDetailsContent: readonly ContactGroup[] = [
  {
    eyebrow: "Phone",
    rows: [
      { icon: "☎", label: "Landline", value: "053-9240263" },
      { icon: "📱", label: "Mobile / WhatsApp", value: "0330-425 (GAK) 0111" },
    ],
  },
  {
    eyebrow: "Email",
    rows: [
      { icon: "✉", label: "Principal", value: "info@garrisonacademy.edu.pk" },
      { icon: "✉", label: "Vice Principal", value: "info@garrisonacademy.edu.pk" },
      { icon: "✉", label: "Admissions / Departments", value: "info@garrisonacademy.edu.pk", sub: "All sections & departments" },
    ],
  },
  {
    eyebrow: "Campus Locations",
    rows: [
      { icon: "🏫", label: "Main Campus", value: "Garrison Academy Kharian Cantt", sub: "Gujrat, Punjab" },
      { icon: "🧸", label: "Pre-School", value: "Garrison Academy Pre-School Block", sub: "Kharian Cantt" },
    ],
  },
];

export const contactMapContent = {
  pin: "📍",
  title: "Garrison Academy Kharian Cantt",
  note: "Interactive map — Google Maps embed in production",
} as const;
