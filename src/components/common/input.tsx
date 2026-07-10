import { forwardRef, type ComponentPropsWithoutRef } from "react";
import FieldShell, { errorId } from "@/common/field";

export type InputProps = {
  id?: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
} & Omit<ComponentPropsWithoutRef<"input">, "name" | "id">;

/** forwardRef: react-hook-form's register() needs to attach a ref. */
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, name, label, error, required, className, ...rest },
  ref,
) {
  const fieldId = id ?? name;
  return (
    <FieldShell id={fieldId} label={label} required={required} error={error}>
      <input
        ref={ref}
        id={fieldId}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId(fieldId) : undefined}
        className={["input", error && "input--invalid", className]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      />
    </FieldShell>
  );
});

export default Input;
