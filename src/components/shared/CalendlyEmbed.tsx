"use client";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { CALENDLY_URL } from "@/lib/constants";

export default function CalendlyEmbed() {
  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          title="Book Your Free Strategy Call"
          subtitle="Pick a time that works for you. We'll analyze your current marketing, identify opportunities, and create a custom growth plan — completely free."
        />
        <Button
          href={CALENDLY_URL}
          size="lg"
          className="mx-auto"
        >
          Schedule Your Call Now
        </Button>
        <p className="mt-4 text-sm text-neutral-400">
          30-minute call &middot; No obligation &middot; Custom growth plan included
        </p>
      </div>
    </SectionWrapper>
  );
}
