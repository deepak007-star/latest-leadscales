// Curated Unsplash images & Pexels videos for each section

export const HERO_IMAGES = {
  background:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80",
  dashboard:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
};

export const INDUSTRY_IMAGES = {
  hvac: {
    hero: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=200&q=80",
    card: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
    video: "https://videos.pexels.com/video-files/7641731/7641731-uhd_2560_1440_30fps.mp4",
  },
  plumbing: {
    hero: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=200&q=80",
    card: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=600&q=80",
    video: "https://videos.pexels.com/video-files/6368024/6368024-uhd_2560_1440_24fps.mp4",
  },
  roofing: {
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200&q=80",
    card: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    video: "https://videos.pexels.com/video-files/3773486/3773486-uhd_2560_1440_30fps.mp4",
  },
  dentist: {
    hero: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=200&q=80",
    card: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
    video: "https://videos.pexels.com/video-files/3209263/3209263-uhd_2560_1440_25fps.mp4",
  },
  "real-estate": {
    hero: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&q=80",
    card: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    video: "https://videos.pexels.com/video-files/5137598/5137598-uhd_2560_1440_25fps.mp4",
  },
  electrician: {
    hero: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=200&q=80",
    card: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    video: "https://videos.pexels.com/video-files/8540694/8540694-uhd_2560_1440_25fps.mp4",
  },
};

// Industry-specific images for service sections (5 per industry)
export const INDUSTRY_SERVICE_IMAGES: Record<string, string[]> = {
  hvac: [
    "https://images.unsplash.com/photo-1621460248083-6271cc4437a8?w=600&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  ],
  plumbing: [
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  ],
  roofing: [
    "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  ],
  dentist: [
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  ],
  "real-estate": [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  ],
  electrician: [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
  ],
};

// Gallery images per industry (3 images each)
export const INDUSTRY_GALLERY: Record<string, string[]> = {
  hvac: [
    "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
    "https://images.unsplash.com/photo-1621460248083-6271cc4437a8?w=500&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80",
  ],
  plumbing: [
    "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&q=80",
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80",
  ],
  roofing: [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80",
  ],
  dentist: [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=500&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&q=80",
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80",
  ],
  "real-estate": [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&q=80",
  ],
  electrician: [
    "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=500&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80",
  ],
};

export const SERVICE_IMAGES = {
  seo: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
  ppc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  webDesign: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  gmb: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  email: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
};

export const TESTIMONIAL_AVATARS = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
];

export const ABOUT_IMAGES = {
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  office: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
};
