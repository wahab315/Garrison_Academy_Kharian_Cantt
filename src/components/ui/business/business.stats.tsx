import Box from "@/common/box";
import Typography from "@/common/typography";
import type { BusinessStatsProps } from "@/data/types/type.business-stats";

export default function BusinessStats({ stats, compact }: BusinessStatsProps) {
  return (
    <Box className={`statband ${compact ? "statband--compact" : ""}`}>
      {stats.map((stat) => (
        <Box className="s" key={stat.label}>
          <Typography as="span" className="n">
            {stat.value}
          </Typography>
          <Typography as="span" className="l">
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
