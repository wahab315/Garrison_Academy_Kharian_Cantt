import Box from "@/common/box";
import Typography from "@/common/typography";
import Tabs from "@/components/features/tabs";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { OrgChart, OrgNode } from "@/data/content/organogram/content.organogram-charts";

function Node({ title, sub, top }: OrgNode & { top?: boolean }) {
  return (
    <Box className={`node ${top ? "top" : ""}`}>
      <Typography as="span" className="t">
        {title}
      </Typography>
      {sub ? (
        <Typography as="span" className="s">
          {sub}
        </Typography>
      ) : null}
    </Box>
  );
}

function Chart({ root, deputy, branches }: OrgChart) {
  return (
    <Box className="org">
      <Node {...root} top />
      <Box className="connector" />
      <Node {...deputy} />
      <Box className="connector" />
      <Box className="row">
        {branches.map((branch) => (
          <Box className="branch" key={branch.title}>
            <Box className="connector up" />
            <Node {...branch} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function OrganogramChart({ charts }: { charts: readonly OrgChart[] }) {
  return (
    <BusinessSection>
      <Tabs items={charts.map((chart) => ({ label: chart.tab, panel: <Chart {...chart} /> }))} />
    </BusinessSection>
  );
}
