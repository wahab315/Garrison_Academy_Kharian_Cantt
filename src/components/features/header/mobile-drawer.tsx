"use client";

import Link from "next/link";
import { useState } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import { hasMega, type NavItem } from "@/data/navigation";
import { Routes } from "@/data/routes";
import { Site } from "@/data/site";
import Brand from "@/components/features/header/brand";

export type MobileDrawerProps = {
  nav: readonly NavItem[];
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ nav, open, onClose }: MobileDrawerProps) {
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({});

  return (
    <Box className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
      <Box className="scrim" onClick={onClose} />
      <Box className="panel">
        <Box className="drawer__head">
          <Brand size={42} compact onNavigate={onClose} />
          <Button
            className="drawer__close"
            aria-label="Close menu"
            onClick={onClose}
          >
            ×
          </Button>
        </Box>

        <Button
          classStyle="apply"
          className="drawer__cta"
          href={Routes.admissions}
          onClick={onClose}
        >
          {Site.applyCta}
        </Button>

        {nav.map((item, i) =>
          hasMega(item) ? (
            <Box
              className={`dgroup ${openGroups[i] ? "open" : ""}`}
              key={item.label}
            >
              <button
                type="button"
                aria-expanded={Boolean(openGroups[i])}
                onClick={() => setOpenGroups((g) => ({ ...g, [i]: !g[i] }))}
              >
                {item.label} <span aria-hidden="true">▾</span>
              </button>
              <Box className="dsub">
                {item.mega.map((m) => (
                  <Link key={m.href + m.label} href={m.href} onClick={onClose}>
                    {m.label}
                  </Link>
                ))}
              </Box>
            </Box>
          ) : (
            <Box className="dgroup" key={item.label}>
              <Link
                className="dgroup__link"
                href={item.href}
                onClick={onClose}
              >
                {item.label}
              </Link>
            </Box>
          ),
        )}
      </Box>
    </Box>
  );
}
