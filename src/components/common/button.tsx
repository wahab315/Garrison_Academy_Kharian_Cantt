import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/** Maps to `.btn__{style}` */
export type ButtonStyle =
  | "primary"
  | "ghost"
  | "submit"
  | "apply"
  | "download"
  | "back"
  | "chip";

type Shared = {
  classStyle?: ButtonStyle;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = Shared & {
  /** Present -> renders a link. Absent -> renders a <button>. */
  href: string;
  /** Opens in a new tab with the correct rel. */
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type NativeButtonProps = Shared & {
  href?: undefined;
  external?: never;
  type?: "button" | "submit" | "reset";
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children" | "type">;

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function classesOf(classStyle?: ButtonStyle, className?: string) {
  return (
    [classStyle && `btn__${classStyle}`, className]
      .filter(Boolean)
      .join(" ") || undefined
  );
}

/**
 * The only place a <button>, <a> or <Link> is written.
 * An internal `href` routes through next/link; `external` renders a plain
 * anchor with target/rel. With no `href` you get a real <button>, defaulting
 * to type="button" so it never submits a form by accident.
 */
export default function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { href, external, classStyle, className, children, ...rest } = props;
    const classes = classesOf(classStyle, className);

    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { classStyle, className, children, type, ...rest } = props;
  return (
    <button
      type={type ?? "button"}
      className={classesOf(classStyle, className)}
      {...rest}
    >
      {children}
    </button>
  );
}
