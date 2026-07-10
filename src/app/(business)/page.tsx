import Link from "next/link";
import Hero from "@/components/Hero";
import NotificationTicker from "@/features/notification-ticker";
import SectionGrid from "@/components/SectionGrid";
import { Routes } from "@/data/routes";

export const metadata = {
  title: "Garrison Academy Kharian Cantt",
  description:
    "Academic excellence, discipline and character since 1985. Explore admissions for Session 2026, academic sections, scholarships and downloads.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <NotificationTicker />

      {/* quick access */}
      <div className="sec tight">
        <div className="wrap">
          <div className="grid g4">
            <Link className="card link" href="/admissions"><div className="ic">✎</div><h3>Admissions</h3><p>Apply online or download the registration form for Session 2026.</p><span className="more">Start application →</span></Link>
            <Link className="card link" href="/downloads"><div className="ic">↓</div><h3>Downloads</h3><p>Notifications, circulars, past papers and forms in one place.</p><span className="more">Open library →</span></Link>
            <Link className="card link" href={Routes.externalLinks}><div className="ic">↗</div><h3>Student &amp; Teacher LMS</h3><p>Access apms.pk and student.apms.pk learning portals.</p><span className="more">Go to portals →</span></Link>
            <Link className="card link" href="/contact"><div className="ic">📍</div><h3>Contact &amp; Location</h3><p>Reach the right department — numbers, emails and campus map.</p><span className="more">Get in touch →</span></Link>
          </div>
        </div>
      </div>

      {/* principal message */}
      <div className="sec" style={{ background: "var(--paper-2)" }}>
        <div className="wrap split">
          <div>
            <span className="eyebrow">From the Principal&apos;s Desk</span>
            <h2 className="h-lg mt">Building character before<br />building careers.</h2>
            <p className="lead mt">
              At Garrison Academy Kharian Cantt, we believe education is more than examinations. The
              ability to reason with clarity, to lead with character, and to embrace change with
              resilience will remain timeless — that is the character we build before careers.
            </p>
            <div className="mt2" style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div className="person" style={{ margin: 0 }}>
                <div className="ph" style={{ width: 64, height: 64, fontSize: "1.4rem", margin: 0 }}>SR</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--display)", fontSize: "1.1rem", color: "var(--green-900)" }}>Mrs Shahida Rehman</div>
                <div style={{ fontSize: ".8rem", color: "var(--gold-600)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase" }}>Principal GAK</div>
              </div>
            </div>
            <Link className="btn-primary mt2" href="/messages" style={{ display: "inline-block" }}>Read all messages</Link>
          </div>
          <div>
            <div className="statband" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div className="s"><div className="n">40</div><div className="l">Years of service</div></div>
              <div className="s"><div className="n">98%</div><div className="l">Board pass rate</div></div>
              <div className="s"><div className="n">26</div><div className="l">Clubs &amp; societies</div></div>
              <div className="s"><div className="n">12</div><div className="l">Sports disciplines</div></div>
            </div>
            <div className="note-box mt">🎓 GAK runs two parallel streams — <b>APSACS (FBISE)</b> and <b>APSIS (Cambridge)</b> — under one disciplined campus culture.</div>
          </div>
        </div>
      </div>

      {/* explore sections */}
      <div className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Explore the Campus</span>
            <h2 className="h-lg mt">Everything about GAK,<br />in one place.</h2>
            <p>Browse every section of the school — from messages and academics to admissions, alumni and downloads.</p>
          </div>
          <SectionGrid />
        </div>
      </div>

      <div className="sec tight">
        <div className="wrap">
          <div className="ctaband">
            <span className="eyebrow" style={{ color: "var(--gold-300)" }}>Session 2026</span>
            <h2 className="h-lg mt" style={{ marginBottom: 12 }}>Admissions are now open.</h2>
            <p>Secure your child&apos;s seat at one of Kharian&apos;s most trusted institutions. Apply online in minutes or download the form.</p>
            <Link className="btn-primary" href="/admissions">Begin Application</Link>
          </div>
        </div>
      </div>
    </>
  );
}
