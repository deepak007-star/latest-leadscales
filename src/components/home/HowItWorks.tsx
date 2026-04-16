"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Button from "@/components/shared/Button";

const steps = [
  {
    step: "1",
    title: "Free Strategy Call",
    description:
      "We audit your current marketing, analyze your local competition, and show you exactly where you're leaving money on the table. No cost. No commitment.",
  },
  {
    step: "2",
    title: "We Build & Launch",
    description:
      "Our team builds your campaigns — SEO, ads, social — all tailored to your service area and the jobs you actually want. You approve everything before it goes live.",
  },
  {
    step: "3",
    title: "Your Phone Rings",
    description:
      "Within 30 days, you start getting calls from homeowners ready to book. We track every lead so you see exactly what's working — and what it's costing.",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper bgColor="bg-neutral-900" id="how-it-works">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="font-heading text-h2 font-bold text-white mb-4">
          From Sign-Up to Booked Jobs in 3 Steps
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {steps.map((step) => (
          <motion.div key={step.step} variants={fadeUp}>
            <div className="bg-white/[0.05] rounded-2xl p-8 border border-white/[0.06] h-full">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-heading font-bold text-lg mb-5">
                {step.step}
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center"
      >
        <Button
          href="/contact"
          size="lg"
          className="bg-white text-neutral-900 hover:bg-neutral-100 text-base"
        >
          Book My Free Strategy Call
        </Button>
      </motion.div>
    </SectionWrapper>
  );
}
