import PageHead from "@/features/page-head";
import Tabs from "@/features/tabs";
import Accordion from "@/features/accordion";
import { FAQ_DATA } from "@/data/data";

export const metadata = { title: "FAQs" };

export default function FaqsPage() {
  const items = Object.values(FAQ_DATA).map((cat) => ({
    label: cat.label,
    panel: (
      <div style={{ maxWidth: 780, margin: "0 auto" }}>
        <Accordion items={cat.items} />
      </div>
    ),
  }));

  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "FAQs" }]} eyebrow="Help Centre" title="Frequently Asked Questions" intro="Answers grouped by category — admissions, fees, examinations, hiring and more." />
      <div className="sec"><div className="wrap">
        <Tabs items={items} centered />
      </div></div>
    </>
  );
}
