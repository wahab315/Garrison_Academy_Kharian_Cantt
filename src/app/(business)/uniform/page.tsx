import PageHead from "@/features/page-head";
import UniformLevels from "@/ui/uniform/uniform.levels";
import {
  uniformHeaderContent,
  uniformLevelsContent,
  uniformNoticeContent,
} from "@/data/content/uniform/content.uniform-levels";

export const metadata = { title: "School Uniform" };

export default function UniformPage() {
  const { crumb, eyebrow, heading, description } = uniformHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <UniformLevels notice={uniformNoticeContent} levels={uniformLevelsContent} />
    </>
  );
}
