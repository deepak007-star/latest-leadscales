"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { INDUSTRY_IMAGES } from "@/lib/images";

interface CaseStudyProps {
  caseStudy: {
    companyType: string;
    location: string;
    resultHighlight: string;
    metrics: { label: string; before: string; after: string }[];
    quote: string;
    clientName: string;
  };
  industrySlug?: string;
}

export default function CaseStudy({ caseStudy, industrySlug }: CaseStudyProps) {
  const bgImage = industrySlug
    ? INDUSTRY_IMAGES[industrySlug as keyof typeof INDUSTRY_IMAGES]?.card
    : null;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image src={bgImage} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-neutral-900/85" />
        </div>
      )}
      {!bgImage && <div className="absolute inset-0 bg-neutral-900" />}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container-custom relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-flex items-center px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Real Results
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              {caseStudy.resultHighlight}
            </h2>
            <p className="text-neutral-400 mt-2">
              {caseStudy.companyType} &middot; {caseStudy.location}
            </p>
          </motion.div>

          {/* Metrics Cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
          >
            {caseStudy.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <p className="text-neutral-400 text-sm font-medium mb-3">
                  {metric.label}
                </p>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-500 line-through text-lg">
                    {metric.before}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 text-accent-400" />
                  <span className="text-white font-bold text-3xl">
                    {metric.after}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={fadeUp}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10 text-center"
          >
            <svg
              className="w-10 h-10 text-white/20 mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-white/90 font-medium leading-relaxed mb-6 max-w-3xl mx-auto">
              &ldquo;{caseStudy.quote}&rdquo;
            </blockquote>
            <p className="text-neutral-400 font-medium">
              — {caseStudy.clientName}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
