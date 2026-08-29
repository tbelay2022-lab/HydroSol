import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "Opportunity & Partnership",
  description:
    "Building the future together — the partnership ecosystem through which the HydroSol vision becomes a shared mission.",
};

export default function OpportunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 5 · The HydroSol Journey"
        title="Opportunity & Partnership"
        subtitle="Building the Future Together"
        lede="“The greatest transformations are achieved not by individuals working alone, but by institutions working together toward a shared purpose.”"
      />

      <Section compactTop>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-06-partnership-ecosystem.jpg"
            alt="The HydroSol Partnership Ecosystem — governments, universities, manufacturers, investors, NGOs, development finance institutions, communities, and engineering partners"
            caption="The Partnership Ecosystem — each partner strengthens the others."
            width={1432}
            height={784}
            priority
          />
        </div>

        <Prose>
          <p>
            No productive community is built by one institution acting alone. Sustainable
            development succeeds when governments, industry, finance, academia,
            entrepreneurs, and communities work toward a shared purpose. HydroSol embraces
            this enduring principle. The challenge of creating productive communities
            extends beyond technology. It requires the synchronization of engineering,
            manufacturing, finance, education, research, public policy, entrepreneurship,
            and community leadership within one collaborative ecosystem. Sustainable
            development is therefore not the responsibility of any one partner, but the
            collective achievement of many.
          </p>

          <p>
            The HydroSol Ecosystem provides a collaborative framework in which governments,
            academia, industry, financial institutions, development partners,
            entrepreneurs, and communities each contribute their unique strengths. Together
            they transform knowledge into capability, investment into opportunity, and
            engineering into sustainable development.
          </p>

          <p>
            This collaboration extends beyond implementing projects. It builds
            institutional capacity, strengthens regional industries, expands technical
            skills, encourages responsible investment, and creates opportunities for
            continuous learning and innovation. As experience grows, knowledge is shared
            across regions, allowing successful practices to be adapted, replicated, and
            continuously improved. Every partnership therefore contributes not only to
            today&apos;s success but also to tomorrow&apos;s capability.
          </p>

          <p>
            Central to this vision is the belief that development is ultimately about
            people. HydroSol encourages broad participation by women and young people,
            recognizing their capacity to drive innovation, entrepreneurship, technical
            excellence, and community leadership. At the same time, it values the
            experience, mentorship, and institutional memory of senior professionals and
            community leaders. By bringing generations together, the ecosystem combines
            fresh ideas with practical wisdom, ensuring that progress is both innovative
            and enduring.
          </p>

          <p>
            HydroSol therefore invites governments, universities, industries, financial
            institutions, development organizations, entrepreneurs, and communities to
            participate in something larger than an engineering initiative. It is an
            invitation to build a collaborative ecosystem in which knowledge becomes
            capability, capability creates opportunity, and opportunity enables productive
            communities to flourish for generations.
          </p>
        </Prose>

        <PullQuote
          lines={[
            "Communities flourish through collaboration.",
            "Collaboration creates collective capability.",
            "Collective capability builds prosperous futures.",
          ]}
        />
      </Section>

      <NextChapter
        current="05"
        note="Every engineering achievement ultimately serves a larger purpose. The HydroSol journey concludes by looking beyond individual projects toward a future where Productive Energy, collaborative institutions, and empowered communities contribute to a more resilient, prosperous, and sustainable civilization."
      />
    </>
  );
}
