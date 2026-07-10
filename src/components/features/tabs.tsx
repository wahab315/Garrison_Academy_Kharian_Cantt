"use client";

import { useId, useState, type ReactNode } from "react";
import Box from "@/common/box";
import Button from "@/common/button";

export type TabItem = { label: string; panel: ReactNode };

export type TabsProps = {
  items: readonly TabItem[];
  centered?: boolean;
};

export default function Tabs({ items, centered = false }: TabsProps) {
  const [active, setActive] = useState(0);
  const uid = useId();

  const tabId = (i: number) => `${uid}-tab-${i}`;
  const panelId = (i: number) => `${uid}-panel-${i}`;

  return (
    <>
      <Box
        className={`tabs ${centered ? "tabs--centered" : ""}`}
        role="tablist"
      >
        {items.map((tab, i) => (
          <Button
            key={tab.label}
            id={tabId(i)}
            role="tab"
            aria-selected={i === active}
            aria-controls={panelId(i)}
            tabIndex={i === active ? 0 : -1}
            className={`tab ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {tab.label}
          </Button>
        ))}
      </Box>

      {items.map((tab, i) => (
        <Box
          key={tab.label}
          id={panelId(i)}
          role="tabpanel"
          aria-labelledby={tabId(i)}
          className={`tabpane ${i === active ? "active" : ""}`}
        >
          {tab.panel}
        </Box>
      ))}
    </>
  );
}
