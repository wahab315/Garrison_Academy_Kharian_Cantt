import PageHead from "@/features/page-head";
import AlumniLists from "@/ui/alumni/alumni.lists";
import { alumniHeaderContent } from "@/data/content/alumni/content.alumni-header";
import {
  alumniExStudentsContent,
  alumniTopHoldersContent,
} from "@/data/content/alumni/content.alumni-lists";

export const metadata = { title: "Alumni" };

export default function AlumniPage() {
  const { crumb, eyebrow, heading, description } = alumniHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <AlumniLists exStudents={alumniExStudentsContent} topHolders={alumniTopHoldersContent} />
    </>
  );
}
