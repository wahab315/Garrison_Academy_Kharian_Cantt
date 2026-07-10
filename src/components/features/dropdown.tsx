"use client";

import { useEffect, useId, useRef, useState } from "react";
import Box from "@/common/box";
import Typography from "@/common/typography";

export type DropdownOption = { value: string; label: string };

export type DropdownProps = {
  label: string;
  value: string | null;
  options: readonly DropdownOption[];
  placeholder?: string;
  error?: string;
  onValueChange: (value: string) => void;
};

/**
 * A controlled listbox. Unlike `common/select`, this is a custom widget, so it
 * owns its keyboard contract: Enter/Space open, Escape closes, arrows move the
 * active option, and a click outside dismisses it.
 */
export default function Dropdown({
  label,
  value,
  options,
  placeholder = "Select…",
  error,
  onValueChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  const listId = `${uid}-list`;
  const errorId = `${uid}-error`;
  const selected = options.find((o) => o.value === value) ?? null;

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open]);

  const commit = (index: number) => {
    const option = options[index];
    if (!option) return;
    onValueChange(option.value);
    setOpen(false);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        setOpen(false);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (open) commit(activeIndex);
        else setOpen(true);
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!open) setOpen(true);
        else setActiveIndex((i) => Math.min(i + 1, options.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      default:
        break;
    }
  };

  return (
    <Box className="dropdown" ref={rootRef}>
      <Typography as="span" classStyle="small" className="dropdown__label" id={`${uid}-label`}>
        {label}
      </Typography>

      <button
        type="button"
        className={`dropdown__trigger ${error ? "input--invalid" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-labelledby={`${uid}-label`}
        // Not aria-invalid: it is not supported on the implicit button role.
        aria-describedby={error ? errorId : undefined}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
      >
        {selected?.label ?? placeholder}
        <Typography as="span" className="dropdown__caret" aria-hidden="true" />
      </button>

      {open ? (
        <Box
          as="ul"
          id={listId}
          role="listbox"
          className="dropdown__list"
          aria-labelledby={`${uid}-label`}
        >
          {options.map((option, i) => (
            <Box
              as="li"
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={`dropdown__option ${i === activeIndex ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => commit(i)}
            >
              {option.label}
            </Box>
          ))}
        </Box>
      ) : null}

      {error ? (
        <Typography as="span" classStyle="error" id={errorId} role="alert">
          {error}
        </Typography>
      ) : null}
    </Box>
  );
}
