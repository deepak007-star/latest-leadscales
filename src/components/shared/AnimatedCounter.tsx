"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  decimals = 0,
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
        {prefix}
        {inView ? (
          <CountUp end={end} duration={2.5} decimals={decimals} />
        ) : (
          "0"
        )}
        {suffix}
      </div>
      <div className="text-primary-100 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
}
