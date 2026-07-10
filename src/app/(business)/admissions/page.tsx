import Box from "@/common/box";
import PageHead from "@/features/page-head";
import { BusinessSection } from "@/ui/business/business.section";
import AdmissionsForm from "@/ui/admissions/admissions.form";
import AdmissionsInfo from "@/ui/admissions/admissions.info";
import {
  admissionsCriteriaContent,
  admissionsCriteriaLists,
  admissionsFormContent,
  admissionsHeaderContent,
  admissionsProcessContent,
  admissionsScheduleContent,
} from "@/data/content/admissions/content.admissions-page";

export const metadata = { title: "Admissions" };

export default function AdmissionsPage() {
  const { crumb, eyebrow, heading, description } = admissionsHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <BusinessSection containerClassName="admissions__container">
        <Box className="split admissions__split">
          <AdmissionsInfo
            process={admissionsProcessContent}
            criteria={admissionsCriteriaContent}
            criteriaLists={admissionsCriteriaLists}
            schedule={admissionsScheduleContent}
          />
          <Box>
            <AdmissionsForm {...admissionsFormContent} />
          </Box>
        </Box>
      </BusinessSection>
    </>
  );
}
