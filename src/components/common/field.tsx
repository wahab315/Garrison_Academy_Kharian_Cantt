import type { ReactNode } from "react";
import Box from "@/common/box";
import Typography from "@/common/typography";

export type FieldShellProps = {
  /** Wired to the control via htmlFor / id. */
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

/** `aria-describedby` target for a control's error message. */
export const errorId = (id: string) => `${id}-error`;

/**
 * Label + control + error message. Shared by every form control so the
 * markup, ids and ARIA wiring are written exactly once.
 */
export default function FieldShell({
  id,
  label,
  required,
  error,
  children,
}: FieldShellProps) {
  return (
    <Box className="form-field">
      <Typography as="label" classStyle="small" htmlFor={id} className="form-field__label">
        {label}
        {required ? (
          <Typography as="span" className="form-field__required" aria-hidden="true">
            {" *"}
          </Typography>
        ) : null}
      </Typography>

      {children}

      {error ? (
        <Typography
          as="span"
          classStyle="error"
          id={errorId(id)}
          role="alert"
          className="form-field__error"
        >
          {error}
        </Typography>
      ) : null}
    </Box>
  );
}
