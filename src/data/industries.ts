export interface IndustryData {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: {
    icon: string;
    title: string;
    description: string;
  }[];
  services: {
    name: string;
    description: string;
    features: string[];
  }[];
  stats: {
    value: number;
    suffix: string;
    prefix?: string;
    label: string;
  }[];
  caseStudy: {
    companyType: string;
    location: string;
    resultHighlight: string;
    metrics: { label: string; before: string; after: string }[];
    quote: string;
    clientName: string;
  };
  testimonials: {
    name: string;
    company: string;
    quote: string;
    rating: number;
  }[];
  ctaHeadline: string;
  ctaSubtext: string;
  metaTitle: string;
  metaDescription: string;
}

export const industries: IndustryData[] = [
  {
    slug: "hvac",
    name: "HVAC",
    tagline: "Keep your techs busy year-round",
    heroHeadline: "Fill Every Service Slot, Year-Round",
    heroSubheadline:
      "Stop losing revenue during off-peak months. LeadScale delivers a steady stream of high-intent HVAC leads that keep your technicians busy and your business growing.",
    painPoints: [
      {
        icon: "calendar",
        title: "Seasonal Slowdowns",
        description:
          "Revenue drops during spring and fall while your competitors are booked solid. You need a marketing strategy that generates demand year-round.",
      },
      {
        icon: "phone",
        title: "Missed Emergency Calls",
        description:
          "When a furnace breaks at midnight, homeowners call whoever shows up first on Google. If that's not you, you're leaving money on the table.",
      },
      {
        icon: "chart",
        title: "Low-Quality Leads",
        description:
          "Tired of price shoppers and tire-kickers? Our targeting delivers homeowners who are ready to hire, not just browsing.",
      },
      {
        icon: "target",
        title: "Invisible Online Presence",
        description:
          "Your competitors are investing in digital marketing. Without a strong online presence, you're losing jobs you never even knew about.",
      },
    ],
    services: [
      {
        name: "SEO for HVAC Companies",
        description:
          "Rank #1 for high-value searches like 'AC repair near me' and 'furnace installation' in your service area.",
        features: [
          "Local SEO optimization for your service area",
          "Google Maps ranking improvement",
          "Content strategy targeting seasonal searches",
          "Technical SEO for faster site performance",
        ],
      },
      {
        name: "HVAC Google & Facebook Ads",
        description:
          "Targeted campaigns that reach homeowners the moment their system breaks down or needs maintenance.",
        features: [
          "Emergency service ads for after-hours searches",
          "Seasonal campaign management (heating/cooling)",
          "Retargeting to capture undecided prospects",
          "Call tracking for every lead source",
        ],
      },
      {
        name: "HVAC Website Design",
        description:
          "Fast, mobile-first websites that convert visitors into booked appointments.",
        features: [
          "Click-to-call on every page",
          "Online scheduling integration",
          "Service area pages for each location",
          "Before/after project galleries",
        ],
      },
      {
        name: "Google Business Profile Management",
        description:
          "Stand out in Google Maps with optimized listings, reviews, and regular updates.",
        features: [
          "Profile optimization for maximum visibility",
          "Review generation and response management",
          "Weekly Google Posts for engagement",
          "Q&A monitoring and optimization",
        ],
      },
      {
        name: "HVAC Email Marketing",
        description:
          "Stay top-of-mind with seasonal maintenance reminders and exclusive offers.",
        features: [
          "Automated seasonal maintenance reminders",
          "New customer welcome sequences",
          "Referral program campaigns",
          "Monthly newsletter with HVAC tips",
        ],
      },
    ],
    stats: [
      { value: 312, suffix: "%", label: "Avg. Increase in Calls" },
      { value: 85, suffix: "+", label: "HVAC Clients" },
      { value: 15000, suffix: "+", label: "Leads Generated" },
      { value: 4.8, suffix: "/5", label: "Client Satisfaction" },
    ],
    caseStudy: {
      companyType: "HVAC Company",
      location: "Dallas, TX",
      resultHighlight: "3x more service calls in 90 days",
      metrics: [
        { label: "Monthly Calls", before: "45", after: "142" },
        { label: "Google Ranking", before: "Page 3", after: "#1 Local" },
        { label: "Monthly Revenue", before: "$38K", after: "$112K" },
      ],
      quote:
        "LeadScale transformed our business. We went from struggling to fill our schedule to turning down jobs because we're fully booked.",
      clientName: "Mike R., Owner",
    },
    testimonials: [
      {
        name: "James T.",
        company: "Comfort Air Solutions",
        quote:
          "Our phone hasn't stopped ringing since we started with LeadScale. Best investment we've ever made for our HVAC business.",
        rating: 5,
      },
      {
        name: "Sarah M.",
        company: "Elite Heating & Cooling",
        quote:
          "They understand the HVAC industry. The leads are qualified and ready to book. Our close rate jumped from 30% to 65%.",
        rating: 5,
      },
    ],
    ctaHeadline: "Ready to Keep Your Techs Busy Year-Round?",
    ctaSubtext:
      "Join 85+ HVAC companies that trust LeadScale to deliver consistent, high-quality leads. Get your free strategy call today.",
    metaTitle: "HVAC Marketing & Lead Generation | LeadScale",
    metaDescription:
      "Get more HVAC leads with LeadScale's proven digital marketing. SEO, Google Ads, web design & more for HVAC contractors. Free strategy call.",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    tagline: "Be the first plumber they call",
    heroHeadline: "Be the First Plumber They Call",
    heroSubheadline:
      "When a pipe bursts, homeowners grab their phone. LeadScale makes sure your business is the first one they see — and the one they call.",
    painPoints: [
      {
        icon: "phone",
        title: "Emergency Calls Going to Competitors",
        description:
          "When someone searches 'emergency plumber near me' at 2 AM, you need to be the top result. If you're not, that's a $500+ job going to someone else.",
      },
      {
        icon: "chart",
        title: "Inconsistent Lead Flow",
        description:
          "Some weeks you're slammed, others you're idle. A reliable marketing engine keeps your schedule consistently full.",
      },
      {
        icon: "money",
        title: "Wasting Money on Bad Marketing",
        description:
          "Yellow pages, Yelp ads, HomeAdvisor — you've tried them all. It's time for a strategy that actually delivers ROI you can measure.",
      },
      {
        icon: "target",
        title: "Can't Compete with Big Franchises",
        description:
          "National chains have massive budgets. Smart digital marketing levels the playing field and helps local plumbers win more jobs.",
      },
    ],
    services: [
      {
        name: "Plumbing SEO",
        description:
          "Rank for emergency and routine plumbing searches in your area so customers find you first.",
        features: [
          "Emergency plumbing keyword targeting",
          "Service-specific landing pages",
          "Local citation building and cleanup",
          "Competitor analysis and outranking strategy",
        ],
      },
      {
        name: "Plumbing PPC Advertising",
        description:
          "Google Ads that capture high-intent searches and deliver calls from homeowners with real plumbing problems.",
        features: [
          "24/7 emergency service campaigns",
          "Call-only ads for immediate conversions",
          "Geo-targeting for your service area",
          "Negative keyword optimization to cut waste",
        ],
      },
      {
        name: "Plumber Website Design",
        description:
          "Professional websites that build trust and make it easy for customers to contact you.",
        features: [
          "Prominent phone number and click-to-call",
          "Service pages for every offering",
          "Customer review integration",
          "Mobile-optimized for on-the-go searches",
        ],
      },
      {
        name: "Google Business Profile for Plumbers",
        description:
          "Dominate the Google Maps pack with a fully optimized and active business profile.",
        features: [
          "Complete profile setup and optimization",
          "Review generation strategy",
          "Photo and update posting schedule",
          "Service area and category optimization",
        ],
      },
      {
        name: "Plumbing Email Campaigns",
        description:
          "Keep past customers coming back with seasonal reminders and special offers.",
        features: [
          "Annual maintenance reminder sequences",
          "Seasonal tips and promotions",
          "Referral incentive campaigns",
          "Re-engagement campaigns for past customers",
        ],
      },
    ],
    stats: [
      { value: 275, suffix: "%", label: "Avg. Increase in Calls" },
      { value: 70, suffix: "+", label: "Plumbing Clients" },
      { value: 12000, suffix: "+", label: "Leads Generated" },
      { value: 4.9, suffix: "/5", label: "Client Satisfaction" },
    ],
    caseStudy: {
      companyType: "Plumbing Company",
      location: "Phoenix, AZ",
      resultHighlight: "4x more emergency calls in 60 days",
      metrics: [
        { label: "Monthly Calls", before: "28", after: "115" },
        { label: "Google Maps Rank", before: "#12", after: "#1" },
        { label: "Monthly Revenue", before: "$25K", after: "$95K" },
      ],
      quote:
        "We used to rely on word of mouth. Now we have a predictable flow of calls every single day. LeadScale changed everything.",
      clientName: "Carlos D., Owner",
    },
    testimonials: [
      {
        name: "Robert K.",
        company: "Fast Flow Plumbing",
        quote:
          "Within 30 days, we were getting more calls than we could handle. Had to hire two more plumbers to keep up with demand.",
        rating: 5,
      },
      {
        name: "Lisa P.",
        company: "PipeMasters",
        quote:
          "Finally, a marketing company that understands plumbing. The leads are real, the results are measurable, and the ROI is incredible.",
        rating: 5,
      },
    ],
    ctaHeadline: "Ready to Get More Plumbing Calls?",
    ctaSubtext:
      "Join 70+ plumbing companies growing with LeadScale. Get your free strategy call today.",
    metaTitle: "Plumbing Marketing & Lead Generation | LeadScale",
    metaDescription:
      "Get more plumbing leads with LeadScale. SEO, Google Ads, web design & GMB management for plumbers. Free strategy call.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    tagline: "More estimates, more roofs, more revenue",
    heroHeadline: "More Estimates. More Roofs. More Revenue.",
    heroSubheadline:
      "From storm damage leads to new installations, LeadScale fills your pipeline with homeowners ready to get a quote. No more chasing — let the leads come to you.",
    painPoints: [
      {
        icon: "cloud",
        title: "Feast-or-Famine After Storms",
        description:
          "Storm season brings a flood of leads, but what happens when the weather calms down? You need consistent marketing that works in any season.",
      },
      {
        icon: "money",
        title: "Sky-High Lead Costs",
        description:
          "Roofing leads from aggregators cost $50-$150+ each, and you're competing with 5 other roofers for the same homeowner.",
      },
      {
        icon: "chart",
        title: "Low Estimate-to-Close Ratio",
        description:
          "If you're closing less than 40% of your estimates, the problem might be lead quality, not your sales pitch.",
      },
      {
        icon: "target",
        title: "Losing to Bigger Companies",
        description:
          "National roofing companies spend millions on marketing. Smart digital strategies help local roofers compete and win.",
      },
    ],
    services: [
      {
        name: "Roofing SEO",
        description:
          "Rank for 'roof repair,' 'roof replacement,' and storm-related searches in your market.",
        features: [
          "Storm damage keyword targeting",
          "Neighborhood and zip code SEO",
          "Content marketing for roofing education",
          "Link building from local directories",
        ],
      },
      {
        name: "Roofing Google & Facebook Ads",
        description:
          "Targeted campaigns that reach homeowners right after storms and during peak roofing season.",
        features: [
          "Storm-chasing ad campaigns (weather-triggered)",
          "Facebook lead ads for new installations",
          "Insurance claim-focused messaging",
          "Video ads showcasing your work quality",
        ],
      },
      {
        name: "Roofing Website Design",
        description:
          "Websites that showcase your work and convert visitors into free estimate requests.",
        features: [
          "Before/after project galleries",
          "Free estimate request forms",
          "Financing calculator integration",
          "Drone footage and video integration",
        ],
      },
      {
        name: "GMB for Roofers",
        description:
          "Stand out in local searches with a stellar Google Business Profile.",
        features: [
          "Review generation from satisfied customers",
          "Project photos and regular updates",
          "Service area optimization",
          "Competitive analysis in your market",
        ],
      },
      {
        name: "Roofing Email Marketing",
        description:
          "Follow up with estimate requests and nurture leads through the decision process.",
        features: [
          "Estimate follow-up sequences",
          "Storm damage awareness campaigns",
          "Annual roof inspection reminders",
          "Referral reward programs",
        ],
      },
    ],
    stats: [
      { value: 340, suffix: "%", label: "Avg. Increase in Estimates" },
      { value: 60, suffix: "+", label: "Roofing Clients" },
      { value: 9000, suffix: "+", label: "Leads Generated" },
      { value: 4.7, suffix: "/5", label: "Client Satisfaction" },
    ],
    caseStudy: {
      companyType: "Roofing Company",
      location: "Atlanta, GA",
      resultHighlight: "2.5x more estimates in 90 days",
      metrics: [
        { label: "Monthly Estimates", before: "20", after: "52" },
        { label: "Cost Per Lead", before: "$120", after: "$35" },
        { label: "Monthly Revenue", before: "$80K", after: "$210K" },
      ],
      quote:
        "LeadScale cut our cost per lead by 70% and tripled our estimate volume. We're now the busiest roofer in our area.",
      clientName: "David W., Owner",
    },
    testimonials: [
      {
        name: "Mark S.",
        company: "Summit Roofing",
        quote:
          "After a hail storm, our phone was ringing off the hook. But even in quiet months, LeadScale keeps the leads flowing.",
        rating: 5,
      },
      {
        name: "Jennifer L.",
        company: "Top Shelf Roofing",
        quote:
          "We used to buy shared leads. Now we get exclusive homeowners calling us directly. The difference in close rate is night and day.",
        rating: 5,
      },
    ],
    ctaHeadline: "Ready to Book More Roofing Jobs?",
    ctaSubtext:
      "Join 60+ roofing companies growing with LeadScale. Get your free strategy call today.",
    metaTitle: "Roofing Marketing & Lead Generation | LeadScale",
    metaDescription:
      "Get more roofing leads with LeadScale. SEO, Google Ads, web design & GMB management for roofers. Free strategy call.",
  },
  {
    slug: "dentist",
    name: "Dentist",
    tagline: "Fill your appointment book every week",
    heroHeadline: "Fill Your Appointment Book Every Week",
    heroSubheadline:
      "Attract high-value patients who need cleanings, implants, cosmetic work, and emergency care. LeadScale brings them to your door.",
    painPoints: [
      {
        icon: "calendar",
        title: "Empty Appointment Slots",
        description:
          "Every empty chair is lost revenue. A consistent flow of new patients keeps your schedule full and your practice profitable.",
      },
      {
        icon: "money",
        title: "Expensive Patient Acquisition",
        description:
          "New patient costs keep rising. Smart digital marketing reduces your cost per acquisition while increasing patient quality.",
      },
      {
        icon: "chart",
        title: "Losing Patients to Corporate Chains",
        description:
          "Corporate dental chains spend millions on ads. You need a targeted local strategy to compete and win in your market.",
      },
      {
        icon: "target",
        title: "Low Online Visibility",
        description:
          "If your practice doesn't appear on the first page of Google, potential patients are choosing your competitors instead.",
      },
    ],
    services: [
      {
        name: "Dental SEO",
        description:
          "Rank for high-value searches like 'dentist near me,' 'dental implants,' and 'emergency dentist' in your area.",
        features: [
          "Service-specific keyword targeting (implants, cosmetic, emergency)",
          "Local SEO for your neighborhood",
          "Patient education content strategy",
          "Technical SEO for site performance",
        ],
      },
      {
        name: "Dental Practice PPC",
        description:
          "Google Ads campaigns that drive new patient appointments for your most profitable services.",
        features: [
          "High-value service targeting (implants, Invisalign)",
          "New patient special offer campaigns",
          "Insurance-focused ad messaging",
          "Call tracking and appointment attribution",
        ],
      },
      {
        name: "Dental Website Design",
        description:
          "Modern, welcoming websites that build trust and convert visitors into booked appointments.",
        features: [
          "Online appointment scheduling",
          "Patient testimonials and smile galleries",
          "Insurance and financing information",
          "Virtual tour and team bios",
        ],
      },
      {
        name: "GMB for Dental Practices",
        description:
          "Dominate local dental searches with an optimized and active Google Business Profile.",
        features: [
          "Review generation from happy patients",
          "Before/after photo galleries",
          "Service and insurance updates",
          "Q&A management for common patient questions",
        ],
      },
      {
        name: "Dental Email Marketing",
        description:
          "Keep patients coming back and generate referrals with automated email campaigns.",
        features: [
          "Appointment reminder sequences",
          "Reactivation campaigns for lapsed patients",
          "Referral incentive programs",
          "Seasonal promotions (teeth whitening, back-to-school)",
        ],
      },
    ],
    stats: [
      { value: 200, suffix: "%", label: "Avg. Increase in New Patients" },
      { value: 45, suffix: "+", label: "Dental Clients" },
      { value: 8000, suffix: "+", label: "Patients Generated" },
      { value: 4.9, suffix: "/5", label: "Client Satisfaction" },
    ],
    caseStudy: {
      companyType: "Dental Practice",
      location: "Chicago, IL",
      resultHighlight: "60 new patients per month within 120 days",
      metrics: [
        { label: "New Patients/Month", before: "15", after: "60" },
        { label: "Cost Per Patient", before: "$280", after: "$85" },
        { label: "Monthly Revenue", before: "$45K", after: "$140K" },
      ],
      quote:
        "LeadScale helped us go from struggling to find new patients to having a waitlist. The quality of patients is outstanding.",
      clientName: "Dr. Amanda K.",
    },
    testimonials: [
      {
        name: "Dr. Steven R.",
        company: "Bright Smile Dental",
        quote:
          "We've tried multiple marketing agencies. LeadScale is the first one that actually understands dental marketing and delivers real results.",
        rating: 5,
      },
      {
        name: "Dr. Michelle P.",
        company: "Family Dental Care",
        quote:
          "Our implant cases doubled within 3 months. These are high-value patients who are ready to commit to treatment.",
        rating: 5,
      },
    ],
    ctaHeadline: "Ready to Fill Your Appointment Book?",
    ctaSubtext:
      "Join 45+ dental practices growing with LeadScale. Get your free strategy call today.",
    metaTitle: "Dental Marketing & Patient Generation | LeadScale",
    metaDescription:
      "Get more dental patients with LeadScale. SEO, Google Ads, web design & GMB management for dentists. Free strategy call.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline: "Be the agent everyone calls first",
    heroHeadline: "Be the Agent Everyone Calls First",
    heroSubheadline:
      "In a competitive market, visibility is everything. LeadScale positions you as the go-to agent in your area with proven digital marketing strategies.",
    painPoints: [
      {
        icon: "chart",
        title: "Inconsistent Lead Pipeline",
        description:
          "Relying on referrals alone means unpredictable income. Build a marketing machine that delivers buyer and seller leads consistently.",
      },
      {
        icon: "target",
        title: "Losing Listings to Tech-Savvy Agents",
        description:
          "Agents with strong online presence are winning more listings. Your digital footprint directly impacts your earning potential.",
      },
      {
        icon: "money",
        title: "Expensive Portal Leads",
        description:
          "Zillow and Realtor.com leads cost a fortune and are shared with multiple agents. Own your lead generation instead.",
      },
      {
        icon: "phone",
        title: "Low Brand Recognition",
        description:
          "In your market, homeowners should think of you first. Without strong digital marketing, you're just another name in the MLS.",
      },
    ],
    services: [
      {
        name: "Real Estate SEO",
        description:
          "Rank for neighborhood-specific searches and become the local market expert online.",
        features: [
          "Neighborhood and community pages",
          "Market report content strategy",
          "Long-tail keyword targeting for buyers/sellers",
          "IDX integration for property search",
        ],
      },
      {
        name: "Real Estate Ads",
        description:
          "Facebook and Google campaigns that generate buyer and seller leads in your target neighborhoods.",
        features: [
          "Just-listed and just-sold ad campaigns",
          "Home valuation landing pages",
          "Buyer lead capture funnels",
          "Retargeting for website visitors",
        ],
      },
      {
        name: "Agent Website Design",
        description:
          "Professional websites that showcase your expertise and capture leads around the clock.",
        features: [
          "IDX property search integration",
          "Neighborhood guides and market data",
          "Testimonial and transaction showcase",
          "Lead capture on every page",
        ],
      },
      {
        name: "GMB for Real Estate Agents",
        description:
          "Build local authority with an optimized Google Business Profile that generates calls.",
        features: [
          "Profile optimization for real estate searches",
          "Review generation from past clients",
          "Regular market update posts",
          "Photo gallery of listings and closings",
        ],
      },
      {
        name: "Real Estate Email Marketing",
        description:
          "Nurture leads over weeks and months until they're ready to buy or sell.",
        features: [
          "Buyer drip campaigns",
          "Seller nurture sequences",
          "Monthly market report newsletters",
          "Anniversary and check-in automations",
        ],
      },
    ],
    stats: [
      { value: 185, suffix: "%", label: "Avg. Increase in Leads" },
      { value: 55, suffix: "+", label: "Agent Clients" },
      { value: 7500, suffix: "+", label: "Leads Generated" },
      { value: 4.8, suffix: "/5", label: "Client Satisfaction" },
    ],
    caseStudy: {
      companyType: "Real Estate Agent",
      location: "Miami, FL",
      resultHighlight: "35 closings in first year",
      metrics: [
        { label: "Monthly Leads", before: "8", after: "45" },
        { label: "Annual Closings", before: "12", after: "35" },
        { label: "Annual GCI", before: "$95K", after: "$320K" },
      ],
      quote:
        "I stopped buying Zillow leads and invested with LeadScale instead. My business tripled and I own all my leads.",
      clientName: "Jessica M., Realtor",
    },
    testimonials: [
      {
        name: "Brian T.",
        company: "Prime Realty Group",
        quote:
          "LeadScale helped me become the top-producing agent in my office. The seller leads alone paid for the service 10x over.",
        rating: 5,
      },
      {
        name: "Vanessa C.",
        company: "Coastal Properties",
        quote:
          "My online presence went from invisible to dominant. I'm now getting referrals from people who found me on Google.",
        rating: 5,
      },
    ],
    ctaHeadline: "Ready to Dominate Your Market?",
    ctaSubtext:
      "Join 55+ real estate professionals growing with LeadScale. Get your free strategy call today.",
    metaTitle: "Real Estate Marketing & Lead Generation | LeadScale",
    metaDescription:
      "Get more real estate leads with LeadScale. SEO, Google Ads, web design & GMB management for agents. Free strategy call.",
  },
  {
    slug: "electrician",
    name: "Electrician",
    tagline: "Light up your lead pipeline",
    heroHeadline: "Light Up Your Lead Pipeline",
    heroSubheadline:
      "From panel upgrades to emergency repairs, LeadScale connects you with homeowners who need a licensed electrician right now.",
    painPoints: [
      {
        icon: "phone",
        title: "Relying on Word-of-Mouth Alone",
        description:
          "Referrals are great but unpredictable. Digital marketing gives you control over your lead flow and business growth.",
      },
      {
        icon: "chart",
        title: "Losing Emergency Jobs",
        description:
          "When the power goes out, homeowners search 'emergency electrician near me.' If you're not ranking, you're losing high-value jobs.",
      },
      {
        icon: "money",
        title: "High Customer Acquisition Costs",
        description:
          "Lead-sharing services charge premium prices for leads sent to 5+ electricians. Exclusive leads convert better and cost less long-term.",
      },
      {
        icon: "target",
        title: "Competition from Handymen",
        description:
          "Unlicensed competitors undercut on price. Strong branding and online credibility help licensed electricians win on trust.",
      },
    ],
    services: [
      {
        name: "Electrician SEO",
        description:
          "Rank for electrical service searches in your area so homeowners find you before anyone else.",
        features: [
          "Emergency electrician keyword targeting",
          "Service-specific pages (panel upgrades, rewiring, EV chargers)",
          "Local citation building",
          "Google Maps optimization",
        ],
      },
      {
        name: "Electrician PPC Advertising",
        description:
          "Google Ads that capture high-intent searches from homeowners with real electrical needs.",
        features: [
          "Emergency service ad campaigns",
          "Service-specific landing pages",
          "Call tracking and lead attribution",
          "Budget optimization for maximum ROI",
        ],
      },
      {
        name: "Electrician Website Design",
        description:
          "Professional websites that highlight your licensing, expertise, and make it easy to get a quote.",
        features: [
          "License and insurance badge display",
          "Service area coverage maps",
          "Click-to-call on every page",
          "Online quote request forms",
        ],
      },
      {
        name: "GMB for Electricians",
        description:
          "Win the Google Maps 3-pack with a fully optimized business profile.",
        features: [
          "Complete profile setup with all services",
          "Review generation from happy customers",
          "Regular project photo updates",
          "Competitive analysis and benchmarking",
        ],
      },
      {
        name: "Electrician Email Marketing",
        description:
          "Stay connected with past customers and generate repeat business and referrals.",
        features: [
          "Safety inspection reminder campaigns",
          "Seasonal electrical tips",
          "Referral incentive programs",
          "New service announcement emails (EV chargers, smart home)",
        ],
      },
    ],
    stats: [
      { value: 250, suffix: "%", label: "Avg. Increase in Calls" },
      { value: 50, suffix: "+", label: "Electrician Clients" },
      { value: 6500, suffix: "+", label: "Leads Generated" },
      { value: 4.8, suffix: "/5", label: "Client Satisfaction" },
    ],
    caseStudy: {
      companyType: "Electrical Company",
      location: "Denver, CO",
      resultHighlight: "5x more calls in 120 days",
      metrics: [
        { label: "Monthly Calls", before: "18", after: "92" },
        { label: "Google Ranking", before: "Not ranked", after: "#2 Local" },
        { label: "Monthly Revenue", before: "$22K", after: "$88K" },
      ],
      quote:
        "I was skeptical about digital marketing, but LeadScale proved me wrong. My business has never been this busy.",
      clientName: "Tom H., Master Electrician",
    },
    testimonials: [
      {
        name: "Steve B.",
        company: "Spark Electric",
        quote:
          "LeadScale gets us the kind of jobs we actually want — panel upgrades, whole-house rewires, EV charger installs. Not just light bulb changes.",
        rating: 5,
      },
      {
        name: "Maria G.",
        company: "PowerPro Electric",
        quote:
          "Our Google reviews went from 12 to over 100, and we're now the top-ranked electrician in our city. Amazing results.",
        rating: 5,
      },
    ],
    ctaHeadline: "Ready to Power Up Your Lead Pipeline?",
    ctaSubtext:
      "Join 50+ electrical companies growing with LeadScale. Get your free strategy call today.",
    metaTitle: "Electrician Marketing & Lead Generation | LeadScale",
    metaDescription:
      "Get more electrician leads with LeadScale. SEO, Google Ads, web design & GMB management for electricians. Free strategy call.",
  },
];
