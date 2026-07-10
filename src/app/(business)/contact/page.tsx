import PageHead from "@/features/page-head";
import ContactDetails from "@/ui/contact/contact.details";
import { contactHeaderContent } from "@/data/content/contact/content.contact-header";
import {
  contactDetailsContent,
  contactMapContent,
} from "@/data/content/contact/content.contact-details";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  const { crumb, eyebrow, heading, description } = contactHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <ContactDetails groups={contactDetailsContent} map={contactMapContent} />
    </>
  );
}
