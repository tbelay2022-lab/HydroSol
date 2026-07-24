import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "Productive Communities",
  description:
    "From engineering vision to community transformation — Smart Productive Communities supported by Regional Production Centers.",
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 4 · The HydroSol Journey"
        title="Productive Communities"
        subtitle="From Engineering Vision to Community Transformation"
        lede="“Engineering achieves its greatest purpose when innovation becomes practical, sustainable, and improves everyday life.”"
      />

      <Section>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-05-kushet.jpg"
            alt="The Smart Productive Village (Kushet) — productive energy integrated with homes, agriculture, water systems, healthcare, education, enterprises, mobility, and environmental stewardship"
            caption="A productive ecosystem where every system strengthens the other and everyone thrives."
            width={1432}
            height={955}
            priority
          />
        </div>
        <Prose>
          <p>
            The HydroSol Ecosystem reaches its full purpose when engineering becomes part
            of everyday community life. Productive Energy is transformed from an
            engineering capability into a catalyst for productive communities—creating
            opportunities for livelihoods, strengthening local institutions, and enabling
            resilient local economies.
          </p>
          <p>
            At the heart of this transformation are{" "}
            <strong>Smart Productive Communities</strong>, where Productive Energy
            supports clean water, agriculture, healthcare, education, enterprise,
            mobility, digital connectivity, environmental stewardship, and other
            essential community services. Working together rather than independently,
            these systems reinforce one another to create a continuous cycle of
            productivity, resilience, and shared prosperity.
          </p>
          <p>
            Supporting every community is a network of{" "}
            <strong>Regional Production Centers (RPCs)</strong>. These centers provide
            cartridge manufacturing and regeneration, engineering support, quality
            assurance, logistics, technical training, maintenance services, digital
            coordination, and continuous operational improvement. More than production
            facilities, they become regional centers of knowledge, engineering
            excellence, workforce development, and long-term operational support.
          </p>
          <p>
            Because the HydroSol Ecosystem is modular and scalable, communities can begin
            with their most immediate priorities and expand progressively as productive
            capacity grows. Infrastructure, institutions, and local capabilities evolve
            together, allowing each community to develop at its own pace while remaining
            connected to a broader regional ecosystem.
          </p>
        </Prose>
      </Section>

      <Section tint title="Communities at the Center">
        <Prose>
          <p>
            Technology alone does not transform communities. <strong>People do.</strong>
          </p>
          <p>
            HydroSol therefore places communities at the center of implementation by
            encouraging local ownership, building technical capability, supporting
            entrepreneurship, and strengthening the institutions that sustain long-term
            development.
          </p>
          <p>
            Particular emphasis is placed on <strong>women and young people</strong>,
            recognizing that they are among the greatest drivers of innovation,
            enterprise, and community transformation, yet are often underrepresented in
            economic opportunity. HydroSol therefore seeks to encourage their broad
            participation across engineering, manufacturing, operations,
            entrepreneurship, technical training, and community leadership, while equally
            valuing the knowledge, mentorship, and experience contributed by senior
            members of the community.
          </p>
          <p>
            The objective is not simply to create employment, but to build productive
            generations working together—where youthful innovation is strengthened by
            experience, and experience is renewed through the energy, creativity, and
            aspirations of a new generation.
          </p>
          <p>
            The measure of success is therefore not the number of systems installed, but
            the communities empowered, the enterprises created, the livelihoods
            strengthened, and the opportunities sustained.
          </p>
        </Prose>

        <PullQuote
          lines={[
            "Engineering serves communities.",
            "Productive Energy enables opportunity.",
            "Productive Communities create Prosperous Futures.",
          ]}
        />
      </Section>

      <NextChapter
        current="04"
        note="No productive community is built by one organization alone. Sustainable transformation depends upon collaboration among engineering, industry, government, finance, universities, development institutions, entrepreneurs, and community leadership. The next chapter explores the partnership ecosystem through which the HydroSol vision becomes a shared mission capable of transforming communities at regional, national, and international scale."
      />
    </>
  );
}
