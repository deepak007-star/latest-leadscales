export const COMPANY_NAME = "LeadScale";
export const EMAIL = "growth@leadscaleservice.com";

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const INDUSTRIES = [
  { name: "HVAC", slug: "hvac", icon: "🔥" },
  { name: "Plumbing", slug: "plumbing", icon: "🔧" },
  { name: "Roofing", slug: "roofing", icon: "🏠" },
  { name: "Dentist", slug: "dentist", icon: "🦷" },
  { name: "Real Estate", slug: "real-estate", icon: "🏡" },
  { name: "Electrician", slug: "electrician", icon: "⚡" },
];

export const SERVICES = [
  {
    name: "SEO",
    slug: "seo",
    description: "Dominate local search results and get found by customers actively looking for your services.",
    icon: "MagnifyingGlassIcon",
  },
  {
    name: "Paid Advertising",
    slug: "paid-ads",
    description: "Targeted Google & Facebook ads that deliver qualified leads directly to your phone.",
    icon: "CursorArrowRaysIcon",
  },
  {
    name: "Social Media",
    slug: "social-media",
    description: "Build trust and stay top of mind with consistent, professional social media content.",
    icon: "ChatBubbleLeftRightIcon",
  },
  {
    name: "Google Business Profile",
    slug: "gbp",
    description: "Optimize your Google Business Profile to stand out in maps and local searches.",
    icon: "MapPinIcon",
  },
];

export const STATS: { value: number; suffix: string; label: string; prefix?: string }[] = [
  { value: 50, suffix: "+", label: "Contractors Served" },
  { value: 4.9, suffix: "★", label: "Average Client Rating" },
];
