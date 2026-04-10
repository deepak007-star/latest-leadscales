"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import { SERVICE_IMAGES } from "@/lib/images";

const services = [
  {
    name: "Search Engine Optimization",
    shortName: "SEO",
    description:
      "Dominate local search results. When homeowners search for your services, you show up first — every time.",
    icon: <MagnifyingGlassIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.seo,
    stats: "Avg. 312% increase in organic traffic",
  },
  {
    name: "Paid Advertising",
    shortName: "PPC",
    description:
      "Targeted Google & Facebook ads that deliver qualified leads directly to your phone. Maximum ROI, zero waste.",
    icon: <CursorArrowRaysIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.ppc,
    stats: "Avg. $8 return on every $1 spent",
  },
  {
    name: "Website Design",
    shortName: "Web",
    description:
      "High-converting, mobile-first websites built to turn every visitor into a booked appointment.",
    icon: <ComputerDesktopIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.webDesign,
    stats: "Avg. 2.5x more conversions",
  },
  {
    name: "Google Business Profile",
    shortName: "GMB",
    description:
      "Own the Google Maps pack. Stand out with optimized listings, 5-star reviews, and local dominance.",
    icon: <MapPinIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.gmb,
    stats: "Avg. 180% increase in map views",
  },
  {
    name: "Email Marketing",
    shortName: "Email",
    description:
      "Automated campaigns that nurture leads, drive repeat business, and turn past customers into referral machines.",
    icon: <EnvelopeIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.email,
    stats: "Avg. 45% open rate for contractors",
  },
];

export default function ServicesOverview() {
  return (
    <SectionWrapper>
      <SectionHeading
        title="Everything You Need to Grow"
        subtitle="A complete digital marketing engine built specifically for contractors. Every service works together to maximize your leads and revenue."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service) => (
          <motion.div key={service.shortName} variants={fadeUp}>
            <div className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-neutral-100 hover:border-primary-200">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-neutral-800">
                    <span className="text-primary-600">{service.icon}</span>
                    {service.shortName}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full inline-block">
                  {service.stats}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-12">
        <Button href="/services" variant="secondary" size="lg">
          Explore All Services
        </Button>
      </div>
    </SectionWrapper>
  );
}
