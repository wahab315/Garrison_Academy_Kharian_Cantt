import PageHead from "@/components/PageHead";
import Tabs from "@/components/Tabs";

export const metadata = { title: "Scholarships & Incentives" };

const STUDENTS = [
  ["AH", "Ayesha Hameed", "Class XII · 96%"],
  ["MU", "Muhammad Umar", "Class XI · 94%"],
  ["FZ", "Fatima Zahra", "Class X · 95%"],
  ["HA", "Hassan Ali", "Class IX · 93%"],
];
const TEACHERS = [
  ["SK", "Sadia Kamal", "Mathematics"],
  ["RA", "Rashid Ahmed", "Physics"],
  ["NB", "Nadia Bashir", "English"],
  ["TI", "Tahir Iqbal", "Chemistry"],
];

export default function ScholarshipsPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Scholarships & Incentives" }]} eyebrow="Merit & Support" title="Scholarships & Incentives" intro="Recognising academic excellence among students and rewarding our core teaching faculty." />
      <div className="sec"><div className="wrap">
        <Tabs
          items={[
            {
              label: "Board Class Students",
              panel: (
                <>
                  <div className="split" style={{ marginBottom: 34 }}>
                    <div className="prose"><h3 style={{ marginTop: 0 }}>Scholarship policy</h3>
                      <p>Garrison Academy Kharian Cantt offers merit-based scholarships to board-class students (IX–XII) who demonstrate outstanding academic performance, with additional need-based support for deserving families of the garrison.</p>
                    </div>
                    <div className="card"><div className="ic">📋</div><h3>Eligibility criteria</h3><div className="prose mt"><ul>
                      <li>Minimum 85% aggregate in previous annual exam</li>
                      <li>Clean disciplinary record</li>
                      <li>Regular attendance above 90%</li>
                      <li>Renewable each session on performance</li>
                    </ul></div></div>
                  </div>
                  <h3 className="h-md" style={{ marginBottom: 18 }}>Students availing scholarships</h3>
                  <div className="grid g4">
                    {STUDENTS.map(([ph, nm, role]) => (
                      <div className="card person" key={nm}><div className="ph">{ph}</div><div className="nm">{nm}</div><div className="role">{role}</div></div>
                    ))}
                  </div>
                </>
              ),
            },
            {
              label: "Core Teachers",
              panel: (
                <>
                  <p className="lead" style={{ marginBottom: 26 }}>Teachers availing the GAK <b>Core Teacher Incentive</b> — recognised for exceptional results and dedication.</p>
                  <div className="grid g4">
                    {TEACHERS.map(([ph, nm, role]) => (
                      <div className="card person" key={nm}><div className="ph">{ph}</div><div className="nm">{nm}</div><div className="role">{role}</div></div>
                    ))}
                  </div>
                </>
              ),
            },
          ]}
        />
      </div></div>
    </>
  );
}
