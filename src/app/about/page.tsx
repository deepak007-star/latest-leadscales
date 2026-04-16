import { Metadata } from "next";
import Image from "next/image";
import GradientText from "@/components/shared/GradientText";
import SectionWrapper from "@/components/shared/SectionWrapper";
import Button from "@/components/shared/Button";
import { ABOUT_IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "About LeadScale | Marketing Built for Contractors",
  description:
    "We only work with contractors. SEO, ads, and social media — all under one roof for $1,999/mo.",
};

const reasons = [
  {
    title: "Contractor-Only Focus",
    description:
      "We don't work with restaurants, lawyers, or e-commerce brands. Every strategy, every template, every ad — built for the trades.",
  },
  {
    title: "Results You Can Measure in Revenue",
    description:
      "We show you exactly how many calls came in, what they cost, and how many turned into booked jobs. If the numbers don't work, we fix it.",
  },
  {
    title: "No Lock-In Contracts",
    description:
      "Month-to-month. Every month, we earn your business. If we're not delivering, you walk.",
  },
  {
    title: "One Price, Everything Included",
    description:
      "$1,999/mo gets you SEO, paid ads, social media, and a dedicated account manager. No nickel-and-diming.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={ABOUT_IMAGES.team}
            alt="LeadScale team"
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-neutral-900" />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
              About LeadScale
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              We Don&apos;t Do Marketing for Everyone.{" "}
              <GradientText className="bg-gradient-to-r from-primary-400 to-accent-400">
                Just Contractors.
              </GradientText>
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              LeadScale exists for one reason: to help home service businesses
              get more calls, more jobs, and more revenue — without the
              guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <SectionWrapper bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Built by People Who Got Tired of Watching Contractors Get Burned
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                We&apos;ve seen it too many times. A contractor signs up with a
                big-name agency, pays $2,000–$5,000 a month, and gets a bunch of
                reports full of &ldquo;impressions&rdquo; and
                &ldquo;reach&rdquo; — but the phone doesn&apos;t ring.
              </p>
              <p>
                That&apos;s why we built LeadScale. Not another marketing
                agency. A growth partner built from the ground up for the trades.
              </p>
              <p>
                We know that a plumber in Dallas has different competition than
                an HVAC company in Phoenix. We know that roofing is seasonal and
                electrical work has razor-thin margins on residential. We know
                contractors don&apos;t care about vanity metrics — they care
                about booked jobs and revenue.
              </p>
              <p className="font-semibold text-neutral-900">
                So that&apos;s all we focus on.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={ABOUT_IMAGES.office}
              alt="Office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Why Contractors Choose LeadScale */}
      <SectionWrapper bgColor="bg-neutral-50">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Why Contractors Choose LeadScale
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-8 shadow-card border border-neutral-100"
            >
              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-heading font-bold text-lg shrink-0">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Team Section */}
      <SectionWrapper bgColor="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            A Team That Speaks Contractor, Not Corporate
          </h2>
          <div className="space-y-4 text-neutral-600 leading-relaxed text-lg">
            <p>
              Our team combines deep digital marketing expertise with hands-on
              knowledge of the home services industry. We&apos;ve managed
              millions in ad spend for contractors across the US — and
              we&apos;ve learned what actually moves the needle.
            </p>
            <p>
              You&apos;ll work with a dedicated account manager who knows your
              business, your market, and your goals. Not a rotating cast of
              junior reps reading from a script.
            </p>
          </div>
          <div className="mt-8">
            <Button href="/contact" size="lg">
              Meet us on a free strategy call
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <section className="bg-neutral-900 py-20 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-white/10">
              Our Mission
            </span>
            <p className="text-2xl md:text-3xl text-white font-heading font-bold leading-relaxed mb-8">
              Help 1,000 contractors double their revenue through marketing that
              actually works. No jargon. No vanity metrics. Just more jobs on
              the schedule.
            </p>
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100"
            >
              Let&apos;s Talk About Your Business
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
