import { Metadata } from "next";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { PHONE_DISPLAY, PHONE_NUMBER, EMAIL, COMPANY_NAME } from "@/lib/constants";
import { TESTIMONIAL_AVATARS } from "@/lib/images";
import LeadForm from "@/components/shared/LeadForm";
import CalendlyEmbed from "@/components/shared/CalendlyEmbed";
import GradientText from "@/components/shared/GradientText";

export const metadata: Metadata = {
  title: "Contact Us | LeadScale",
  description:
    "Get in touch with LeadScale. Schedule your free strategy call and start getting more leads for your business.",
};

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
            Let&apos;s{" "}
            <GradientText className="bg-gradient-to-r from-primary-400 to-accent-400">
              Grow Your Business
            </GradientText>
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Ready to get more leads and fill your schedule? Fill out the form or
            give us a call — we&apos;ll create a custom growth strategy for
            free.
          </p>
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
                  Get In Touch
                </h3>
                <div className="space-y-5">
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    className="flex items-center gap-4 text-neutral-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <PhoneIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Call us</p>
                      <p className="font-semibold">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-center gap-4 text-neutral-700 hover:text-primary-600 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <EnvelopeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Email us</p>
                      <p className="font-semibold">{EMAIL}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 text-neutral-700">
                    <div className="w-11 h-11 rounded-xl bg-primary-100 flex items-center justify-center text-primary-600">
                      <MapPinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Serving</p>
                      <p className="font-semibold">Contractors Nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Card */}
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Why {COMPANY_NAME}?
                </h3>
                <ul className="space-y-3 text-primary-100 text-sm">
                  {[
                    "No long-term contracts",
                    "Results in 30 days or less",
                    "Dedicated account manager",
                    "Transparent reporting",
                    "Industry-specific strategies",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-accent-400 shrink-0"
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

              {/* Social Proof */}
              <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {TESTIMONIAL_AVATARS.slice(0, 3).map((avatar, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                      >
                        <Image
                          src={avatar}
                          alt=""
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-3.5 h-3.5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-neutral-600">
                  <span className="font-semibold text-neutral-800">4.9/5</span>{" "}
                  from 200+ Google reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CalendlyEmbed />
    </>
  );
}
