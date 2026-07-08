"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"]; // classroom, library, building

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="hero">
      <div className="slides">
        {SLIDES.map((src, k) => (
          <div key={src} className={`slide ${k === i ? "active" : ""}`} style={{ backgroundImage: `url(${src})` }} />
        ))}
        <div className="tex" />
        <div className="ov" />
      </div>
      <div className="wrap">
        <div className="hcopy">
          <span className="eyebrow">Garrison Academy · Kharian Cantt</span>
          <h1 className="h-xl">Where knowledge<br />lights the <span className="g">way.</span></h1>
          <div className="motto">رَبِّ زِدْنِي عِلْمًا</div>
          <div className="motto-tr">&ldquo;My Lord, increase me in knowledge&rdquo;</div>
          <p className="hsub">A tradition of academic excellence, discipline and character-building in the heart of Kharian Cantt — nurturing future leaders from Pre-School through college.</p>
          <div className="hero-cta">
            <Link className="btn-primary" href="/admissions">Apply for Admission</Link>
            <Link className="btn-ghost" href="/about">Explore the campus →</Link>
          </div>
        </div>
      </div>
      <div className="hero-dots">
        {SLIDES.map((_, k) => (
          <button key={k} className={`dot ${k === i ? "active" : ""}`} aria-label={`Show slide ${k + 1}`} onClick={() => setI(k)} />
        ))}
      </div>
    </section>
  );
}
