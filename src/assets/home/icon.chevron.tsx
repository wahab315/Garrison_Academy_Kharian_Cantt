import type { IconProps } from "@/assets/icon.types";

/**
 * A left-pointing chevron, for carousel controls. Points left by default;
 * rotate 180deg in CSS for the "next" direction. An SVG rather than a `‹`
 * glyph so it renders identically in every browser and never comes up blank.
 */
export default function IconChevron({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m15 5-7 7 7 7" />
    </svg>
  );
}
