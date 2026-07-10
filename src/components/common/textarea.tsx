import { forwardRef, type ComponentPropsWithoutRef } from "react";
import FieldShell, { errorId } from "@/common/field";

export type TextareaProps = {
  id?: string;
  name: string;
  label: string;
  error?: string;
  required?: boolean;
} & Omit<ComponentPropsWithoutRef<"textarea">, "name" | "id">;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { id, name, label, error, required, className, ...rest },
    ref,
  ) {
    const fieldId = id ?? name;
    return (
      <FieldShell id={fieldId} label={label} required={required} error={error}>
        <textarea
          ref={ref}
          id={fieldId}
          name={name}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId(fieldId) : undefined}
          className={["textarea", error && "input--invalid", className]
            .filter(Boolean)
            .join(" ")}
          {...rest}
        />
      </FieldShell>
    );
  },
);

export default Textarea;
