"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV, type NavItem } from "@/lib/data";
import { IoMail } from "react-icons/io5";

import { MdPhone } from "react-icons/md";

function hasMega(item: NavItem): item is Extract<NavItem, { mega: unknown }> {
  return "mega" in item;
}

export default function Header() {
  const pathname = usePathname();
  const [openMega, setOpenMega] = useState<number | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<number, boolean>>({});

  // close menus on route change
  useEffect(() => {
    setOpenMega(null);
    setDrawer(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* utility strip */}
      <div className="util">
        <div className="wrap">
          <div className="util-left">
            <Link
              className="u-hide"
              href="/contact"
              style={{ color: "#c08a3e" }}
            >
              <MdPhone style={{ fontSize: "1rem" }} />
              053-9240263
            </Link>
            <span className="dot u-hide" />
            <Link
              className="u-hide"
              href="/contact"
              style={{ color: "#c08a3e" }}
            >
              <IoMail style={{ fontSize: "1rem" }} />
              info@garrisonacademy.edu.pk
            </Link>
          </div>
          <div className="util-right">
            <a href="https://apms.pk" target="_blank" rel="noopener noreferrer">
              Teacher&apos;s AIS Login
            </a>
            <span className="dot" />
            <a
              href="https://student.apms.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Student&apos;s AIS Login
            </a>
            <span className="dot" />
            <Link href="/links">FBISE</Link>
          </div>
        </div>
      </div>

      {/* main header */}
      <header className="main">
        <div className="wrap nav">
          <Link className="brand" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Garrison Academy Kharian Cantt crest"
              width={56}
              height={56}
            />
            <div className="brand-txt">
              <div className="nm">Garrison Academy</div>
              <div className="sub">Kharian Cantt</div>
            </div>
          </Link>

          <nav className="links">
            {NAV.map((item, i) =>
              hasMega(item) ? (
                <div
                  key={item.label}
                  className={`navitem ${openMega === i ? "open" : ""}`}
                  onMouseEnter={() =>
                    window.innerWidth > 1080 && setOpenMega(i)
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 1080 && setOpenMega(null)
                  }
                >
                  <button
                    onClick={() => setOpenMega(openMega === i ? null : i)}
                  >
                    {item.label} <i className="caret" />
                  </button>
                  <div
                    className={`mega ${item.grid2 ? "grid2" : ""} ${item.alignRight ? "r" : ""}`}
                  >
                    {item.mega.map((m, mi) => (
                      <Link key={`${m.label}-${mi}`} href={m.href}>
                        <span className="mi">{m.icon}</span>
                        <span>
                          <span className="mt">{m.label}</span>
                          <span className="md">{m.desc}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="navitem" key={item.label}>
                  <Link
                    href={item.href}
                    style={
                      isActive(item.href)
                        ? {
                            background: "var(--green-tint)",
                            color: "var(--green-700)",
                          }
                        : undefined
                    }
                  >
                    {item.label}
                  </Link>
                </div>
              ),
            )}
          </nav>

          <Link className="cta-apply deskonly" href="/admissions">
            Apply for Admission
          </Link>
          <button
            className="burger"
            aria-label="Open menu"
            onClick={() => setDrawer((d) => !d)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      <div className={`drawer ${drawer ? "open" : ""}`}>
        <div className="scrim" onClick={() => setDrawer(false)} />
        <div className="panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 18,
            }}
          >
            <Link className="brand" href="/" onClick={() => setDrawer(false)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt=""
                width={42}
                height={42}
                style={{ width: 42, height: 42 }}
              />
              <div className="brand-txt">
                <div className="nm" style={{ fontSize: ".9rem" }}>
                  Garrison Academy
                </div>
              </div>
            </Link>
            <button
              onClick={() => setDrawer(false)}
              style={{ fontSize: "1.6rem", color: "var(--green-800)" }}
            >
              ×
            </button>
          </div>
          <Link
            className="cta-apply"
            style={{ display: "block", textAlign: "center", marginBottom: 16 }}
            href="/admissions"
            onClick={() => setDrawer(false)}
          >
            Apply for Admission
          </Link>
          {NAV.map((item, i) =>
            hasMega(item) ? (
              <div
                className={`dgroup ${openGroups[i] ? "open" : ""}`}
                key={item.label}
              >
                <button
                  onClick={() => setOpenGroups((g) => ({ ...g, [i]: !g[i] }))}
                >
                  {item.label} ▾
                </button>
                <div className="dsub">
                  {item.mega.map((m, mi) => (
                    <Link
                      key={`${m.label}-${mi}`}
                      href={m.href}
                      onClick={() => setDrawer(false)}
                    >
                      {m.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="dgroup" key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setDrawer(false)}
                  style={{
                    display: "block",
                    padding: "13px 4px",
                    fontWeight: 600,
                    color: "var(--green-900)",
                  }}
                >
                  {item.label}
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    </>
  );
}
