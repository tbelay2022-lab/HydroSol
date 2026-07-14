import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, MessageCircleQuestion } from "lucide-react";
import { PrimaryButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "HydroSol Publications",
  description:
    "The HydroSol Executive White Paper and Frequently Asked Questions — the framework in depth.",
};

const publications = [
  {
    href: "/white-paper",
    icon: FileText,
    title: "Executive White Paper",
    body: "The complete HydroSol framework — the global challenge, the productive energy platform, community applications, and the implementation pathway. Available to read online or download as a PDF.",
  },
  {
    href: "/faq",
    icon: MessageCircleQuestion,
    title: "Frequently Asked Questions",
    body: "Clear answers to the most common questions about HydroSol — technology, validation, implementation, partnership, and investment.",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="HydroSol Publications"
        subtitle="The Framework in Depth"
        lede="For readers who wish to go beyond the journey chapters, HydroSol publishes its complete framework and answers to the most common questions."
      />

      <Section>
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
        title="Questions the publications don't answer?"
        lede="For partnership, investment, technical, institutional, media, or research inquiries, the HydroSol team welcomes your message."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
      </CtaBand>
    </>
  );
}
