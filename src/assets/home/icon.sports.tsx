import type { IconProps } from "@/assets/icon.types";

/** Sports & co-curricular: a trophy. */
export default function IconSports({ className }: IconProps) {
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
      <path d="M8 4h8v4.5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5.5H5.6a1.9 1.9 0 0 0 0 3.8H8.3" />
      <path d="M16 5.5h2.4a1.9 1.9 0 0 1 0 3.8H15.7" />
      <path d="M12 12.5V15" />
      <path d="M9 20c0-2 1.2-4.5 3-4.5s3 2.5 3 4.5Z" />
    </svg>
  );
}
