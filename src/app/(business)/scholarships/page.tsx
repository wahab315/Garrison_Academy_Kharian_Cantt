import PageHead from "@/features/page-head";
import ScholarshipsTabs from "@/ui/scholarships/scholarships.tabs";
import {
  scholarshipsEligibilityContent,
  scholarshipsHeaderContent,
  scholarshipsPolicyContent,
  scholarshipsStudentsContent,
  scholarshipsTabLabels,
  scholarshipsTeachersContent,
} from "@/data/content/scholarships/content.scholarships-tabs";

export const metadata = { title: "Scholarships & Incentives" };

export default function ScholarshipsPage() {
  const { crumb, eyebrow, heading, description } = scholarshipsHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <ScholarshipsTabs
        labels={scholarshipsTabLabels}
        policy={scholarshipsPolicyContent}
        eligibility={scholarshipsEligibilityContent}
        students={scholarshipsStudentsContent}
        teachers={scholarshipsTeachersContent}
      />
    </>
  );
}
