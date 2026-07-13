import type { IconProps } from "@/assets/icon.types";

/** Chatbot: a rounded assistant with a signal dot. */
export default function IconChatbot({ className }: IconProps) {
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
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 4v3" />
      <circle cx="12" cy="3.5" r="1" />
      <path d="M9 12.5h.01M15 12.5h.01" />
      <path d="M9.5 15.5c.7.7 1.6 1 2.5 1s1.8-.3 2.5-1" />
    </svg>
  );
}
