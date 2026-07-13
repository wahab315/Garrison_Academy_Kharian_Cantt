import type { IconProps } from "@/assets/icon.types";

/** School uniform: a collared shirt. */
export default function IconUniform({ className }: IconProps) {
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
      <path d="M9 3.5 12 6l3-2.5 4.5 2.2a1 1 0 0 1 .5 1.2L19 11l-2-.7V20a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-9.7l-2 .7-1.5-4.1a1 1 0 0 1 .5-1.2Z" />
      <path d="M9 3.5c0 1.7 1.3 3 3 3s3-1.3 3-3" />
    </svg>
  );
}
