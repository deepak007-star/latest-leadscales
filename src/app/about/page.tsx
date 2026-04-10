import { Metadata } from "next";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import GradientText from "@/components/shared/GradientText";
import StatsCounter from "@/components/home/StatsCounter";
import FinalCTA from "@/components/home/FinalCTA";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ABOUT_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us | LeadScale",
  description:
    "Learn about LeadScale — the marketing agency built for contractors. We help HVAC, plumbing, roofing, dental, real estate, and electrical businesses grow.",
};

const values = [
  {
    title: "Results First",
    description:
      "We measure everything. If it doesn't drive calls, leads, or revenue, we don't do it. Every dollar you spend should generate a measurable return.",
  },
  {
    title: "Industry Expertise",
    description:
      "We don't do generic marketing. Every strategy is built specifically for your industry, your market, and your ideal customer.",
  },
  {
    title: "Transparency",
    description:
      "No black boxes, no jargon. You'll always know exactly what we're doing, why we're doing it, and the results it's producing.",
  },
  {
    title: "Partnership",
    description:
      "We succeed when you succeed. That's why we don't lock you into long-term contracts — we earn your business every single month.",
  },
];

const process = [
  {
    step: "1",
    title: "Discovery Call",
    description:
      "We learn about your business, your market, and your goals. We analyze your current marketing and identify the biggest opportunities.",
  },
  {
    step: "2",
    title: "Custom Strategy",
    description:
      "We build a tailored marketing plan combining SEO, paid ads, web design, GMB, and email marketing — optimized for your industry.",
  },
  {
    step: "3",
    title: "Launch & Optimize",
    description:
      "We implement your strategy and start driving leads. Every week, we analyze data and optimize for better results.",
  },
  {
    step: "4",
    title: "Scale & Grow",
    description:
      "As leads flow in, we help you scale. More service areas, more services, more revenue. Your growth is our mission.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ABOUT_IMAGES.team}
            alt="LeadScale team"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
              About LeadScale
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              We Help Contractors{" "}
              <GradientText className="bg-gradient-to-r from-primary-400 to-accent-400">
                Dominate Their Market
              </GradientText>
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              LeadScale was built with one mission: help service professionals
              get more leads, more calls, and more revenue through proven digital
              marketing. We&apos;ve served 500+ contractors and generated over
              $50 million in revenue for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <SectionWrapper bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-10">
              What We Stand For
            </h2>
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-4">
                  <CheckCircleIcon className="h-6 w-6 text-accent-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-neutral-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={ABOUT_IMAGES.office}
              alt="Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      <StatsCounter />

      {/* Process */}
      <SectionWrapper bgColor="bg-neutral-50">
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Getting started with LeadScale is simple. Here&apos;s our proven
            4-step process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-[2px] bg-primary-200" />
              )}
              <div className="text-center relative z-10">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-heading font-bold text-xl mx-auto mb-5 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
