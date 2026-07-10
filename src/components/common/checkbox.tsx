import { forwardRef, type ComponentPropsWithoutRef } from "react";
import Box from "@/common/box";
import Typography from "@/common/typography";
import { errorId } from "@/common/field";

export type CheckboxProps = {
  id?: string;
  name: string;
  label: string;
  error?: string;
} & Omit<ComponentPropsWithoutRef<"input">, "name" | "id" | "type">;

/** Label wraps the control, so the whole row is a hit target. */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { id, name, label, error, className, ...rest },
  ref,
) {
  const fieldId = id ?? name;
  return (
    <Box className="form-field form-field--inline">
      <Typography as="label" classStyle="small" htmlFor={fieldId} className="checkbox">
        <input
          ref={ref}
          id={fieldId}
          name={name}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId(fieldId) : undefined}
          className={["checkbox__control", error && "input--invalid", className]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        />
        <Typography as="span" className="checkbox__label">
          {label}
        </Typography>
      </Typography>

      {error ? (
        <Typography
          as="span"
          classStyle="error"
          id={errorId(fieldId)}
          role="alert"
          className="form-field__error"
        >
          {error}
        </Typography>
      ) : null}
    </Box>
  );
});

export default Checkbox;
