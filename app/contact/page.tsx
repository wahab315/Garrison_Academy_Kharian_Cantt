import PageHead from "@/components/PageHead";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} eyebrow="Get in Touch" title="Contact Us" intro="Reach the right department by phone or email, and find us in Kharian Cantt." />
      <div className="sec"><div className="wrap"><div className="split" style={{ alignItems: "stretch" }}>
        <div>
          <div className="card" style={{ marginBottom: 22 }}>
            <span className="eyebrow">Phone</span>
            <div className="cinfo"><div className="ci">☎</div><div><div className="ct">Landline</div><div className="cv">053-9240263</div></div></div>
            <div className="cinfo"><div className="ci">📱</div><div><div className="ct">Mobile / WhatsApp</div><div className="cv">0330-425 (GAK) 0111</div></div></div>
          </div>
          <div className="card" style={{ marginBottom: 22 }}>
            <span className="eyebrow">Email</span>
            <div className="cinfo"><div className="ci">✉</div><div><div className="ct">Principal</div><div className="cv">info@garrisonacademy.edu.pk</div></div></div>
            <div className="cinfo"><div className="ci">✉</div><div><div className="ct">Vice Principal</div><div className="cv">info@garrisonacademy.edu.pk</div></div></div>
            <div className="cinfo"><div className="ci">✉</div><div><div className="ct">Admissions / Departments</div><div className="cv">info@garrisonacademy.edu.pk <span>All sections &amp; departments</span></div></div></div>
          </div>
          <div className="card">
            <span className="eyebrow">Campus Locations</span>
            <div className="cinfo"><div className="ci">🏫</div><div><div className="ct">Main Campus</div><div className="cv">Garrison Academy Kharian Cantt <span>Gujrat, Punjab</span></div></div></div>
            <div className="cinfo"><div className="ci">🧸</div><div><div className="ct">Pre-School</div><div className="cv">Garrison Academy Pre-School Block <span>Kharian Cantt</span></div></div></div>
          </div>
        </div>
        <div className="mapbox"><div style={{ textAlign: "center" }}><div className="pin">📍</div><div style={{ fontWeight: 600, marginTop: 8 }}>Garrison Academy Kharian Cantt</div><div style={{ fontSize: ".82rem", color: "var(--ink-soft)" }}>Interactive map — Google Maps embed in production</div></div></div>
      </div></div></div>
    </>
  );
}
