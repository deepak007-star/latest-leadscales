import { Metadata } from "next";
import Image from "next/image";
import {
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { EMAIL } from "@/lib/constants";
import LeadForm from "@/components/shared/LeadForm";
import GradientText from "@/components/shared/GradientText";

export const metadata: Metadata = {
  title: "Free Strategy Call | LeadScale",
  description:
    "Book a free marketing strategy call. We'll audit your presence and show you how to get more calls.",
};

const callSteps = [
  {
    step: "1",
    title: "We Listen",
    time: "10 min",
    description:
      "Tell us about your business — what services you offer, your service area, what's working, and what's not.",
  },
  {
    step: "2",
    title: "We Audit",
    time: "10 min",
    description:
      "We pull up your Google rankings, your competitors' ads, and your online presence live on the call.",
  },
  {
    step: "3",
    title: "We Map It Out",
    time: "10 min",
    description:
      "If we're a fit, we walk through a custom growth plan. If we're not, we'll tell you.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-neutral-900 py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Office"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 to-neutral-900" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Let&apos;s Talk About{" "}
            <GradientText className="bg-gradient-to-r from-primary-400 to-accent-400">
              Growing Your Business
            </GradientText>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Book a free strategy call. We&apos;ll audit your current marketing,
            show you what your competitors are doing, and map out a plan to get
            you more calls and booked jobs. No pressure. No cost.
          </p>
        </div>
      </section>

      {/* What Happens on the Call */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-10">
            What Happens on the Call
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {callSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-heading font-bold text-lg">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {item.time}
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <LeadForm source="contact-page" />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <h3 className="font-heading font-bold text-neutral-900 mb-6 text-lg">
                  Direct Contact
                </h3>
                <div className="space-y-5">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 text-neutral-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <EnvelopeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Email</p>
                      <p className="font-semibold">{EMAIL}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-neutral-700">
                    <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                      <ClockIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Hours</p>
                      <p className="font-semibold">
                        Monday–Friday, 8am–8pm PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-neutral-500 text-center">
                No spam. No pressure. We respond within 2 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
