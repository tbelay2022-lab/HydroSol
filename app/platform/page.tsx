import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The HydroSol Ecosystem",
  description:
    "An integrated engineering platform for productive communities, resilient local economies, and sustainable development.",
};

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 3 · The HydroSol Journey"
        title="The HydroSol Ecosystem"
        subtitle="An Integrated Engineering Platform for Productive Communities"
        lede="“Sustainable development is achieved not by isolated technologies, but by integrated systems working together toward a common purpose.”"
      />

      <Section compactTop>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-03-platform.jpg"
            alt="The HydroSol Platform — an integrative productive energy framework connecting homes, agriculture, water, healthcare, education, mobility, and SMEs"
            caption="One platform. Many applications. Stronger communities. Greater impact."
            width={1402}
            height={1122}
            priority
          />
        </div>
        <Prose>
          <p>
            The HydroSol Ecosystem is the operational architecture through which{" "}
            <strong>Productive Energy</strong> is translated into practical community
            development. It integrates engineering, manufacturing, digital intelligence,
            environmental stewardship, and localized operations into one coordinated
            platform that enables productive infrastructure to grow as a unified system
            rather than as isolated projects.
          </p>
          <p>
            Rather than treating energy, water, agriculture, healthcare, education,
            enterprise, and mobility as independent sectors, the HydroSol Ecosystem
            connects them within a common engineering framework where progress in one
            strengthens progress across the others.
          </p>
        </Prose>
      </Section>

      <Section tint title="Engineering Communities, Not Simply Energy Systems">
        <Prose>
          <p>
            Communities prosper when essential systems reinforce one another. Productive
            Energy supports productive infrastructure; productive infrastructure
            strengthens enterprise; enterprise creates livelihoods; stronger livelihoods
            improve social services, environmental stewardship, and community resilience.
            The result is an integrated productive ecosystem rather than a collection of
            independent services.
          </p>
          <p>
            HydroSol therefore complements existing energy infrastructure rather than
            replacing it. Whether operating alongside electricity grids, renewable
            energy, batteries, generators, or conventional fuels, the ecosystem is
            designed to strengthen productive capacity while building upon resources
            already available within each community.
          </p>
        </Prose>
      </Section>

      <Section title="Distributed by Design">
        <Prose>
          <p>
            Because productive activities occur where people live and work, HydroSol
            adopts a distributed and modular architecture. Homes, farms, workshops,
            schools, clinics, cooperatives, and local enterprises become part of a
            coordinated productive network that can expand naturally into{" "}
            <strong>
              Smart Productive Communities, Regional Production Centers, and larger
              regional deployment systems.
            </strong>
          </p>
          <p>
            Growth therefore occurs progressively, allowing infrastructure and productive
            capacity to evolve together.
          </p>
        </Prose>
      </Section>

      <Section tint title="Sophisticated Engineering. Simple Operation.">
        <Prose>
          <p>
            Although the engineering behind HydroSol is advanced, its operation is
            intentionally uncomplicated.
          </p>
          <p>
            Standardized cartridges, modular equipment, integrated safety features,
            straightforward operating procedures, local servicing, and practical training
            ensure that communities can use the system confidently without requiring
            specialized technical knowledge.
          </p>
          <p>
            <strong>
              The engineering carries the complexity, allowing people to focus on
              productivity.
            </strong>
          </p>
        </Prose>
      </Section>

      <Section title="A Platform for Lasting Prosperity">
        <Prose>
          <p>
            HydroSol measures success not simply by energy delivered, but by productive
            outcomes—communities empowered, enterprises established, livelihoods
            strengthened, institutions supported, and opportunities sustained. These
            outcomes are achieved through disciplined engineering, continuous validation,
            strategic partnerships, and continuous operational learning.
          </p>
          <p>
            HydroSol advances through disciplined engineering, continuous validation,
            strategic partnerships, and operational learning. Its success will ultimately
            be measured not by the number of systems installed, but by the communities
            empowered, enterprises created, livelihoods strengthened, and opportunities
            sustained.
          </p>
        </Prose>

        <PullQuote
          lines={[
            "One Ecosystem.",
            "Many Integrated Systems.",
            "One Shared Purpose.",
            "Productive Communities. Prosperous Futures.",
          ]}
        />
      </Section>

      <NextChapter
        current="03"
        note="The HydroSol Ecosystem establishes the operational engineering foundation. The next chapter demonstrates how this architecture is translated into Smart Productive Communities, Regional Production Centers, and coordinated productive infrastructure."
      />
    </>
  );
}
