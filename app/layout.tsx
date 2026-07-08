import type { Metadata } from "next";
import { Cinzel, Fraunces, Inter, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cinzel",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      className={`${fraunces.variable} ${cinzel.variable} ${inter.variable} ${naskh.variable}`}
    >
      <body>
        <ToastProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
