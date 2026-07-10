"use client";

import { useId, useState } from "react";
import Box from "@/common/box";
import Button from "@/common/button";
import Typography from "@/common/typography";

export type AccordionItem = { q: string; a: string };

export default function Accordion({ items }: { items: readonly AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const uid = useId();

  return (
    <Box className="acc">
      {items.map((item, i) => {
        const expanded = open === i;
        const panelId = `${uid}-panel-${i}`;
        const buttonId = `${uid}-button-${i}`;

        return (
          <Box key={item.q} className={`item ${expanded ? "open" : ""}`}>
            <Button
              id={buttonId}
              className="q"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setOpen(expanded ? null : i)}
            >
              {item.q}{" "}
              <Typography as="span" className="pl" aria-hidden="true">
                +
              </Typography>
            </Button>

            <Box
              id={panelId}
              className="a"
              role="region"
              aria-labelledby={buttonId}
            >
              <Typography as="p">{item.a}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
