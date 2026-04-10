"use client";

import { useState } from "react";
import Button from "./Button";
import { INDUSTRIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  source?: string;
  industry?: string;
  variant?: "inline" | "compact";
  className?: string;
}

export default function LeadForm({
  source = "website",
  industry,
  variant = "inline",
  className,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      businessType: formData.get("businessType"),
      message: formData.get("message"),
      source,
    };

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={cn(
          "bg-white rounded-card p-8 text-center shadow-card",
          className
        )}
      >
        <div className="text-4xl mb-4">&#10003;</div>
        <h3 className="font-heading text-h3 font-bold text-neutral-900 mb-2">
          Thank You!
        </h3>
        <p className="text-neutral-600">
          We&apos;ll be in touch within 24 hours to schedule your free strategy
          call.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "bg-white rounded-card p-6 md:p-8 shadow-card",
        className
      )}
    >
      <h3 className="font-heading text-h4 font-bold text-neutral-900 mb-6">
        Get Your Free Strategy Call
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all"
        />
        <select
          name="businessType"
          defaultValue={industry || ""}
          className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-neutral-600"
        >
          <option value="" disabled>
            Select Your Industry
          </option>
          {INDUSTRIES.map((ind) => (
            <option key={ind.slug} value={ind.name}>
              {ind.name}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
        {variant === "inline" && (
          <textarea
            name="message"
            placeholder="Tell us about your business (optional)"
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
          />
        )}
        <Button type="submit" size="lg" className="w-full">
          {loading ? "Sending..." : "Get My Free Strategy Call"}
        </Button>
      </div>
      <p className="mt-4 text-center text-small text-neutral-400">
        Join 500+ contractors growing with LeadScale
      </p>
    </form>
  );
}
