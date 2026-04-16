export interface Testimonial {
  name: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  result?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Mike R.",
    company: "HVAC Contractor, Phoenix AZ",
    industry: "HVAC",
    quote:
      "We went from 15 calls a month to over 60. LeadScale paid for itself in the first week.",
    rating: 5,
    result: "4x increase in monthly calls",
  },
  {
    name: "Sarah T.",
    company: "Plumbing Company Owner, Dallas TX",
    industry: "Plumbing",
    quote:
      "I was spending $3,000/mo on ads and getting junk leads. LeadScale cut my cost per lead in half and doubled my bookings.",
    rating: 5,
    result: "52% lower cost per lead",
  },
  {
    name: "James L.",
    company: "Roofing Contractor, Atlanta GA",
    industry: "Roofing",
    quote:
      "They actually understand the contractor business. First agency that didn't feel like I was explaining my job to them.",
    rating: 5,
    result: "38 booked jobs in first 60 days",
  },
];
