import type { Metadata } from "next";
import {
  Banknote,
  Building2,
  Cog,
  Factory,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FigureFrame } from "@/components/FigureFrame";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "Join the Mission",
  description:
    "An open invitation to build productive communities together — HydroSol welcomes collaboration with all who share the commitment to productive, resilient, and prosperous communities.",
};

const roles = [
  ["Governments", "establish policy and create enabling environments."],
  ["Universities", "expand knowledge through research and innovation."],
  ["Development institutions", "support long-term social and economic progress."],
  ["Engineering firms", "transform ideas into practical solutions."],
  ["Manufacturers", "scale production."],
  ["Humanitarian organizations", "strengthen communities."],
  ["Entrepreneurs", "create opportunity."],
  ["Investors", "provide the resources that enable innovation to grow."],
  ["Communities themselves", "remain the most important partners of all."],
];

const ahead = [
  "Prototype development",
  "Operational validation",
  "Pilot deployments",
  "Regional partnerships",
  "Knowledge sharing",
  "Continuous engineering improvement",
  "Measured community impact",
];

const invitation = [
  { label: "A government seeking practical development solutions", icon: Landmark },
  { label: "A university interested in collaborative research", icon: GraduationCap },
  { label: "A manufacturer exploring innovative technologies", icon: Factory },
  { label: "A development institution supporting sustainable growth", icon: Building2 },
  { label: "A humanitarian organization strengthening vulnerable communities", icon: HeartHandshake },
  { label: "An engineering firm contributing technical expertise", icon: Cog },
  { label: "An investor committed to long-term impact", icon: Banknote },
  { label: "A community leader preparing for implementation", icon: Users },
];

const shapedBy = [
  "By people.",
  "By partnerships.",
  "By shared knowledge.",
  "By responsible innovation.",
  "And by communities empowered to build their own prosperity.",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 06 · The HydroSol Journey"
        title="Join the Mission"
        subtitle="Building Productive Communities Together"
        lede="The HydroSol journey ultimately seeks to transform today's interconnected development challenges into tomorrow's productive and resilient communities."
      />

      <Section>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-08-transformation.jpg"
            alt="The Transformation — from today's interconnected challenges to tomorrow's Smart Productive Village through the HydroSol journey"
            caption="The transformation — from interconnected challenges to interconnected prosperity."
            width={1432}
            height={894}
            priority
          />
        </div>
        <Prose>
          <p>
            The challenges facing humanity are too significant for any single
            organization, technology, or institution to solve alone.{" "}
            <strong>Progress has always depended upon collaboration.</strong>
          </p>
        </Prose>
        <Stagger className="mx-auto mt-10 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map(([who, what]) => (
            <StaggerItem key={who}>
              <div className="flex h-full items-start gap-3.5 rounded-xl border border-line bg-white px-5 py-4">
                <span className="mt-[8px] size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <p className="text-[14.5px] leading-relaxed text-body">
                  <strong className="font-semibold text-navy">{who}</strong> {what}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            HydroSol seeks to contribute to this shared global effort. The initiative
            recognizes that lasting development depends upon collaboration between
            partners across both the Global South and the Global North — combining local
            knowledge, engineering excellence, investment, research, and practical
            implementation to strengthen productive communities worldwide.
          </p>
        </Prose>
      </Section>

      <Section tint eyebrow="A Shared Commitment" title="Founded Upon a Simple Belief">
        <PullQuote
          lines={[
            "When productive energy strengthens productive communities,",
            "opportunity expands.",
          ]}
        />
        <Prose>
          <p>
            That opportunity extends beyond access to energy. It reaches agriculture,
            education, healthcare, water services, enterprise development, environmental
            stewardship, productive mobility, and community resilience. By strengthening
            these systems together, communities become increasingly capable of creating
            sustainable prosperity from within.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Looking Ahead" title="The Next Phase Focuses on Practical Implementation">
        <Stagger className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-2.5">
          {ahead.map((a) => (
            <StaggerItem key={a}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft/60 px-4 py-2 text-[13.5px] font-semibold text-navy">
                <Rocket className="size-4 text-brand" aria-hidden />
                {a}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            Each successful implementation will strengthen the evidence base for wider
            replication. Each lesson learned will improve future deployments. Each
            partnership will contribute to a stronger global community of practice.
          </p>
          <p>
            HydroSol therefore views every deployment not as an endpoint, but as{" "}
            <strong>another step in a continuing journey of learning and improvement.</strong>
          </p>
        </Prose>
      </Section>

      <Section tint eyebrow="An Open Invitation" title="Whether You Are…">
        <Prose>
          <p>
            HydroSol welcomes collaboration with all who share the commitment to
            productive, resilient, and prosperous communities.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-4">
          {invitation.map((p) => (
            <StaggerItem
              key={p.label}
              className="flex w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="hairline-card group flex flex-1 items-center gap-4 p-5 hover:-translate-y-1 hover:border-leaf/50 hover:shadow-[0_14px_36px_rgba(18,59,109,0.1)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf-soft text-leaf-deep transition-colors group-hover:bg-leaf group-hover:text-white">
                  <p.icon className="size-5" />
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-navy">
                  {p.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mx-auto mt-10 max-w-3xl text-center text-[17px] leading-[1.7] text-body sm:text-[19px]">
          We invite you to{" "}
          <strong className="font-semibold text-navy">
            explore, collaborate, validate, and build together.
          </strong>
        </p>
      </Section>

      <Section eyebrow="The Journey Continues" title="The Future Will Be Shaped by Collaboration">
        <Prose>
          <p>
            The future will be shaped by collaboration across disciplines, institutions,
            and communities.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-8 grid max-w-3xl gap-2.5">
          {shapedBy.map((s) => (
            <StaggerItem key={s}>
              <div className="flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-3.5">
                <Lightbulb className="size-4 shrink-0 text-leaf-deep" aria-hidden />
                <p className="display-font text-[15.5px] font-semibold text-navy">{s}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            HydroSol is committed to contributing to that future. Together, we can help
            create productive communities, strengthen resilient local economies, and
            expand opportunities for generations to come.
          </p>
        </Prose>
      </Section>

      <CtaBand
        title="Ready to build productive communities together?"
        lede="Reach the HydroSol team directly, read the full framework, or start with the most common questions."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
        <GhostButton href="/white-paper" onDark>
          Executive White Paper
        </GhostButton>
        <GhostButton href="/faq" onDark>
          Read the FAQ
        </GhostButton>
      </CtaBand>
    </>
  );
}
