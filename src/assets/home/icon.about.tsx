import type { IconProps } from "@/assets/icon.types";

/** About us: an institutional building with a columned front. */
export default function IconAbout({ className }: IconProps) {
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
      <path d="M3.5 9 12 4l8.5 5" />
      <path d="M4.5 9v9m5-9v9m5-9v9m5-9v9" />
      <path d="M3 20.5h18" />
      <path d="M3 18h18" />
    </svg>
  );
}
