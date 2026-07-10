import type { ReactNode } from "react";
import Box from "@/common/box";

/** The tinted advisory box. `.note-box` in the original stylesheet. */
export default function BusinessNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Box className={["note-box", className].filter(Boolean).join(" ")}>
      {children}
    </Box>
  );
}
