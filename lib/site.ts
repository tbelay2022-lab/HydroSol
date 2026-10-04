export const site = {
  name: "HydroSol",
  motto: "Power Everywhere. For Everyone.",
  secondary: "Productive Communities. Prosperous Futures.",
  tagline: "Distributed Productive Energy for Sustainable Development",
  engineering: "Engineering Productive Energy for Sustainable Development",
  transforming: "Transforming Interconnected Challenges into Interconnected Prosperity",
  through: "Through Engineering • Innovation • Partnership • Environmental Stewardship",
  closing: "Together, let us transform interconnected challenges into interconnected prosperity.",
  url: "https://www.hydrosol.energy",
  location: "West Bloomfield, Michigan, USA",
  emails: [
    { label: "Investment", address: "invest@hydrosol.energy" },
    { label: "Partnerships", address: "partners@hydrosol.energy" },
    { label: "Technology & Research", address: "technology@hydrosol.energy" },
    { label: "General Inquiries", address: "info@hydrosol.energy" },
  ],
};

export const chapters = [
  { number: "01", label: "The Quest", short: "Quest", href: "/quest", blurb: "Why was HydroSol needed? Understanding the poverty cycle and interconnected constraints, particularly at the last mile." },
  { number: "02", label: "The HydroSol Platform", short: "Platform", href: "/platform", blurb: "What exactly have we built? A Hydrogen-on-Demand invention developed into a distributed Productive Energy platform." },
  { number: "03", label: "Smart Productive Kushet (ቁሸት — Community)", short: "Kushet", href: "/applications", blurb: "What can customers do with it? Productive Energy connects with people, skills, resources and enterprise." },
  { number: "04", label: "HydroSol Ecosystem", short: "Ecosystem", href: "/opportunity", blurb: "How large is the business and where can revenue come from? Distributed deployment grows through RPC-supported networks." },
  { number: "05", label: "Partnership", short: "Partnership", href: "/partnership", blurb: "How do we move from engineering readiness to commercialization, investment and responsible scale?" },
];

export const nav = [
  ...chapters.map((c) => ({ label: c.short, href: c.href })),
  { label: "HydroSol Today", href: "/today" },
];

export const footerLinks = [
  { label: "Home", href: "/" },
  ...chapters.map((c) => ({ label: c.label, href: c.href })),
  { label: "HydroSol Today", href: "/today" },
];
