import type { IconProps } from "@/assets/icon.types";

/** Faculty & staff: two figures. */
export default function IconFaculty({ className }: IconProps) {
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
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3 2.5-5.2 5.5-5.2s5.5 2.2 5.5 5.2" />
      <path d="M16.5 6.2a2.7 2.7 0 0 1 0 5.2" />
      <path d="M17 14.9c2.2.5 3.5 2.4 3.5 5.1" />
    </svg>
  );
}
