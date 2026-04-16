"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";

interface IndustryTestimonialsProps {
  testimonials: {
    quote: string;
    attribution: string;
    result: string;
  }[];
  industryName: string;
}

export default function IndustryTestimonials({
  testimonials,
  industryName,
}: IndustryTestimonialsProps) {
  return (
    <SectionWrapper bgColor="bg-white" id="results">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Real Results
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            What {industryName} Businesses Say
          </h2>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100 hover:shadow-card-hover transition-all duration-300 h-full flex flex-col"
          >
            <blockquote className="text-neutral-700 mb-5 leading-relaxed text-[15px] flex-1">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <p className="text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full inline-block mb-4 self-start">
              Result: {testimonial.result}
            </p>
            <p className="text-sm text-neutral-500 pt-4 border-t border-neutral-200/60">
              — {testimonial.attribution}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
