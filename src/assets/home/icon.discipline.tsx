import type { IconProps } from "@/assets/icon.types";

/** Discipline & character: a shield with a check. Nods to the cantonment setting. */
export default function IconDiscipline({ className }: IconProps) {
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
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}
