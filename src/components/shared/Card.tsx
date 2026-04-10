"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  icon,
  href,
  className,
  children,
}: CardProps) {
  const content = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "bg-white rounded-card p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 h-full",
        className
      )}
    >
      {icon && <div className="mb-4 text-primary-600">{icon}</div>}
      <h3 className="font-heading text-h4 font-bold text-neutral-900 mb-2">
        {title}
      </h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
