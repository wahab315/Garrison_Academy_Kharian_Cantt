import PageHead from "@/features/page-head";
import OrganogramChart from "@/ui/organogram/organogram.chart";
import {
  organogramChartsContent,
  organogramHeaderContent,
} from "@/data/content/organogram/content.organogram-charts";

export const metadata = { title: "Organogram" };

export default function OrganogramPage() {
  const { crumb, eyebrow, heading, description } = organogramHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <OrganogramChart charts={organogramChartsContent} />
    </>
  );
}
