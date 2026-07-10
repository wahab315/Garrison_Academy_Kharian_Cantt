import Box from "@/common/box";
import Typography from "@/common/typography";

export type BusinessStep = { title: string; desc: string };

/** Auto-numbered process steps (the counter lives in `_steps.scss`). */
export default function BusinessSteps({
  steps,
  className,
}: {
  steps: readonly BusinessStep[];
  className?: string;
}) {
  return (
    <Box className={["steps", className].filter(Boolean).join(" ")}>
      {steps.map((step) => (
        <Box className="step" key={step.title}>
          <Box>
            <Typography as="h4">{step.title}</Typography>
            <Typography as="p">{step.desc}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
