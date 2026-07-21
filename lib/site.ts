export const site = {
  name: "HydroSol",
  motto: "Power Everywhere. For Everyone.",
  secondary: "Productive Communities. Prosperous Futures.",
  tagline: "Distributed Productive Energy for Sustainable Development",
  engineering: "Engineering Productive Energy for Sustainable Development",
  transforming: "Transforming Interconnected Challenges into Interconnected Prosperity",
  through: "Through Engineering • Innovation • Partnership • Environmental Stewardship",
  closing:
    "Together, we can build a future where every community has the opportunity to prosper.",
  url: "https://hydrosolpower.com",
  emails: [
    "info@hydrosolpower.com",
    "technology@hydrosolpower.com",
    "partners@hydrosolpower.com",
    "invest@hydrosolpower.com",
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
      "Beyond the last mile — the challenge is interconnected, and the solution must be interconnected.",
  },
  {
    number: "02",
    label: "The Quest",
    short: "Quest",
    href: "/quest",
    blurb:
      "From challenge to innovation — how a simple but profound question led to the HydroSol Platform.",
  },
  {
    number: "03",
    label: "The HydroSol Ecosystem",
    short: "Ecosystem",
    href: "/platform",
    blurb:
      "A distributed productive energy ecosystem, engineered around five fundamental principles.",
  },
  {
    number: "04",
    label: "From Platform to Productive Communities",
    short: "Communities",
    href: "/applications",
    blurb:
      "Deploying distributed productive energy — from households to regional productive ecosystems.",
  },
  {
    number: "05",
    label: "Opportunity & Investment",
    short: "Opportunity",
    href: "/opportunity",
    blurb:
      "Building partnerships for sustainable development — shared vision, shared responsibility, shared prosperity.",
  },
  {
    number: "06",
    label: "Join the Mission",
    short: "Join the Mission",
    href: "/join",
    blurb:
      "From engineering innovation to societal transformation — an invitation to validate, demonstrate, and build together.",
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
