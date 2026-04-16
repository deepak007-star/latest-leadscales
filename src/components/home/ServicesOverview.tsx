"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  MagnifyingGlassIcon,
  PhoneArrowUpRightIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const solutions = [
  {
    step: "1",
    title: "Get Found First",
    description:
      "We put you at the top of Google when homeowners search for your services. SEO, Google Business Profile, and local search — all handled.",
    stat: "Avg. 312% increase in organic traffic",
    icon: <MagnifyingGlassIcon className="h-7 w-7" />,
  },
  {
    step: "2",
    title: "Get Calls That Convert",
    description:
      "Google Ads + Meta Ads targeted to homeowners actively looking for your services. You only pay for clicks that turn into calls.",
    stat: "Avg. $8 return on every $1 spent",
    icon: <PhoneArrowUpRightIcon className="h-7 w-7" />,
  },
  {
    step: "3",
    title: "Stay Top of Mind",
    description:
      "Social media content that builds trust before they even call. When they need a contractor, you're the name they remember.",
    stat: "Avg. 3x more engagement than DIY posting",
    icon: <MegaphoneIcon className="h-7 w-7" />,
  },
];

export default function ServicesOverview() {
  return (
    <>
      {/* THE PROBLEM */}
      <SectionWrapper bgColor="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-h2 font-bold text-neutral-900 mb-6">
            You&apos;re Great at Your Trade. Marketing Shouldn&apos;t Be This Hard.
          </h2>
          <p className="text-body-lg text-neutral-600 leading-relaxed mb-4">
            You didn&apos;t start your business to figure out Google Ads. But right now, your competitors are outranking you, outspending you, and booking the jobs that should be yours.
          </p>
          <p className="text-body-lg text-neutral-600 leading-relaxed mb-4">
            Most contractors we talk to are stuck in the same cycle: overpaying agencies that don&apos;t understand their business, getting &ldquo;leads&rdquo; that never pick up the phone, and watching their slow season get slower every year.
          </p>
          <p className="text-lg font-semibold text-neutral-900">
            Sound familiar?
          </p>
        </motion.div>
      </SectionWrapper>

      {/* THE SOLUTION */}
      <SectionWrapper>
        <SectionHeading
          title="One Team. One Plan. More Jobs on Your Schedule."
          subtitle="LeadScale combines SEO, paid advertising, and social media into one $1,999/mo package — built specifically for contractors. No piecemeal vendors. No wasted budget. Just a full pipeline of customers ready to book."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div key={solution.step} variants={fadeUp}>
              <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-neutral-100 hover:border-primary-200 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary-600">
                    {solution.icon}
                  </span>
                  <span className="text-sm font-bold text-primary-600 uppercase tracking-wide">
                    Step {solution.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">
                  {solution.description}
                </p>
                <p className="text-xs font-semibold text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full inline-block">
                  → {solution.stat}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
