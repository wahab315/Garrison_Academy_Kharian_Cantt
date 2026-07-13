import type { IconProps } from "@/assets/icon.types";

/** Academic pathway: connected stages rising from foundation to graduation. */
export default function IconPathway({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.5 17.5 9 12.5l4 2 6.5-8" />
      <circle cx="4.5" cy="17.5" r="1.4" />
      <circle cx="9" cy="12.5" r="1.4" />
      <circle cx="13" cy="14.5" r="1.4" />
      <circle cx="19.5" cy="6.5" r="1.4" />
    </svg>
  );
}
