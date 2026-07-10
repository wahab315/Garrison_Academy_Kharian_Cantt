import { notFound } from "next/navigation";
import SectionsDetail from "@/ui/sections/sections.detail";
import { SECTIONS, SECTION_KEYS, type SectionKey } from "@/data/sections";

export function generateStaticParams() {
  return SECTION_KEYS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const section = SECTIONS[slug as SectionKey];
  if (!section) return { title: "Page not found" };
  return { title: section.name, description: section.headMsg };
}

export default async function SectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = SECTIONS[slug as SectionKey];
  if (!data) notFound();
  return <SectionsDetail data={data} />;
}
