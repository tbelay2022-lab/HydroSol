import Link from "next/link";
import { ArrowRight, FileText, MessageCircleQuestion } from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FigureFrame } from "@/components/FigureFrame";
import { HeroEmblem } from "@/components/HeroEmblem";
import { HeroWaves } from "@/components/HeroWaves";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose } from "@/components/Section";
import { chapters, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero — Welcome to HydroSol */}
      <section className="hero-droplet relative overflow-hidden pb-32 pt-40 sm:pb-44 sm:pt-52">
        <div className="dot-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <HeroWaves />
        <HeroEmblem />
        <div className="container-x relative">
          <Reveal>
            <p className="eyebrow">Welcome to HydroSol</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-font mt-5 max-w-3xl text-balance text-[42px] font-bold leading-[1.06] text-navy sm:text-6xl md:text-[64px]">
              Power Everywhere.{" "}
              <span className="gradient-text">For Everyone.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="display-font mt-4 text-[20px] font-semibold text-slate-head sm:text-[24px]">
              {site.secondary}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-pretty text-[17px] italic leading-[1.7] text-body sm:text-[19px]">
              Every enduring transformation begins with a shared vision.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryButton href="/challenge">Begin the Journey</PrimaryButton>
              <GhostButton href="/white-paper">Executive White Paper</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Welcome narrative */}
      <Section>
        <Prose>
          <p>
            Inspired by years of scientific research, engineering innovation, and
            practical experience, HydroSol represents a new way of thinking about
            productive energy—one designed to empower communities beyond the last mile.
          </p>
          <p>
            Today, more than <strong>2.3 billion people</strong> across the Global South
            continue to live without the productive infrastructure needed to build
            lasting prosperity. Their challenge is not simply a lack of energy, but the
            absence of integrated systems that support water, agriculture, healthcare,
            education, enterprise, mobility, environmental stewardship, and resilient
            local economies.
          </p>
        </Prose>

        <div className="mx-auto mt-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs3-global-south-map.jpg"
            alt="Global South: the HydroSol opportunity — more than 2.3 billion people across the Global South seek the productive infrastructure needed for lasting prosperity and sustainable development"
            caption="Global South: the HydroSol opportunity — our focus, our commitment, our future."
            width={1432}
            height={955}
          />
        </div>

        <Prose>
          <p>
            HydroSol responds to this challenge by bringing these essential systems
            together within one coordinated framework, where{" "}
            <strong>Productive Energy</strong> becomes the catalyst for opportunity,
            environmental responsibility, resilient infrastructure, and sustainable
            community development.
          </p>
          <p>
            HydroSol is not simply about producing energy.{" "}
            <strong>
              It is about enabling people, restoring environments, strengthening
              communities, and creating prosperity that endures.
            </strong>
          </p>
          <p>
            The pages that follow present a practical journey—from understanding
            today&rsquo;s interconnected challenges to building productive, resilient,
            and environmentally responsible communities through engineering, innovation,
            and partnership.
          </p>
          <p>
            Explore the chapters above and discover how the HydroSol Ecosystem is helping
            transform interconnected challenges into interconnected prosperity.
          </p>
        </Prose>

        <Reveal>
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl bg-gradient-to-r from-brand to-leaf p-px">
            <div className="rounded-[calc(1rem-1px)] bg-white px-7 py-8 text-center sm:px-10">
              <p className="display-font text-balance text-[20px] font-bold leading-normal text-navy sm:text-[23px]">
                {site.transforming}
              </p>
              <p className="mt-3 text-[14.5px] font-medium tracking-wide text-brand">
                {site.through}
              </p>
              <p className="mt-4 text-[13px] font-medium text-body/70">
                HydroSol™ · {site.tagline}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* The journey — one continuous story */}
      <Section tint eyebrow="One Continuous Story" title="The HydroSol Journey" center>
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

      {/* Publications */}
      <Section eyebrow="HydroSol Publications" title="Continue Your Exploration" center>
        <Stagger className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            {
              href: "/white-paper",
              icon: FileText,
              title: "HydroSol White Paper",
              body: "Explore the comprehensive technical and strategic foundation of the HydroSol Platform, including its scientific basis, engineering architecture, implementation strategy, and opportunities for sustainable development.",
            },
            {
              href: "/faq",
              icon: MessageCircleQuestion,
              title: "Frequently Asked Questions",
              body: "Find concise answers to common questions regarding HydroSol technology, engineering principles, safety, deployment, operations, and applications.",
            },
          ].map((p) => (
            <StaggerItem key={p.href}>
              <Link
                href={p.href}
                className="hairline-card group flex h-full flex-col p-7 text-left hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="size-6" />
                </span>
                <h3 className="display-font mt-5 text-[19px] font-bold text-navy">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-body/90">{p.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-semibold text-brand transition-colors group-hover:text-leaf-deep">
                  Open
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand
        title="Connect with the HydroSol team"
        lede="Whether you are interested in engineering collaboration, independent validation, pilot projects, manufacturing partnerships, strategic investment, or implementation initiatives, we welcome the opportunity to begin a conversation."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
        <GhostButton href="/challenge" onDark>
          Begin the Journey
        </GhostButton>
      </CtaBand>
    </>
  );
}
