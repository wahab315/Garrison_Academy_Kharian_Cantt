import PageHead from "@/components/PageHead";
import { ToastButton } from "@/components/Toast";

export const metadata = { title: "Important & External Links" };

const AIS = [
  { href: "https://apms.pk", icon: "👩‍🏫", t: "Teacher's AIS Login", d: "Staff portal for lesson planning, attendance and result entry.", u: "apms.pk" },
  { href: "https://student.apms.pk", icon: "🎓", t: "Student's AIS Login", d: "Student portal for assignments, resources and progress.", u: "student.apms.pk" },
];

const IMPORTANT = [
  { href: "https://apsacssectt.edu.pk", icon: "🏛️", t: "APSACS Secretariat", d: "Army Public Schools & Colleges System — official secretariat.", u: "apsacssectt.edu.pk" },
  { href: "https://fbise.edu.pk", icon: "📜", t: "FBISE", d: "Federal Board of Intermediate & Secondary Education — results & datesheets.", u: "fbise.edu.pk" },
  { href: "https://hec.gov.pk", icon: "🎓", t: "Higher Education Commission", d: "HEC Pakistan — higher education, scholarships & recognition.", u: "hec.gov.pk" },
];

export default function LinksPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Important / External Links" }]} eyebrow="Quick Access" title="Important & External Links" intro="Learning portals, examination boards and official channels." />
      <div className="sec"><div className="wrap">
        <span className="eyebrow">AIS Logins</span>
        <div className="grid g2" style={{ marginTop: 14, marginBottom: 34 }}>
          {AIS.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="card link">
              <div className="ic">{l.icon}</div><h3>{l.t}</h3><p>{l.d}</p><span className="more">{l.u} ↗</span>
            </a>
          ))}
        </div>
        <span className="eyebrow">Important Links</span>
        <div className="grid g2" style={{ marginTop: 14 }}>
          {IMPORTANT.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="card link">
              <div className="ic">{l.icon}</div><h3>{l.t}</h3><p>{l.d}</p><span className="more">{l.u} ↗</span>
            </a>
          ))}
          <div className="card link"><div className="ic">📱</div><h3>Garrison Academy Social Media</h3><p>Follow official updates, photos and announcements.</p>
            <span className="more" style={{ display: "flex", gap: 14 }}>
              <ToastButton as="span" msg="Opening Facebook…" className="">Facebook ↗</ToastButton>
              <ToastButton as="span" msg="Opening Instagram…" className="">Instagram ↗</ToastButton>
            </span>
          </div>
        </div>
      </div></div>
    </>
  );
}
