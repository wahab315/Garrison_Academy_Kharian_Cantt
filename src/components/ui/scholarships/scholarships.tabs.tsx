import Box from "@/common/box";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import Tabs from "@/components/features/tabs";
import { BusinessPersonCard } from "@/components/ui/business/business.person-grid";
import BusinessProse from "@/components/ui/business/business.prose";
import BusinessRichText from "@/components/ui/business/business.rich-text";
import { BusinessSection } from "@/components/ui/business/business.section";
import type {
  scholarshipsEligibilityContent,
  scholarshipsStudentsContent,
  scholarshipsTabLabels,
  scholarshipsTeachersContent,
} from "@/data/content/scholarships/content.scholarships-tabs";
import type { ProseBlock } from "@/components/ui/business/business.prose";
import type { BusinessPerson } from "@/data/types/type.business-person";

function PeopleGrid({ people }: { people: readonly BusinessPerson[] }) {
  return (
    <Grid version="4">
      {people.map((person) => (
        <BusinessPersonCard key={person.name} person={person} />
      ))}
    </Grid>
  );
}

export default function ScholarshipsTabs({
  labels,
  policy,
  eligibility,
  students,
  teachers,
}: {
  labels: typeof scholarshipsTabLabels;
  policy: readonly ProseBlock[];
  eligibility: typeof scholarshipsEligibilityContent;
  students: typeof scholarshipsStudentsContent;
  teachers: typeof scholarshipsTeachersContent;
}) {
  return (
    <BusinessSection>
      <Tabs
        items={[
          {
            label: labels.students,
            panel: (
              <>
                <Box className="split scholarships__split">
                  <BusinessProse blocks={policy} />
                  <Box className="card">
                    <Box className="ic" aria-hidden="true">
                      {eligibility.icon}
                    </Box>
                    <Typography as="h3">{eligibility.title}</Typography>
                    <BusinessProse
                      className="mt"
                      blocks={[{ kind: "list", items: eligibility.items }]}
                    />
                  </Box>
                </Box>
                <Typography as="h3" classStyle="secondary" className="scholarships__heading">
                  {students.heading}
                </Typography>
                <PeopleGrid people={students.people} />
              </>
            ),
          },
          {
            label: labels.teachers,
            panel: (
              <>
                <Typography as="p" classStyle="large" className="scholarships__lead">
                  <BusinessRichText runs={teachers.lead} />
                </Typography>
                <PeopleGrid people={teachers.people} />
              </>
            ),
          },
        ]}
      />
    </BusinessSection>
  );
}
