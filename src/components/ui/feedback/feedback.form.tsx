"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@/common/box";
import Button from "@/common/button";
import Input from "@/common/input";
import Select from "@/common/select";
import Textarea from "@/common/textarea";
import Typography from "@/common/typography";
import { useToast } from "@/components/features/toast";
import { submitFeedback } from "@/app/(business)/feedback/actions";
import {
  feedbackSchema,
  FEEDBACK_SUBJECTS,
  FEEDBACK_TYPES,
  type FeedbackInput,
} from "@/data/validation/feedback-schema";

export type FeedbackFormProps = {
  submitLabel: string;
  successToast: string;
  footnote: string;
};

export default function FeedbackForm({
  submitLabel,
  successToast,
  footnote,
}: FeedbackFormProps) {
  const toast = useToast();
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackInput>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: { type: FEEDBACK_TYPES[0], regarding: FEEDBACK_SUBJECTS[0] },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    const result = await submitFeedback(values);
    if (result.ok) {
      reset();
      toast(successToast);
      return;
    }
    setFormError(result.message);
  });

  return (
    <Box as="form" className="form" onSubmit={onSubmit} noValidate>
      <Box className="form__honeypot" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </Box>

      <Box className="frow">
        <Input
          label="Your name"
          placeholder="Optional — you may stay anonymous"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          label="Contact (optional)"
          placeholder="Phone or email"
          error={errors.contact?.message}
          {...register("contact")}
        />
      </Box>

      <Box className="frow">
        <Select
          label="Type"
          required
          options={FEEDBACK_TYPES}
          error={errors.type?.message}
          {...register("type")}
        />
        <Select
          label="Regarding"
          required
          options={FEEDBACK_SUBJECTS}
          error={errors.regarding?.message}
          {...register("regarding")}
        />
      </Box>

      <Textarea
        label="Your message"
        placeholder="Describe your feedback or concern in detail…"
        required
        error={errors.message?.message}
        {...register("message")}
      />

      {formError ? (
        <Typography as="p" classStyle="error" role="alert" className="form__error">
          {formError}
        </Typography>
      ) : null}

      <Button type="submit" classStyle="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : submitLabel}
      </Button>

      <Typography as="p" className="formnote">
        {footnote}
      </Typography>
    </Box>
  );
}
