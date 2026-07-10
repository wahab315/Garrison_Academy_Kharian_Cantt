import PageHead from "@/features/page-head";
import { BusinessSection } from "@/ui/business/business.section";
import ExternalLinksGroup from "@/ui/external-links/external-links.group";
import ExternalLinksSocialCard from "@/ui/external-links/external-links.social-card";
import { externalLinksHeaderContent } from "@/data/content/external-links/content.external-links-header";
import {
  externalLinksAisContent,
  externalLinksImportantContent,
  externalLinksSocialContent,
} from "@/data/content/external-links/content.external-links-groups";

export const metadata = { title: "Important & External Links" };

export default function ExternalLinksPage() {
  const { crumb, eyebrow, heading, description } = externalLinksHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <BusinessSection>
        <ExternalLinksGroup {...externalLinksAisContent} spaced />
        <ExternalLinksGroup {...externalLinksImportantContent}>
          <ExternalLinksSocialCard {...externalLinksSocialContent} />
        </ExternalLinksGroup>
      </BusinessSection>
    </>
  );
}
