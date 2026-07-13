import type { IconProps } from "@/assets/icon.types";

/** FBISE board stream / results: a medal on a ribbon. */
export default function IconBoard({ className }: IconProps) {
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
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="M9.6 9.4l1.7 1.7 3.1-3.4" />
      <path d="M9.4 14.4 7.8 21l4.2-2.1L16.2 21l-1.6-6.6" />
    </svg>
  );
}
