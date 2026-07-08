import PageHead from "@/components/PageHead";

export const metadata = { title: "Alumni" };

const EX = [
  ["AM", "Dr. Aisha Malik", "Cardiologist, AFIC Rawalpindi"],
  ["UK", "Capt. Usman Khalid", "Pakistan Army"],
  ["SR", "Sana Raza", "Software Engineer, Systems Ltd"],
  ["BH", "Bilal Hussain", "Chartered Accountant, ACCA"],
  ["MN", "Maryam Nawaz", "PhD Scholar, NUST"],
  ["FK", "Farhan Khan", "Civil Servant, CSS 2019"],
];
const TOP: [string, string, string, string][] = [
  ["Ayesha Hameed", "XII (Pre-Med)", "1st", "2025"],
  ["Muhammad Umar", "XI (Pre-Eng)", "2nd", "2025"],
  ["Fatima Zahra", "X (Science)", "1st", "2024"],
  ["Zain Abbas", "XII (ICS)", "3rd", "2024"],
  ["Hira Saleem", "IX (Science)", "2nd", "2023"],
];
const pill = (p: string) => (p === "1st" ? "o" : p === "2nd" ? "g" : "b");

export default function AlumniPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Alumni (AMULNI)" }]} eyebrow="Once a GAKian" title="Alumni" intro="Celebrating Ex-GAK students making their mark, and the top achievers of recent years." />
      <div className="sec"><div className="wrap">
        <h3 className="h-md" style={{ marginBottom: 18 }}>Ex-GAK Students</h3>
        <div className="grid g3" style={{ marginBottom: 40 }}>
          {EX.map(([ph, nm, ps]) => (
            <div className="alum" key={nm}><div className="ph">{ph}</div><div><div className="nm">{nm}</div><div className="ps">{ps}</div></div></div>
          ))}
        </div>
        <h3 className="h-md" style={{ marginBottom: 18 }}>Top Position Holders <span style={{ fontSize: ".7rem", color: "var(--ink-soft)", fontWeight: 400 }}>(overall top 3 per class, last 2–3 years)</span></h3>
        <div className="tbl-wrap"><table className="tbl">
          <thead><tr><th>Student</th><th>Class</th><th>Position</th><th>Session</th></tr></thead>
          <tbody>
            {TOP.map(([s, c, p, y]) => (
              <tr key={s}><td>{s}</td><td>{c}</td><td><span className={`pill ${pill(p)}`}>{p}</span></td><td>{y}</td></tr>
            ))}
          </tbody>
        </table></div>
      </div></div>
    </>
  );
}
