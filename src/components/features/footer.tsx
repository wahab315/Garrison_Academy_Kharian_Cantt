import Image from "next/image";
import Link from "next/link";
import Box from "@/common/box";
import Container from "@/common/container";
import Typography from "@/common/typography";
import { ToastButton } from "@/components/features/toast";
import { Assets } from "@/data/assets";
import { FOOTER_COLUMNS, type FooterLink } from "@/data/navigation";
import { Site, Socials, type SocialKey } from "@/data/site";

const SOCIAL_ICON: Record<SocialKey, React.ReactNode> = {
  facebook: (
    <path d="M14 13.5h2.5l1-4H14V7c0-1.03 0-2 2-2h1.5V1.64A26.7 26.7 0 0 0 14.96 1.5C12.07 1.5 10 3.27 10 6.6v2.9H7v4h3V22h4v-8.5z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  youtube: (
    <path d="M22.5 7.2a3 3 0 0 0-2.1-2.1C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8zM10 15.2V8.8l5.2 3.2L10 15.2z" />
  ),
};

function SocialIcon({ name }: { name: SocialKey }) {
  const outlined = name === "instagram";
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={outlined ? "none" : "currentColor"}
      stroke={outlined ? "currentColor" : undefined}
      strokeWidth={outlined ? 2 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SOCIAL_ICON[name]}
    </svg>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly FooterLink[] }) {
  return (
    <Box>
      {/* h5 keeps the outline; Preflight neutralises its default size. */}
      <Typography as="h5" className="fcol__title">
        {title}
      </Typography>
      <Box as="ul">
        {links.map((link) => (
          <Box as="li" key={link.label + link.href}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <Link href={link.href}>{link.label}</Link>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default function Footer() {
  return (
    <Box as="footer">
      <Container>
        <Box className="fgrid">
          <Box className="ft">
            <Box className="fbrand">
              <Image src={Assets.logo} alt="" width={52} height={52} />
              <Box>
                <Typography as="span" className="fbrand__name">
                  {Site.name}
                </Typography>
                <Typography as="span" className="fbrand__sub">
                  {Site.location}
                </Typography>
              </Box>
            </Box>

            <Typography as="p">{Site.blurb}</Typography>

            <Box className="fsoc">
              {Socials.map((s) => (
                <ToastButton
                  key={s.key}
                  msg={s.toast}
                  aria-label={s.label}
                  className="fsoc__btn"
                >
                  <SocialIcon name={s.key} />
                </ToastButton>
              ))}
            </Box>
          </Box>

          {FOOTER_COLUMNS.map((col) => (
            <FooterColumn key={col.title} title={col.title} links={col.links} />
          ))}
        </Box>

        <Box className="fbot">
          <Typography as="span">{Site.copyright}</Typography>
        </Box>
      </Container>
    </Box>
  );
}
