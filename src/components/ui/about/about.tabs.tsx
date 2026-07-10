import Box from "@/common/box";
import Button from "@/common/button";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import Tabs from "@/components/features/tabs";
import BusinessNote from "@/components/ui/business/business.note";
import { BusinessPersonCard } from "@/components/ui/business/business.person-grid";
import BusinessProse from "@/components/ui/business/business.prose";
import { BusinessSection } from "@/components/ui/business/business.section";
import BusinessTileGrid from "@/components/ui/business/business.tile-grid";
import type {
  aboutConductContent,
  aboutFacilitiesContent,
  aboutFounderContent,
  aboutMilestonesContent,
  aboutPrincipalsContent,
  aboutTabLabels,
} from "@/data/content/about/content.about-tabs";
import type { ProseBlock } from "@/components/ui/business/business.prose";

export type AboutTabsProps = {
  labels: typeof aboutTabLabels;
  history: readonly ProseBlock[];
  milestones: typeof aboutMilestonesContent;
  founder: typeof aboutFounderContent;
  principals: typeof aboutPrincipalsContent;
  conduct: typeof aboutConductContent;
  facilities: typeof aboutFacilitiesContent;
};

export default function AboutTabs({
  labels,
  history,
  milestones,
  founder,
  principals,
  conduct,
  facilities,
}: AboutTabsProps) {
  return (
    <BusinessSection>
      <Tabs
        items={[
          {
            label: labels.history,
            panel: (
              <Box className="split">
                <BusinessProse blocks={history} />
                <Box>
                  <Box className="card">
                    <Box className="ic" aria-hidden="true">
                      {milestones.icon}
                    </Box>
                    <Typography as="h3">{milestones.title}</Typography>
                    <BusinessProse
                      className="mt"
                      blocks={[{ kind: "richList", items: milestones.items }]}
                    />
                  </Box>
                </Box>
              </Box>
            ),
          },
          {
            label: labels.founder,
            panel: (
              <Box className="split">
                <Box className="person about__founder">
                  <Box className="ph" aria-hidden="true">
                    {founder.person.initials}
                  </Box>
                  <Typography as="span" className="nm">
                    {founder.person.name}
                  </Typography>
                  <Typography as="span" className="role">
                    {founder.person.role}
                  </Typography>
                </Box>
                <BusinessProse blocks={founder.prose} />
              </Box>
            ),
          },
          {
            label: labels.principals,
            panel: (
              <>
                <Typography as="p" classStyle="large" className="about__lead">
                  {principals.lead}
                </Typography>
                <Grid version="4">
                  {principals.people.map((person) => (
                    <BusinessPersonCard key={person.name} person={person} />
                  ))}
                </Grid>
              </>
            ),
          },
          {
            label: labels.conduct,
            panel: (
              <BusinessProse className="about__conduct" blocks={conduct.prose}>
                <BusinessNote>
                  {conduct.note.before}
                  <Button href={conduct.note.link.href} className="about__note-link">
                    {conduct.note.link.label}
                  </Button>
                  {conduct.note.after}
                </BusinessNote>
              </BusinessProse>
            ),
          },
          {
            label: labels.facilities,
            panel: (
              <>
                <Typography as="p" classStyle="large" className="about__lead">
                  {facilities.lead}
                </Typography>
                <BusinessTileGrid {...facilities} />
              </>
            ),
          },
        ]}
      />
    </BusinessSection>
  );
}
