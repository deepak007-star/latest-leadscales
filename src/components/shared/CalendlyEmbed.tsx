"use client";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { CALENDLY_URL } from "@/lib/constants";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function CalendlyEmbed() {
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  };

  return (
    <SectionWrapper>
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          title="Book Your Free Strategy Call"
          subtitle="Pick a time that works for you. We'll analyze your current marketing, identify opportunities, and create a custom growth plan — completely free."
        />
        <button
          onClick={openCalendly}
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-button transition-all duration-300 cursor-pointer bg-primary-600 text-white hover:bg-primary-700 shadow-button hover:shadow-lg px-8 py-4 text-lg mx-auto"
        >
          Schedule Your Call Now
        </button>
        <p className="mt-4 text-sm text-neutral-400">
          30-minute call &middot; No obligation &middot; Custom growth plan included
        </p>
      </div>
    </SectionWrapper>
  );
}
