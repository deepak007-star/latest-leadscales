"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/shared/Button";
import { INDUSTRY_IMAGES } from "@/lib/images";
import { INDUSTRIES } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-neutral-900">
      {/* Industry image columns as background — hidden on mobile for clean layout */}
      <div className="absolute inset-0 hidden sm:grid sm:grid-cols-3 lg:grid-cols-6">
        {INDUSTRIES.map((industry) => {
          const img =
            INDUSTRY_IMAGES[industry.slug as keyof typeof INDUSTRY_IMAGES];
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative overflow-hidden"
            >
              <Image
                src={img.hero}
                alt={industry.name}
                fill
                unoptimized
                className="object-cover group-hover:scale-110 transition-transform duration-700  group-hover:blur-0"
                sizes="(max-width: 1024px) 33vw, 16.67vw"
                priority
              />
              {/* Heavier dark overlay for text readability */}
              <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-70 group-hover:opacity-30" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="text-white font-heading font-bold text-base sm:text-lg lg:text-xl drop-shadow-lg">
                  {industry.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mobile-only: single background image for clean look */}
      <div className="absolute inset-0 sm:hidden">
        <Image
          src={INDUSTRY_IMAGES[INDUSTRIES[0].slug as keyof typeof INDUSTRY_IMAGES].hero}
          alt="Contractor at work"
          fill
          unoptimized
          className="object-cover blur-[3px]"
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Center content overlay */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-28 pb-16 pointer-events-none">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto px-5 pointer-events-none"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Your Competitors Are Booking Jobs Right Now. Are You?
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
          >
            LeadScale fills your calendar with high-intent customers through SEO, paid ads, and social media — so you stop chasing leads and start choosing jobs. Trusted by 50+ contractors across the US.
          </motion.p>

          <motion.div variants={fadeUp} className="pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              href="/contact"
              size="lg"
              className="text-base px-10 py-4 shadow-xl w-full sm:w-auto"
            >
              Get My Free Growth Plan
            </Button>
            <Button
              href="#how-it-works"
              variant="secondary"
              size="lg"
              className="text-base px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Mobile industry links */}
          <motion.div
            variants={fadeUp}
            className="mt-10 sm:hidden pointer-events-auto"
          >
            <p className="text-xs text-white/50 uppercase tracking-widest font-semibold mb-3">
              Industries We Serve
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {INDUSTRIES.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="text-xs text-white/70 bg-white/10 px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/20 transition-colors"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
