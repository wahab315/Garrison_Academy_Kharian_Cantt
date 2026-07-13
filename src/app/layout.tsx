import type { Metadata } from "next";
import {
  Cinzel,
  Fraunces,
  Instrument_Sans,
  Noto_Naskh_Arabic,
} from "next/font/google";
import "@/styles/main.scss";

// Display voice: headings only. `opsz` lets Fraunces set optically larger at
// the big sizes, which is what separates it from the body face at a glance.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});
// Inscription voice: eyebrows, stat labels, numerals. Echoes the crest lettering.
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});
// Body / UI voice. Replaces Inter -- Instrument Sans carries more character
// against Fraunces, so the page no longer reads as one undifferentiated face.
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500", "700"],
  variable: "--font-naskh",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Garrison Academy Kharian Cantt",
    template: "%s · Garrison Academy Kharian Cantt",
  },
  description:
    "Garrison Academy Kharian Cantt — academic excellence, discipline and character since 1985. Admissions, sections, scholarships, downloads and more.",
  metadataBase: new URL("https://garrisonacademy.edu.pk"),
  openGraph: {
    title: "Garrison Academy Kharian Cantt",
    description: "Knowledge, discipline and character since 1985.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cinzel.variable} ${sans.variable} ${naskh.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
