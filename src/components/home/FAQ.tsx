"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How fast will I see results?",
    answer:
      "Paid ads start generating calls within the first 1-2 weeks. SEO builds momentum over 60-90 days. Most clients see a significant jump in booked jobs within the first 30 days from the combination of both.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "No. Month-to-month. We keep you because we deliver results, not because you're locked in.",
  },
  {
    question: "What if I only want certain services?",
    answer:
      "Our $1,999/mo package is designed to work as a system — SEO, ads, and social reinforce each other. That said, book a call and we'll see what makes sense for your business.",
  },
  {
    question: "How is LeadScale different from other marketing agencies?",
    answer:
      "Most agencies sell you a service and disappear. We're built exclusively for contractors. We know your margins, your seasons, and your customers. And we track every dollar so you always know what you're getting.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "HVAC, plumbing, roofing, electrical, dentistry, and real estate. If you're in home services, we probably speak your language.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-neutral-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-neutral-50 transition-colors"
      >
        <span className="font-semibold text-neutral-900 pr-4">{question}</span>
        <ChevronDownIcon
          className={cn(
            "h-5 w-5 text-neutral-400 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="px-6 pb-5 text-neutral-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper bgColor="bg-neutral-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-h2 font-bold text-neutral-900">
          Questions Contractors Actually Ask Us
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto space-y-3"
      >
        {faqs.map((faq) => (
          <motion.div key={faq.question} variants={fadeUp}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
