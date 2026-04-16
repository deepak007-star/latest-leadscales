"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface IndustryWhatYouGetProps {
  items: {
    title: string;
    description: string;
  }[];
  industryName: string;
}

export default function IndustryWhatYouGet({
  items,
  industryName,
}: IndustryWhatYouGetProps) {
  return (
    <SectionWrapper bgColor="bg-neutral-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
          What You Get — $1,999/Month
        </h2>
        <p className="text-neutral-400 text-lg">
          Everything your {industryName.toLowerCase()} business needs to grow.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-3xl mx-auto space-y-5"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="flex items-start gap-4 bg-white/[0.05] rounded-xl p-5 border border-white/[0.06]"
          >
            <CheckCircleIcon className="h-6 w-6 text-primary-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
