"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import Container from "@/common/container";
import { hasMega, NAV } from "@/data/data";
import { Routes } from "@/data/routes";
import { Site } from "@/data/site";
import { DESKTOP_QUERY, useMediaQuery } from "@/hooks/use-media-query";
import Brand from "@/components/features/header/brand";
import MegaMenu from "@/components/features/header/mega-menu";
import MobileDrawer from "@/components/features/header/mobile-drawer";
import UtilityStrip from "@/components/features/header/utility-strip";

export default function Header() {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<number | null>(null);
  const [drawer, setDrawer] = useState(false);
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  // Close menus on route change.
  useEffect(() => {
    setOpenMega(null);
    setDrawer(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === Routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <>
      <UtilityStrip />

      <Box as="header" className="main">
        <Container className="nav">
          <Brand />

          <Box as="nav" className="links" aria-label="Primary">
            {NAV.map((item, i) =>
              hasMega(item) ? (
                <MegaMenu
                  key={item.label}
                  id={`mega-${i}`}
                  label={item.label}
                  links={item.mega}
                  grid2={item.grid2}
                  alignRight={item.alignRight}
                  open={openMega === i}
                  hoverEnabled={isDesktop}
                  onOpen={() => setOpenMega(i)}
                  onClose={() => setOpenMega(null)}
                  onToggle={() => setOpenMega(openMega === i ? null : i)}
                />
              ) : (
                <Box className="navitem" key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </Box>
              ),
            )}
          </Box>

          <Button
            classStyle="apply"
            className="deskonly"
            href={Routes.admissions}
          >
            {Site.applyCta}
          </Button>

          <Button
            className="burger"
            aria-label="Open menu"
            aria-expanded={drawer}
            onClick={() => setDrawer((d) => !d)}
          >
            <Box as="span" />
            <Box as="span" />
            <Box as="span" />
          </Button>
        </Container>
      </Box>

      <MobileDrawer nav={NAV} open={drawer} onClose={() => setDrawer(false)} />
    </>
  );
}
