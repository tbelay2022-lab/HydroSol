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
      {/* Hero — Welcome to HydroSol (header hierarchy per client notes) */}
      <section className="hero-droplet relative overflow-hidden pb-32 pt-40 sm:pb-44 sm:pt-52">
        <div className="dot-grid-light pointer-events-none absolute inset-0" aria-hidden />
        <HeroWaves />
        <HeroEmblem />
        <div className="container-x relative">
          <Reveal>
            <h1 className="display-font max-w-3xl text-balance text-[38px] font-bold uppercase leading-[1.1] tracking-wide text-brand sm:text-5xl md:text-[56px]">
              Welcome to HydroSol
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="display-font mt-5 text-[24px] font-bold leading-snug text-brand sm:text-[30px]">
              {site.motto}
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="display-font mt-2 text-[19px] font-bold leading-snug text-brand sm:text-[22px]">
              {site.secondary}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <PrimaryButton href="/challenge">Begin the Journey</PrimaryButton>
              <GhostButton href="/white-paper">HydroSol White Paper</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Welcome narrative */}
      <Section>
        <Prose>
          <p>
            Across much of the Global South—including Africa, South Asia, Latin America,
            the Caribbean, and underserved regions elsewhere—millions of households,
            farms, schools, clinics, workshops, and small enterprises continue to face
            persistent constraints that limit productivity, opportunity, and long-term
            prosperity.
          </p>
          <p>
            Their challenge is not simply a lack of energy, but the absence of integrated
            systems that support water, agriculture, healthcare, education, enterprise,
            mobility, environmental stewardship, and resilient local economies.
          </p>
          <p>
            These constraints are particularly evident beyond the{" "}
            <strong>&ldquo;last mile,&rdquo;</strong> where infrastructure becomes
            increasingly limited, communities become more isolated, and access to
            reliable productive services declines.
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
            HydroSol addresses this challenge through the principle of{" "}
            <strong>Productive Energy</strong>—energy that creates value by enabling
            water supply, food production, healthcare, education, manufacturing,
            enterprise, mobility, and other productive activities.
          </p>
          <p>
            Unlike consumptive energy, which is used primarily for immediate household or
            personal needs, Productive Energy generates lasting economic, social, and
            environmental value by strengthening the systems upon which communities
            depend.
          </p>
          <p>
            <strong>
              Productive Energy is energy that creates opportunity. It powers not only
              devices, but livelihoods, institutions, enterprises, and communities.
            </strong>
          </p>
          <p>
            This understanding inspired the development of the HydroSol Ecosystem—an
            engineering framework designed to support productive communities rather than
            simply provide energy. By integrating essential systems within a coordinated
            operational architecture, HydroSol seeks to enable local productivity,
            strengthen resilience, encourage environmental stewardship, and expand
            opportunities for economic and social development.
          </p>
          <p>
            The HydroSol journey is therefore more than a technological innovation. It is
            the pursuit of a practical engineering solution that empowers communities to
            build productive, resilient, and sustainable futures.
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

        <Prose>
          <p>
            The pages that follow present a practical journey—from understanding
            today&rsquo;s interconnected challenges to building productive, resilient,
            and environmentally responsible communities through engineering, innovation,
            and partnership.
          </p>
          <p>
            We invite you to discover how the HydroSol Ecosystem is transforming
            interconnected challenges into interconnected prosperity.
          </p>
        </Prose>
      </Section>

      {/* The journey — one continuous story */}
      <Section tint eyebrow="One Continuous Story" title="The HydroSol Journey" center>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-[1.7] text-body sm:text-[17px]">
          The journey begins by examining the global challenge—and why the future of
          sustainable development depends on integrated productive systems rather than
          isolated solutions.
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

      {/* Publications */}
      <Section eyebrow="HydroSol Publications" title="Continue the Journey" center>
        <p className="mx-auto mt-5 max-w-2xl text-center text-[16px] leading-[1.7] text-body sm:text-[17px]">
          Every enduring partnership begins with understanding. We encourage you to begin
          by exploring the{" "}
          <Link href="/white-paper" className="font-semibold text-brand hover:text-leaf-deep">
            HydroSol White Paper
          </Link>{" "}
          and the{" "}
          <Link href="/faq" className="font-semibold text-brand hover:text-leaf-deep">
            Frequently Asked Questions (FAQ)
          </Link>
          , which introduce the HydroSol vision, constitutional doctrine, engineering
          principles, operational framework, and long-term objectives.
        </p>
        <Stagger className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            {
              href: "/white-paper",
              icon: FileText,
              title: "HydroSol White Paper",
            },
            {
              href: "/faq",
              icon: MessageCircleQuestion,
              title: "Frequently Asked Questions (FAQ)",
            },
          ].map((p) => (
            <StaggerItem key={p.href}>
              <Link
                href={p.href}
                className="hairline-card group flex h-full items-center gap-4 p-6 text-left hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)]"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="size-6" />
                </span>
                <span className="display-font text-[17px] font-bold text-navy">
                  {p.title}
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-brand transition-transform group-hover:translate-x-1" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <CtaBand
        title="Contact the HydroSol Development Team"
        lede="Whether your interest lies in research, investment, manufacturing, education, policy, or implementation, we welcome the opportunity to transform innovative ideas into practical solutions that deliver lasting human benefit."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
        <GhostButton href="/challenge" onDark>
          Begin the Journey
        </GhostButton>
      </CtaBand>
    </>
  );
}
