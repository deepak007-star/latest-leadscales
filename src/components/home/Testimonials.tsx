"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { TESTIMONIAL_AVATARS } from "@/lib/images";

const testimonials = [
  {
    quote:
      "We went from 15 calls a month to over 60. LeadScale paid for itself in the first week.",
    name: "Mike R.",
    title: "HVAC Contractor, Phoenix AZ",
    result: "4x increase in monthly calls",
  },
  {
    quote:
      "I was spending $3,000/mo on ads and getting junk leads. LeadScale cut my cost per lead in half and doubled my bookings.",
    name: "Sarah T.",
    title: "Plumbing Company Owner, Dallas TX",
    result: "52% lower cost per lead",
  },
  {
    quote:
      "They actually understand the contractor business. First agency that didn't feel like I was explaining my job to them.",
    name: "James L.",
    title: "Roofing Contractor, Atlanta GA",
    result: "38 booked jobs in first 60 days",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper bgColor="bg-white">
      <SectionHeading
        title="Contractors Don't Stick Around for Promises. They Stay for Results."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-neutral-50 rounded-2xl p-7 hover:bg-white hover:shadow-card-hover transition-all duration-300 border border-neutral-100 group"
          >
            {/* Quote */}
            <blockquote className="text-neutral-700 mb-6 leading-relaxed text-[15px]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Result badge */}
            <p className="text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full inline-block mb-6">
              Result: {testimonial.result}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-5 border-t border-neutral-200/60">
              <div className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary-100">
                <Image
                  src={TESTIMONIAL_AVATARS[index % TESTIMONIAL_AVATARS.length]}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-neutral-500">
                  {testimonial.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
