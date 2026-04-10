"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { INDUSTRY_GALLERY } from "@/lib/images";

interface IndustryShowcaseProps {
  industrySlug: string;
  industryName: string;
}

export default function IndustryShowcase({
  industrySlug,
  industryName,
}: IndustryShowcaseProps) {
  const images = INDUSTRY_GALLERY[industrySlug];
  if (!images || images.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {images.map((src, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden group"
            >
              <Image
                src={src}
                alt={`${industryName} work ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
