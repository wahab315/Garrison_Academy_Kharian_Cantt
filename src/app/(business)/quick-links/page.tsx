import PageHead from "@/features/page-head";
import QuickLinksSections from "@/ui/quick-links/quick-links.sections";
import { quickLinksHeaderContent } from "@/data/content/quick-links/content.quick-links-header";
import { quickLinksSectionsContent } from "@/data/content/quick-links/content.quick-links-sections";

export const metadata = { title: "Quick Links" };

export default function QuickLinksPage() {
  const { crumb, eyebrow, heading, description } = quickLinksHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <QuickLinksSections {...quickLinksSectionsContent} />
    </>
  );
}
