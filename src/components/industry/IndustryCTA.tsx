"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/shared/Button";
import type { IndustryData } from "@/data/industries";

interface IndustryCTAProps {
  data: IndustryData;
}

export default function IndustryCTA({ data }: IndustryCTAProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-neutral-900">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-custom relative z-10 text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
        >
          {data.ctaHeadline}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10"
        >
          {data.ctaSubtext}
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-neutral-900 hover:bg-neutral-100 text-base"
          >
            {data.heroCta}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
