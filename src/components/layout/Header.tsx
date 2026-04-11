"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { COMPANY_NAME, NAV_LINKS, INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_IMAGES } from "@/lib/images";
import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const { scrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIndustriesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setIndustriesOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/98 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
          : "bg-white"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-sm tracking-tight">
                LS
              </span>
            </div>
            <span className="font-heading text-[22px] font-bold text-neutral-900 tracking-tight">
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Industries Dropdown - Click Based */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-lg text-[15px] font-medium transition-all",
                  industriesOpen
                    ? "text-primary-600 bg-primary-50"
                    : "text-neutral-700 hover:text-primary-600 hover:bg-neutral-50"
                )}
              >
                Industries
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    industriesOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Dropdown Panel */}
              {industriesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-neutral-100 overflow-hidden animate-fade-in">
                  {/* Header */}
                  <div className="px-6 pt-5 pb-3 border-b border-neutral-100">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Industries We Serve
                    </p>
                  </div>
                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-1 p-3">
                    {INDUSTRIES.map((industry) => {
                      const img =
                        INDUSTRY_IMAGES[
                          industry.slug as keyof typeof INDUSTRY_IMAGES
                        ];
                      return (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-transparent transition-all group"
                          onClick={() => setIndustriesOpen(false)}
                        >
                          <div className="w-11 h-11 rounded-xl overflow-hidden bg-neutral-100 shrink-0 ring-1 ring-neutral-200/60">
                            <Image
                              src={img.thumb}
                              alt={industry.name}
                              width={44}
                              height={44}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <span className="text-[15px] font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
                              {industry.name}
                            </span>
                            <p className="text-xs text-neutral-400 mt-0.5">
                              {industry.slug === "hvac" &&
                                "Heating & cooling pros"}
                              {industry.slug === "plumbing" &&
                                "Plumbing contractors"}
                              {industry.slug === "roofing" &&
                                "Roofing companies"}
                              {industry.slug === "dentist" &&
                                "Dental practices"}
                              {industry.slug === "real-estate" &&
                                "Real estate agents"}
                              {industry.slug === "electrician" &&
                                "Electrical contractors"}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  {/* Footer CTA */}
                  <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-100">
                    <Link
                      href="/contact"
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1.5"
                      onClick={() => setIndustriesOpen(false)}
                    >
                      Don&apos;t see your industry? Talk to us
                      <span className="text-lg">→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-[15px] text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <Button href="/contact" size="sm" className="shadow-md">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-100 py-4 animate-fade-in max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              {/* Industries Accordion */}
              <button
                onClick={() => setIndustriesOpen(!industriesOpen)}
                className="flex items-center justify-between px-4 py-3 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50"
              >
                Industries
                <ChevronDownIcon
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    industriesOpen && "rotate-180"
                  )}
                />
              </button>
              {industriesOpen && (
                <div className="pl-2 space-y-0.5 mb-2">
                  {INDUSTRIES.map((industry) => (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <span className="text-sm font-medium">
                        {industry.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}

              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-neutral-700 font-medium hover:text-primary-600 hover:bg-neutral-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 pt-4 space-y-3 border-t border-neutral-100 mt-2">
                <Button href="/contact" className="w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
