import Link from "next/link";
import { ArrowRight, FileText, MessageCircleQuestion } from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { HeroEmblem } from "@/components/HeroEmblem";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose } from "@/components/Section";
import { StatBand } from "@/components/StatBand";
import { chapters } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-droplet relative overflow-hidden pb-32 pt-40 sm:pb-44 sm:pt-52">
        <div className="dot-grid-light pointer-events-none absolute inset-0" aria-hidden />
        {/* living wave transition — two drifting water lines, echoing the droplet */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0" aria-hidden>
          <div className="relative h-[56px] overflow-hidden sm:h-[88px]">
            {/* back swell — mirrored, translucent, slow */}
            <div className="animate-wave-slow motion-reduce:animate-none absolute bottom-0 left-0 h-full w-[200%]">
              <svg
                viewBox="0 0 2880 140"
                preserveAspectRatio="none"
                className="h-full w-full -scale-x-100"
              >
                <path
                  d="M0,58 Q360,118 720,58 T1440,58 T2160,58 T2880,58 L2880,140 L0,140 Z"
                  fill="rgba(255,255,255,0.5)"
                />
              </svg>
            </div>
            {/* front shoreline — white, with a faint blue crest line */}
            <div className="animate-wave motion-reduce:animate-none absolute bottom-0 left-0 h-full w-[200%]">
              <svg
                viewBox="0 0 2880 140"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <path
                  d="M0,76 Q360,130 720,76 T1440,76 T2160,76 T2880,76 L2880,140 L0,140 Z"
                  fill="#ffffff"
                />
                <path
                  d="M0,76 Q360,130 720,76 T1440,76 T2160,76 T2880,76"
                  fill="none"
                  stroke="rgba(15,95,168,0.12)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
        <HeroEmblem />
        <div className="container-x relative">
          <Reveal>
            <h1 className="display-font mt-5 max-w-3xl text-balance text-[42px] font-bold leading-[1.08] text-navy sm:text-6xl md:text-[64px]">
              Desertification of{" "}
              <span className="gradient-text">the Global South.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryButton href="/challenge">Begin the Journey</PrimaryButton>
              <GhostButton href="/white-paper">Executive White Paper</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The journey — one continuous story */}
      <Section
        eyebrow="One Continuous Story"
        title="The HydroSol Journey"
        center
      >
        <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-[1.7] text-body sm:text-[17px]">
          From today&rsquo;s interconnected development challenges to tomorrow&rsquo;s
          productive and resilient communities — the HydroSol story unfolds across six
          chapters. Each one leads naturally to the next.
        </p>
        <Stagger className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((c) => (
            <StaggerItem key={c.href}>
              <Link
                href={c.href}
                className="hairline-card group flex h-full flex-col p-6 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_16px_44px_rgba(18,59,109,0.1)] sm:p-7"
              >
                <p className="display-font text-[13px] font-bold tracking-[0.14em] text-brand/50">
                  CHAPTER {c.number}
                </p>
                <h3 className="display-font mt-2.5 text-[19px] font-bold leading-snug text-navy">
                  {c.label}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-body/90">
                  {c.blurb}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand transition-colors group-hover:text-leaf-deep">
                  Read chapter
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* The scale of the challenge */}
      <Section tint eyebrow="Why It Matters" title="The Scale of the Challenge">
        <Prose>
          <p>
            Approximately <strong>2.3 billion people</strong> still live beyond reliable
            productive infrastructure, particularly across the Global South — where
            limited energy, water, transport, healthcare, education, and enterprise
            opportunities continue to constrain prosperity.
          </p>
        </Prose>
        <div className="mx-auto mt-10 max-w-4xl">
          <StatBand />
        </div>
      </Section>

      {/* Publications */}
      <Section eyebrow="HydroSol Publications" title="Read the Framework in Depth" center>
        <Stagger className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            {
              href: "/white-paper",
              icon: FileText,
              title: "Executive White Paper",
              body: "The complete HydroSol framework — challenge, platform, applications, and implementation pathway.",
            },
            {
              href: "/faq",
              icon: MessageCircleQuestion,
              title: "Frequently Asked Questions",
              body: "Clear answers to the most common technical, institutional, and investment questions.",
            },
          ].map((p) => (
            <StaggerItem key={p.href}>
              <Link
                href={p.href}
                className="hairline-card group flex h-full flex-col p-7 text-left hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)]"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="size-5" />
                </span>
                <h3 className="display-font mt-5 text-[18px] font-bold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-body/90">{p.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand transition-colors group-hover:text-leaf-deep">
                  Open
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand
        title="Productive Communities. Prosperous Futures."
        lede="Whether your interest involves implementation, investment, research, manufacturing, deployment, policy, or collaboration — the HydroSol team welcomes the opportunity to engage."
      >
        <PrimaryButton href="/challenge">Start with Chapter 01</PrimaryButton>
        <GhostButton href="/contact" onDark>
          Contact HydroSol
        </GhostButton>
      </CtaBand>
    </>
  );
}
