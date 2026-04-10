"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import {
  CalendarDaysIcon,
  PhoneIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  CloudIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import SectionWrapper from "@/components/shared/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  calendar: <CalendarDaysIcon className="h-6 w-6" />,
  phone: <PhoneIcon className="h-6 w-6" />,
  chart: <ChartBarIcon className="h-6 w-6" />,
  money: <CurrencyDollarIcon className="h-6 w-6" />,
  cloud: <CloudIcon className="h-6 w-6" />,
  target: <MapPinIcon className="h-6 w-6" />,
};

interface PainPointsProps {
  painPoints: {
    icon: string;
    title: string;
    description: string;
  }[];
  industryName: string;
}

export default function PainPoints({
  painPoints,
  industryName,
}: PainPointsProps) {
  return (
    <SectionWrapper bgColor="bg-white">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="inline-flex items-center px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
            Common Challenges
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Sound Familiar?
          </h2>
          <p className="text-neutral-600 text-lg">
            These are the challenges {industryName.toLowerCase()} businesses face
            every day — and exactly what we solve.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto"
      >
        {painPoints.map((point, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group bg-neutral-50 hover:bg-white rounded-2xl p-6 border border-neutral-100 hover:border-red-200 hover:shadow-lg transition-all duration-300 flex gap-5"
          >
            <div className="shrink-0 w-12 h-12 rounded-xl bg-red-100 text-red-500 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
              {iconMap[point.icon] || <ChartBarIcon className="h-6 w-6" />}
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-neutral-900 mb-1.5">
                {point.title}
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
