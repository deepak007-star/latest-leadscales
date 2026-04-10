"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import StarRating from "@/components/shared/StarRating";
import { testimonials } from "@/data/testimonials";
import { TESTIMONIAL_AVATARS } from "@/lib/images";

export default function Testimonials() {
  return (
    <SectionWrapper bgColor="bg-white">
      <SectionHeading
        title="Trusted by Contractors Nationwide"
        subtitle="See why 500+ contractors choose LeadScale to grow their business."
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="bg-neutral-50 rounded-2xl p-7 hover:bg-white hover:shadow-card-hover transition-all duration-300 border border-neutral-100 group"
          >
            {/* Header: Rating + Badge */}
            <div className="flex items-center justify-between mb-5">
              <StarRating rating={testimonial.rating} />
              <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                {testimonial.industry}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-neutral-700 mb-6 leading-relaxed text-[15px]">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

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
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Google Reviews Bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 bg-neutral-50 px-6 py-3 rounded-full border border-neutral-200">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-neutral-600">
            <span className="font-bold text-neutral-900">4.9/5</span> average
            rating from{" "}
            <span className="font-bold text-neutral-900">200+</span> Google
            reviews
          </span>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
