import type { IconProps } from "@/assets/icon.types";

/** Student & teacher LMS portals: a monitor. */
export default function IconLms({ className }: IconProps) {
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
      <rect x="3" y="4" width="18" height="13" rx="1.6" />
      <path d="M9 21h6" />
      <path d="M12 17v4" />
      <path d="M8 8.5h8" />
      <path d="M8 11.5h5" />
    </svg>
  );
}
