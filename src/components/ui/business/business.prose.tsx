import Box from "@/common/box";
import Typography from "@/common/typography";

export type ProseBlock =
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: readonly string[] };

/**
 * Long-form copy expressed as data. The `first` flag reproduces the original
 * `style={{ marginTop: 0 }}` on a leading heading.
 */
export default function BusinessProse({
  blocks,
  className,
}: {
  blocks: readonly ProseBlock[];
  className?: string;
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
    </Box>
  );
}
