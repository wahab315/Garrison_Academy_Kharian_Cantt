import Link from "next/link";
import PageHead from "@/features/page-head";
import { ToastButton } from "@/features/toast";

export const metadata = { title: "HR & Careers" };

const OPENINGS: [string, string, string, string][] = [
  ["Subject Teacher — Mathematics", "Senior School", "Full-time", "g"],
  ["Montessori Directress", "Pre-School", "Full-time", "g"],
  ["Lab Assistant — Chemistry", "Senior School", "Contract", "b"],
  ["Admin Officer", "Administration", "Full-time", "g"],
];

export default function HrPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "HR Management" }]} eyebrow="Join Our Team" title="HR & Careers" intro="Current openings, how to apply, and recruitment advertisements at Garrison Academy Kharian Cantt." />
      <div className="sec"><div className="wrap">
        <h3 className="h-md" style={{ marginBottom: 18 }}>Staff hiring / current openings</h3>
        <div className="tbl-wrap" style={{ marginBottom: 26 }}><table className="tbl">
          <thead><tr><th>Position</th><th>Section</th><th>Type</th><th>Apply</th></tr></thead>
          <tbody>
            {OPENINGS.map(([pos, sec, type, c]) => (
              <tr key={pos}>
                <td>{pos}</td><td>{sec}</td>
                <td><span className={`pill ${c}`}>{type}</span></td>
                <td><ToastButton msg="Opening the Google application form…" className="dl-btn">Apply ↗</ToastButton></td>
              </tr>
            ))}
          </tbody>
        </table></div>
        <div className="split">
          <div className="card"><div className="ic">📝</div><h3>How to apply</h3><p>All applications are submitted through the official Google Form linked against each opening. Shortlisted candidates are contacted for a demo lesson and interview.</p><ToastButton msg="Opening the Google application form…" className="btn-primary mt">Open Application Form ↗</ToastButton></div>
          <div className="card"><div className="ic">📰</div><h3>Advertisements</h3><p>Recruitment drives are advertised here and on GAK&apos;s official social media pages. Subscribe to notifications in the Downloads section to stay updated.</p><Link className="more" href="/downloads" style={{ marginTop: 14 }}>See latest adverts →</Link></div>
        </div>
      </div></div>
    </>
  );
}
