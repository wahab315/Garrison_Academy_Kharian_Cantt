import Link from "next/link";
import { homeExploreContent } from "@/data/content/home/content.home-explore";

export default function SectionGrid() {
  return (
    <div className="grid g4">
      {homeExploreContent.cards.map((s) => (
        <Link key={s.href} className="card link" href={s.href!}>
          <div className="ic">{s.icon}</div>
          <h3 style={{ fontSize: "1.12rem" }}>{s.title}</h3>
          <p>{s.desc}</p>
          <span className="more">Open →</span>
        </Link>
      ))}
    </div>
  );
}
