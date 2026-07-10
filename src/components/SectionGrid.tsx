import Link from "next/link";
import { HOME_GRID } from "@/data/data";

export default function SectionGrid() {
  return (
    <div className="grid g4">
      {HOME_GRID.map((s) => (
        <Link key={s.href} className="card link" href={s.href}>
          <div className="ic">{s.icon}</div>
          <h3 style={{ fontSize: "1.12rem" }}>{s.label}</h3>
          <p>{s.desc}</p>
          <span className="more">Open →</span>
        </Link>
      ))}
    </div>
  );
}
