"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/shared/Button";
import { INDUSTRY_IMAGES, HERO_IMAGES } from "@/lib/images";
import type { IndustryData } from "@/data/industries";

interface IndustryHeroProps {
  data: IndustryData;
}

export default function IndustryHero({ data }: IndustryHeroProps) {
  const img = INDUSTRY_IMAGES[data.slug as keyof typeof INDUSTRY_IMAGES];

  return (
    <section className="relative flex items-center overflow-hidden bg-neutral-900 min-h-[auto] sm:min-h-[80vh]">
      {/* Desktop: industry-specific video/image background */}
      <div className="absolute inset-0 hidden sm:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={img.hero}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={img.video} type="video/mp4" />
        </video>
        <Image
          src={img.hero}
          alt={data.name}
          fill
          className="object-cover"
          priority
          style={{ zIndex: -1 }}
        />
        <div className="absolute inset-0 bg-neutral-900/70" />
      </div>

      {/* Mobile: generic contractor background — blurred, dark */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src={HERO_IMAGES.background}
          alt="Contractor at work"
          fill
          className="object-cover blur-[2px]"
          priority
        />
        <div className="absolute inset-0 bg-neutral-900/80" />
      </div>

      <div className="container-custom relative z-10 pt-24 pb-14 sm:pt-28 sm:pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white/80 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6 border border-white/10">
              {data.name} Marketing
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-4 sm:mb-6 tracking-tight"
          >
            {data.heroHeadline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-lg text-neutral-300 mb-6 sm:mb-10 leading-relaxed max-w-xl"
          >
            {data.heroSubheadline}
          </motion.p>

          <motion.div variants={fadeUp}>
            <Button
              href="/contact"
              size="md"
              className="sm:px-8 sm:py-4 sm:text-lg"
            >
              {data.heroCta}
            </Button>
          </motion.div>

          {data.heroTrust && (
            <motion.p
              variants={fadeUp}
              className="mt-5 sm:mt-8 text-xs sm:text-sm text-neutral-400/80"
            >
              {data.heroTrust}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
