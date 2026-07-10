import Link from "next/link";
import { ToastButton } from "@/components/Toast";
import { Assets } from "@/data/assets";

const EXPLORE = [
  ["About Us", "/about"],
  ["Messages", "/messages"],
  ["Organogram", "/organogram"],
  ["Alumni", "/alumni"],
  ["Activities", "/activities"],
];
const PARENTS = [
  ["Admissions", "/admissions"],
  ["School Uniform", "/uniform"],
  ["Scholarships", "/scholarships"],
  ["Downloads", "/downloads"],
  ["FAQs", "/faqs"],
];
const CONNECT = [
  ["Contact Us", "/contact"],
  ["Careers", "/hr"],
  ["Student's AIS Login", "https://student.apms.pk"],
  ["Teacher's AIS Login", "https://apms.pk"],
  ["Feedback", "/feedback"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div className="ft">
            <div className="fbrand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={Assets.logo} alt="" width={52} height={52} />
              <div>
                <div className="nm">Garrison Academy</div>
                <div className="sub">Kharian Cantt</div>
              </div>
            </div>
            <p>
              Garrison Academy Kharian Cantt — an institution committed to knowledge,
              discipline and character since 1985.
            </p>
            <div className="fsoc">
              <ToastButton as="a" msg="Opening Facebook…" className="" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14V7c0-1.03 0-2 2-2h1.5V1.64A26.7 26.7 0 0 0 14.96 1.5C12.07 1.5 10 3.27 10 6.6v2.9H7v4h3V22h4v-8.5z"/></svg>
              </ToastButton>
              <ToastButton as="a" msg="Opening Instagram…" className="" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/></svg>
              </ToastButton>
              <ToastButton as="a" msg="Opening YouTube…" className="" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.5 7.2a3 3 0 0 0-2.1-2.1C18.6 4.6 12 4.6 12 4.6s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.2 31 31 0 0 0 1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-4.8zM10 15.2V8.8l5.2 3.2L10 15.2z"/></svg>
              </ToastButton>
            </div>
          </div>
          <FooterCol title="Explore" links={EXPLORE} />
          <FooterCol title="For Parents" links={PARENTS} />
          <FooterCol title="Connect" links={CONNECT} />
        </div>
        <div className="fbot">
          <span>© 2026 IT Department, Garrison Academy Kharian Cantt. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[][] }) {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {links.map(([label, href]) =>
          href.startsWith("http") ? (
            <li key={label + href}>
              <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            </li>
          ) : (
            <li key={label + href}>
              <Link href={href}>{label}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
