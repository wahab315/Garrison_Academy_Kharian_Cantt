import type { IconProps } from "@/assets/icon.types";

/** Downloads: forms and circulars into a tray. */
export default function IconDownloads({ className }: IconProps) {
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
      <path d="M12 3v10" />
      <path d="m8 9.5 4 4 4-4" />
      <path d="M4 16.5v2.5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-2.5" />
    </svg>
  );
}
