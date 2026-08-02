import type { Metadata } from "next";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { faqCommitment, faqIntro } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Concise answers to common questions regarding the HydroSol framework, productive continuity, deployment philosophy, partnerships, and development objectives.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        tintBelow
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        lede={faqIntro}
      />

      <section className="bg-mist">
        <div className="container-x py-12 sm:py-16">
          <FaqAccordion />

          <Reveal>
            <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-line bg-white p-7 sm:p-9">
              <h2 className="display-font text-[20px] font-bold text-navy sm:text-[22px]">
                {faqCommitment.title}
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-body">
                {faqCommitment.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Looking for the full picture?"
        lede="The Executive White Paper presents the platform’s vision, productive-continuity framework, architecture, and long-term development objectives."
      >
        <PrimaryButton href="/white-paper">Download White Paper</PrimaryButton>
        <GhostButton href="/contact" onDark>
          Contact HydroSol
        </GhostButton>
      </CtaBand>
    </>
  );
}
