export const site = {
  name: "HydroSol",
  motto: "Power Everywhere. For Everyone.",
  secondary: "Productive Communities. Prosperous Futures.",
  tagline: "Distributed Productive Energy for Sustainable Development",
  engineering: "Engineering Productive Energy for Sustainable Development",
  transforming: "Transforming Interconnected Challenges into Interconnected Prosperity",
  through: "Through Engineering • Innovation • Partnership • Environmental Stewardship",
  closing:
    "Together, let us transform interconnected challenges into interconnected prosperity.",
  url: "https://www.hydrosol.energy",
  emails: [
    "info@hydrosol.energy",
    "partners@hydrosol.energy",
    "invest@hydrosol.energy",
    "technology@hydrosol.energy",
  ],
};

/** The six chapters of the HydroSol journey, in reading order. */
export const chapters = [
  {
    number: "01",
    label: "The Global Challenge",
    short: "Challenge",
    href: "/challenge",
    blurb:
      "Beyond the last mile — why the future of sustainable development depends on integrated productive systems rather than isolated solutions.",
  },
  {
    number: "02",
    label: "The Quest",
    short: "Quest",
    href: "/quest",
    blurb:
      "Searching for a better path — the journey that inspired HydroSol and the search for a practical engineering pathway.",
  },
  {
    number: "03",
    label: "The HydroSol Ecosystem",
    short: "Ecosystem",
    href: "/platform",
    blurb:
      "An integrated engineering platform for productive communities, resilient local economies, and sustainable development.",
  },
  {
    number: "04",
    label: "Productive Communities",
    short: "Communities",
    href: "/applications",
    blurb:
      "From engineering vision to community transformation — Smart Productive Communities and Regional Production Centers.",
  },
  {
    number: "05",
    label: "Opportunity & Partnership",
    short: "Opportunity",
    href: "/opportunity",
    blurb:
      "Building the future together — the partnership ecosystem through which the HydroSol vision becomes a shared mission.",
  },
  {
    number: "06",
    label: "Join the Mission",
    short: "Join the Mission",
    href: "/join",
    blurb:
      "Transforming interconnected challenges into interconnected prosperity — an open call for a shared future.",
  },
];

export const nav = [
  { label: "Challenge", href: "/challenge" },
  { label: "Quest", href: "/quest" },
  { label: "Ecosystem", href: "/platform" },
  { label: "Communities", href: "/applications" },
  { label: "Opportunity", href: "/opportunity" },
  { label: "Join the Mission", href: "/join" },
  { label: "Publications", href: "/publications" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  ...chapters.map((c) => ({ label: c.label, href: c.href })),
];
