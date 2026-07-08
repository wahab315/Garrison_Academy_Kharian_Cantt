const ITEMS: { b: string; t: string }[] = [
  { b: "Admissions Open", t: " — Session 2026 registration now live for all sections." },
  { b: "FBISE Result", t: " — GAK secures top three positions in Kharian region." },
  { b: "Circular 18/26", t: " — Winter uniform effective from 1st November." },
  { b: "Sports Gala", t: " — Annual athletics meet scheduled for 14–16 December." },
];

export default function NotificationTicker() {
  return (
    <div className="ticker">
      <div className="wrap">
        <span className="tag">Latest</span>
        <div className="track">
          <div>
            {ITEMS.map((it, i) => (
              <span key={i}>
                <b>{it.b}</b>
                {it.t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
