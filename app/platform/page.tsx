import type { Metadata } from "next";
import {
  Bus,
  Cog,
  Droplets,
  FlaskConical,
  GraduationCap,
  Handshake,
  HeartPulse,
  Home,
  ShieldCheck,
  Sprout,
  Store,
} from "lucide-react";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The HydroSol Platform",
  description:
    "Productive energy for productive communities — an implementation framework that integrates productive energy with the wider systems that sustain community development.",
};

const reinforce = [
  "Reliable energy strengthens food production.",
  "Food production supports local enterprise.",
  "Local enterprise creates employment.",
  "Employment strengthens household income.",
  "Improved incomes support education and healthcare.",
  "Healthier and more productive communities become increasingly resilient.",
];

const applications = [
  { label: "Household Energy Services", icon: Home },
  { label: "Agricultural Production & Processing", icon: Sprout },
  { label: "Water Access", icon: Droplets },
  { label: "Healthcare", icon: HeartPulse },
  { label: "Education", icon: GraduationCap },
  { label: "Productive Mobility", icon: Bus },
  { label: "Small & Medium-Sized Enterprises", icon: Store },
];

const progressing = [
  { label: "Prototype Development", icon: FlaskConical },
  { label: "Engineering Refinement", icon: Cog },
  { label: "Operational Validation", icon: ShieldCheck },
  { label: "Strategic Partnerships", icon: Handshake },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 03 · The HydroSol Journey"
        title="The HydroSol Platform"
        subtitle="Productive Energy for Productive Communities"
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
            The HydroSol Productive Energy Platform was developed from a simple but
            important observation. Communities require more than energy alone.{" "}
            <strong>They require energy that enables productivity.</strong>
          </p>
          <p>
            Throughout the world, energy has traditionally been measured by the amount
            consumed. While consumption remains important, long-term development
            increasingly depends upon how energy contributes to livelihoods, local
            enterprise, food production, education, healthcare, water services, and
            community resilience.
          </p>
          <p>
            This therefore introduces the concept of{" "}
            <strong>Productive Energy</strong>—energy designed to support economic
            activity and strengthen communities rather than merely providing electricity
            or heat.
          </p>
          <p>
            HydroSol is not the product of a single scientific discipline. It is the
            convergence of chemistry, engineering, digital technologies, environmental
            science, economics, governance, and community development into one integrated
            operational platform. This interdisciplinary foundation enables HydroSol to
            move beyond energy generation and support resilient infrastructure,
            productive livelihoods, and sustainable regional development.
          </p>
        </Prose>
      </Section>

      <Section tint title="An Integrative Framework">
        <Prose>
          <p>
            The HydroSol Productive Energy Platform is not presented simply as another
            energy technology. It is an <strong>implementation framework</strong> that
            seeks to integrate productive energy with the wider systems that sustain
            community development.
          </p>
          <p>
            Within this framework, productive energy supports multiple sectors
            simultaneously, including households, agriculture, small enterprises,
            healthcare facilities, schools, water systems, and productive mobility.
            Instead of viewing these sectors independently, the HydroSol Productive
            Energy Platform recognizes that they reinforce one another.
          </p>
        </Prose>
        <div className="mx-auto mt-10 max-w-4xl">
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {reinforce.map((r, i) => (
              <StaggerItem key={r}>
                <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-white px-5 py-4">
                  <span className="display-font grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-[12.5px] font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-snug text-body">{r}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-7 text-center text-[16px] font-medium italic text-brand">
            This system&rsquo;s perspective forms the foundation of the HydroSol
            Platform.
          </p>
        </div>
      </Section>

      <Section title="Distributed Rather Than Centralized">
        <Prose>
          <p>
            Many communities beyond the last mile require solutions that can operate
            close to where people live and work. HydroSol therefore adopts a{" "}
            <strong>distributed deployment philosophy.</strong>
          </p>
          <p>
            Instead of depending exclusively upon large centralized infrastructure,
            productive energy can be deployed where productive activities occur—within
            homes, farms, workshops, cooperatives, schools, clinics, and community
            enterprises. This approach supports local participation while reducing
            dependence upon long-distance infrastructure for every productive activity.
          </p>
          <p>
            Distributed deployment also enables gradual expansion as communities grow and
            their productive needs evolve.
          </p>
        </Prose>
      </Section>

      <Section tint title="A Platform for Multiple Applications">
        <Prose>
          <p>
            The HydroSol Platform is designed to support a broad range of productive
            activities through a common operational framework.
          </p>
          <p>
            These include household energy services, agricultural production and
            processing, water access, healthcare, education, productive mobility, and
            small and medium-sized enterprises. Each application benefits individually.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-2.5">
          {applications.map((a) => (
            <StaggerItem key={a.label}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-brand/25 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-navy">
                <a.icon className="size-4 text-brand" />
                {a.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            More importantly,{" "}
            <strong>
              they become stronger when deployed together within the same community.
            </strong>{" "}
            HydroSol therefore serves not as a collection of independent applications but
            as a coordinated platform through which productive energy contributes to
            broader development outcomes.
          </p>
        </Prose>
      </Section>

      <Section title="Validation Through Partnership">
        <Prose>
          <p>
            HydroSol recognizes that innovation achieves its greatest value when
            supported by collaboration, engineering discipline, and practical validation.
            Accordingly, the program is progressing through prototype development,
            engineering refinement, operational validation, and strategic partnerships.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-2.5">
          {progressing.map((p) => (
            <StaggerItem key={p.label}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-leaf/30 bg-leaf-soft px-4 py-2.5 text-[13.5px] font-semibold text-leaf-deep">
                <p.icon className="size-4" />
                {p.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            The HydroSol program has also benefited from the confidence and practical
            engineering contributions of experienced professionals, including the Chief
            Executive Officer of a multinational engineering company—a seasoned
            mechanical engineer and holder of multiple patents in power technologies.
            Their participation strengthens the program&rsquo;s engineering pathway while
            reinforcing HydroSol&rsquo;s commitment to rigorous testing, validation, and
            continuous improvement. HydroSol views such collaboration as an essential
            component of responsible innovation.
          </p>
        </Prose>
      </Section>

      <Section tint title="Building Communities Rather Than Installing Technology">
        <Prose>
          <p>
            Technology alone does not transform communities. Transformation occurs when
            technology enables people to become more productive, more resilient, and
            better connected to opportunity.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "HydroSol therefore measures success not by the number of systems deployed,",
            "but by the communities strengthened through productive energy.",
          ]}
        />
        <Prose>
          <p>
            This philosophy prepares the way for the next chapter. Rather than examining
            individual technical applications in isolation, we now explore how productive
            energy can support interconnected community systems—and how these systems
            ultimately converge within the vision of the{" "}
            <strong>Smart Productive Village (Kushet).</strong>
          </p>
        </Prose>
      </Section>

      <NextChapter
        current="03"
        note="The HydroSol Platform becomes most meaningful when productive energy is translated into everyday community life. The following illustration demonstrates how individual applications become an integrated productive community."
      />
    </>
  );
}
