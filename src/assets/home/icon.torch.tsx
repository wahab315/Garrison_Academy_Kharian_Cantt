import type { IconProps } from "@/assets/icon.types";

/** Crest motif: the torch of knowledge. Reused as the family's signature shape. */
export default function IconTorch({ className }: IconProps) {
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
      <path d="M12 3c2.4 3 3.4 4.5 3.4 6.4a3.4 3.4 0 0 1-6.8 0c0-1.1.5-2.1 1.4-3.1.2 1 .7 1.5 1.1 1.8-.3-2 .4-3.8.9-5.1Z" />
      <path d="M8.6 13.4h6.8" />
      <path d="M12 13.4V21" />
      <path d="M9.6 21h4.8" />
    </svg>
  );
}
