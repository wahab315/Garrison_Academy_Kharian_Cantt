import type { IconProps } from "@/assets/icon.types";

/**
 * Crest motif: the laurel wreath. Two symmetric branches opening upward. Drawn
 * larger and low-opacity as a section backdrop as well as at icon size.
 */
export default function IconLaurel({ className }: IconProps) {
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
      <path d="M12 21C7 19.5 4.5 15 5.5 8.5" />
      <path d="M5.7 9.2c-1.6-.2-2.6-1-3.2-2.3 1.4-.5 2.6-.4 3.6.4" />
      <path d="M5.7 12.6c-1.6 0-2.7-.6-3.5-1.8 1.3-.7 2.5-.8 3.6-.2" />
      <path d="M6.4 15.9c-1.5.3-2.7 0-3.7-1 1.1-.9 2.3-1.2 3.5-.9" />
      <path d="M12 21c5-1.5 7.5-6 6.5-12.5" />
      <path d="M18.3 9.2c1.6-.2 2.6-1 3.2-2.3-1.4-.5-2.6-.4-3.6.4" />
      <path d="M18.3 12.6c1.6 0 2.7-.6 3.5-1.8-1.3-.7-2.5-.8-3.6-.2" />
      <path d="M17.6 15.9c1.5.3 2.7 0 3.7-1-1.1-.9-2.3-1.2-3.5-.9" />
    </svg>
  );
}
