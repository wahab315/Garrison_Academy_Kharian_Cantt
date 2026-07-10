import PageHead from "@/components/PageHead";
import Tabs from "@/components/Tabs";
import Link from "next/link";

export const metadata = { title: "About Us" };

const PRINCIPALS = [
  ["IA", "Lt Col (R) Iftikhar Ahmed", "1985 – 1996"],
  ["NB", "Col (R) Nadeem Baig", "1996 – 2008"],
  ["RF", "Brig (R) Rukhsana Farooq", "2008 – 2019"],
  ["AK", "Brig (R) Asad Khan", "2019 – Present"],
];

const FACILITIES = [
  ["💻", "ICT Labs", "Modern computer labs with high-speed internet for digital learning and coding."],
  ["🔬", "Science Laboratories", "Fully equipped Physics, Chemistry and Biology labs for hands-on experiments."],
  ["📚", "Library", "A well-stocked library with reference, fiction and digital resources."],
  ["🎨", "Art & Music Room", "Dedicated studios nurturing creativity in visual and performing arts."],
  ["⚽", "Sports Grounds", "Cricket, football, hockey grounds and an athletics track."],
  ["🧩", "Activity Rooms", "Flexible spaces for clubs, societies and early-years play-based learning."],
];

export default function AboutPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "About Us" }]} eyebrow="Our Story" title="About Garrison Academy Kharian Cantt" intro="Four decades of educating Kharian Cantt — heritage, leadership, conduct and facilities." />
      <div className="sec"><div className="wrap">
        <Tabs
          items={[
            {
              label: "History",
              panel: (
                <div className="split">
                  <div className="prose">
                    <h3 style={{ marginTop: 0 }}>A legacy since 1985</h3>
                    <p>Established in 1985 within Kharian Cantonment, Garrison Academy Kharian Cantt began as a modest institution serving the families of the garrison. Over four decades it has grown into one of the region&apos;s most respected schools, educating thousands of students across Pre-School, Middle, Senior and the Cambridge-aligned APSIS stream.</p>
                    <p>Today the campus operates under the umbrella of the Army Public Schools &amp; Colleges System (APSACS), combining the discipline of a cantonment institution with modern, child-centred pedagogy.</p>
                  </div>
                  <div>
                    <div className="card"><div className="ic">🏛️</div><h3>Milestones</h3>
                      <div className="prose mt"><ul>
                        <li><b>1985</b> — Campus founded in Kharian Cantt</li>
                        <li><b>1998</b> — Senior School &amp; FBISE affiliation</li>
                        <li><b>2011</b> — APSIS Cambridge stream launched</li>
                        <li><b>2020</b> — ICT labs &amp; digital LMS introduced</li>
                      </ul></div>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              label: "The Founder",
              panel: (
                <div className="split">
                  <div className="person" style={{ maxWidth: 280 }}>
                    <div className="ph" style={{ width: 170, height: 170, fontSize: "3rem" }}>FP</div>
                    <div className="nm">Lt Col (R) Iftikhar Ahmed</div>
                    <div className="role">Founder Principal</div>
                  </div>
                  <div className="prose">
                    <h3 style={{ marginTop: 0 }}>The founding vision</h3>
                    <p>The campus owes its foundation to Lt Col (R) Iftikhar Ahmed, whose conviction that quality education should be available to every garrison family shaped GAK&apos;s enduring ethos. Under his leadership the school&apos;s first building, library and assembly traditions were established.</p>
                    <p>His emphasis on discipline tempered with compassion remains the cultural cornerstone of Garrison Academy Kharian Cantt to this day.</p>
                  </div>
                </div>
              ),
            },
            {
              label: "Principals",
              panel: (
                <>
                  <p className="lead" style={{ marginBottom: 26 }}>Photographs, names and tenure of every Principal who has led Garrison Academy Kharian Cantt.</p>
                  <div className="grid g4">
                    {PRINCIPALS.map(([ph, nm, role]) => (
                      <div className="card person" key={nm}><div className="ph">{ph}</div><div className="nm">{nm}</div><div className="role">{role}</div></div>
                    ))}
                  </div>
                </>
              ),
            },
            {
              label: "Code of Conduct",
              panel: (
                <div className="prose" style={{ maxWidth: "72ch" }}>
                  <h3 style={{ marginTop: 0 }}>General rules &amp; regulations</h3>
                  <p>The GAK code of conduct ensures a safe, respectful and focused learning environment for every member of the campus community.</p>
                  <ul>
                    <li>Punctuality and full attendance in proper uniform are expected daily.</li>
                    <li>Respect for teachers, staff, peers and campus property is non-negotiable.</li>
                    <li>Mobile phones and electronic devices are not permitted during school hours.</li>
                    <li>Bullying, harassment and dishonesty of any form result in disciplinary action.</li>
                    <li>Students must observe Islamic and national values with dignity and tolerance.</li>
                    <li>Parents are partners — regular PTM attendance is strongly encouraged.</li>
                  </ul>
                  <div className="note-box">📘 The full code of conduct handbook is available in the <Link href="/downloads" style={{ color: "var(--green-700)", fontWeight: 600, textDecoration: "underline" }}>Downloads</Link> section.</div>
                </div>
              ),
            },
            {
              label: "Facilities",
              panel: (
                <>
                  <p className="lead" style={{ marginBottom: 26 }}>Purpose-built spaces that support academics, creativity and well-being.</p>
                  <div className="grid g3">
                    {FACILITIES.map(([icon, t, d]) => (
                      <div className="tile" key={t}><div className="top">{icon}</div><div className="bd"><h4>{t}</h4><p>{d}</p></div></div>
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
