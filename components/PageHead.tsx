import Link from "next/link";
import { Fragment, type ReactNode } from "react";

export default function PageHead({
  crumb,
  eyebrow,
  title,
  intro,
}: {
  crumb: { label: string; href?: string }[];
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <div className="pagehead">
      <div className="wrap">
        <div className="crumb">
          {crumb.map((c, i) => (
            <Fragment key={i}>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
              {i < crumb.length - 1 ? " › " : ""}
            </Fragment>
          ))}
        </div>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="h-lg">{title}</h1>
        {intro ? <p>{intro}</p> : null}
      </div>
    </div>
  );
}
