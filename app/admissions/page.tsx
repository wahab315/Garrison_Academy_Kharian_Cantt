import Link from "next/link";
import PageHead from "@/components/PageHead";
import { ToastButton } from "@/components/Toast";

export const metadata = { title: "Admissions" };

const STEPS = [
  ["Submit application", "Apply online below or download and submit the registration form manually."],
  ["Admission test", "Appear for the entry assessment on the scheduled date for the relevant class."],
  ["Interview", "Shortlisted students and parents attend a brief interaction."],
  ["Offer & enrolment", "Confirm the seat by completing fee submission and documentation."],
];
const SCHED: [string, string, string][] = [
  ["Prep – V", "15 Feb 2026", "8:30 AM"],
  ["VI – VIII", "17 Feb 2026", "8:30 AM"],
  ["IX & XI", "20 Feb 2026", "9:00 AM"],
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Admissions" }]} eyebrow="Session 2026" title="Admissions" intro="Apply online, learn the process, review the criteria and check the admission test schedule." />
      <div className="sec"><div className="wrap">
        <div className="split" style={{ alignItems: "flex-start" }}>
          <div>
            <h3 className="h-md" style={{ marginBottom: 10 }}>Admission process</h3>
            <div className="steps" style={{ marginBottom: 30 }}>
              {STEPS.map(([t, d]) => (
                <div className="step" key={t}><div><h4>{t}</h4><p>{d}</p></div></div>
              ))}
            </div>

            <h3 className="h-md" style={{ marginBottom: 12 }}>Criteria for admission</h3>
            <div className="grid g2" style={{ marginBottom: 26 }}>
              <div className="card"><h3 style={{ fontSize: "1.05rem" }}>Board Classes (IX–XII)</h3><div className="prose mt"><ul><li>Min. 70% in previous result</li><li>Pass entry test &amp; interview</li><li>Stream availability (APSACS/APSIS)</li></ul></div></div>
              <div className="card"><h3 style={{ fontSize: "1.05rem" }}>Non-Board Classes</h3><div className="prose mt"><ul><li>Age-appropriate placement</li><li>Assessment for class I and above</li><li>Pre-School: interaction only</li></ul></div></div>
            </div>

            <h3 className="h-md" style={{ marginBottom: 12 }}>Admission test schedule</h3>
            <div className="tbl-wrap"><table className="tbl">
              <thead><tr><th>Class</th><th>Test Date</th><th>Reporting</th></tr></thead>
              <tbody>{SCHED.map(([c, d, r]) => (<tr key={c}><td>{c}</td><td>{d}</td><td>{r}</td></tr>))}</tbody>
            </table></div>
          </div>

          <div>
            <div className="form">
              <h3 className="h-md" style={{ marginBottom: 6 }}>Apply online</h3>
              <p style={{ fontSize: ".86rem", color: "var(--ink-soft)", marginBottom: 18 }}>Submit an admission request — our office will contact you with next steps.</p>
              <div className="frow">
                <div className="field"><label>Student name <span className="req">*</span></label><input placeholder="Full name" /></div>
                <div className="field"><label>Class applying for <span className="req">*</span></label><select><option>Pre-School</option><option>Prep – V</option><option>VI – VIII</option><option>IX (FBISE)</option><option>IX (APSIS / Cambridge)</option><option>XI</option></select></div>
              </div>
              <div className="frow">
                <div className="field"><label>Date of birth</label><input type="date" /></div>
                <div className="field"><label>Stream</label><select><option>APSACS (FBISE)</option><option>APSIS (Cambridge)</option></select></div>
              </div>
              <div className="field"><label>Guardian name <span className="req">*</span></label><input placeholder="Parent / guardian" /></div>
              <div className="frow">
                <div className="field"><label>Contact number <span className="req">*</span></label><input placeholder="03XX-XXXXXXX" /></div>
                <div className="field"><label>Email</label><input placeholder="you@email.com" /></div>
              </div>
              <ToastButton msg="Admission request submitted — we'll be in touch soon!" className="btn-submit">Submit Application</ToastButton>
              <p className="formnote">Prefer paper? <Link href="/downloads" style={{ color: "var(--green-700)", fontWeight: 600, textDecoration: "underline" }}>Download the registration form</Link> from Downloads.</p>
            </div>
          </div>
        </div>
      </div></div>
    </>
  );
}
