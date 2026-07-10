import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import Box from "@/common/box";

/** Column count. Responsive collapse is handled in `_grid.scss`. */
export type GridVersion = "2" | "3" | "4";

export type GridProps<T extends ElementType = "div"> = {
  as?: T;
  version?: GridVersion;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/** Replaces the legacy `.grid.g2` / `.g3` / `.g4`. */
export default function Grid<T extends ElementType = "div">({
  as,
  version,
  className,
  children,
  ...rest
}: GridProps<T>) {
  return (
    <Box
      as={(as ?? "div") as ElementType}
      className={["grid", version && `grid__version--${version}`, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Box>
  );
}
