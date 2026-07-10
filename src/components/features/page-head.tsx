import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import Box from "@/common/box";
import Container from "@/common/container";
import Typography from "@/common/typography";

export type Crumb = { label: string; href?: string };

export type PageHeadProps = {
  crumb: readonly Crumb[];
  eyebrow: string;
  title: string;
  intro?: ReactNode;
};

/** The dark banner at the top of every business page except the home page. */
export default function PageHead({ crumb, eyebrow, title, intro }: PageHeadProps) {
  return (
    <Box className="pagehead">
      <Container>
        <Box as="nav" className="crumb" aria-label="Breadcrumb">
          {crumb.map((c, i) => (
            <Fragment key={c.label}>
              {c.href ? (
                <Link href={c.href}>{c.label}</Link>
              ) : (
                <Typography as="span" aria-current="page">
                  {c.label}
                </Typography>
              )}
              {i < crumb.length - 1 ? (
                <Typography as="span" aria-hidden="true">
                  {" › "}
                </Typography>
              ) : null}
            </Fragment>
          ))}
        </Box>

        <Typography as="span" classStyle="eyebrow">
          {eyebrow}
        </Typography>
        <Typography as="h1" classStyle="primary">
          {title}
        </Typography>
        {intro ? <Typography as="p">{intro}</Typography> : null}
      </Container>
    </Box>
  );
}
