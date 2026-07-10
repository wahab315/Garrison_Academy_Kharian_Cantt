"use client";

import Link from "next/link";
import Box from "@/common/box";
import Typography from "@/common/typography";
import type { MegaLink } from "@/data/navigation";

export type MegaMenuProps = {
  id: string;
  label: string;
  links: readonly MegaLink[];
  grid2?: boolean;
  alignRight?: boolean;
  open: boolean;
  onToggle: () => void;
  onOpen: () => void;
  onClose: () => void;
  /** False on touch/narrow viewports, where the menu opens on click instead. */
  hoverEnabled: boolean;
};

export default function MegaMenu({
  id,
  label,
  links,
  grid2,
  alignRight,
  open,
  onToggle,
  onOpen,
  onClose,
  hoverEnabled,
}: MegaMenuProps) {
  return (
    <Box
      className={`navitem ${open ? "open" : ""}`}
      onMouseEnter={hoverEnabled ? onOpen : undefined}
      onMouseLeave={hoverEnabled ? onClose : undefined}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={id}
        onClick={onToggle}
      >
        {label} <i className="caret" aria-hidden="true" />
      </button>

      <Box
        id={id}
        className={`mega ${grid2 ? "grid2" : ""} ${alignRight ? "r" : ""}`}
      >
        {links.map((link) => (
          <Link key={link.href + link.label} href={link.href}>
            <Typography as="span" className="mega__icon" aria-hidden="true">
              {link.icon}
            </Typography>
            <Typography as="span">
              <Typography as="span" className="mega__title">
                {link.label}
              </Typography>
              <Typography as="span" className="mega__desc">
                {link.desc}
              </Typography>
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
}
