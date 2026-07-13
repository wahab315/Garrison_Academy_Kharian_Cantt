import type { IconProps } from "@/assets/icon.types";

/** Scholarships: a graduation cap. */
export default function IconScholarship({ className }: IconProps) {
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
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
      <path d="M6.5 10.7v4.1c0 1.5 2.5 3.2 5.5 3.2s5.5-1.7 5.5-3.2v-4.1" />
      <path d="M21.5 8.5v4.4" />
    </svg>
  );
}
