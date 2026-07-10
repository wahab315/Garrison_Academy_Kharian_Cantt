import type { GridVersion } from "@/common/grid";
import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

export type BusinessTile = {
  icon: string;
  title: string;
  desc?: string;
};

/** Image-topped tiles: about/facilities, activities/academics, activities/sports. */
export type BusinessTileGridProps = BusinessLeadCopy & {
  version?: GridVersion;
  tiles: readonly BusinessTile[];
};
