"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import SectionWrapper from "@/components/shared/SectionWrapper";

interface PainPointsProps {
  painPoints: string[];
  closer: string;
  industryName: string;
}

export default function PainPoints({
  painPoints,
  closer,
  industryName,
}: PainPointsProps) {
  return (
    <SectionWrapper bgColor="bg-neutral-50" id="challenges">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <span className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
          Sound Familiar?
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
          The Challenges {industryName} Businesses Face
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto space-y-4"
      >
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="flex items-start gap-4 bg-white rounded-xl p-5 border border-neutral-100"
          >
            <ExclamationTriangleIcon className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
            <p className="text-neutral-700 leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mt-10 text-lg font-semibold text-neutral-900 max-w-2xl mx-auto"
      >
        {closer}
      </motion.p>
    </SectionWrapper>
  );
}
