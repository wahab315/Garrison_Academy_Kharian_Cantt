import { Fragment } from "react";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import Box from "@/common/box";
import Button from "@/common/button";
import Container from "@/common/container";
import { Routes } from "@/data/routes";
import { Site, UtilityLinks } from "@/data/site";

/** The thin dark strip above the header: contact details and portal logins. */
export default function UtilityStrip() {
  return (
    <Box className="util">
      <Container className="util__inner">
        <Box className="util__left">
          <Button
            href={Routes.contact}
            className="util__contact util__hide"
            aria-label={`Phone ${Site.phone}`}
          >
            <MdPhone className="util__icon" aria-hidden="true" />
            {Site.phone}
          </Button>
          <Box as="span" className="util__dot util__hide" aria-hidden="true" />
          <Button
            href={Routes.contact}
            className="util__contact util__hide"
            aria-label={`Email ${Site.email}`}
          >
            <IoMail className="util__icon" aria-hidden="true" />
            {Site.email}
          </Button>
        </Box>

        <Box className="util__right">
          {UtilityLinks.map((link, i) => (
            <Fragment key={link.href}>
              {i > 0 ? (
                <Box as="span" className="util__dot" aria-hidden="true" />
              ) : null}
              <Button href={link.href} external>
                {link.label}
              </Button>
            </Fragment>
          ))}
          <Box as="span" className="util__dot" aria-hidden="true" />
          <Button href={Routes.externalLinks}>FBISE</Button>
        </Box>
      </Container>
    </Box>
  );
}
