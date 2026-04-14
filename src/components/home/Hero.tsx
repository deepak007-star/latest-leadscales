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
      {/* Industry image columns as background — Scorpion-style */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
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
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16.67vw"
                priority
              />
              {/* Dark overlay — starts at 50%, fades to 15% on hover */}
              <div className="absolute inset-0 bg-black transition-opacity duration-500 opacity-50 group-hover:opacity-[0.15]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="text-white font-heading font-bold text-base sm:text-lg lg:text-xl drop-shadow-lg">
                  {industry.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Center content overlay */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-28 pb-16 pointer-events-none">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto px-4 pointer-events-none"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-6 tracking-tight"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
          >
            Maximize Your Revenue
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-white font-medium max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
          >
            The #1 marketing platform for home service contractors. More calls,
            more jobs, more revenue — guaranteed.
          </motion.p>

          <motion.div variants={fadeUp} className="pointer-events-auto">
            <Button
              href="/contact"
              size="lg"
              className="text-base px-12 py-4 shadow-xl"
            >
              Increase My Revenue
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
