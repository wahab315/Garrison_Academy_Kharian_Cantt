import Box from "@/common/box";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import type { BusinessTileGridProps } from "@/data/types/type.business-tile-grid";
import { BusinessSectionHead } from "@/components/ui/business/business.section";

/** Icon-topped tiles: about/facilities, activities/academics, activities/sports. */
export default function BusinessTileGrid({
  eyebrow,
  heading,
  description,
  version = "3",
  tiles,
}: BusinessTileGridProps) {
  return (
    <>
      <BusinessSectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <Grid version={version}>
        {tiles.map((tile) => (
          <Box className="tile" key={tile.title}>
            <Box className="top" aria-hidden="true">
              {tile.icon}
            </Box>
            <Box className="bd">
              <Typography as="h4">{tile.title}</Typography>
              {tile.desc ? <Typography as="p">{tile.desc}</Typography> : null}
            </Box>
          </Box>
        ))}
      </Grid>
    </>
  );
}
