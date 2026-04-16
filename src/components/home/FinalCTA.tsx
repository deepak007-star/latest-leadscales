"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/shared/Button";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-neutral-900">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container-custom relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Your Competitors Aren&apos;t Waiting. Neither Should You.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Book your free strategy call today. We&apos;ll show you exactly how many leads you&apos;re missing — and how to get them.
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
              Get My Free Growth Plan
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
