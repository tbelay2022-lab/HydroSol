import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, MessageCircleQuestion } from "lucide-react";
import { PrimaryButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FigureFrame } from "@/components/FigureFrame";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose } from "@/components/Section";

export const metadata: Metadata = {
  title: "HydroSol Publications",
  description:
    "The knowledge architecture behind HydroSol and selected public materials, including the HydroSol White Paper and Frequently Asked Questions.",
};

const publications = [
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
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="HydroSol Publications"
        subtitle="The Knowledge Architecture Behind HydroSol"
        lede="A multidisciplinary body of engineering, scientific, technical, and strategic knowledge supporting HydroSol’s integrated productive-energy model."
      />

      <Section compactTop>
        <div className="mx-auto mb-10 max-w-5xl">
          <FigureFrame
            src="/figures/hs-publications-knowledge-architecture.png"
            alt="The Knowledge Architecture Behind HydroSol — multidisciplinary knowledge converging into the HydroSol platform, a five-volume knowledge series, intellectual-property protection, selected publications, and the White Paper and FAQ."
            caption="The Knowledge Architecture Behind HydroSol — where multidisciplinary knowledge converges and innovation becomes impact."
            width={1432}
            height={955}
            priority
          />
        </div>

        <Prose>
          <p>
            Representing a paradigm shift from conventional energy systems toward an
            integrated productive-energy model, HydroSol brings energy generation,
            productive use, infrastructure, and community development within a unified
            framework.
          </p>
          <p>
            Publication will be undertaken selectively and in stages, enabling HydroSol to
            share its knowledge foundation with the wider public, scientific, engineering,
            and development communities while safeguarding innovations requiring
            appropriate patent and intellectual-property protection.
          </p>
          <p>
            The HydroSol White Paper and FAQ, presented below, provide accessible
            introductions to the platform and its broader vision.
          </p>
        </Prose>
      </Section>

      <Section tint>
        <Stagger className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
          {publications.map((p) => (
            <StaggerItem key={p.href}>
              <Link
                href={p.href}
                className="hairline-card group flex h-full flex-col p-7 text-left hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="size-6" />
                </span>
                <h2 className="display-font mt-5 text-[19px] font-bold text-navy">
                  {p.title}
                </h2>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-body/90">
                  {p.body}
                </p>
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
        title="Explore the HydroSol knowledge foundation"
        lede="For partnership, investment, technical, institutional, media, or research inquiries, the HydroSol team welcomes your message."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
      </CtaBand>
    </>
  );
}
