import Link from "next/link";
import PageHead from "@/components/PageHead";

export default function NotFound() {
  return (
    <>
      <PageHead crumb={[{ label: "Home", href: "/" }, { label: "Not found" }]} eyebrow="Error 404" title="Page not found" intro="The page you're looking for doesn't exist or has moved." />
      <div className="sec"><div className="wrap center">
        <Link className="btn-primary" href="/">Back to Home</Link>
      </div></div>
    </>
  );
}
