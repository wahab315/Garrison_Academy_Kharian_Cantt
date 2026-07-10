import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ToastProvider } from "@/components/Toast";
import { Routes } from "@/data/routes";

export const metadata = { title: "Page not found" };

/**
 * Global 404. It lives outside the `(business)` route group, so it must
 * bring its own chrome -- the group's layout does not wrap unmatched URLs.
 */
export default function NotFound() {
  return (
    <ToastProvider>
      <Header />
      <main id="main">
        <div className="notfound">
          <div className="wrap">
            <div className="nf-code" aria-hidden="true">
              404
            </div>
            <span className="eyebrow">Error 404</span>
            <h1 className="h-lg nf-title">This page could not be found.</h1>
            <p className="lead nf-lead">
              The page you are looking for does not exist, has been moved, or
              the address was mistyped.
            </p>
            <div className="nf-cta">
              <Link className="btn-primary" href={Routes.home}>
                Back to Home
              </Link>
              <Link className="btn-ghost" href={Routes.contact}>
                Contact us →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </ToastProvider>
  );
}
