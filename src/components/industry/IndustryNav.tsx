"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_IMAGES } from "@/lib/images";

interface IndustryNavProps {
  industryName: string;
  industrySlug: string;
}

export default function IndustryNav({
  industryName,
  industrySlug,
}: IndustryNavProps) {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const sections = [
    { id: "challenges", label: "Challenges" },
    { id: "solutions", label: "Solutions" },
    { id: "results", label: "Results" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Get Started" },
  ];

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 400);
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 130) {
            setActive(section.id);
            break;
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const otherIndustries = INDUSTRIES.filter((i) => i.slug !== industrySlug);

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-neutral-200 animate-slide-down">
      <div className="container-custom">
        <div className="flex items-center gap-6 py-0 overflow-x-auto">
          {/* Industry Switcher */}
          <div className="relative shrink-0">
            <button
              onClick={() => setShowPicker(!showPicker)}
              className="flex items-center gap-2.5 py-3 pr-4 border-r border-neutral-200 group"
            >
              <div className="w-7 h-7 rounded-lg overflow-hidden">
                <Image
                  src={
                    INDUSTRY_IMAGES[
                      industrySlug as keyof typeof INDUSTRY_IMAGES
                    ].thumb
                  }
                  alt={industryName}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-bold text-neutral-900">
                {industryName}
              </span>
              <svg
                className={cn(
                  "w-3.5 h-3.5 text-neutral-400 transition-transform",
                  showPicker && "rotate-180"
                )}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Industry Picker Dropdown */}
            {showPicker && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-fade-in z-50">
                {otherIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-neutral-50 transition-colors"
                    onClick={() => setShowPicker(false)}
                  >
                    <div className="w-7 h-7 rounded-lg overflow-hidden">
                      <Image
                        src={
                          INDUSTRY_IMAGES[
                            ind.slug as keyof typeof INDUSTRY_IMAGES
                          ].thumb
                        }
                        alt={ind.name}
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium text-neutral-700">
                      {ind.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Section Nav */}
          <nav className="flex items-center gap-0.5 overflow-x-auto py-1">
            {sections.map((section) => (
              <button
                key={section.id}
                className={cn(
                  "px-3.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                  active === section.id
                    ? "bg-primary-50 text-primary-600"
                    : "text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"
                )}
                onClick={() => {
                  document.getElementById(section.id)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
