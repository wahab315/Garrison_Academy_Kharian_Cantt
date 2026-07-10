import PageHead from "@/components/PageHead";
import Tabs from "@/components/Tabs";
import { ToastButton } from "@/components/Toast";

export const metadata = { title: "Downloads" };

const NOTIF: [string, string][] = [
  ["Session 2026 Admissions Notification", "05 Jan 2026"],
  ["Winter Vacation Notice", "18 Dec 2025"],
  ["Parent-Teacher Meeting Schedule", "02 Dec 2025"],
];
const CIRC: [string, string][] = [
  ["18/26", "Winter Uniform Implementation"],
  ["17/26", "Sports Gala Participation"],
  ["16/26", "Fee Submission Deadline"],
];
const PAPERS: [string, string, string][] = [
  ["Mathematics", "IX", "2025"],
  ["Physics", "X", "2025"],
  ["English", "XI", "2024"],
];

const DlBtn = () => <ToastButton as="a" msg="Downloading PDF…" className="dl-btn">↓ PDF</ToastButton>;

export default function DownloadsPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Downloads" }]} eyebrow="Resource Library" title="Downloads" intro="Notifications, circulars, past papers and the admission registration form." />
      <div className="sec"><div className="wrap">
        <Tabs
          items={[
            {
              label: "Notifications",
              panel: (
                <div className="tbl-wrap"><table className="tbl">
                  <thead><tr><th>Title</th><th>Date</th><th>File</th></tr></thead>
                  <tbody>{NOTIF.map(([t, d]) => (<tr key={t}><td>{t}</td><td>{d}</td><td><DlBtn /></td></tr>))}</tbody>
                </table></div>
              ),
            },
            {
              label: "Circulars",
              panel: (
                <div className="tbl-wrap"><table className="tbl">
                  <thead><tr><th>Circular No.</th><th>Subject</th><th>File</th></tr></thead>
                  <tbody>{CIRC.map(([n, s]) => (<tr key={n}><td>{n}</td><td>{s}</td><td><DlBtn /></td></tr>))}</tbody>
                </table></div>
              ),
            },
            {
              label: "Past Papers",
              panel: (
                <div className="tbl-wrap"><table className="tbl">
                  <thead><tr><th>Subject</th><th>Class</th><th>Year</th><th>File</th></tr></thead>
                  <tbody>{PAPERS.map(([s, c, y]) => (<tr key={s}><td>{s}</td><td>{c}</td><td>{y}</td><td><DlBtn /></td></tr>))}</tbody>
                </table></div>
              ),
            },
            {
              label: "Admission Form",
              panel: (
                <div className="card" style={{ maxWidth: 520 }}><div className="ic">📄</div><h3>Admission Registration Form</h3><p>Download, print and submit the manual application form at the admissions office along with required documents.</p><ToastButton as="a" msg="Downloading admission form…" className="btn-primary mt">↓ Download Form (PDF)</ToastButton></div>
              ),
            },
          ]}
        />
      </div></div>
    </>
  );
}
