import PageHead from "@/components/PageHead";
import Tabs from "@/components/Tabs";

export const metadata = { title: "Organogram" };

function Org({ vp, nodes }: { vp: string; nodes: { t: string; s?: string }[] }) {
  return (
    <div className="org">
      <div className="node top"><div className="t">Principal</div><div className="s">Head of Campus</div></div>
      <div className="connector" />
      <div className="node"><div className="t">{vp}</div></div>
      <div className="connector" />
      <div className="row">
        {nodes.map((n) => (
          <div className="branch" key={n.t}>
            <div className="connector up" />
            <div className="node"><div className="t">{n.t}</div>{n.s ? <div className="s">{n.s}</div> : null}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OrganogramPage() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Organogram" }]} eyebrow="Structure" title="School Organogram" intro="How Garrison Academy Kharian Cantt is organised — academic leadership and administrative governance." />
      <div className="sec"><div className="wrap">
        <Tabs
          items={[
            {
              label: "Academics",
              panel: (
                <Org vp="Vice Principal (Academics)" nodes={[
                  { t: "Head — Pre-School", s: "Early Years" },
                  { t: "Head — Middle", s: "Classes VI–VIII" },
                  { t: "Head — Senior", s: "FBISE" },
                  { t: "Head — APSIS", s: "Cambridge" },
                ]} />
              ),
            },
            {
              label: "Administrative",
              panel: (
                <Org vp="Vice Principal (Administration)" nodes={[
                  { t: "Accounts & Finance" },
                  { t: "HR & Admin" },
                  { t: "Examinations" },
                  { t: "IT & LMS" },
                ]} />
              ),
            },
          ]}
        />
      </div></div>
    </>
  );
}
