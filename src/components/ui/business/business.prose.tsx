import type { ReactNode } from "react";
import Box from "@/common/box";
import Typography from "@/common/typography";
import BusinessRichText from "@/components/ui/business/business.rich-text";
import type { RichText } from "@/data/types/type.business-rich-text";

export type ProseBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: readonly string[] }
  /** List items that need inline emphasis, e.g. "**1985** — Campus founded". */
  | { kind: "richList"; items: readonly RichText[] };

/**
 * Long-form copy expressed as data. The `first` flag reproduces the original
 * `style={{ marginTop: 0 }}` on a leading heading.
 */
export default function BusinessProse({
  blocks,
  className,
  children,
}: {
  blocks: readonly ProseBlock[];
  className?: string;
  /** Rendered after the blocks, inside the same `.prose` box. */
  children?: ReactNode;
}) {
  return (
    <Box className={["prose", className].filter(Boolean).join(" ")}>
      {blocks.map((block, i) => {
        if (block.kind === "heading") {
          return (
            <Typography
              as="h3"
              key={block.text}
              className={i === 0 ? "prose__heading--first" : undefined}
            >
              {block.text}
            </Typography>
          );
        }
        if (block.kind === "paragraph") {
          return (
            <Typography as="p" key={block.text.slice(0, 32)}>
              {block.text}
            </Typography>
          );
        }
        if (block.kind === "richList") {
          return (
            <Box as="ul" key={`richList-${i}`}>
              {block.items.map((runs, r) => (
                <Box as="li" key={`${i}-${r}`}>
                  <BusinessRichText runs={runs} />
                </Box>
              ))}
            </Box>
          );
        }
        return (
          <Box as="ul" key={block.items.join("|").slice(0, 32)}>
            {block.items.map((item) => (
              <Box as="li" key={item}>
                {item}
              </Box>
            ))}
          </Box>
        );
      })}
      {children}
    </Box>
  );
}
