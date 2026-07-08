import {
  Banknote,
  Building2,
  Cog,
  GraduationCap,
  Globe2,
  HeartHandshake,
  Landmark,
  Network,
  Recycle,
  Scale,
  ScanEye,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { HeroEmblem } from "@/components/HeroEmblem";
import { MissionGraphic } from "@/components/MissionGraphic";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";
import { StatBand } from "@/components/StatBand";

const platformElements = [
  { label: "Energy Generation", icon: Zap },
  { label: "Safety Systems", icon: ShieldCheck },
  { label: "Resource Logistics", icon: Truck },
  { label: "Monitoring & Verification", icon: ScanEye },
  { label: "Governance Mechanisms", icon: Scale },
  { label: "Regenerative Pathways", icon: Recycle },
  { label: "Distributed Infrastructure", icon: Network },
];

const audiences = [
  { label: "Investors", icon: Banknote },
  { label: "Governments", icon: Landmark },
  { label: "Development Institutions", icon: Building2 },
  { label: "Manufacturers & Technology Providers", icon: Cog },
  { label: "Universities & Researchers", icon: GraduationCap },
  { label: "Humanitarian & Community Organizations", icon: HeartHandshake },
  { label: "International & Multilateral Organizations", icon: Globe2 },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="ink-panel relative overflow-hidden pb-36 pt-44 text-white sm:pb-44 sm:pt-56">
        <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
        <HeroEmblem />
        <div className="container-x relative">
          <Reveal y={18}>
            <p className="eyebrow max-w-xl !text-[11px] !tracking-[0.14em] !text-leaf sm:!text-[13px] sm:!tracking-[0.18em]">
              Building Productive Continuity Through Community Ownership, Distributed
              Capability, and Local Prosperity
            </p>
          </Reveal>
          <Reveal delay={0.1} y={30}>
            <h1 className="display-font mt-5 max-w-4xl text-balance text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl">
              Power Everywhere.
              <br />
              <span className="gradient-text">For Everyone.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-7 max-w-2xl text-pretty text-[17px] leading-relaxed text-white/75 sm:text-lg">
              HydroSol is a distributed productive-energy platform designed to support
              productive activity in environments where conventional energy systems may
              become unavailable, unreliable, intermittent, or unaffordable.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-3.5">
              <PrimaryButton href="/white-paper">Read White Paper</PrimaryButton>
              <GhostButton href="/quest" onDark>
                Explore The Quest
              </GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats overlap */}
      <div className="container-x relative z-10 -mt-16 sm:-mt-20">
        <Reveal>
          <StatBand />
        </Reveal>
      </div>

      {/* South-centric revolution */}
      <section className="bg-white">
        <div className="container-x py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow">The Mission</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="display-font mt-3 text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  A South-Centric Productive-Energy Revolution
                </h2>
              </Reveal>
              <Prose>
                <p>
                  Across much of the Global South, poverty and environmental degradation
                  often reinforce one another in a cycle that is difficult to escape.
                  Communities lacking reliable productive-energy services frequently
                  depend upon fragile natural-resource systems to meet immediate needs. As
                  environmental conditions deteriorate, productive capacity declines,
                  economic opportunities narrow, and vulnerability increases.
                </p>
                <p>
                  HydroSol was conceived to help address this challenge through a
                  productive-energy framework designed to support continuity,
                  participation, and local capability. Rather than viewing energy solely
                  as a consumptive necessity, HydroSol seeks to promote energy as a
                  productive asset capable of supporting livelihoods, enterprise creation,
                  agricultural productivity, local manufacturing, mobility, and community
                  development.
                </p>
                <p>
                  By enabling productive activity closer to where people live and work,
                  HydroSol seeks to support stronger local economies, broader
                  participation, and more resilient communities.
                </p>
              </Prose>
            </div>
            <Reveal delay={0.15} className="lg:self-stretch">
              <MissionGraphic />
            </Reveal>
          </div>
        </div>
      </section>

      {/* What is HydroSol */}
      <Section eyebrow="The Platform" title="What Is HydroSol?" tint>
        <div className="mt-4 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <Prose>
              <p>
                HydroSol is a distributed productive-energy platform that integrates
                energy generation, safety systems, resource logistics, monitoring and
                verification, governance mechanisms, regenerative pathways, and
                distributed infrastructure architectures into a unified operational
                ecosystem.
              </p>
              <p>
                The platform is designed to support productive continuity across
                households, farms, enterprises, institutions, and communities. Its
                architecture is intended to support practical deployment, local
                participation, operational flexibility, and progressive expansion across
                diverse environments.
              </p>
            </Prose>
            <PullQuote
              lines={[
                "Rather than focusing solely on energy delivery,",
                "HydroSol focuses on the productive activities that energy enables.",
              ]}
            />
          </div>
          <div className="flex h-full flex-col">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4 rounded-full bg-gradient-to-r from-brand to-leaf-deep px-6 py-3 shadow-[0_8px_24px_rgba(0,144,216,0.25)]">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/45" aria-hidden />
                <span className="shrink-0 text-[14px] font-bold tracking-tight text-white">
                  One Unified Operational Ecosystem
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/45" aria-hidden />
              </div>
            </Reveal>
            <Stagger className="mt-4 grid flex-1 auto-rows-fr gap-4 sm:grid-cols-2">
              {platformElements.map((el, i) => (
                <StaggerItem
                  key={el.label}
                  className={`flex ${
                    i === platformElements.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="hairline-card group flex flex-1 items-center gap-3.5 p-5 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(7,34,47,0.1)]">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                      <el.icon className="size-5" />
                    </span>
                    <span className="text-[14.5px] font-semibold leading-snug text-ink">
                      {el.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>

      {/* Why HydroSol exists */}
      <Section eyebrow="The Purpose" title="Why HydroSol Exists">
        <Prose>
          <p>
            HydroSol was conceived not simply to provide energy, but to help communities
            transform recurring interruptions into opportunities for productive
            participation and economic growth. Many communities continue to experience
            limitations in productive-energy services that affect livelihoods, enterprise
            development, agriculture, healthcare delivery, education, mobility, and local
            economic activity.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "The objective is not merely energy access.",
            "The objective is sustained productive activity.",
          ]}
        />
        <Prose>
          <p>
            HydroSol therefore seeks to support productive continuity through a framework
            that combines technology, infrastructure, local participation, and long-term
            operational sustainability.
          </p>
        </Prose>
      </Section>

      {/* Who should engage */}
      <Section eyebrow="Engagement" title="Who Should Engage?" tint center>
        <Stagger className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4">
          {audiences.map((a) => (
            <StaggerItem
              key={a.label}
              className="flex w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="hairline-card group flex flex-1 items-center gap-4 p-5 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(7,34,47,0.1)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                  <a.icon className="size-5" />
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-ink">
                  {a.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <div className="bg-mist pb-4">
        <CtaBand
          title="Begin the journey through the HydroSol story"
          lede="Understand the challenge, the platform, and the opportunity — starting with the question that defines the mission."
        >
          <PrimaryButton href="/quest">Explore The Quest</PrimaryButton>
          <GhostButton href="/join" onDark>
            Join the Community
          </GhostButton>
        </CtaBand>
      </div>
    </>
  );
}
