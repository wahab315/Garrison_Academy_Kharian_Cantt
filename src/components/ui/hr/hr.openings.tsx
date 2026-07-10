import Box from "@/common/box";
import Button from "@/common/button";
import Typography from "@/common/typography";
import { ToastButton } from "@/components/features/toast";
import { BusinessSection } from "@/components/ui/business/business.section";
import BusinessTable from "@/components/ui/business/business.table";
import type { BusinessTableProps } from "@/data/types/type.business-table";
import type { hrPanelsContent } from "@/data/content/hr/content.hr-openings";

export default function HrOpenings({
  openings,
  panels,
}: {
  openings: BusinessTableProps;
  panels: typeof hrPanelsContent;
}) {
  return (
    <BusinessSection>
      <Typography as="h3" classStyle="secondary" className="hr__heading">
        {openings.heading}
      </Typography>

      <Box className="hr__table">
        <BusinessTable {...openings} />
      </Box>

      <Box className="split">
        <Box className="card">
          <Box className="ic" aria-hidden="true">
            {panels.apply.icon}
          </Box>
          <Typography as="h3">{panels.apply.title}</Typography>
          <Typography as="p">{panels.apply.desc}</Typography>
          <ToastButton msg={panels.apply.cta.toast} classStyle="primary" className="mt hr__cta">
            {panels.apply.cta.label}
          </ToastButton>
        </Box>

        <Box className="card">
          <Box className="ic" aria-hidden="true">
            {panels.adverts.icon}
          </Box>
          <Typography as="h3">{panels.adverts.title}</Typography>
          <Typography as="p">{panels.adverts.desc}</Typography>
          <Button
            href={panels.adverts.link.href}
            className="more hr__adverts-link"
          >
            {panels.adverts.link.label}
          </Button>
        </Box>
      </Box>
    </BusinessSection>
  );
}
