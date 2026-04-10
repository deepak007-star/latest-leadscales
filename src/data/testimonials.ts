export interface Testimonial {
  name: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mike R.",
    company: "Comfort Air HVAC",
    industry: "HVAC",
    quote:
      "LeadScale transformed our business. We went from struggling to fill our schedule to turning down jobs because we're fully booked.",
    rating: 5,
  },
  {
    name: "Carlos D.",
    company: "RapidFlow Plumbing",
    industry: "Plumbing",
    quote:
      "We used to rely on word of mouth. Now we have a predictable flow of calls every single day. LeadScale changed everything.",
    rating: 5,
  },
  {
    name: "David W.",
    company: "Summit Roofing",
    industry: "Roofing",
    quote:
      "LeadScale cut our cost per lead by 70% and tripled our estimate volume. We're now the busiest roofer in our area.",
    rating: 5,
  },
  {
    name: "Dr. Amanda K.",
    company: "Bright Smile Dental",
    industry: "Dentist",
    quote:
      "Our implant cases doubled within 3 months. These are high-value patients who are ready to commit to treatment.",
    rating: 5,
  },
  {
    name: "Jessica M.",
    company: "Prime Realty Group",
    industry: "Real Estate",
    quote:
      "I stopped buying Zillow leads and invested with LeadScale instead. My business tripled and I own all my leads.",
    rating: 5,
  },
  {
    name: "Tom H.",
    company: "Spark Electric",
    industry: "Electrician",
    quote:
      "LeadScale gets us the kind of jobs we actually want — panel upgrades, whole-house rewires, EV charger installs.",
    rating: 5,
  },
];
