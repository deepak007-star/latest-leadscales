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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-neutral-900">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-neutral-900/75" />
      </div>

      <div className="container-custom relative z-10 pt-28 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight"
          >
            Maximize Your Revenue
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The #1 marketing platform for home service contractors. More calls,
            more jobs, more revenue — guaranteed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-6"
          >
            <Button
              href="/contact"
              size="lg"
              className="text-base px-12 py-4"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>

        {/* Industries We Serve — Scorpion-style grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-12"
        >
          <p className="text-center text-neutral-400 text-sm font-medium uppercase tracking-widest mb-6">
            Industries We Serve
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INDUSTRIES.map((industry) => {
              const img =
                INDUSTRY_IMAGES[industry.slug as keyof typeof INDUSTRY_IMAGES];
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group relative rounded-xl overflow-hidden h-36 sm:h-40"
                >
                  <Image
                    src={img.card}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-900/50 group-hover:bg-primary-900/60 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4">
                    <span className="text-white font-heading font-bold text-sm sm:text-base">
                      {industry.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
