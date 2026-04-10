import { Metadata } from "next";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import GradientText from "@/components/shared/GradientText";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Button from "@/components/shared/Button";
import FinalCTA from "@/components/home/FinalCTA";
import { SERVICE_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services | LeadScale",
  description:
    "LeadScale's digital marketing services for contractors: SEO, Paid Ads, Web Design, Google My Business, and Email Marketing.",
};

const services = [
  {
    name: "Search Engine Optimization (SEO)",
    description:
      "Dominate local search results and get found by customers actively looking for your services. We optimize your website, build local citations, and create content that ranks — so you're the first call when someone needs a contractor.",
    icon: <MagnifyingGlassIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.seo,
    features: [
      "Local SEO and Google Maps optimization",
      "Service-area and neighborhood targeting",
      "Content strategy for high-intent keywords",
      "Technical SEO for peak performance",
      "Monthly ranking reports and analytics",
      "Competitor analysis and outranking strategy",
    ],
  },
  {
    name: "Paid Advertising (PPC)",
    description:
      "Targeted Google and Facebook ads that deliver qualified leads directly to your phone. We manage every aspect — from keyword research to ad copy to landing pages — so you get maximum ROI from every dollar spent.",
    icon: <CursorArrowRaysIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.ppc,
    features: [
      "Google Search and Local Service Ads",
      "Facebook and Instagram lead generation",
      "Custom landing pages for each campaign",
      "Call tracking and lead attribution",
      "A/B testing for continuous improvement",
      "Budget optimization and waste reduction",
    ],
  },
  {
    name: "Website Design & Development",
    description:
      "High-converting websites built to turn visitors into paying customers. Mobile-first, fast-loading, and designed with one goal: getting your phone to ring.",
    icon: <ComputerDesktopIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.webDesign,
    features: [
      "Mobile-first responsive design",
      "Click-to-call on every page",
      "Online scheduling integration",
      "SEO-optimized structure and content",
      "Fast load times and Core Web Vitals",
      "Conversion rate optimization",
    ],
  },
  {
    name: "Google My Business (GMB)",
    description:
      "Your Google Business Profile is often the first thing potential customers see. We optimize it to stand out in Maps, generate reviews, and drive calls — making you the obvious choice in your area.",
    icon: <MapPinIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.gmb,
    features: [
      "Complete profile optimization",
      "Review generation and response management",
      "Weekly Google Posts for engagement",
      "Photo and video optimization",
      "Q&A monitoring and management",
      "Local pack ranking improvement",
    ],
  },
  {
    name: "Email Marketing",
    description:
      "Stay top-of-mind with past customers and nurture leads who aren't ready to buy yet. Our automated email campaigns drive repeat business, referrals, and long-term customer relationships.",
    icon: <EnvelopeIcon className="h-7 w-7" />,
    image: SERVICE_IMAGES.email,
    features: [
      "Automated welcome and follow-up sequences",
      "Seasonal maintenance reminders",
      "Referral incentive campaigns",
      "Monthly newsletters with tips and offers",
      "Re-engagement campaigns for lapsed customers",
      "Performance tracking and optimization",
    ],
  },
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
            Marketing That{" "}
            <GradientText className="bg-gradient-to-r from-primary-400 to-accent-400">
              Fills Your Schedule
            </GradientText>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            From SEO to email marketing, we provide everything contractors need
            to dominate their local market and generate a consistent flow of
            qualified leads.
          </p>
          <Button href="/contact" size="lg" className="shadow-[0_0_30px_rgba(37,99,235,0.3)]">
            Get Your Free Strategy Call
          </Button>
        </div>
      </section>

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
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                {service.name}
              </h2>
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
              <Button href="/contact" variant="secondary" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </SectionWrapper>
      ))}

      <FinalCTA />
    </>
  );
}
