import type { GridVersion } from "@/common/grid";
import type { BusinessLeadCopy } from "@/data/types/type.business-lead-copy";

export type BusinessCard = {
  /** Emoji or short initialism. Rendered decoratively. */
  icon?: string;
  title: string;
  desc?: string;
  href?: string;
  /** Link affordance text, e.g. "Open library →". Requires `href`. */
  cta?: string;
  /** Opens in a new tab. */
  external?: boolean;
};

/**
 * A heading plus a grid of cards. Shared by the home quick-access strip, the
 * home explore grid, quick-links, external-links and the section detail page --
 * one component, different content.
 */
export type BusinessCardGridProps = BusinessLeadCopy & {
  version?: GridVersion;
  centered?: boolean;
  cards: readonly BusinessCard[];
};
