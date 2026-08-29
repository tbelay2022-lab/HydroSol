import type { Metadata } from "next";
import { Download } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { GhostButton } from "@/components/Buttons";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, Prose } from "@/components/Section";

export const metadata: Metadata = {
  title: "Executive White Paper",
  description:
    "Public access to the HydroSol Executive White Paper — A South-Centric Productive Energy Revolution, covering productive continuity, the HydroSol framework, deployment, regeneration, finance, validation, and scaling.",
};

export default function WhitePaperPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="HydroSol Executive White Paper"
        subtitle="A South-Centric Productive Energy Revolution"
        lede="A concise institutional introduction to HydroSol’s productive-energy framework, its pathway from engineering readiness to real-world validation, and its vision for resilient, productive communities."
      />

      <Section compactTop>
        <div className="mx-auto max-w-3xl text-center">
          <Prose>
            <p>
              The <strong>HydroSol Executive White Paper</strong> presents HydroSol as a
              distributed productive-energy ecosystem designed to strengthen{" "}
              <strong>productive continuity</strong> across infrastructure-constrained and
              resilience-oriented environments.
            </p>
            <p>
              The paper examines the global productive-energy challenge, the shift from
              consumptive energy to productive continuity, the HydroSol operational
              framework, Regional Processing Centers and circular regeneration, productive
              continuity at scale, development finance and impact investment,
              infrastructure-light development, validation and scaling, and the pathway
              from vision to action.
            </p>
            <p>
              It is intended as an accessible strategic and institutional overview. Readers
              seeking concise answers to common technical, deployment, partnership, and
              investment questions may also consult the companion FAQ.
            </p>
          </Prose>

          <Reveal>
            <a
              href="/HydroSol-Executive-White-Paper.pdf"
              download
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-[15.5px] font-semibold text-white transition-all hover:bg-leaf hover:shadow-[0_10px_28px_rgba(76,175,80,0.35)]"
            >
              <Download className="size-5 transition-transform group-hover:translate-y-0.5" />
              Download the White Paper
            </a>
          </Reveal>

          <p className="mt-4 text-[13px] text-body/60">
            Public download · PDF · HydroSol Executive White Paper
          </p>
        </div>
      </Section>

      <CtaBand
        title="Continue exploring HydroSol"
        lede="For partnership discussions, pilot deployment opportunities, investor engagement, technical briefings, or institutional collaboration, the HydroSol team welcomes your inquiry."
      >
        <GhostButton href="/contact" onDark>
          Contact HydroSol
        </GhostButton>
        <GhostButton href="/faq" onDark>
          Read the FAQ
        </GhostButton>
      </CtaBand>
    </>
  );
}
