import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The Global Challenge",
  description:
    "Beyond the last mile — more than 2.3 billion people across the Global South continue to live beyond the reach of reliable productive infrastructure.",
};

export default function ChallengePage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 1 · The HydroSol Journey"
        title="The Global Challenge"
        subtitle="Beyond the Last Mile"
        lede="Progress cannot be measured by the prosperity of the few, but by the opportunities available to everyone."
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
            Across the Global South, more than <strong>2.3 billion people</strong>{" "}
            continue to live beyond the reach of reliable productive infrastructure. For
            millions of families and enterprises, limited access to dependable energy
            restricts opportunities for education, healthcare, agriculture,
            manufacturing, clean water, digital connectivity, and economic growth.
          </p>
          <p>
            <strong>Yet energy alone is not the challenge.</strong>
          </p>
          <p>
            Communities thrive when essential systems work together—when energy supports
            water, agriculture, healthcare, education, enterprise, mobility, digital
            connectivity, and environmental stewardship within an integrated framework
            that enables people to build productive and resilient local economies.
          </p>
          <p>
            Conventional approaches have often addressed these needs individually,
            producing isolated solutions that struggle to achieve lasting impact. The
            result is fragmented infrastructure, constrained economic opportunity,
            environmental degradation, and continuing dependence on external support.
          </p>
          <p>
            The challenge before us is therefore greater than expanding access to
            electricity. It is to create integrated productive systems that enable
            communities to generate opportunity, strengthen resilience, protect their
            environment, and sustain long-term prosperity.
          </p>
          <p>
            <strong>
              This is the challenge that the HydroSol Ecosystem seeks to address.
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

      <NextChapter current="01" />
    </>
  );
}
