import PageHead from "@/features/page-head";
import DownloadsLibrary from "@/ui/downloads/downloads.library";
import { downloadsHeaderContent } from "@/data/content/downloads/content.downloads-header";
import {
  downloadsCircularsContent,
  downloadsFormContent,
  downloadsNotificationsContent,
  downloadsPapersContent,
  downloadsTabLabels,
} from "@/data/content/downloads/content.downloads-library";

export const metadata = { title: "Downloads" };

export default function DownloadsPage() {
  const { crumb, eyebrow, heading, description } = downloadsHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <DownloadsLibrary
        labels={downloadsTabLabels}
        notifications={downloadsNotificationsContent}
        circulars={downloadsCircularsContent}
        papers={downloadsPapersContent}
        form={downloadsFormContent}
      />
    </>
  );
}
