"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Box from "@/common/box";
import Button from "@/common/button";
import Input from "@/common/input";
import Select from "@/common/select";
import Typography from "@/common/typography";
import { useToast } from "@/components/features/toast";
import { submitAdmission } from "@/app/(business)/admissions/actions";
import {
  admissionSchema,
  CLASS_OPTIONS,
  STREAM_OPTIONS,
  type AdmissionInput,
} from "@/data/validation/admission-schema";

export type AdmissionsFormProps = {
  heading: string;
  intro: string;
  submitLabel: string;
  successToast: string;
  footnote: { before: string; link: { label: string; href: string }; after: string };
};

export default function AdmissionsForm({
  heading,
  intro,
  submitLabel,
  successToast,
  footnote,
}: AdmissionsFormProps) {
  const toast = useToast();
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionInput>({
    resolver: zodResolver(admissionSchema),
    defaultValues: { classApplying: CLASS_OPTIONS[0], stream: STREAM_OPTIONS[0] },
  });

  const onSubmit = handleSubmit(async (values) => {
    setFormError(null);
    const result = await submitAdmission(values);
    if (result.ok) {
      reset();
      toast(successToast);
      return;
    }
    setFormError(result.message);
  });

  return (
    <Box as="form" className="form" onSubmit={onSubmit} noValidate>
      <Typography as="h3" classStyle="secondary" className="admissions__form-heading">
        {heading}
      </Typography>
      <Typography as="p" className="admissions__form-intro">
        {intro}
      </Typography>

      {/* Honeypot: hidden from people, irresistible to bots. */}
      <Box className="form__honeypot" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </Box>

      <Box className="frow">
        <Input
          label="Student name"
          placeholder="Full name"
          required
          error={errors.studentName?.message}
          {...register("studentName")}
        />
        <Select
          label="Class applying for"
          required
          options={CLASS_OPTIONS}
          error={errors.classApplying?.message}
          {...register("classApplying")}
        />
      </Box>

      <Box className="frow">
        <Input label="Date of birth" type="date" error={errors.dob?.message} {...register("dob")} />
        <Select
          label="Stream"
          options={STREAM_OPTIONS}
          error={errors.stream?.message}
          {...register("stream")}
        />
      </Box>

      <Input
        label="Guardian name"
        placeholder="Parent / guardian"
        required
        error={errors.guardianName?.message}
        {...register("guardianName")}
      />

      <Box className="frow">
        <Input
          label="Contact number"
          placeholder="03XX-XXXXXXX"
          required
          inputMode="tel"
          error={errors.contact?.message}
          {...register("contact")}
        />
        <Input
          label="Email"
          placeholder="you@email.com"
          type="email"
          error={errors.email?.message}
          {...register("email")}
        />
      </Box>

      {formError ? (
        <Typography as="p" classStyle="error" role="alert" className="form__error">
          {formError}
        </Typography>
      ) : null}

      <Button type="submit" classStyle="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : submitLabel}
      </Button>

      <Typography as="p" className="formnote">
        {footnote.before}
        <Button href={footnote.link.href} className="form__link">
          {footnote.link.label}
        </Button>
        {footnote.after}
      </Typography>
    </Box>
  );
}
