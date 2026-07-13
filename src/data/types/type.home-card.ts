import type { GridVersion } from "@/common/grid";
import type { HomeIconKey } from "@/assets/home";
import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

/**
 * The home page's card. Distinct from `BusinessCard` in exactly one way: `icon`
 * is a typed `HomeIconKey`, not a free string, so a wrong key is a compile
 * error and the emoji era can't come back by accident. The import is type-only,
 * so content files stay free of component references.
 */
export type HomeCard = {
  icon?: HomeIconKey;
  title: string;
  desc?: string;
  href?: string;
  /** Link affordance text, e.g. "Start application". Requires `href`. */
  cta?: string;
  /** Opens in a new tab. */
  external?: boolean;
};

export type HomeCardGridProps = BusinessLeadCopy & {
  version?: GridVersion;
  cards: readonly HomeCard[];
};
