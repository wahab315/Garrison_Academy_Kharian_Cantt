import Box from "@/common/box";
import Typography from "@/common/typography";
import Tabs from "@/components/features/tabs";
import { ToastButton } from "@/components/features/toast";
import { BusinessSection } from "@/components/ui/business/business.section";
import BusinessTable from "@/components/ui/business/business.table";
import type { BusinessTableProps } from "@/data/types/type.business-table";
import type {
  downloadsFormContent,
  downloadsTabLabels,
} from "@/data/content/downloads/content.downloads-library";

export type DownloadsLibraryProps = {
  labels: typeof downloadsTabLabels;
  notifications: BusinessTableProps;
  circulars: BusinessTableProps;
  papers: BusinessTableProps;
  form: typeof downloadsFormContent;
};

export default function DownloadsLibrary({
  labels,
  notifications,
  circulars,
  papers,
  form,
}: DownloadsLibraryProps) {
  return (
    <BusinessSection>
      <Tabs
        items={[
          { label: labels.notifications, panel: <BusinessTable {...notifications} /> },
          { label: labels.circulars, panel: <BusinessTable {...circulars} /> },
          { label: labels.papers, panel: <BusinessTable {...papers} /> },
          {
            label: labels.form,
            panel: (
              <Box className="card downloads__form-card">
                <Box className="ic" aria-hidden="true">
                  {form.icon}
                </Box>
                <Typography as="h3">{form.title}</Typography>
                <Typography as="p">{form.desc}</Typography>
                <ToastButton msg={form.cta.toast} classStyle="primary" className="mt downloads__cta">
                  {form.cta.label}
                </ToastButton>
              </Box>
            ),
          },
        ]}
      />
    </BusinessSection>
  );
}
