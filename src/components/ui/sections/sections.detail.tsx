import Box from "@/common/box";
import Button from "@/common/button";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import PageHead from "@/components/features/page-head";
import { BusinessCardItem } from "@/components/ui/business/business.card-grid";
import BusinessNote from "@/components/ui/business/business.note";
import BusinessRoster from "@/components/ui/business/business.roster";
import { BusinessSection } from "@/components/ui/business/business.section";
import {
  sectionCardsFor,
  sectionDetailCopy,
  sectionFacultyContent,
} from "@/data/content/sections/content.section-detail";
import { HEAD_TBA, type SectionData } from "@/data/sections";
import { Routes } from "@/data/routes";

/** "Mrs. Rabia Tariq" -> "RT". Titles are stripped first. */
function initials(name: string) {
  const parts = name.replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s*/, "").split(" ");
  return (parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "");
}

export default function SectionsDetail({ data }: { data: SectionData }) {
  const cards = sectionCardsFor(data);

  return (
    <>
      <PageHead
        crumb={[
          { label: "Home", href: Routes.home },
          { label: sectionDetailCopy.crumbQuickLinks, href: Routes.quickLinks },
          { label: data.name },
        ]}
        eyebrow={data.sub}
        title={data.name}
      />

      <BusinessSection>
        <Button href={Routes.quickLinks} className="back">
          {sectionDetailCopy.backLabel}
        </Button>

        <Box className="split section-detail__split">
          <Box className="card person section-detail__head-card">
            <Box className="ph" aria-hidden="true">
              {data.head ? initials(data.head) : "—"}
            </Box>
            <Typography as="span" className="nm">
              {data.head ?? HEAD_TBA}
            </Typography>
            <Typography as="span" className="role">
              {sectionDetailCopy.headRole}
            </Typography>
            <Box className="msg">{data.headMsg}</Box>
          </Box>

          <Box>
            <Typography
              as="h3"
              classStyle="secondary"
              className="section-detail__faculty-heading"
            >
              {sectionDetailCopy.facultyHeading}
            </Typography>
            <BusinessRoster entries={sectionFacultyContent} version="2" />
            <Typography as="p" className="section-detail__faculty-note">
              {sectionDetailCopy.facultyNote}
            </Typography>
          </Box>
        </Box>

        {data.extra ? (
          <BusinessNote className="section-detail__note">ℹ️ {data.extra}</BusinessNote>
        ) : null}

        <Grid version="3">
          {cards.map((card) => (
            <BusinessCardItem key={card.title} card={card} titleSize="xs" />
          ))}
        </Grid>
      </BusinessSection>
    </>
  );
}
