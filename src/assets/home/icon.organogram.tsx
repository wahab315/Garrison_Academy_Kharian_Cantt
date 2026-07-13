import type { IconProps } from "@/assets/icon.types";

/** Organogram: an org hierarchy. */
export default function IconOrganogram({ className }: IconProps) {
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
      <rect x="9.5" y="3" width="5" height="4" rx="1" />
      <rect x="3" y="17" width="5" height="4" rx="1" />
      <rect x="9.5" y="17" width="5" height="4" rx="1" />
      <rect x="16" y="17" width="5" height="4" rx="1" />
      <path d="M12 7v4M5.5 17v-2.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1V17M12 13.5V17" />
    </svg>
  );
}
