"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_IMAGES } from "@/lib/images";
import { industries } from "@/data/industries";

export default function IndustryGrid() {
  return (
    <SectionWrapper bgColor="bg-neutral-50">
      <SectionHeading
        title="Pick Your Industry"
        subtitle="We build marketing strategies tailored to your industry. Every campaign, every keyword, every ad — designed specifically for your business."
        gradient
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {INDUSTRIES.map((industry) => {
          const data = industries.find((i) => i.slug === industry.slug);
          const img =
            INDUSTRY_IMAGES[industry.slug as keyof typeof INDUSTRY_IMAGES];
          return (
            <motion.div key={industry.slug} variants={fadeUp}>
              <Link href={`/industries/${industry.slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl h-72 group cursor-pointer"
                >
                  {/* Background Image */}
                  <Image
                    src={img.card}
                    alt={industry.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="font-heading text-2xl font-bold text-white mb-1">
                      {industry.name}
                    </h3>
                    <p className="text-neutral-300 text-sm mb-4">
                      {data?.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary-300 text-sm font-semibold group-hover:text-primary-200 group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
