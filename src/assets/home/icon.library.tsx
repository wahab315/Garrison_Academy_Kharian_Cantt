import type { IconProps } from "@/assets/icon.types";

/** Crest motif: the open book. Used for library / downloads-adjacent contexts. */
export default function IconLibrary({ className }: IconProps) {
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
      <path d="M12 6c-1.7-1-4.2-1.4-6-1.4V17c1.8 0 4.3.4 6 1.4" />
      <path d="M12 6c1.7-1 4.2-1.4 6-1.4V17c-1.8 0-4.3.4-6 1.4" />
      <path d="M12 6v12.4" />
    </svg>
  );
}
