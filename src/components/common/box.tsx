import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type BoxProps<T extends ElementType = "div"> = {
  /** The element to render. Defaults to a div. */
  as?: T;
  className?: string;
  children?: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * The lowest-level layout primitive: renders any element, forwards every prop.
 * Use it instead of a bare <div> when the element carries semantic meaning,
 * e.g. <Box as="section">.
 */
export default function Box<T extends ElementType = "div">({
  as,
  className,
  children,
  ...rest
}: BoxProps<T>) {
  const Component = (as ?? "div") as ElementType;
  return (
    <Component className={className} {...rest}>
      {children}
    </Component>
  );
}
