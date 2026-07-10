import { forwardRef, type ComponentPropsWithoutRef } from "react";
import FieldShell, { errorId } from "@/common/field";

export type SelectOption = { value: string; label: string };

export type SelectProps = {
  id?: string;
  name: string;
  label: string;
  options: readonly (SelectOption | string)[];
  placeholder?: string;
  error?: string;
  required?: boolean;
} & Omit<ComponentPropsWithoutRef<"select">, "name" | "id" | "children">;

const normalise = (o: SelectOption | string): SelectOption =>
  typeof o === "string" ? { value: o, label: o } : o;

/** A native <select>. Not a custom listbox -- see features/dropdown for that. */
const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { id, name, label, options, placeholder, error, required, className, ...rest },
  ref,
) {
  const fieldId = id ?? name;
  return (
    <FieldShell id={fieldId} label={label} required={required} error={error}>
      <select
        ref={ref}
        id={fieldId}
        name={name}
        defaultValue={placeholder ? "" : undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId(fieldId) : undefined}
        className={["select", error && "input--invalid", className]
          .filter(Boolean)
          .join(" ")}
        {...rest}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map(normalise).map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
});

export default Select;
