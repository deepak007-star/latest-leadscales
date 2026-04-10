"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/shared/Button";
import PhoneLink from "@/components/shared/PhoneLink";
import { INDUSTRY_IMAGES } from "@/lib/images";
import type { IndustryData } from "@/data/industries";

interface IndustryHeroProps {
  data: IndustryData;
}

export default function IndustryHero({ data }: IndustryHeroProps) {
  const img = INDUSTRY_IMAGES[data.slug as keyof typeof INDUSTRY_IMAGES];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-neutral-900">
      {/* Video Background with Image Fallback */}
      <div className="absolute inset-0">
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

      <div className="container-custom relative z-10 pt-28 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-white/80 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
              {data.name} Marketing
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            {data.heroHeadline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-neutral-300 mb-10 leading-relaxed max-w-xl"
          >
            {data.heroSubheadline}
          </motion.p>

          {/* CTA Row — always horizontal, vertically centered */}
          <motion.div
            variants={fadeUp}
            className="flex flex-row items-center flex-wrap gap-4"
          >
            <Button href="/contact" size="lg">
              Get Your Free Strategy Call
            </Button>
            <PhoneLink
              size="lg"
              className="text-white/90 hover:text-white"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
