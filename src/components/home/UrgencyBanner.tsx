"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/shared/Button";

export default function UrgencyBanner() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="relative overflow-hidden"
    >
      <div className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 py-12 md:py-16">
        <div className="absolute inset-0 animate-shimmer opacity-20" />
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-primary-200 uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 bg-accent-400 rounded-full animate-pulse" />
                Limited Availability
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
                Get Your First Month Free
              </h3>
              <p className="text-primary-200 text-base md:text-lg max-w-lg">
                We&apos;re accepting 10 new clients this month. No contracts, no
                risk — just results.
              </p>
            </div>
            <div className="shrink-0">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-primary-700 hover:bg-neutral-100 shadow-xl text-base"
              >
                Claim Your Spot
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
