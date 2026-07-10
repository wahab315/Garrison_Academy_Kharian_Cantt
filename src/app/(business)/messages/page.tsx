import PageHead from "@/features/page-head";
import MessagesLeaders from "@/ui/messages/messages.leaders";
import {
  messagesHeaderContent,
  messagesLeadersContent,
  messagesNoteContent,
} from "@/data/content/messages/content.messages-leaders";

export const metadata = { title: "Messages" };

export default function MessagesPage() {
  const { crumb, eyebrow, heading, description } = messagesHeaderContent;

  return (
    <>
      <PageHead crumb={crumb} eyebrow={eyebrow} title={heading} intro={description} />
      <MessagesLeaders leaders={messagesLeadersContent} note={messagesNoteContent} />
    </>
  );
}
