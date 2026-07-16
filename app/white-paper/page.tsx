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
    "Public access to the HydroSol Executive White Paper — the platform's vision, productive energy framework, architecture, implementation philosophy, and long-term development objectives.",
};

export default function WhitePaperPage() {
  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Executive White Paper"
        subtitle="The Complete HydroSol Framework"
        lede="The Executive White Paper presents the platform's vision, productive energy framework, architecture, implementation philosophy, and long-term development objectives."
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Prose>
            <p>
              To support broad accessibility, HydroSol provides public access to its{" "}
              <strong>Executive White Paper</strong> — a single document covering the
              global challenge, the productive energy platform, community applications,
              the Smart Productive Village, and the implementation pathway.
            </p>
          </Prose>
          <Reveal>
            <a
              href="/HydroSol-Executive-White-Paper.pdf"
              download
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-[15.5px] font-semibold text-white transition-all hover:bg-leaf hover:shadow-[0_10px_28px_rgba(76,175,80,0.35)]"
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
        title="Questions after reading?"
        lede="Reach the HydroSol team for partnership discussions, technical briefings, investor engagement, or institutional collaboration."
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
