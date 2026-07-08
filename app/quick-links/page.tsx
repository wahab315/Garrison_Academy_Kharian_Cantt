import Link from "next/link";
import PageHead from "@/components/PageHead";

export const metadata = { title: "Quick Links" };

const CARDS = [
  { href: "/sections/pre", icon: "P", t: "Pre-School", d: "Foundation years — Nursery & Prep." },
  { href: "#", icon: "J", t: "Junior Section", d: "Primary classes — building core foundations." },
  { href: "#", icon: "MG", t: "Middle Girls Section", d: "Middle years — girls." },
  { href: "#", icon: "MB", t: "Middle Boys Section", d: "Middle years — boys." },
  { href: "#", icon: "SG", t: "Senior Girls Section", d: "Board classes — girls." },
  { href: "#", icon: "SB", t: "Senior Boys Section", d: "Board classes — boys." },
  { href: "/sections/apsis", icon: "A", t: "APSIS", d: "Cambridge international stream." },
];

export default function QuickLinksPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Quick Links" }]} eyebrow="Academic Sections" title="Quick Links" intro="Choose a section to view its head, faculty, classes, results, scholarships and upcoming events." />
      <div className="sec"><div className="wrap"><div className="grid g4">
        {CARDS.map((c) => (
          <Link className="card link" href={c.href} key={c.href}>
            <div className="ic">{c.icon}</div><h3>{c.t}</h3><p>{c.d}</p><span className="more">View section →</span>
          </Link>
        ))}
      </div></div></div>
    </>
  );
}
