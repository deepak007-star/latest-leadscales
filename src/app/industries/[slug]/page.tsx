import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import IndustryHero from "@/components/industry/IndustryHero";
import IndustryNav from "@/components/industry/IndustryNav";
import TrustBar from "@/components/home/TrustBar";
import PainPoints from "@/components/industry/PainPoints";
import IndustryShowcase from "@/components/industry/IndustryShowcase";
import IndustryServices from "@/components/industry/IndustryServices";
import StatsCounter from "@/components/home/StatsCounter";
import CaseStudy from "@/components/industry/CaseStudy";
import IndustryTestimonials from "@/components/industry/IndustryTestimonials";
import LeadForm from "@/components/shared/LeadForm";
import CalendlyEmbed from "@/components/shared/CalendlyEmbed";
import IndustryCTA from "@/components/industry/IndustryCTA";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return {};
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

export default function IndustryPage({ params }: PageProps) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  return (
    <>
      <IndustryHero data={industry} />
      <IndustryNav
        industryName={industry.name}
        industrySlug={industry.slug}
      />
      <TrustBar />

      <div id="challenges">
        <PainPoints
          painPoints={industry.painPoints}
          industryName={industry.name}
        />
      </div>

      <IndustryShowcase
        industrySlug={industry.slug}
        industryName={industry.name}
      />

      <div id="solutions">
        <IndustryServices
          services={industry.services}
          industryName={industry.name}
          industrySlug={industry.slug}
        />
      </div>

      <StatsCounter stats={industry.stats} />

      <div id="results">
        <CaseStudy
          caseStudy={industry.caseStudy}
          industrySlug={industry.slug}
        />
      </div>

      <IndustryTestimonials
        testimonials={industry.testimonials}
        industryName={industry.name}
      />

      <div id="contact" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Ready to Grow Your {industry.name} Business?
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Fill out the form and one of our {industry.name.toLowerCase()}{" "}
                marketing specialists will contact you within 24 hours with a
                custom growth plan.
              </p>
              <ul className="space-y-3 text-neutral-700">
                {[
                  "Free marketing audit of your current presence",
                  "Custom strategy tailored to your market",
                  "No obligation — just actionable insights",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm">
                    <svg
                      className="w-5 h-5 text-accent-500 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm
              source={`industry-${industry.slug}`}
              industry={industry.name}
            />
          </div>
        </div>
      </div>

      <CalendlyEmbed />
      <IndustryCTA data={industry} />
    </>
  );
}
