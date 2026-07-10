import PageHead from "@/features/page-head";
import Tabs from "@/features/tabs";

export const metadata = { title: "School Uniform" };

type Season = "Summer" | "Winter";
type Gender = "Girls" | "Boys";
type UniformSet = { season: Season; gender: Gender; items: string[] };
type UniformLevel = { level: string; note?: string; sets?: UniformSet[] };

const UNIFORMS: UniformLevel[] = [
  {
    level: "Early Years (Stages 1 & 2)",
    note: "No uniform. Smart, clean, comfortable clothes/shoes; activity- and weather-appropriate (e.g. track suit).",
  },
  {
    level: "Pre-1 – Class III",
    sets: [
      {
        season: "Summer",
        gender: "Girls",
        items: [
          "Half-sleeves A-line white shirt (dark green 1-inch band on pocket and half sleeves, APSACS embroidered on pocket)",
          "Dark green sash (optional)",
          "White tights / shalwar",
          "White socks and black shoes",
          "Black or white hair accessories",
        ],
      },
      {
        season: "Summer",
        gender: "Boys",
        items: [
          "Half-sleeves white shirt (APSACS embroidered on pocket) with grey shorts / trousers",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green baseball cap with APSACS insignia (optional)",
        ],
      },
      {
        season: "Winter",
        gender: "Girls",
        items: [
          "Full-sleeves A-line white shirt (dark green 1-inch band on pocket and cuffs, APSACS embroidered on pocket)",
          "Dark green sash (optional)",
          "White legging / tights / shalwar",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer (with insignia)",
          "White socks and black shoes",
          "Black or white hair accessories",
        ],
      },
      {
        season: "Winter",
        gender: "Boys",
        items: [
          "Full-sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
          "APSACS striped necktie",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer with APSACS insignia",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green baseball / woolen cap with APSACS insignia & gloves (optional)",
        ],
      },
    ],
  },
  {
    level: "Class IV – V",
    sets: [
      {
        season: "Summer",
        gender: "Girls",
        items: [
          "Half-sleeves A-line white shirt (dark green 1-inch band on pocket and half sleeves, piping on slits, APSACS embroidered on pocket)",
          "White shalwar",
          "Dark green sash",
          "White scarf (optional)",
          "White socks and black shoes",
          "Black or white hair accessories",
        ],
      },
      {
        season: "Summer",
        gender: "Boys",
        items: [
          "Half-sleeves shirt (APSACS embroidered on pocket) with grey shorts / trousers",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green baseball cap with APSACS insignia (optional)",
        ],
      },
      {
        season: "Winter",
        gender: "Girls",
        items: [
          "Full-sleeves A-line white shirt (dark green 1-inch band on pocket and cuffs, piping on slits, APSACS embroidered on pocket)",
          "White shalwar",
          "Dark green sash",
          "White scarf (optional)",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer with APSACS insignia",
          "White socks and black shoes",
          "Black or white hair accessories",
        ],
      },
      {
        season: "Winter",
        gender: "Boys",
        items: [
          "Full-sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
          "APSACS striped necktie",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer (with insignia)",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green baseball / woolen cap with APSACS insignia & gloves (optional)",
        ],
      },
    ],
  },
  {
    level: "Class VI – X",
    sets: [
      {
        season: "Summer",
        gender: "Girls",
        items: [
          "Full-sleeves A-line white shirt (dark green 1-inch band on pocket and cuffs, piping on slits, APSACS embroidered on pocket)",
          "White shalwar",
          "White dupatta with green edging",
          "White scarf (optional)",
          "White socks and black shoes",
          "Black or white hair accessories",
        ],
      },
      {
        season: "Summer",
        gender: "Boys",
        items: [
          "Half / full-sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green baseball cap with APSACS insignia (optional)",
        ],
      },
      {
        season: "Winter",
        gender: "Girls",
        items: [
          "Full-sleeves A-line white shirt (dark green 1-inch band on pocket and cuffs, piping on slits, APSACS embroidered on pocket)",
          "White shalwar",
          "White dupatta with green edging",
          "White scarf (optional)",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer with APSACS insignia",
          "White socks and black shoes",
          "Black and white hair accessories",
        ],
      },
      {
        season: "Winter",
        gender: "Boys",
        items: [
          "Full-sleeves white shirt (APSACS embroidered on pocket) with grey trousers",
          "APSACS striped necktie",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer with APSACS insignia",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green baseball / woolen cap with APSACS insignia & gloves (optional)",
        ],
      },
    ],
  },
  {
    level: "Class XI – XII",
    sets: [
      {
        season: "Summer",
        gender: "Girls",
        items: [
          "Full-sleeves white shirt (green-and-white striped edging on slits, 1-inch band on pocket and cuffs, APSACS embroidered on pocket)",
          "White shalwar",
          "White dupatta with green-and-white striped edging",
          "White scarf (optional)",
          "White socks and black shoes",
          "Black or white hair accessories",
          "Dark green beret with APSACS insignia (optional)",
        ],
      },
      {
        season: "Summer",
        gender: "Boys",
        items: [
          "Half / full-sleeves green-and-white striped shirt (APSACS embroidered on pocket) with grey trousers",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green beret with APSACS insignia (optional)",
        ],
      },
      {
        season: "Winter",
        gender: "Girls",
        items: [
          "Full-sleeves white shirt (green-and-white striped edging on slits, 1-inch band on pocket and cuffs, APSACS embroidered on pocket)",
          "White shalwar",
          "White dupatta with green-and-white striped edging",
          "White scarf (optional)",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer with APSACS insignia",
          "White socks and black shoes",
          "Black and white hair accessories",
          "Dark green beret with APSACS insignia (optional)",
        ],
      },
      {
        season: "Winter",
        gender: "Boys",
        items: [
          "Full-sleeves green-and-white striped shirt (APSACS embroidered on pocket) with grey trousers",
          "Dark green necktie with APSACS insignia",
          "Dark green V-neck full-sleeves / sleeveless sweater with yellow stripes",
          "Dark green blazer with APSACS insignia",
          "Black socks and black shoes",
          "Black belt with APSACS insignia",
          "Dark green beret with APSACS insignia (optional); woolen cap with APSACS insignia & gloves (optional)",
        ],
      },
    ],
  },
];

function LevelPanel({ lvl }: { lvl: UniformLevel }) {
  if (lvl.note) {
    return (
      <div className="grid">
        <div className="card">
          <span className="eyebrow">No Uniform</span>
          <p style={{ marginTop: 12 }}>{lvl.note}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="grid g2">
      {lvl.sets!.map((s) => (
        <div className="card" key={`${s.season}-${s.gender}`}>
          <span className="eyebrow">{s.season} · {s.gender}</span>
          <div className="prose" style={{ marginTop: 14 }}>
            <ul style={{ margin: 0 }}>
              {s.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function UniformPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "School Uniform" }]} eyebrow="Dress Code" title="School Uniform" intro="The official APSACS-approved uniform for Garrison Academy Kharian Cantt — level-wise, for summer and winter." />
      <div className="sec"><div className="wrap">
        <div className="note-box" style={{ marginBottom: 26 }}>
          APSACS-approved uniform (all levels) must be displayed in the School Reception Area. Full details are available on the APSACS website.
        </div>
        <Tabs items={UNIFORMS.map((lvl) => ({ label: lvl.level, panel: <LevelPanel lvl={lvl} /> }))} />
      </div></div>
    </>
  );
}
