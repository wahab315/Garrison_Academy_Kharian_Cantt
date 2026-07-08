import PageHead from "@/components/PageHead";
import Tabs from "@/components/Tabs";

export const metadata = { title: "Activities" };

const ACADEMIC = [
  ["🧠", "Science Olympiad", "Inter-house competition fostering scientific inquiry and innovation."],
  ["📖", "Spelling Bee & Quiz", "Language and general-knowledge contests across all sections."],
  ["🎤", "Debates & Declamation", "Urdu and English public-speaking forums building confidence."],
];
const SPORTS = ["🏏 Cricket", "⚽ Football", "🏑 Hockey", "🏃 Athletics", "🏀 Basketball", "🏸 Badminton", "🏓 Table Tennis", "🥋 Taekwondo"];
const CLUBS = [
  ["🎭", "Dramatics Society"],
  ["🔭", "Astronomy Club"],
  ["🌱", "Eco / Green Club"],
  ["🤖", "Robotics & STEM"],
];
const COMPS: [string, string, string, string][] = [
  ["GAK Robotics Team", "National STEM Challenge", "Gold", "National"],
  ["Ayesha Hameed", "Int'l Math Olympiad", "Merit", "International"],
  ["Debating Society", "Inter-APS Debates", "Winner", "National"],
  ["Athletics Team", "Garrison Sports Gala", "Runner-up", "Regional"],
];

export default function ActivitiesPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Activities" }]} eyebrow="Beyond the Classroom" title="Activities" intro="A full calendar of academic, sporting and co-curricular life at Garrison Academy Kharian Cantt." />
      <div className="sec"><div className="wrap">
        <Tabs
          items={[
            {
              label: "Academics",
              panel: (
                <div className="grid g3">
                  {ACADEMIC.map(([i, t, d]) => (
                    <div className="tile" key={t}><div className="top">{i}</div><div className="bd"><h4>{t}</h4><p>{d}</p></div></div>
                  ))}
                </div>
              ),
            },
            {
              label: "Sports",
              panel: (
                <div className="grid g4">
                  {SPORTS.map((s) => {
                    const [icon, ...name] = s.split(" ");
                    return <div className="tile" key={s}><div className="top">{icon}</div><div className="bd"><h4>{name.join(" ")}</h4></div></div>;
                  })}
                </div>
              ),
            },
            {
              label: "Co-curricular",
              panel: (
                <>
                  <h3 className="h-md" style={{ marginBottom: 16 }}>Clubs &amp; Societies</h3>
                  <div className="grid g4" style={{ marginBottom: 34 }}>
                    {CLUBS.map(([i, t]) => (
                      <div className="card" key={t}><div className="ic">{i}</div><h3 style={{ fontSize: "1.05rem" }}>{t}</h3></div>
                    ))}
                  </div>
                  <h3 className="h-md" style={{ marginBottom: 16 }}>National &amp; International Competitions</h3>
                  <div className="tbl-wrap"><table className="tbl">
                    <thead><tr><th>Student</th><th>Event</th><th>Position / Award</th><th>Level</th></tr></thead>
                    <tbody>
                      {COMPS.map(([s, e, p, l]) => (
                        <tr key={s + e}><td>{s}</td><td>{e}</td><td><span className="pill o">{p}</span></td><td>{l}</td></tr>
                      ))}
                    </tbody>
                  </table></div>
                </>
              ),
            },
          ]}
        />
      </div></div>
    </>
  );
}
