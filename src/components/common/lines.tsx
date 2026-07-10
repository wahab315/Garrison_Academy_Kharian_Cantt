import { Fragment } from "react";

/**
 * Renders a newline-separated string as hard line breaks.
 *
 * Content files hold plain data, never JSX, but several headings depend on an
 * exact break ("Everything about GAK,\nin one place."). `\n` in the content
 * string is the data-only way to express that.
 */
export default function Lines({ text }: { text: string }) {
  const parts = text.split("\n");
  return (
    <>
      {parts.map((line, i) => (
        <Fragment key={line + i}>
          {i > 0 ? <br /> : null}
          {line}
        </Fragment>
      ))}
    </>
  );
}
