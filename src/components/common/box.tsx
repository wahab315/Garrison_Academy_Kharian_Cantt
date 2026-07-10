import type { ComponentPropsWithRef, ElementType, ReactNode } from "react";

export type BoxProps<T extends ElementType = "div"> = {
  /** The element to render. Defaults to a div. */
  as?: T;
  className?: string;
  children?: ReactNode;
  // WithRef, not WithoutRef: React 19 passes `ref` as an ordinary prop, and
  // callers need it (chatbot autoscroll, dropdown click-outside).
} & Omit<ComponentPropsWithRef<T>, "as" | "className" | "children">;

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
