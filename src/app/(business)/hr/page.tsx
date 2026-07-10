import PageHead from "@/features/page-head";
import HrOpenings from "@/ui/hr/hr.openings";
import { hrHeaderContent } from "@/data/content/hr/content.hr-header";
import { hrOpeningsContent, hrPanelsContent } from "@/data/content/hr/content.hr-openings";

export const metadata = { title: "HR & Careers" };

export default function HrPage() {
  const { crumb, eyebrow, heading, description } = hrHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <HrOpenings openings={hrOpeningsContent} panels={hrPanelsContent} />
    </>
  );
}
