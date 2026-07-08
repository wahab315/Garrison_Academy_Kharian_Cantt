"use client";

import { useState, type ReactNode } from "react";

export default function Tabs({
  items,
  centered = false,
}: {
  items: { label: string; panel: ReactNode }[];
  centered?: boolean;
}) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="tabs" style={centered ? { justifyContent: "center" } : undefined}>
        {items.map((t, i) => (
          <button
            key={t.label}
            className={`tab ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      {items.map((t, i) => (
        <div key={t.label} className={`tabpane ${i === active ? "active" : ""}`}>
          {t.panel}
        </div>
      ))}
    </>
  );
}
