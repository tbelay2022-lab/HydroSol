import type { Metadata } from "next";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";

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
        lede="Concise answers to common questions regarding the HydroSol framework, productive continuity, deployment philosophy, partnerships, and development objectives. For a comprehensive discussion, consult the HydroSol Executive White Paper."
      />

      <section className="bg-mist">
        <div className="container-x py-16 sm:py-24">
          <FaqAccordion />
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
