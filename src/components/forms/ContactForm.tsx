"use client";

import React, { useState } from "react";
import { useForm, type Resolver } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui";
import { CONTACT_INFO } from "@/constants/contact";

const ENQUIRY_TYPES = [
  { value: "trial-class", label: "Trial Class" },
  { value: "school-partnership", label: "School Partnership" },
  { value: "corporate-training", label: "Corporate Training" },
  { value: "general", label: "General Enquiry" },
] as const;

const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  enquiryType: z
    .string()
    .refine(
      (val): val is (typeof ENQUIRY_TYPES)[number]["value"] =>
        ENQUIRY_TYPES.some((option) => option.value === val),
      { message: "Please select an enquiry type." }
    ),
  message: z.string().trim().min(1, "Please tell us a little about your enquiry."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Minimal zod -> react-hook-form resolver, written by hand so the project
 * doesn't need the @hookform/resolvers package on top of the two form
 * libraries already installed.
 */
const contactFormResolver: Resolver<ContactFormValues> = (values) => {
  const result = contactFormSchema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }

  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const key = String(issue.path[0]);
    if (!errors[key]) {
      errors[key] = { type: issue.code, message: issue.message };
    }
  }
  return { values: {}, errors };
};

const inputStyles = cn(
  "w-full rounded-lg border border-dark-grey/20 bg-white px-4 py-2.5 text-base text-text-primary",
  "placeholder:text-text-secondary/60",
  "focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2",
  "transition-colors duration-200"
);

const errorInputStyles = "border-red-500 focus:ring-red-500";

function buildWhatsAppMessage(values: ContactFormValues): string {
  const enquiryLabel =
    ENQUIRY_TYPES.find((option) => option.value === values.enquiryType)?.label ??
    values.enquiryType;

  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Enquiry Type: ${enquiryLabel}`,
    `Message: ${values.message}`,
  ].join("\n");
}

const ContactForm = () => {
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setFocus,
  } = useForm<ContactFormValues>({
    resolver: contactFormResolver,
  });

  const onValid = (values: ContactFormValues) => {
    setPreparedMessage(buildWhatsAppMessage(values));
  };

  const onInvalid = (formErrors: typeof errors) => {
    const firstField = (
      Object.keys(formErrors) as Array<keyof ContactFormValues>
    )[0];
    if (firstField) {
      setFocus(firstField);
    }
  };

  const whatsappHref = CONTACT_INFO.whatsappNumber
    ? `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
        preparedMessage ?? ""
      )}`
    : undefined;

  if (preparedMessage) {
    return (
      <div
        role="alert"
        aria-live="polite"
        aria-atomic="true"
        className="rounded-lg border border-orange/30 bg-orange/5 p-6"
      >
        <p className="font-semibold text-text-primary">
          Your enquiry is ready. Continue in WhatsApp to send it.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          We&apos;ve prepared your message. Nothing is sent until you review it
          in WhatsApp and press Send there yourself.
        </p>

        {whatsappHref ? (
          <Button
            variant="primary"
            size="lg"
            href={whatsappHref}
            className="mt-6 w-full sm:w-auto"
          >
            Continue to WhatsApp
          </Button>
        ) : (
          <div className="mt-6">
            <Button
              variant="primary"
              size="lg"
              disabled
              aria-disabled="true"
              className="w-full sm:w-auto"
            >
              Continue to WhatsApp
            </Button>
            <p className="mt-3 text-sm text-text-secondary">
              Our WhatsApp line is being finalised. Please check back soon.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => setPreparedMessage(null)}
          className="mt-6 block text-sm font-medium text-orange underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 rounded"
        >
          Edit your enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="space-y-6"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={errors.name ? "true" : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={cn(inputStyles, errors.name && errorInputStyles)}
          {...register("name")}
        />
        {errors.name && (
          <span id="name-error" role="alert" className="mt-1.5 block text-sm text-red-600">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={errors.email ? "true" : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={cn(inputStyles, errors.email && errorInputStyles)}
          {...register("email")}
        />
        {errors.email && (
          <span id="email-error" role="alert" className="mt-1.5 block text-sm text-red-600">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="enquiryType"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Enquiry Type <span aria-hidden="true">*</span>
        </label>
        <select
          id="enquiryType"
          defaultValue=""
          aria-required="true"
          aria-invalid={errors.enquiryType ? "true" : undefined}
          aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
          className={cn(inputStyles, errors.enquiryType && errorInputStyles)}
          {...register("enquiryType")}
        >
          <option value="" disabled>
            Select an enquiry type
          </option>
          {ENQUIRY_TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <span
            id="enquiryType-error"
            role="alert"
            className="mt-1.5 block text-sm text-red-600"
          >
            {errors.enquiryType.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-required="true"
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputStyles, "resize-y", errors.message && errorInputStyles)}
          {...register("message")}
        />
        {errors.message && (
          <span id="message-error" role="alert" className="mt-1.5 block text-sm text-red-600">
            {errors.message.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        className="w-full sm:w-auto"
      >
        Continue to WhatsApp
      </Button>
    </form>
  );
};

ContactForm.displayName = "ContactForm";

export { ContactForm };
