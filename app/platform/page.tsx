import type { Metadata } from "next";
import {
  Atom,
  Briefcase,
  GraduationCap,
  KeyRound,
  Network,
  Recycle,
  Rocket,
  ScanEye,
  ShieldCheck,
  Star,
  TrendingUp,
} from "lucide-react";
import { PrimaryButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FigureFrame } from "@/components/FigureFrame";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The HydroSol Platform",
  description:
    "An integrated productive-energy ecosystem combining energy generation, safety systems, resource logistics, governance mechanisms, regenerative pathways, and distributed infrastructure.",
};

const components = [
  {
    icon: Atom,
    title: "Hydrogen Generation Core",
    body: "Hydrogen generation provides the productive-energy foundation of the platform. Hydrogen itself is not the objective — it is the enabling capability through which HydroSol supports productive-energy services, integrated with operational safeguards, resource circulation, governance systems, and distributed deployment architectures.",
  },
  {
    icon: Recycle,
    title: "Cartridge Ecosystem",
    body: "A cartridge-based ecosystem designed to support deployment, operation, servicing, recovery, regeneration, and redeployment. Rather than treating resources as disposable, HydroSol seeks to maintain them within productive circulation for as long as practical — supporting local servicing, resource recovery, and future scalability.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Architecture",
    body: "Safety is integrated throughout the platform — multiple layers of prevention, monitoring, protection, and operational safeguards designed to support responsible deployment. Safety is not treated as a separate feature; it is embedded within the platform architecture itself.",
  },
  {
    icon: ScanEye,
    title: "Digital Governance & Verification",
    body: "Monitoring, reporting, verification, and operational-learning mechanisms designed to support transparency, accountability, and continuous improvement — the foundation for scaling deployment while maintaining operational visibility and stakeholder confidence.",
  },
  {
    icon: Network,
    title: "Distributed Infrastructure",
    body: "Designed for distributed deployment: beginning with individual users and progressively expanding toward households, enterprises, communities, clusters, and regional ecosystems — strengthening resilience while enabling local participation and operational flexibility.",
  },
  {
    icon: TrendingUp,
    title: "Progressive Deployment",
    body: "Systems may begin with simple operation and evolve toward increasingly coordinated, automated, and networked architectures as deployment requirements mature. The platform is designed to grow with communities, institutions, enterprises, and regional implementation programs.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The HydroSol Platform"
        title="An Integrated Productive-Energy Ecosystem"
        lede="HydroSol responds to the challenges outlined in The Quest through an integrated productive-energy platform designed to support Productive Continuity."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl space-y-5 text-[16.5px] leading-[1.8] text-ink/75 [&_strong]:font-semibold [&_strong]:text-ink">
            <p>
              Rather than focusing on a single technology, HydroSol combines energy
              generation, safety systems, resource logistics, governance mechanisms,
              regenerative pathways, and distributed infrastructure into a unified
              operational ecosystem. Each component performs a specific role. Together
              they support the broader objective of enabling productive activity across
              households, enterprises, institutions, and communities.
            </p>
            <p>
              HydroSol is designed as a{" "}
              <strong>platform rather than a standalone product</strong>. The platform
              integrates multiple operational components that work together to support
              reliable productive-energy services and long-term operational continuity —
              moving beyond isolated energy solutions toward a coordinated ecosystem
              capable of supporting productive activity, local participation, and
              progressive expansion.
            </p>
          </div>
          <FigureFrame
            src="/figures/fig04-consumed-vs-productive.jpeg"
            alt="Infographic: consumed energy versus productive energy"
            caption="Consumed energy vs productive energy — energy is more valuable when it creates value."
            width={1432}
            height={955}
            priority
          />
        </div>
      </Section>

      <Section eyebrow="The Architecture" title="Platform Components" tint>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {components.map((c, i) => (
            <StaggerItem key={c.title}>
              <div className="hairline-card group h-full p-7 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_44px_rgba(7,34,47,0.1)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                    <c.icon className="size-6" />
                  </span>
                  <span className="display-font text-[13px] font-bold text-ink/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display-font mt-5 text-[19px] font-bold text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/65">{c.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <div className="ink-panel relative mt-8 overflow-hidden rounded-3xl px-7 py-10 text-white sm:px-10 sm:py-12">
            <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
            <div
              className="pointer-events-none absolute -right-10 -top-14 select-none opacity-[0.05]"
              aria-hidden
            >
              <Star className="size-64" strokeWidth={0.75} />
            </div>
            <div className="relative">
              <p className="eyebrow !text-leaf">Central Actors</p>
              <h3 className="display-font mt-3 max-w-2xl text-balance text-2xl font-bold leading-snug sm:text-3xl">
                Women and youth are not secondary beneficiaries of HydroSol —{" "}
                <span className="gradient-text">they are central actors.</span>
              </h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70">
                Central to deployment, servicing, distribution, local enterprise
                creation, training, productive use, and ecosystem growth. HydroSol
                therefore supports five pathways:
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {[
                  { label: "Employment", icon: Briefcase },
                  { label: "Skills Development", icon: GraduationCap },
                  { label: "Entrepreneurship", icon: Rocket },
                  { label: "Leadership", icon: Star },
                  { label: "Local Ownership", icon: KeyRound },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2.5 text-[13.5px] font-semibold text-white backdrop-blur-sm"
                  >
                    <p.icon className="size-4 text-leaf" />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section eyebrow="Ownership Model" title="Community Ownership & Distributed Capability">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <FigureFrame
            src="/figures/fig07-community-ownership.png"
            alt="Infographic: community ownership and distributed capability"
            caption="Distributing capability, expanding participation, strengthening resilience."
            width={1432}
            height={955}
          />
          <FigureFrame
            src="/figures/fig08-operational-architecture.png"
            alt="Infographic: HydroSol distributed operational architecture"
            caption="Distributed operational architecture — modular systems, local deployment, circular flows, coordinated impact."
            width={1432}
            height={955}
          />
        </div>
      </Section>

      <Section tint>
        <PullQuote
          lines={[
            "Hydrogen is not the destination.",
            "Productive continuity is the destination.",
          ]}
        />
      </Section>

      <CtaBand
        title="See where the platform creates productive continuity"
        lede="From clean cooking and agriculture to healthcare, education, and mobility."
      >
        <PrimaryButton href="/applications">Explore Applications</PrimaryButton>
      </CtaBand>
    </>
  );
}
