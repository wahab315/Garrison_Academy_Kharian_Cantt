import Box from "@/common/box";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import Tabs from "@/components/features/tabs";
import BusinessNote from "@/components/ui/business/business.note";
import { BusinessSection } from "@/components/ui/business/business.section";
import type { UniformLevel } from "@/data/content/uniform/content.uniform-levels";

function LevelPanel({ level }: { level: UniformLevel }) {
  if (level.note) {
    return (
      <Grid>
        <Box className="card">
          <Typography as="span" classStyle="eyebrow">
            No Uniform
          </Typography>
          <Typography as="p" className="uniform__note">
            {level.note}
          </Typography>
        </Box>
      </Grid>
    );
  }

  return (
    <Grid version="2">
      {level.sets?.map((set) => (
        <Box className="card" key={`${set.season}-${set.gender}`}>
          <Typography as="span" classStyle="eyebrow">
            {set.season} · {set.gender}
          </Typography>
          <Box className="prose uniform__set-list">
            <Box as="ul" className="uniform__items">
              {set.items.map((item) => (
                <Box as="li" key={item}>
                  {item}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default function UniformLevels({
  notice,
  levels,
}: {
  notice: string;
  levels: readonly UniformLevel[];
}) {
  return (
    <BusinessSection>
      <BusinessNote className="uniform__notice">{notice}</BusinessNote>
      <Tabs
        items={levels.map((level) => ({
          label: level.level,
          panel: <LevelPanel level={level} />,
        }))}
      />
    </BusinessSection>
  );
}
