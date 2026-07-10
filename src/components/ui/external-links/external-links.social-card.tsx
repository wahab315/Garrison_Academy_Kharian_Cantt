import Box from "@/common/box";
import Typography from "@/common/typography";
import { ToastButton } from "@/components/features/toast";
import type { externalLinksSocialContent } from "@/data/content/external-links/content.external-links-groups";

export type ExternalLinksSocialCardProps = typeof externalLinksSocialContent;

export default function ExternalLinksSocialCard({
  icon,
  title,
  desc,
  links,
}: ExternalLinksSocialCardProps) {
  return (
    <Box className="card link">
      <Box className="ic" aria-hidden="true">
        {icon}
      </Box>
      <Typography as="h3">{title}</Typography>
      <Typography as="p">{desc}</Typography>
      <Typography as="span" className="more external-links__social">
        {links.map((link) => (
          <ToastButton key={link.label} msg={link.toast}>
            {link.label}
          </ToastButton>
        ))}
      </Typography>
    </Box>
  );
}
