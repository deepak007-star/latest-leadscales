import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import GradientText from "@/components/shared/GradientText";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Button from "@/components/shared/Button";
import FinalCTA from "@/components/home/FinalCTA";
import { INDUSTRY_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Marketing for HVAC, Plumbing, Roofing & More | LeadScale",
  description:
    "Industry-specific marketing for home service contractors. Built for your trade. $1,999/mo.",
};

const industries = [
  {
    name: "HVAC",
    slug: "hvac",
    description:
      "Fill your schedule in summer AND winter. We target homeowners searching for AC repair, furnace installs, and maintenance plans — keeping your techs busy year-round.",
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    description:
      'Turn "burst pipe near me" into a booked call in under 60 seconds. We capture high-intent emergency searches and build your reputation.',
  },
  {
    name: "Roofing",
    slug: "roofing",
    description:
      "Win the $8,000–$25,000 jobs your competitors are bidding on. We target storm-damage searches, insurance claim keywords, and homeowners planning replacements.",
  },
  {
    name: "Electrical",
    slug: "electrician",
    description:
      "Get found for the high-margin work — panel upgrades, EV chargers, whole-home rewires. Not just $99 outlet repairs.",
  },
  {
    name: "Dentistry",
    slug: "dentist",
    description:
      "Book 30+ new patients every month with SEO, paid ads, and a reputation strategy that makes you the obvious choice in your area.",
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description:
      "Generate seller and buyer leads on autopilot. We build listing-focused campaigns and neighborhood-targeted ads that keep your pipeline full.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900" />
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Marketing That Knows Your Trade{" "}
            <GradientText className="bg-gradient-to-r from-primary-400 to-accent-400">
              Inside and Out
            </GradientText>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            We don&apos;t run the same playbook for every industry. Your
            margins, your seasons, your customers — we build around all of it.
          </p>
        </div>
      </section>

      {/* Intro */}
      <SectionWrapper bgColor="bg-neutral-50">
        <p className="max-w-3xl mx-auto text-center text-neutral-600 text-lg leading-relaxed">
          Every trade is different. A plumber running emergency calls needs
          different marketing than a roofer chasing $15,000 replacements.
          That&apos;s why we build custom strategies for each industry we
          serve — not templates.
        </p>
      </SectionWrapper>

      {/* Industry Cards */}
      <SectionWrapper bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const img =
              INDUSTRY_IMAGES[
                industry.slug as keyof typeof INDUSTRY_IMAGES
              ];
            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-card hover:shadow-card-hover transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={img.card}
                      alt={industry.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <div className="flex items-center gap-1.5 text-primary-600 text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                      See {industry.name} Marketing
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Don't See Your Industry */}
      <SectionWrapper bgColor="bg-neutral-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Don&apos;t See Your Industry?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            If you&apos;re a home service business, there&apos;s a good chance
            we can help. Book a call and we&apos;ll tell you straight up if
            we&apos;re the right fit.
          </p>
          <Button href="/contact" size="lg">
            Book a Free Strategy Call
          </Button>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
