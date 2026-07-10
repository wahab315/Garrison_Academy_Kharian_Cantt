import PageHead from "@/features/page-head";
import FaqsCategories from "@/ui/faqs/faqs.categories";
import { faqsHeaderContent } from "@/data/content/faqs/content.faqs-header";
import { FAQ_DATA } from "@/data/faqs";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  const { crumb, eyebrow, heading, description } = faqsHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <FaqsCategories categories={FAQ_DATA} />
    </>
  );
}
