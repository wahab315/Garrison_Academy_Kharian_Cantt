import Box from "@/common/box";
import Grid from "@/common/grid";
import Typography from "@/common/typography";
import type { BusinessPerson, BusinessPersonGridProps } from "@/data/types/type.business-person";
import { BusinessSectionHead } from "@/components/ui/business/business.section";

/** Portrait + name + role. Optionally a multi-paragraph message. */
export function BusinessPersonCard({ person }: { person: BusinessPerson }) {
  const hasMessage = Boolean(person.message?.length);

  return (
    <Box className={`card person ${hasMessage ? "person--message" : ""}`}>
      {hasMessage ? (
        <Box className="person__head">
          <Box className="ph" aria-hidden="true">
            {person.initials}
          </Box>
          <Box>
            <Typography as="span" className="nm">
              {person.name}
            </Typography>
            {person.role ? (
              <Typography as="span" className="role">
                {person.role}
              </Typography>
            ) : null}
          </Box>
        </Box>
      ) : (
        <>
          <Box className="ph" aria-hidden="true">
            {person.initials}
          </Box>
          <Typography as="span" className="nm">
            {person.name}
          </Typography>
          {person.role ? (
            <Typography as="span" className="role">
              {person.role}
            </Typography>
          ) : null}
        </>
      )}

      {person.message?.length ? (
        <Box className="msg">
          {person.message.map((paragraph, i) => (
            <Typography
              as="p"
              key={paragraph.slice(0, 32)}
              className={i === person.message!.length - 1 ? "person__para--last" : "person__para"}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

export default function BusinessPersonGrid({
  eyebrow,
  heading,
  description,
  people,
}: BusinessPersonGridProps) {
  return (
    <>
      <BusinessSectionHead eyebrow={eyebrow} heading={heading} description={description} />
      <Grid version="4">
        {people.map((person) => (
          <BusinessPersonCard key={person.name} person={person} />
        ))}
      </Grid>
    </>
  );
}
