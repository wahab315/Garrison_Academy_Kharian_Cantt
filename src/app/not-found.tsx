import Box from "@/common/box";
import Button from "@/common/button";
import Container from "@/common/container";
import Typography from "@/common/typography";
import Header from "@/features/header";
import Footer from "@/features/footer";
import { ToastProvider } from "@/features/toast";
import { notFoundContent } from "@/data/content/not-found/content.not-found";

export const metadata = { title: "Page not found" };

/**
 * Global 404. It lives outside the `(business)` route group, so it must
 * bring its own chrome -- the group's layout does not wrap unmatched URLs.
 */
export default function NotFound() {
  const { code, eyebrow, heading, description, primaryCta, secondaryCta } =
    notFoundContent;

  return (
    <ToastProvider>
      <Header />
      <main id="main">
        <Box className="notfound">
          <Container>
            <Box className="nf-code" aria-hidden="true">
              {code}
            </Box>
            <Typography as="span" classStyle="eyebrow">
              {eyebrow}
            </Typography>
            <Typography as="h1" classStyle="primary" className="nf-title">
              {heading}
            </Typography>
            <Typography as="p" classStyle="large" className="nf-lead">
              {description}
            </Typography>
            <Box className="nf-cta">
              <Button classStyle="primary" href={primaryCta.href}>
                {primaryCta.label}
              </Button>
              <Button classStyle="ghost" href={secondaryCta.href}>
                {secondaryCta.label}
              </Button>
            </Box>
          </Container>
        </Box>
      </main>
      <Footer />
    </ToastProvider>
  );
}
