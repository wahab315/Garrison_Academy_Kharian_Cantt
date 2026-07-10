import Link from "next/link";
import PageHead from "@/features/page-head";
import type { SectionData } from "@/data/sections";
import { Routes } from "@/data/routes";

function initials(name: string) {
  const parts = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function SectionDetail({ data }: { data: SectionData }) {
  const resultLabel = data.cambridge ? "Cambridge Results" : data.board ? "Board Results" : "Results";

  return (
    <>
      <PageHead
        crumb={[{ label: "Home", href: Routes.home }, { label: "Quick Links", href: Routes.quickLinks }, { label: data.name }]}
        eyebrow={data.sub}
        title={data.name}
      />
      <div className="sec">
        <div className="wrap">
          <Link className="back" href={Routes.quickLinks}>← All sections</Link>

          <div className="split" style={{ marginBottom: 40, alignItems: "flex-start" }}>
            <div className="card person" style={{ maxWidth: 300 }}>
              <div className="ph">{data.head ? initials(data.head) : "—"}</div>
              <div className="nm">{data.head ?? "To be announced"}</div>
              <div className="role">Section Head</div>
              <div className="msg">{data.headMsg}</div>
            </div>
            <div>
              <h3 className="h-md" style={{ marginBottom: 12 }}>Faculty</h3>
              <div className="grid g2">
                {[
                  ["T1", "M.Phil · 8 yrs"],
                  ["T2", "M.Sc · 6 yrs"],
                  ["T3", "M.A · 10 yrs"],
                  ["T4", "B.Ed · 5 yrs"],
                ].map(([t, q]) => (
                  <div className="alum" key={t}>
                    <div className="ph">{t}</div>
                    <div>
                      <div className="nm">Teacher Name</div>
                      <div className="ps">{q}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: ".82rem", color: "var(--ink-soft)", marginTop: 12 }}>
                Each teacher card shows name, qualification &amp; photo.
              </p>
            </div>
          </div>

          {data.extra ? <div className="note-box" style={{ marginBottom: 30 }}>ℹ️ {data.extra}</div> : null}

          <div className="grid g3">
            <Card icon="🏫" title="Classes" desc={`Class-wise sections, strength and class teachers for ${data.name}.`} />
            <Card icon="🗓️" title="Examination Schedule" desc="Term assessments and major examination datesheets." />
            <Card icon="🏆" title={resultLabel} desc={`Latest ${data.cambridge ? "Cambridge (O/A-Level)" : "FBISE board"} results & top performers.`} />
            {data.board || data.cambridge ? (
              <Card icon="$" title="Scholarships" desc="Merit scholarships available for this section." />
            ) : null}
            <Card icon="📈" title="Promotion Criteria" desc="Assessment, attendance and conduct requirements for promotion." />
            <Card icon="★" title="Activities" desc="Section-specific clubs, trips and co-curricular events." />
            <Card icon="🎖️" title="Achievements" desc={`Awards and recognitions earned by ${data.name} students.`} />
            <Card icon="🏛️" title="Facilities" desc="Dedicated rooms, labs and resources for this section." />
            <Card icon="📣" title="Upcoming Events" desc={`What's next on the ${data.name} calendar.`} />
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card">
      <div className="ic">{icon}</div>
      <h3 style={{ fontSize: "1.1rem" }}>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
