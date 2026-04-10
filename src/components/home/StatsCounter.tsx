"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { STATS } from "@/lib/constants";

interface StatsCounterProps {
  stats?: typeof STATS;
}

export default function StatsCounter({ stats = STATS }: StatsCounterProps) {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-neutral-900">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="container-custom relative z-10"
      >
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-neutral-400 text-lg">
            Real results from real contractors
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.05] rounded-2xl p-6 md:p-8 border border-white/[0.06]"
            >
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
