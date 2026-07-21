import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Globe,
  MessageCircleQuestion,
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
    "From engineering innovation to societal transformation — an invitation to collaborative validation, demonstration projects, and pilot deployments.",
};

const explore = [
  {
    href: "/",
    icon: Globe,
    title: "Explore the HydroSol Website",
    body: "Discover the complete HydroSol Platform, engineering doctrines, implementation pathways, partnership ecosystem, and long-term development vision.",
  },
  {
    href: "/faq",
    icon: MessageCircleQuestion,
    title: "Read the Frequently Asked Questions (FAQ)",
    body: "Find concise answers to common questions regarding HydroSol technology, engineering principles, safety, deployment, operations, and applications.",
  },
  {
    href: "/white-paper",
    icon: FileText,
    title: "Read the HydroSol White Paper",
    body: "Explore the comprehensive technical and strategic foundation of the HydroSol Platform, including its scientific basis, engineering architecture, implementation strategy, and opportunities for sustainable development.",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 6 · The HydroSol Journey"
        title="Join the Mission"
        subtitle="From Engineering Innovation to Societal Transformation"
        lede="Every great engineering achievement begins with discovery, advances through validation, and fulfills its purpose through implementation."
      />

      <Section>
        <Prose>
          <p>
            HydroSol was created to address one of humanity&rsquo;s most pressing
            development challenges:{" "}
            <strong>
              providing safe, reliable, and sustainable productive energy for communities
              beyond the reach of conventional infrastructure.
            </strong>
          </p>
          <p>
            Its development has been guided by established principles of engineering,
            chemistry, materials science, systems integration, and continuous engineering
            improvement. Over several years, the HydroSol Platform has progressed from
            scientific concept through engineering design, laboratory experimentation,
            prototype development, and iterative refinement into an integrated platform
            for distributed productive energy.
          </p>
          <p>
            Laboratory investigations have been conducted under varying operating
            temperatures and environmental conditions to evaluate operational behavior,
            safety, performance, and engineering reliability. The knowledge gained
            through these investigations has continuously strengthened the design and
            operational architecture of the HydroSol Platform.
          </p>
          <p>
            The platform has also benefited from independent technical review by
            experienced engineering professionals, including a multinational
            infrastructure development organization and a distinguished power engineer
            with an extensive international patent portfolio. Their professional
            assessments have provided valuable technical insight and reinforced
            confidence in the engineering principles and practical potential of the
            HydroSol Platform.
          </p>
          <p>
            These milestones represent an important stage in HydroSol&rsquo;s engineering
            journey—but not its conclusion. Responsible engineering advances through
            continuous validation, independent evaluation, and practical implementation.
          </p>
          <p>
            The next stage is therefore to undertake collaborative validation,
            demonstration projects, and pilot deployments with governments, universities,
            research institutions, manufacturers, development organizations, investors,
            and local communities. Through these partnerships, HydroSol seeks to further
            verify its performance under real-world operating conditions and accelerate
            the transition from validated engineering to scalable implementation that
            benefits society.
          </p>
        </Prose>

        <div className="mx-auto mt-12 max-w-2xl">
          <FigureFrame
            src="/figures/hs2-07-implementation-pathway.jpg"
            alt="The Implementation Pathway — vision, prototype, validation, pilot, regional deployment, replication, and global impact"
            caption="The Implementation Pathway — from vision to global impact. One journey, many partners, limitless impact."
            width={1024}
            height={1536}
          />
        </div>

        <PullQuote
          lines={[
            "HydroSol has established its scientific and engineering foundation.",
            "The next chapter is to demonstrate that foundation at increasing scales",
            "through independent validation, pilot projects, and collaborative implementation.",
          ]}
        />
        <Prose>
          <p>
            We welcome collaboration with organizations interested in independent
            technical validation, laboratory and field evaluation, demonstration
            projects, research partnerships, manufacturing cooperation, strategic
            investment, and regional implementation initiatives.
          </p>
          <p>
            Together, these efforts will help transform engineering innovation into
            practical solutions that strengthen communities, expand productive
            opportunity, and support sustainable development.
          </p>
        </Prose>

        <div className="mx-auto mt-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-08-transformation.jpg"
            alt="The Transformation — from today's interconnected challenges to tomorrow's Smart Productive Village through the HydroSol journey"
            caption="From Today's World to Tomorrow's Smart Productive Village"
            width={1432}
            height={894}
          />
        </div>
      </Section>

      <Section tint title="Continue Your Exploration">
        <Prose>
          <p>
            HydroSol is presented through a progressive body of engineering, technical,
            and strategic knowledge designed for readers with different interests and
            levels of detail. To continue your exploration, we invite you to:
          </p>
        </Prose>
        <Stagger className="mx-auto mt-10 grid max-w-5xl gap-4 lg:grid-cols-3">
          {explore.map((e) => (
            <StaggerItem key={e.href}>
              <Link
                href={e.href}
                className="hairline-card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)] sm:p-7"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <e.icon className="size-5" />
                </span>
                <h3 className="display-font mt-5 text-[17px] font-bold leading-snug text-navy">
                  {e.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-body/90">
                  {e.body}
                </p>
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
        title="Connect with the HydroSol Team"
        lede="Whether you are interested in engineering collaboration, independent validation, pilot projects, manufacturing partnerships, strategic investment, or implementation initiatives, we welcome the opportunity to begin a conversation."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
        <GhostButton href="/publications" onDark>
          HydroSol Publications
        </GhostButton>
      </CtaBand>
    </>
  );
}
