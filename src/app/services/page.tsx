import { Metadata } from "next";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
  MegaphoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/solid";
import GradientText from "@/components/shared/GradientText";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Button from "@/components/shared/Button";
import FinalCTA from "@/components/home/FinalCTA";
import { SERVICE_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "SEO + Ads + Social for Contractors | $1,999/mo | LeadScale",
  description:
    "Everything your contracting business needs — SEO, Google Ads, Meta Ads, social media, and GBP. One price. No contracts.",
};

const services = [
  {
    name: "Search Engine Optimization",
    tagline: "Show Up First When Homeowners Search for Your Services",
    description:
      'When someone Googles "HVAC repair near me" or "best plumber in [city]," you need to be in the top 3.',
    icon: <MagnifyingGlassIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.seo,
    features: [
      "On-page optimization (titles, content, speed, mobile)",
      "Local SEO to dominate Google Maps and the Local Pack",
      "Content strategy targeting searches your customers actually make",
      "Technical SEO audits and fixes",
      "Monthly keyword tracking and ranking reports",
    ],
    result: "Avg. 312% increase in organic traffic within 6 months.",
  },
  {
    name: "Paid Advertising",
    tagline: "Stop Wasting Ad Budget on Clicks That Never Call",
    description:
      "We build campaigns that target homeowners actively searching for your services — and we optimize weekly so every dollar works harder.",
    icon: <CursorArrowRaysIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.ppc,
    features: [
      "Google Search & Local Service Ads setup and management",
      "Meta (Facebook & Instagram) lead generation campaigns",
      "Audience targeting by service area, demographics, and intent",
      "Ad copy and creative tailored to each trade",
      "Weekly optimization + monthly performance reports",
    ],
    result:
      "Avg. $8 return on every $1 spent. First qualified calls within 7-14 days.",
  },
  {
    name: "Social Media",
    tagline: "Build Trust Before They Even Pick Up the Phone",
    description:
      "Homeowners check your social media before they call. If your last post is from 6 months ago, they're calling your competitor.",
    icon: <MegaphoneIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.gmb,
    features: [
      "Content creation (posts, stories, reels) tailored to your trade",
      "Posting schedule across Facebook and Instagram",
      "Review highlights, job showcases, and seasonal content",
      "Community engagement and response management",
      "Monthly content calendar you approve in advance",
    ],
    result: "Avg. 3x more engagement than DIY posting.",
  },
  {
    name: "Google Business Profile",
    tagline: "Own the Map. Own the Calls.",
    description:
      "Your Google Business Profile is often the first thing a customer sees. If it's incomplete, outdated, or buried, you're invisible.",
    icon: <MapPinIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.gmb,
    features: [
      "Full profile setup and optimization",
      "Photo and video uploads that showcase your work",
      "Review generation strategy and response templates",
      "Weekly posts and offers to keep your profile active",
      "Competitor monitoring in your local market",
    ],
    result:
      "Up to 70% more direction requests and 50% more calls than unoptimized listings.",
  },
];

const comparison = [
  {
    feature: "Monthly Cost",
    leadscale: "$1,999",
    agency: "$3,000–$7,000",
    diy: '"Free" (+ your time)',
  },
  {
    feature: "Contractor Expertise",
    leadscale: "Yes",
    agency: "Sometimes",
    diy: "No",
  },
  {
    feature: "SEO + Ads + Social",
    leadscale: "All included",
    agency: "Sold separately",
    diy: "Hit or miss",
  },
  {
    feature: "Dedicated Manager",
    leadscale: "Yes",
    agency: "Rotating reps",
    diy: "You",
  },
  {
    feature: "Long-Term Contract",
    leadscale: "No",
    agency: "Usually 6-12 months",
    diy: "No",
  },
  {
    feature: "Results Tracking",
    leadscale: "Every lead tracked",
    agency: "Vanity metrics",
    diy: "Guesswork",
  },
];

