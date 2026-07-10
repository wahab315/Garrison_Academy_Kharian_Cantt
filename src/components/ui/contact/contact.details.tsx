import Box from "@/common/box";
import Typography from "@/common/typography";
import { BusinessSection } from "@/components/ui/business/business.section";
import type {
  ContactGroup,
  contactMapContent,
} from "@/data/content/contact/content.contact-details";

function ContactMap({ pin, title, note }: typeof contactMapContent) {
  return (
    <Box className="mapbox">
      <Box className="contact__map-body">
        <Box className="pin" aria-hidden="true">
          {pin}
        </Box>
        <Typography as="span" className="contact__map-title">
          {title}
        </Typography>
        <Typography as="span" className="contact__map-note">
          {note}
        </Typography>
      </Box>
    </Box>
  );
}

export default function ContactDetails({
  groups,
  map,
}: {
  groups: readonly ContactGroup[];
  map: typeof contactMapContent;
}) {
  return (
    <BusinessSection containerClassName="split contact__split">
      <Box>
        {groups.map((group) => (
          <Box className="card contact__card" key={group.eyebrow}>
            <Typography as="span" classStyle="eyebrow">
              {group.eyebrow}
            </Typography>
            {group.rows.map((row) => (
              <Box className="cinfo" key={row.label + row.value}>
                <Box className="ci" aria-hidden="true">
                  {row.icon}
                </Box>
                <Box>
                  <Typography as="span" className="ct">
                    {row.label}
                  </Typography>
                  <Typography as="span" className="cv">
                    {row.value}
                    {row.sub ? <span>{row.sub}</span> : null}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      <ContactMap {...map} />
    </BusinessSection>
  );
}
