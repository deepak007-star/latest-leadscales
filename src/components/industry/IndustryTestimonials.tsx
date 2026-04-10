"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import StarRating from "@/components/shared/StarRating";
import { TESTIMONIAL_AVATARS } from "@/lib/images";

interface IndustryTestimonialsProps {
  testimonials: {
    name: string;
    company: string;
    quote: string;
    rating: number;
  }[];
  industryName: string;
}

export default function IndustryTestimonials({
  testimonials,
  industryName,
}: IndustryTestimonialsProps) {
  return (
    <SectionWrapper bgColor="bg-neutral-50" id="testimonials">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Trusted by {industryName} Professionals
          </h2>
          <p className="text-neutral-600 text-lg">
            Real results from real businesses in your industry.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100"
          >
            <StarRating rating={testimonial.rating} className="mb-5" />
            <blockquote className="text-neutral-700 mb-6 leading-relaxed text-[15px]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
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
                <p className="text-xs text-neutral-500">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
