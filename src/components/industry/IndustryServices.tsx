"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { INDUSTRY_SERVICE_IMAGES, SERVICE_IMAGES } from "@/lib/images";

const fallbackKeys = ["seo", "ppc", "webDesign", "gmb", "email"] as const;

interface IndustryServicesProps {
  services: {
    name: string;
    description: string;
    features: string[];
  }[];
  industryName: string;
  industrySlug?: string;
}

export default function IndustryServices({
  services,
  industryName,
  industrySlug,
}: IndustryServicesProps) {
  const industryImages = industrySlug
    ? INDUSTRY_SERVICE_IMAGES[industrySlug]
    : null;

  return (
    <SectionWrapper bgColor="bg-neutral-50">
      <SectionHeading
        title={`How We Grow Your ${industryName} Business`}
        subtitle="A complete digital marketing strategy tailored specifically for your industry."
      />
      <div className="space-y-12 md:space-y-20">
        {services.map((service, index) => {
          const imgSrc = industryImages
            ? industryImages[index % industryImages.length]
            : SERVICE_IMAGES[fallbackKeys[index % fallbackKeys.length]];

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-14 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={imgSrc}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center font-heading font-bold text-primary-600 shadow-md">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fi) => (
                    <li
                      key={fi}
                      className="flex items-start gap-2.5 text-neutral-700"
                    >
                      <CheckCircleIcon className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                      <span className="text-[15px]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
