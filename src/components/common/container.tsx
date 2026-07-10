import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import Box from "@/common/box";

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/** Max-width page gutter. Replaces the legacy `.wrap`. */
export default function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: ContainerProps<T>) {
  return (
    <Box
      as={(as ?? "div") as ElementType}
      className={["container", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Box>
  );
}
