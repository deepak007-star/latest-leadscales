export interface IndustryData {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroCta: string;
  heroTrust: string;
  painPoints: string[];
  painPointsCloser: string;
  solutions: {
    title: string;
    description: string;
  }[];
  whatYouGet: {
    title: string;
    description: string;
  }[];
  testimonials: {
    quote: string;
    attribution: string;
    result: string;
  }[];
  faqs: {
    question: string;
    answer: string;
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
    tagline: "Stop Losing Jobs to the HVAC Company Down the Street",
    heroHeadline: "Stop Losing Jobs to the HVAC Company Down the Street",
    heroSubheadline:
      'When a homeowner\'s AC dies at 2pm on a Tuesday, they Google "AC repair near me" and call the first company they see. LeadScale makes sure that company is you.',
    heroCta: "Get My Free HVAC Marketing Plan",
    heroTrust:
      "Trusted by HVAC contractors in Phoenix, Dallas, Atlanta, and 30+ US markets",
    painPoints: [
      "Your slow season gets slower every year, and your techs are sitting around",
      "You're paying an agency thousands a month but can't tell if it's working",
      "Your competitor with half your experience is somehow outranking you on Google",
      'You get "leads" that are tire-kickers, wrong numbers, or people looking for free estimates',
      "You've tried doing your own marketing but don't have time to run a business AND figure out Facebook ads",
    ],
    painPointsCloser:
      "You don't need another marketing experiment. You need a system that puts qualified calls on your schedule — every week, every season.",
    solutions: [
      {
        title: "Summer Strategy",
        description:
          'When it hits 95°, everyone with a broken AC is searching Google. We make sure you\'re the first result. We target "emergency AC repair [city]," "AC not cooling," and "air conditioning service near me."',
      },
      {
        title: "Winter Strategy",
        description:
          "Furnace breakdowns, heating installs, and maintenance plan renewals. We shift your campaigns to target heating searches and run retargeting ads to past customers who haven't booked their annual service.",
      },
      {
        title: "Shoulder Season Strategy",
        description:
          "This is where most HVAC companies bleed money. We run maintenance plan campaigns, indoor air quality promotions, and new system replacement ads targeting homeowners with aging equipment. Your techs stay busy.",
      },
    ],
    whatYouGet: [
      {
        title: "SEO That Ranks You Above Local Competitors",
        description:
          'We optimize for "HVAC repair [city]," "AC installation near me," and hundreds of long-tail keywords. You start climbing Google within 60 days.',
      },
      {
        title: "Google Ads That Generate Calls, Not Just Clicks",
        description:
          "Search campaigns targeting homeowners with immediate HVAC needs. Avg. cost per qualified call: $35–$75 depending on your market.",
      },
      {
        title: "Meta Ads That Build Your Brand",
        description:
          "Facebook and Instagram campaigns showcasing your work, reviews, and seasonal offers. When their system breaks, they already know your name.",
      },
      {
        title: "Social Media That Makes You Look #1",
        description:
          "Job photos, 5-star review highlights, seasonal tips, and promotions. Your profile stays active without you lifting a finger.",
      },
      {
        title: "Google Business Profile",
        description:
          "Fully optimized with photos, posts, and a review strategy that keeps your rating above 4.8 stars.",
      },
    ],
    testimonials: [
      {
        quote:
          "We went from 22 calls a month to 67. Summer was our best year ever, and our winter didn't drop off a cliff.",
        attribution: "HVAC Contractor, Phoenix AZ",
        result: "3x increase in monthly calls",
      },
      {
        quote:
          "I was spending $4,500/mo with another agency and half the leads were garbage. LeadScale costs less and every lead is real.",
        attribution: "HVAC Business Owner, Houston TX",
        result: "56% lower cost per lead",
      },
      {
        quote:
          "They built a maintenance plan campaign that brought in 45 new annual service contracts in Q1.",
        attribution: "HVAC Company, Denver CO",
        result: "$67,500 in recurring revenue",
      },
    ],
    faqs: [
      {
        question: "How long until I start getting calls?",
        answer:
          "Google Ads typically produce calls within 7-14 days. SEO builds over 60-90 days. Most HVAC clients see results within the first month from paid ads alone.",
      },
      {
        question:
          "Can you target specific services like AC repair vs. system replacement?",
        answer:
          "Yes. We build separate campaigns for emergency repair, installations, maintenance plans, and whatever you want to prioritize.",
      },
      {
        question: "What about slow season?",
        answer:
          "That's where we make the biggest difference. Targeted campaigns for heating, maintenance plans, and IAQ keep your revenue consistent year-round.",
      },
      {
        question: "I've been burned by agencies before.",
        answer:
          "We only work with contractors. We track every call. No lock-in contracts — if we don't deliver, you leave. Most clients stay because the ROI speaks for itself.",
      },
    ],
    ctaHeadline: "Your Competitor Is Getting These Calls Right Now",
    ctaSubtext:
      "Every day without a real marketing strategy is money you're leaving for the HVAC company down the street.",
    metaTitle: "HVAC Marketing That Fills Your Schedule Year-Round | LeadScale",
    metaDescription:
      "Get more AC repair, furnace install, and maintenance calls with SEO, Google Ads, and social media built for HVAC contractors. $1,999/mo. No contracts.",
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    tagline:
      "When a Pipe Bursts, Homeowners Call the First Plumber They Find",
    heroHeadline:
      "When a Pipe Bursts, Homeowners Call the First Plumber They Find. Make Sure It's You.",
    heroSubheadline:
      "LeadScale puts your plumbing business at the top of Google — in ads, in maps, and in organic search — so emergency calls land on your phone, not your competitor's.",
    heroCta: "Get My Free Plumbing Marketing Plan",
    heroTrust:
      "Trusted by plumbing companies in Dallas, Phoenix, Chicago, and 30+ US markets",
    painPoints: [
      "The big franchise companies are outspending you on Google and stealing your calls",
      "You're getting leads that turn into voicemails, price shoppers, and no-shows",
      "Your website looks like it was built in 2015 and you know it's hurting you",
      "You've tried Angi, HomeAdvisor, Thumbtack — tired of paying for shared leads",
      "You know marketing matters but don't have 10 hours a week to figure it out",
    ],
    painPointsCloser:
      "You need a marketing partner that understands plumbing — the emergency calls, the recurring drain work, the big-ticket remodels.",
    solutions: [
      {
        title: "Emergency Calls (Your Bread and Butter)",
        description:
          'When someone searches "emergency plumber near me" at 11pm, your ad needs to be there. We build 24/7 search campaigns targeting burst pipes, water heater failures, sewer backups.',
      },
      {
        title: "Recurring Service Work",
        description:
          "Drain cleaning, water heater maintenance, sump pump inspections — SEO content and seasonal campaigns that keep steady jobs flowing in.",
      },
      {
        title: "Big-Ticket Remodel Work",
        description:
          "Bathroom remodels, re-pipes, water treatment systems — we target homeowners planning these projects and position you as the expert.",
      },
    ],
    whatYouGet: [
      {
        title: "SEO That Puts You in the Local Pack",
        description:
          '"Plumber near me" gets searched 1.2 million times per month. We put you in the top 3 results in your service area.',
      },
      {
        title: "Google Ads for Emergency and Planned Work",
        description:
          "Separate campaigns for emergency calls and planned work. We optimize bids by time of day, location, and device.",
      },
      {
        title: "Meta Ads That Generate Leads",
        description:
          "Before-and-after job showcases, seasonal reminders, and review highlights that build trust.",
      },
      {
        title: "Social Media on Autopilot",
        description:
          "Job photos, tips, reviews, and promotions posted on schedule. No more guilt about not posting.",
      },
      {
        title: "Google Business Profile",
        description:
          "Fully optimized with fresh photos, weekly posts, and reviews that keep you above 4.8 stars.",
      },
    ],
    testimonials: [
      {
        quote:
          "We used to get maybe 20 calls a month from online. Now we're at 55+ and the quality is night and day.",
        attribution: "Plumbing Company, Dallas TX",
        result: "175% increase in qualified calls",
      },
      {
        quote:
          "LeadScale built us an emergency campaign that generated $12,000 in revenue in the first 3 weeks.",
        attribution: "Plumber, Denver CO",
        result: "6x return on ad spend in month one",
      },
      {
        quote:
          "I dropped Angi, dropped HomeAdvisor, and my marketing costs went down while my bookings went up.",
        attribution: "Plumbing Business Owner, Chicago IL",
        result: "40% lower customer acquisition cost",
      },
    ],
    faqs: [
      {
        question: "Can you help me stop relying on Angi/HomeAdvisor?",
        answer:
          "That's literally why most plumbers come to us. We build your own lead engine so you own the leads instead of renting them.",
      },
      {
        question: "I mainly want emergency calls.",
        answer:
          "Emergency plumbing campaigns are our highest-ROI campaigns. Dedicated ad groups and landing pages to maximize those calls.",
      },
      {
        question: "How do you track results?",
        answer:
          "Every call is tracked and recorded. Monthly report showing exactly how many calls, where from, and what they cost.",
      },
    ],
    ctaHeadline: "Every Emergency Call You Miss Goes to Your Competitor",
    ctaSubtext:
      "Right now, homeowners in your area are searching for a plumber. Let's make sure they find you.",
    metaTitle:
      "Plumbing Marketing That Keeps Your Phone Ringing | LeadScale",
    metaDescription:
      "Get more emergency calls, drain cleaning jobs, and remodel work with SEO, Google Ads, and social media built for plumbers. $1,999/mo. No contracts.",
  },
  {
    slug: "roofing",
    name: "Roofing",
    tagline:
      "Win More $10,000+ Roofing Jobs Without Knocking on a Single Door",
    heroHeadline:
      "Win More $10,000+ Roofing Jobs Without Knocking on a Single Door",
    heroSubheadline:
      "LeadScale generates qualified roof replacement and repair leads through Google, Facebook, and Instagram — so you spend less time canvassing and more time closing.",
    heroCta: "Get My Free Roofing Marketing Plan",
    heroTrust:
      "Trusted by roofing companies in Dallas, Atlanta, Denver, and 30+ US markets",
    painPoints: [
      "Storm season is feast or famine and you're tired of the rollercoaster",
      "Door knocking and yard signs only go so far",
      "You're competing against lowball guys cutting corners",
      "Your lead sources send the same lead to 5 other roofers",
      "The big companies are spending $20K/mo on ads and you feel like you can't compete",
    ],
    painPointsCloser:
      "You don't need to outspend them. You need to outsmart them.",
    solutions: [
      {
        title: "Storm Damage & Insurance Claims",
        description:
          "When a storm hits, everyone searches Google. We build rapid-response campaigns live within 24 hours of major weather in your area.",
      },
      {
        title: "Roof Replacements",
        description:
          "The highest-value leads. We target homeowners with 15-20+ year-old roofs using Google Ads, Facebook targeting by home age/value, and SEO content.",
      },
      {
        title: "Repairs & Inspections",
        description:
          "The entry point that leads to full replacements. Campaigns for leak repair, missing shingles, and seasonal inspections.",
      },
    ],
    whatYouGet: [
      {
        title: "SEO for High-Value Searches",
        description:
          '"Roof replacement [city]," "storm damage roof repair" — content and optimization for searches that lead to $10K+ jobs.',
      },
      {
        title: "Google Ads for Ready-to-Buy Homeowners",
        description:
          "Search campaigns for immediate needs plus retargeting for homeowners in the research phase.",
      },
      {
        title: "Meta Ads That Showcase Your Work",
        description:
          "Before-and-after galleries, drone footage, and storm-response messaging that builds trust.",
      },
      {
        title: "Social Media That Builds Credibility",
        description:
          "Job showcases, review highlights, team spotlights — separating you from storm-chaser competition.",
      },
      {
        title: "Google Business Profile",
        description:
          "Project photos, reviews, and weekly posts that signal you're active and reputable.",
      },
    ],
    testimonials: [
      {
        quote:
          "We closed $180,000 in roof replacements in 90 days from LeadScale leads. Best ROI I've ever seen.",
        attribution: "Roofing Company, Atlanta GA",
        result: "$180K in closed revenue in 90 days",
      },
      {
        quote:
          "After a hailstorm, LeadScale had our campaign live within 24 hours. We booked 23 inspections that week.",
        attribution: "Roofing Contractor, Denver CO",
        result: "23 inspections from one storm event",
      },
      {
        quote:
          "I stopped door-knocking entirely. More leads than my crew can handle.",
        attribution: "Roofing Business Owner, Dallas TX",
        result: "100% shift to digital leads",
      },
    ],
    faqs: [
      {
        question: "Can you respond quickly when a storm hits?",
        answer:
          "Yes. Storm-response templates ready to go. Targeted ads live within 24 hours of major weather.",
      },
      {
        question: "I need big-ticket jobs, not $200 repairs.",
        answer:
          "Our sweet spot. Campaigns specifically targeting full replacements using home age, value, and intent signals.",
      },
      {
        question: "How do I compete against companies with massive budgets?",
        answer:
          "Hyper-local targeting, better ad copy, and landing pages that convert. You can outperform bigger spenders in your specific area.",
      },
    ],
    ctaHeadline: "The Next Big Storm Is Coming. Will You Be Ready?",
    ctaSubtext:
      "Build your pipeline now so when the weather hits, your phone is already ringing.",
    metaTitle: "Roofing Marketing That Wins More $10K+ Jobs | LeadScale",
    metaDescription:
      "Get more roof replacement leads, storm damage calls, and inspection bookings with SEO, Google Ads, and social media built for roofers. $1,999/mo. No contracts.",
  },
  {
    slug: "electrician",
    name: "Electrical",
    tagline:
      "Stop Getting $75 Outlet Calls. Start Booking the $3,000+ Electrical Jobs.",
    heroHeadline:
      "Stop Getting $75 Outlet Calls. Start Booking the $3,000+ Electrical Jobs.",
    heroSubheadline:
      "LeadScale targets homeowners searching for panel upgrades, EV charger installations, whole-home rewires, and commercial work — the jobs that actually move your revenue.",
    heroCta: "Get My Free Electrical Marketing Plan",
    heroTrust:
      "Trusted by electrical contractors in Phoenix, Tampa, Charlotte, and 30+ US markets",
    painPoints: [
      "Most calls are low-margin — outlets, switches, ceiling fans — and big jobs are hard to find",
      "GCs feed work to their buddies instead of bidding it out",
      "You're competing against handymen at half the price (and half the safety)",
      "Lead platforms send you the same lead they sent 4 other electricians",
      "You know EV chargers and panel upgrades are the future but you're not getting those calls",
    ],
    painPointsCloser:
      "Homeowners who need high-margin electrical work ARE searching online. They're just finding your competitors first.",
    solutions: [
      {
        title: "Panel Upgrades & Service Changes",
        description:
          'As homes add EVs, hot tubs, and appliances, 100-amp panels can\'t keep up. We target "electrical panel upgrade [city]" and run ads to neighborhoods with older homes.',
      },
      {
        title: "EV Charger Installation",
        description:
          'Fastest-growing segment in residential electrical. Google Ads, Facebook targeting by vehicle interest, and SEO for "EV charger installation near me."',
      },
      {
        title: "Whole-Home Rewires & Safety",
        description:
          "Old knob-and-tube, aluminum wiring, ungrounded outlets — we target older homes needing $5,000–$15,000 rewires.",
      },
      {
        title: "Commercial & New Construction",
        description:
          "GBP optimization, commercial landing pages, and targeted ads for businesses searching for licensed electricians.",
      },
    ],
    whatYouGet: [
      {
        title: "SEO for High-Margin Searches",
        description:
          'We target "panel upgrade [city]," "EV charger installation," "whole house rewire cost" — not generic "electrician near me."',
      },
      {
        title: "Google Ads That Filter Low-Value Calls",
        description:
          "Negative keywords block bargain hunters. Bid strategies prioritize high-value services. Landing pages pre-qualify callers.",
      },
      {
        title: "Meta Ads That Educate",
        description:
          '"Is your home\'s electrical panel outdated?" — educational ads creating demand for panel upgrades, EV chargers, and safety inspections.',
      },
      {
        title: "Social Media as the Expert",
        description:
          "Code-compliance tips, project showcases, and safety reminders that build trust in your expertise.",
      },
      {
        title: "Google Business Profile",
        description:
          "Service-specific categories, project photos, and a review strategy focused on quality work.",
      },
    ],
    testimonials: [
      {
        quote:
          "We went from mostly service calls to booking 12 panel upgrades a month. Average ticket went from $200 to $2,800.",
        attribution: "Electrical Contractor, Tampa FL",
        result: "14x increase in average job value",
      },
      {
        quote:
          "The EV charger campaign brought in $28,000 in Q1. Those customers keep referring their neighbors.",
        attribution: "Electrician, Charlotte NC",
        result: "$28K from one campaign in Q1",
      },
      {
        quote:
          "LeadScale helped us break into commercial. First $45,000 contract from a Google lead.",
        attribution: "Electrical Company, Phoenix AZ",
        result: "First commercial contract from digital",
      },
    ],
    faqs: [
      {
        question: "Can you really filter out low-value calls?",
        answer:
          "Yes. Negative keywords, service-specific landing pages, and pre-qualifying questions ensure calls are for the jobs you want.",
      },
      {
        question: "Is there enough demand for EV chargers?",
        answer:
          'EV sales growing 30%+ YoY. "EV charger installation" searches tripled in 2 years. One of the highest-growth categories.',
      },
      {
        question: "How do I compete with handymen on price?",
        answer:
          "You don't. We position you as the licensed, insured professional. The right customers pay for quality and safety.",
      },
    ],
    ctaHeadline:
      "High-Margin Electrical Work Is Out There. Let Us Send It to You.",
    ctaSubtext:
      "Panel upgrades. EV chargers. Rewires. The homeowners searching need a licensed pro. Make sure they find you.",
    metaTitle:
      "Electrical Contractor Marketing | Panel Upgrades, EV Chargers & More | LeadScale",
    metaDescription:
      "Get more panel upgrades, EV charger installs, and rewire jobs with SEO, Google Ads, and social media built for electricians. $1,999/mo. No contracts.",
  },
  {
    slug: "dentist",
    name: "Dentistry",
    tagline:
      "Book 30+ New Patients a Month Without Relying on Insurance Directories",
    heroHeadline:
      "Book 30+ New Patients a Month Without Relying on Insurance Directories",
    heroSubheadline:
      "LeadScale helps dental practices fill chairs with high-value patients through Google, Facebook, and Instagram — so you stop waiting on referrals and start controlling your growth.",
    heroCta: "Get My Free Dental Marketing Plan",
    heroTrust:
      "Trusted by dental practices in Houston, Phoenix, Atlanta, and 20+ US markets",
    painPoints: [
      "You're losing new patients to the corporate chain that just opened nearby",
      "Your reviews are good but you're still invisible on Google",
      "Your agency doesn't understand dental — treats you like every other local business",
      "You're paying $200+ per new patient and the math barely works",
      "Hygiene schedule has empty slots but no system to fill them",
    ],
    painPointsCloser:
      "Every empty chair is lost revenue. Let's fill them with patients who value quality care — and come back year after year.",
    solutions: [
      {
        title: "New Patient Acquisition",
        description:
          'We target "dentist near me," "best dentist in [city]," "dental office accepting new patients." Google Ads get you in front immediately. SEO keeps you there.',
      },
      {
        title: "High-Value Services",
        description:
          "Cosmetic dentistry, implants, Invisalign, veneers — dedicated campaigns targeting patients looking for and willing to invest in these procedures.",
      },
      {
        title: "Retention & Reactivation",
        description:
          "Patients who haven't been in 6+ months are low-hanging fruit. Facebook retargeting and email campaigns bring them back.",
      },
    ],
    whatYouGet: [
      {
        title: 'SEO for "Dentist Near Me"',
        description:
          "Local SEO dominance — site optimization, local citations, and content ranking for every dental search in your area.",
      },
      {
        title: "Google Ads for New Patients",
        description:
          "Search campaigns targeting new patient intent. Dedicated landing pages per service. Call tracking on every lead.",
      },
      {
        title: "Meta Ads for High-Value Services",
        description:
          "Smile transformations, patient testimonials, and special offers driving implant, Invisalign, and cosmetic inquiries.",
      },
      {
        title: "Social Media That Builds Trust",
        description:
          "Before-and-afters, team introductions, testimonials, and dental tips — posted consistently.",
      },
      {
        title: "Google Business Profile",
        description:
          "Professional photos, service highlights, and a review strategy keeping your rating above 4.9 stars.",
      },
    ],
    testimonials: [
      {
        quote:
          "We went from 18 new patients a month to 42. And these aren't just cleanings — we're booking more implant consults than ever.",
        attribution: "Dental Practice, Houston TX",
        result: "133% increase in new patients",
      },
      {
        quote:
          "Our Invisalign campaign generated $85,000 in treatment acceptance in 90 days.",
        attribution: "Dentist, Phoenix AZ",
        result: "$85K in Invisalign revenue in one quarter",
      },
      {
        quote:
          "They reactivated 120 patients who hadn't been in for over a year. Covered 6 months of marketing cost.",
        attribution: "Dental Office, Atlanta GA",
        result: "120 reactivated patients in 60 days",
      },
    ],
    faqs: [
      {
        question: "How fast can I expect new patients?",
        answer:
          "Google Ads produce calls within 7-14 days. Most practices see 20+ new patient inquiries in the first month.",
      },
      {
        question: "Can you help with implants and Invisalign?",
        answer:
          "Absolutely. Dedicated campaigns with separate landing pages and tracking for each high-value service.",
      },
      {
        question: "How do I compete with corporate chains?",
        answer:
          "You compete on trust, quality, and personal care. We position you as the premium choice and target patients who value that.",
      },
    ],
    ctaHeadline: "Empty Chairs Don't Pay the Bills. Let's Fill Them.",
    ctaSubtext:
      "Every day without a patient acquisition system is a day your competitor is growing while you wait.",
    metaTitle:
      "Dental Marketing That Books 30+ New Patients a Month | LeadScale",
    metaDescription:
      "Get more new patients with SEO, Google Ads, and social media built for dental practices. $1,999/mo. No contracts. Results in 30 days.",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    tagline:
      "Stop Buying Zillow Leads. Start Generating Your Own.",
    heroHeadline:
      "Stop Buying Zillow Leads. Start Generating Your Own.",
    heroSubheadline:
      "LeadScale builds your own lead generation machine — SEO, Google Ads, Facebook Ads, and social media — so you stop paying per lead and start owning your pipeline.",
    heroCta: "Get My Free Real Estate Marketing Plan",
    heroTrust:
      "Trusted by real estate agents and teams in Dallas, Phoenix, Miami, and 20+ US markets",
    painPoints: [
      "Zillow and BoldLeads charge a fortune for leads they're selling to 5 other agents",
      "You're posting on social but it's not turning into closings",
      "Cold calling and door knocking eat up time you should spend with clients",
      "Your brokerage's marketing isn't cutting it",
      "You see other agents crushing it online and don't know what they're doing differently",
    ],
    painPointsCloser:
      "The agents winning right now aren't working harder. They've built systems that generate leads while they're at the closing table.",
    solutions: [
      {
        title: "Seller Lead Generation",
        description:
          'We target "home value [city]," "best time to sell," and "real estate agent near me" — driving homeowners to landing pages that capture info before they talk to anyone else.',
      },
      {
        title: "Buyer Lead Generation",
        description:
          "First-time buyers, relocations, upgrade buyers — Facebook and Google campaigns with neighborhood-specific ads and new listing alerts.",
      },
      {
        title: "Listing Marketing",
        description:
          "Targeted Facebook and Instagram ads to buyers in the right price range. Just-listed campaigns. Open house promotion. Every listing becomes a lead machine.",
      },
      {
        title: "Sphere & Referral Nurture",
        description:
          "Retargeting and social content keeping you top-of-mind so when their friend mentions buying, your name comes up first.",
      },
    ],
    whatYouGet: [
      {
        title: '"[City] Real Estate Agent" SEO',
        description:
          "Neighborhood pages, market reports, and local SEO putting you at the top when homeowners search for agents.",
      },
      {
        title: "Google Ads for Active Buyers and Sellers",
        description:
          'Search campaigns for "sell my house [city]" and "homes for sale in [neighborhood]." Every click goes to a conversion-optimized page.',
      },
      {
        title: "Meta Ads at Scale",
        description:
          "Facebook and Instagram targeting by income, home ownership, life events, and property characteristics. This is where volume lives.",
      },
      {
        title: "Social Media for Personal Brand",
        description:
          "Market updates, testimonials, property showcases, and community content positioning you as THE local expert.",
      },
      {
        title: "Google Business Profile",
        description:
          "Client reviews, service areas, and regular posts signaling activity to Google and potential clients.",
      },
    ],
    testimonials: [
      {
        quote:
          "I went from Zillow leads at $30 each to generating my own at $8 each. And they're exclusive.",
        attribution: "Real Estate Agent, Dallas TX",
        result: "73% lower cost per lead",
      },
      {
        quote:
          "Seller campaigns got me 14 listing appointments in one quarter. $2.1M in listing volume.",
        attribution: "Realtor, Phoenix AZ",
        result: "$2.1M in listing volume",
      },
      {
        quote:
          "I dropped BoldLeads and Zillow Flex. Costs went down, closings went up. 8 extra transactions last year.",
        attribution: "Real Estate Team Lead, Miami FL",
        result: "8 additional closings in 12 months",
      },
    ],
    faqs: [
      {
        question: "Can I really replace Zillow leads?",
        answer:
          "Yes. Lower cost per lead AND higher quality because they're exclusive to you. No more competing with 4 other agents.",
      },
      {
        question: "Individual agents or teams?",
        answer:
          "Both. We tailor strategy whether you're solo or scaling a team.",
      },
      {
        question: "How do you target sellers specifically?",
        answer:
          "Google search intent, Facebook demographic targeting (high equity, life-change signals), and retargeting to capture sellers at every stage.",
      },
    ],
    ctaHeadline:
      "Your Next Listing Appointment Starts With a Lead.",
    ctaSubtext:
      "Stop renting leads from platforms that sell them to your competition. Build your own pipeline.",
    metaTitle:
      "Real Estate Marketing That Generates Leads on Autopilot | LeadScale",
    metaDescription:
      "Get more buyer and seller leads with SEO, Google Ads, and social media built for real estate agents and teams. $1,999/mo. No contracts.",
  },
];
