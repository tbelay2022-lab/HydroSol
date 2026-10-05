import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroEmblem } from "@/components/HeroEmblem";
import { HeroWaves } from "@/components/HeroWaves";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { chapters, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-droplet relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
        <div
          className="dot-grid-light pointer-events-none absolute inset-0"
          aria-hidden
        />
        <HeroWaves />
        <HeroEmblem />

        <div className="container-x relative text-center">
          <Reveal>
            <h1 className="display-font mx-auto max-w-4xl text-balance text-[38px] font-bold uppercase leading-[1.1] tracking-wide text-brand sm:text-5xl md:text-[56px]">
              HydroSol
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="display-font mx-auto mt-6 text-[24px] font-bold leading-snug text-brand sm:text-[30px]">
              {site.motto}
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="display-font mx-auto mt-3 text-[19px] font-bold leading-snug text-brand sm:text-[22px]">
              {site.secondary}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-relaxed text-body">
              {site.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <Section
        eyebrow="The HydroSol Journey"
        title="From Interconnected Challenges to Productive Opportunity"
        center
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[16px] leading-relaxed text-body">
            HydroSol is a new Hydrogen-on-Demand invention developed into a
            distributed Productive Energy platform.
          </p>

          <p className="mt-5 text-[16px] leading-relaxed text-body">
            Its purpose extends beyond energy itself: to bring productive-energy
            capability closer to where people live and work, helping connect
            people, skills, resources, enterprise and opportunity.
          </p>

          <p className="display-font mt-7 text-[19px] font-bold text-navy">
            Energy is not the destination. Productive capability is.
          </p>
        </div>
      </Section>

      <Section
        tint
        eyebrow="Explore HydroSol"
        title="One Integrated Story"
        center
      >
        <Stagger className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <StaggerItem key={chapter.number}>
              <Link
                href={chapter.href}
                className="hairline-card group flex h-full flex-col p-6 transition hover:-translate-y-1 hover:border-brand/40"
              >
                <span className="display-font text-[13px] font-bold text-brand">
                  {chapter.number}
                </span>

                <h2 className="display-font mt-3 text-[19px] font-bold text-navy">
                  {chapter.label}
                </h2>

                <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-body">
                  {chapter.blurb}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-brand">
                  Explore
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        eyebrow="HydroSol Today"
        title="From Vision to Evidence"
        center
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[16px] leading-relaxed text-body">
            Follow HydroSol's continuing progress from engineering development
            toward prototype, pilot deployment, validation, learning and
            responsible scale.
          </p>

          <Link
            href="/today"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-[14.5px] font-semibold text-white transition hover:-translate-y-0.5"
          >
            HydroSol Today
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>

      <Section tint>
        <div className="mx-auto max-w-3xl text-center">
          <p className="display-font text-[22px] font-bold leading-snug text-navy">
            {site.transforming}
          </p>

          <p className="mt-4 text-[15px] font-medium text-body">
            {site.engineering}
          </p>

          <p className="mt-7 text-[16px] leading-relaxed text-body">
            {site.closing}
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-brand"
          >
            Contact the HydroSol Development Team
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}