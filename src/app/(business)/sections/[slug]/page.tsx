import { notFound } from "next/navigation";
import SectionDetail from "@/components/SectionDetail";
import { SECTIONS, type SectionKey } from "@/data/sections";

export function generateStaticParams() {
  return (Object.keys(SECTIONS) as SectionKey[]).map((slug) => ({ slug }));
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
  return <SectionDetail data={data} />;
}