const pricingFeatures = [
  "Search Engine Optimization (SEO)",
  "Google Ads Management",
  "Meta Ads Management (Facebook + Instagram)",
  "Social Media Management & Content",
  "Google Business Profile Optimization",
  "Monthly Performance Reports",
  "Dedicated Account Manager",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
            alt="Marketing analytics"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
            Our Services
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Everything Your Business Needs to Grow.{" "}
            <GradientText className="bg-gradient-to-r from-primary-400 to-accent-400">
              One Plan. $1,999/Month.
            </GradientText>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            SEO + Google Ads + Meta Ads + Social Media + Google Business
            Profile — all managed by a team that only works with contractors.
          </p>
          <Button
            href="/contact"
            size="lg"
            className="shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            Get My Free Growth Plan
          </Button>
        </div>
      </section>

      {/* Intro */}
      <SectionWrapper bgColor="bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
            Piecemeal Marketing Doesn&apos;t Work. Here&apos;s What Does.
          </h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            Most contractors hire one vendor for SEO, another for ads, and try
            to handle social media themselves. The result? Nothing works
            together, nobody&apos;s accountable, and your budget disappears.
          </p>
          <p className="text-neutral-600 leading-relaxed text-lg mt-4">
            LeadScale runs everything under one roof. Your SEO feeds your ads.
            Your social builds trust. Your Google Business Profile converts
            searchers into callers. It&apos;s one machine built to do one thing:
            fill your schedule.
          </p>
        </div>
      </SectionWrapper>

      {/* Services */}
      {services.map((service, index) => (
        <SectionWrapper
          key={service.name}
          bgColor={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}
        >
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-10 lg:gap-16 items-center`}
          >
            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                {service.name}
              </h2>
              <p className="text-lg font-semibold text-primary-600 mb-4">
                {service.tagline}
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2.5 mb-6">
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
              <p className="text-sm font-semibold text-accent-600 bg-accent-50 px-4 py-2 rounded-lg inline-block">
                {service.result}
              </p>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* Transparency */}
      <SectionWrapper bgColor="bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Full Transparency
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-4">
            No mystery. No marketing jargon in a PDF. You get a clear monthly
            report showing: how many calls came in, what they cost, where they
            came from, and what we&apos;re doing next month to get you more.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Plus, you get a dedicated account manager — someone who knows your
            business, picks up the phone, and actually gives a damn.
          </p>
        </div>
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper bgColor="bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            One Plan. Everything Included.
          </h2>
          <div className="bg-neutral-50 rounded-2xl shadow-card border border-neutral-100 p-8 md:p-10 mt-10">
            <p className="text-5xl md:text-6xl font-heading font-extrabold text-neutral-900 mb-2">
              $1,999
              <span className="text-2xl text-neutral-500 font-medium">
                /month
              </span>
            </p>
            <ul className="text-left space-y-3 mt-8 mb-8">
              {pricingFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon className="h-5 w-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{feature}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500 mb-6">
              No setup fees. No long-term contracts. Cancel anytime.
            </p>
            <Button href="/contact" size="lg" className="w-full">
              Start Growing Today
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper bgColor="bg-neutral-50">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900">
            How LeadScale Stacks Up
          </h2>
        </div>
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-neutral-200">
                <th className="py-4 px-4 text-sm font-semibold text-neutral-500" />
                <th className="py-4 px-4 text-sm font-bold text-primary-600">
                  LeadScale
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-neutral-500">
                  Typical Agency
                </th>
                <th className="py-4 px-4 text-sm font-semibold text-neutral-500">
                  DIY
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-neutral-100"
                >
                  <td className="py-4 px-4 text-sm font-semibold text-neutral-900">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-sm font-semibold text-primary-600">
                    {row.leadscale}
                  </td>
                  <td className="py-4 px-4 text-sm text-neutral-500">
                    {row.agency}
                  </td>
                  <td className="py-4 px-4 text-sm text-neutral-500">
                    {row.diy}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center mt-10">
          <Button href="/contact" size="lg">
            See Why Contractors Switch to LeadScale
          </Button>
        </div>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
