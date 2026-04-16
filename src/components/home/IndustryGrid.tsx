"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { INDUSTRY_IMAGES } from "@/lib/images";

const industriesContent = [
  {
    name: "HVAC",
    slug: "hvac",
    tagline: "Fill your schedule in summer AND winter. We target homeowners searching for AC repair, furnace installs, and maintenance plans — keeping your techs busy year-round.",
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    tagline: "Turn \"burst pipe near me\" into a booked call in under 60 seconds. We capture high-intent emergency searches and build your reputation.",
  },
  {
    name: "Roofing",
    slug: "roofing",
    tagline: "Win the $8,000–$25,000 jobs your competitors are bidding on. We target storm-damage searches, insurance claim keywords, and homeowners planning replacements.",
  },
  {
    name: "Electrical",
    slug: "electrician",
    tagline: "Get found for the high-margin work — panel upgrades, EV chargers, whole-home rewires. Not just $99 outlet repairs.",
  },
  {
    name: "Dentistry",
    slug: "dentist",
    tagline: "Book 30+ new patients every month with SEO, paid ads, and a reputation strategy that makes you the obvious choice in your area.",
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    tagline: "Generate seller and buyer leads on autopilot. We build listing-focused campaigns and neighborhood-targeted ads that keep your pipeline full.",
  },
];

export default function IndustryGrid() {
  return (
    <SectionWrapper bgColor="bg-neutral-50">
      <SectionHeading
        title="Marketing Built for Your Industry. Not a Template."
        subtitle="Every trade has different margins, seasons, and customers. We don't run the same playbook for a plumber and a roofer. Here's who we work with:"
        gradient
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {industriesContent.map((industry) => {
          const img =
            INDUSTRY_IMAGES[industry.slug as keyof typeof INDUSTRY_IMAGES];
          return (
            <motion.div key={industry.slug} variants={fadeUp}>
              <Link href={`/industries/${industry.slug}`}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer bg-white border border-neutral-100 hover:border-primary-200 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img.card}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {industry.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {industry.tagline}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mt-10"
      >
        <Link
          href="/industries"
          className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
        >
          Find Your Industry
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
