import Box from "@/common/box";
import PageHead from "@/features/page-head";
import { BusinessSection } from "@/ui/business/business.section";
import FeedbackForm from "@/ui/feedback/feedback.form";
import {
  feedbackFormContent,
  feedbackHeaderContent,
} from "@/data/content/feedback/content.feedback-page";

export const metadata = { title: "Feedback & Complaints" };

export default function FeedbackPage() {
  const { crumb, eyebrow, heading, description } = feedbackHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <BusinessSection>
        <Box className="feedback__wrap">
          <FeedbackForm {...feedbackFormContent} />
        </Box>
      </BusinessSection>
    </>
  );
}
