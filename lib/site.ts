export const site = {
  name: "HydroSol",
  motto: "Power Everywhere. For Everyone.",
  secondary: "Productive Communities. Prosperous Futures.",
  tagline: "Distributed Productive Energy for Sustainable Development",
  closing: "Powering Productive Communities for Generations to Come.",
  url: "https://hydrosolpower.com",
  emails: [
    "info@hydrosolpower.com",
    "partners@hydrosolpower.com",
    "invest@hydrosolpower.com",
    "technology@hydrosolpower.com",
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
      "Six interconnected development challenges shape productivity and prosperity beyond the last mile.",
  },
  {
    number: "02",
    label: "The Quest",
    short: "Quest",
    href: "/quest",
    blurb:
      "Humanity's continuing search for sustainable development — and the gap that remains.",
  },
  {
    number: "03",
    label: "The HydroSol Platform",
    short: "Platform",
    href: "/platform",
    blurb:
      "Productive energy for productive communities, delivered through one integrated framework.",
  },
  {
    number: "04",
    label: "Applications Become Communities",
    short: "Applications",
    href: "/applications",
    blurb:
      "From households to enterprises — how applications converge into the Smart Productive Village.",
  },
  {
    number: "05",
    label: "Opportunity & Finance",
    short: "Opportunity",
    href: "/opportunity",
    blurb:
      "From vision to implementation — validation, partnership, and a global opportunity.",
  },
  {
    number: "06",
    label: "Join the Mission",
    short: "Join the Mission",
    href: "/join",
    blurb:
      "An open invitation to build productive communities together.",
  },
];

export const nav = [
  { label: "Challenge", href: "/challenge" },
  { label: "Quest", href: "/quest" },
  { label: "Platform", href: "/platform" },
  { label: "Applications", href: "/applications" },
  { label: "Opportunity", href: "/opportunity" },
  { label: "Join the Mission", href: "/join" },
  { label: "Publications", href: "/publications" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  ...chapters.map((c) => ({ label: c.label, href: c.href })),
];
