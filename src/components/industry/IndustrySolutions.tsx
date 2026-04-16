"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";

interface IndustrySolutionsProps {
  solutions: {
    title: string;
    description: string;
  }[];
  industryName: string;
}

export default function IndustrySolutions({
  solutions,
  industryName,
}: IndustrySolutionsProps) {
  return (
    <SectionWrapper bgColor="bg-white" id="solutions">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          Our Approach
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
          How We Grow Your {industryName} Business
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 h-full"
          >
            <h3 className="font-heading text-lg font-bold text-neutral-900 mb-3">
              {solution.title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {solution.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
