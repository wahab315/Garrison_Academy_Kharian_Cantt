"use client";

import { useState } from "react";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="acc">
      {items.map((it, i) => (
        <div key={it.q} className={`item ${open === i ? "open" : ""}`}>
          <button className="q" onClick={() => setOpen(open === i ? null : i)}>
            {it.q} <span className="pl">+</span>
          </button>
          <div className="a">
            <p>{it.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
