import Link from "next/link";
import {
  COMPANY_NAME,
  EMAIL,
  INDUSTRIES,
  SERVICES,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Top accent border */}
      <div className="h-1 bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <span className="font-heading text-[22px] font-bold text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              More leads. More calls. More revenue. We help contractors grow with
              proven digital marketing strategies.
            </p>
            <div className="space-y-3">
              <a
                href={`mailto:${EMAIL}`}
                className="block text-sm text-neutral-400 hover:text-primary-400 transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Free Strategy Call", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
              Industries
            </h4>
            <ul className="space-y-3">
              {INDUSTRIES.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500">
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
