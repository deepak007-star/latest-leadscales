"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Button from "@/components/shared/Button";
import { CheckIcon } from "@heroicons/react/24/solid";

const features = [
  "Search Engine Optimization (SEO)",
  "Google Ads & Meta Ads Management",
  "Social Media Management & Content",
  "Google Business Profile Optimization",
  "Monthly Performance Reports",
  "Dedicated Account Manager",
];

export default function Pricing() {
  return (
    <SectionWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="font-heading text-h2 font-bold text-neutral-900 mb-4">
          Everything You Need. One Price. No Surprises.
        </h2>
        <div className="bg-white rounded-2xl shadow-card border border-neutral-100 p-8 md:p-10 mt-10">
          <p className="text-5xl md:text-6xl font-heading font-extrabold text-neutral-900 mb-2">
            $1,999<span className="text-2xl text-neutral-500 font-medium">/month</span>
          </p>
          <ul className="text-left space-y-3 mt-8 mb-8">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckIcon className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                <span className="text-neutral-700">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-500 mb-6">
            No setup fees. No long-term contracts. Cancel anytime.
          </p>
          <Button href="/contact" size="lg" className="w-full">
            Start Growing Today
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
