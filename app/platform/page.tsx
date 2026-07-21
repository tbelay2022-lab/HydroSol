import type { Metadata } from "next";
import {
  Cpu,
  Network,
  Puzzle,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The HydroSol Ecosystem",
  description:
    "A distributed productive energy ecosystem — engineered around five fundamental principles to help communities build resilient local economies.",
};

const principles = [
  {
    icon: Network,
    title: "Distributed Productive Energy",
    body: "Delivering energy where it is needed, reducing dependence on centralized infrastructure while strengthening community resilience.",
  },
  {
    icon: ShieldCheck,
    title: "Safety by Design",
    body: "Intrinsically safe engineering, operational reliability, and responsible lifecycle management.",
  },
  {
    icon: Puzzle,
    title: "Modular Scalability",
    body: "Flexible deployment from individual households to productive enterprises, institutions, and regional productive ecosystems.",
  },
  {
    icon: Cpu,
    title: "Distributed Intelligence",
    body: "Digital monitoring, engineering coordination, and data-driven operational optimization.",
  },
  {
    icon: Recycle,
    title: "Circular Resource Stewardship",
    body: "Efficient use, recovery, regeneration, and responsible management of materials throughout the operational lifecycle.",
  },
];

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 3 · The HydroSol Journey"
        title="The HydroSol Ecosystem"
        subtitle="A Distributed Productive Energy Ecosystem"
        lede="Engineering solutions achieve their greatest impact when they place capability where it is needed most."
      />

      <Section>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-03-platform.jpg"
            alt="The HydroSol Platform — an integrative productive energy framework connecting homes, agriculture, water, healthcare, education, mobility, and SMEs"
            caption="One platform. Many applications. Stronger communities. Greater impact."
            width={1402}
            height={1122}
            priority
          />
        </div>
        <Prose>
          <p>
            For more than a century, energy systems have been built around centralized
            generation, transmitting electricity over vast networks before it reaches
            homes, businesses, and communities. While this model has served many regions
            well, it has often proved difficult, costly, or impractical to extend to
            millions of people living beyond the reach of reliable infrastructure.
          </p>
          <p>
            <strong>HydroSol introduces a different engineering paradigm.</strong>
          </p>
          <p>
            Rather than depending exclusively on centralized energy production, the
            HydroSol Platform enables distributed productive energy—bringing safe,
            reliable, and sustainable energy directly to the point of use. Communities
            become active participants in producing the energy that powers their own
            development, reducing dependence on distant infrastructure while
            strengthening resilience, self-reliance, and local productivity.
          </p>
          <p>
            HydroSol is therefore an integrated productive-energy platform designed to
            help communities build resilient local economies through safe, distributed,
            and sustainable infrastructure. Rather than addressing a single need, the
            platform brings together engineering innovation, modular technologies,
            intelligent operational management, and coordinated deployment into one
            adaptable ecosystem.
          </p>
          <p>
            At its core, the HydroSol Platform transforms productive energy into a
            catalyst for development. That energy supports essential community systems,
            including water supply, agriculture, healthcare, education, enterprise,
            productive mobility, digital connectivity, and environmental stewardship.
            Working together, these systems strengthen resilience, expand opportunity,
            and improve quality of life.
          </p>
        </Prose>
      </Section>

      <Section tint title="Five Fundamental Principles">
        <Prose>
          <p>The platform has been engineered around five fundamental principles:</p>
        </Prose>
        <Stagger className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <StaggerItem key={p.title}>
              <div className="hairline-card group h-full p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)]">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="size-5" />
                </span>
                <h3 className="display-font mt-5 text-[17px] font-bold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-body/90">{p.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            Together, these principles transform HydroSol from an energy technology into
            an enabling platform for sustainable development. Its modular architecture
            allows communities to grow their productive capability while maintaining
            engineering consistency, operational reliability, and environmental
            responsibility.
          </p>
          <p>
            HydroSol is more than a decentralized energy system.{" "}
            <strong>
              It is a distributed engineering platform that enables productive
              communities to build resilient, prosperous, and sustainable local
              economies.
            </strong>
          </p>
        </Prose>

        <PullQuote
          lines={["From Centralized Energy", "to Distributed Productive Energy."]}
        />
        <p className="mx-auto max-w-3xl text-center text-[16px] font-medium italic text-brand sm:text-[17px]">
          Engineering Productive Energy for Sustainable Development
        </p>
      </Section>

      <NextChapter current="03" />
    </>
  );
}
