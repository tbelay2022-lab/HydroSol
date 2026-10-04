import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The Global Challenge",
  description:
    "Beyond the last mile — why the future of sustainable development depends on integrated productive systems rather than isolated solutions.",
};

export default function ChallengePage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 1 · The HydroSol Journey"
        title="The Global Challenge"
        subtitle="Beyond the Last Mile"
        lede="“Progress cannot be measured by the prosperity of the few, but by the opportunities available to everyone.”"
      />

      <Section>
        <div className="mx-auto mb-12 max-w-3xl">
          <FigureFrame
            src="/figures/hs2-01-global-challenge.jpg"
            alt="The Global Challenge — six interconnected development challenges: energy constraints, environmental degradation, food and water insecurity, infrastructure limitations, limited economic opportunity, and community vulnerability"
            caption="Interconnected challenges require integrated solutions."
            width={1254}
            height={1254}
            priority
          />
        </div>
        <Prose>
          <p>
            For generations, development has been measured by extending roads,
            electricity, water systems, schools, healthcare facilities, and other
            essential services. These achievements have transformed millions of lives and
            remain indispensable to human progress.
          </p>
          <p>
            Yet across much of the Global South, millions of communities continue to live
            beyond the <strong>&ldquo;last mile&rdquo;</strong>—not simply beyond
            physical infrastructure, but beyond the integrated productive systems that
            enable people to build lasting prosperity.
          </p>
          <p>
            The challenge is therefore not merely one of energy, infrastructure, or
            technology. <strong>It is a challenge of connection.</strong>
          </p>
          <p>
            Communities prosper when productive energy, water, agriculture, education,
            healthcare, enterprise, mobility, digital connectivity, finance, governance,
            and environmental stewardship operate as parts of a single productive
            ecosystem. When these systems function independently, each may deliver
            benefits, yet together they fall short of creating the conditions for
            sustained economic growth and community resilience.
          </p>
          <p>
            For decades, development initiatives have often addressed these needs one
            sector at a time. While these efforts have brought meaningful progress,
            isolated interventions rarely generate the cumulative transformation required
            for communities to become economically self-sustaining. Fragmented systems
            frequently lead to fragmented outcomes.
          </p>
          <p>HydroSol begins with a different engineering premise.</p>
        </Prose>

        <PullQuote
          lines={[
            "Prosperity is not created by individual technologies.",
            "It is created by synchronized productive systems.",
          ]}
        />

        <Prose>
          <p>
            When energy powers water, water supports agriculture, agriculture
            strengthens enterprise, enterprise creates livelihoods, digital connectivity
            expands knowledge, and institutions coordinate these systems, productive
            communities emerge. Opportunity becomes self-reinforcing, resilience
            increases, and long-term prosperity becomes achievable.
          </p>
          <p>
            The challenge before us is therefore greater than expanding access to
            electricity. It is to engineer integrated productive ecosystems that enable
            communities not only to consume resources, but to generate opportunity, build
            resilience, steward their environment, and sustain prosperity for
            generations.
          </p>
          <p>
            <strong>
              This is the challenge that inspired the HydroSol Ecosystem.
            </strong>
          </p>
        </Prose>

        <PullQuote
          lines={[
            "The challenge is interconnected.",
            "The solution must be interconnected.",
          ]}
        />
      </Section>

      <NextChapter
        current="01"
        note="Every transformative engineering solution begins not with an answer, but with a question. The next chapter explores the journey that inspired HydroSol and the search for a practical engineering pathway toward productive, resilient, and sustainable communities."
      />
    </>
  );
}
