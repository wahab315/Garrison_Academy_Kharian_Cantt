import type { ComponentPropsWithoutRef, ElementType, ReactNode, Ref } from "react";

export type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type TextTag = "p" | "span" | "label";
export type TypographyTag = HeadingTag | TextTag;

/** Maps to `.heading__{style}` */
export type HeadingStyle = "main" | "primary" | "secondary" | "tertiary";
/** Maps to `.text__{style}` */
export type TextStyle =
  | "large"
  | "eyebrow"
  | "body"
  | "small"
  | "muted"
  | "error";

type StyleFor<T extends TypographyTag> = T extends HeadingTag
  ? HeadingStyle
  : TextStyle;

const HEADINGS: ReadonlySet<string> = new Set([
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
]);

export type TypographyProps<T extends TypographyTag = "p"> = {
  as?: T;
  classStyle?: StyleFor<T>;
  className?: string;
  children?: ReactNode;
  ref?: Ref<HTMLElement>;
} & Omit<
  ComponentPropsWithoutRef<T>,
  "as" | "className" | "children" | "color" | "ref"
>;

/**
 * The only place a heading, paragraph, span or label is written.
 * `as` chooses the element; `classStyle` chooses the look. They are
 * independent, so an <h2> can carry the page's largest style without
 * breaking the document outline.
 */
export default function Typography<T extends TypographyTag = "p">({
  as,
  classStyle,
  className,
  children,
  ref,
  ...rest
}: TypographyProps<T>) {
  const tag = (as ?? "p") as TypographyTag;
  const Component = tag as ElementType;

  const styleClass = classStyle
    ? `${HEADINGS.has(tag) ? "heading" : "text"}__${classStyle}`
    : undefined;

  return (
    <Component
      ref={ref}
      className={[styleClass, className].filter(Boolean).join(" ") || undefined}
      {...rest}
    >
      {children}
    </Component>
  );
}
