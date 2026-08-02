import type { Metadata } from "next";
import Link from "next/link";
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

      <Section>
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
            The HydroSol Ecosystem translates the principle of{" "}
            <strong>Productive Energy</strong> into an integrated engineering platform
            for community development. Rather than viewing energy as an isolated service,
            it positions energy as the catalyst that enables productive infrastructure,
            strengthens local institutions, expands economic opportunity, and supports
            resilient communities.
          </p>
          <p>
            Built upon the convergence of engineering, chemistry, manufacturing, digital
            intelligence, environmental stewardship, and systems integration, the
            HydroSol Ecosystem provides a coordinated framework through which communities
            can strengthen agriculture, water, healthcare, education, enterprise,
            mobility, and local industry while protecting the environment.
          </p>
        </Prose>
      </Section>

      <Section tint title="Engineering Communities, Not Simply Energy Systems">
        <Prose>
          <p>
            HydroSol recognizes that communities prosper when essential systems reinforce
            one another. Productive Energy supports water and agriculture; agriculture
            strengthens enterprise; enterprise creates employment; stronger livelihoods
            improve education, healthcare, environmental stewardship, and community
            resilience. The result is not a collection of independent services, but{" "}
            <strong>a productive ecosystem capable of sustained development.</strong>
          </p>
          <p>
            HydroSol therefore complements existing energy infrastructure rather than
            replacing it. Whether operating alongside electricity grids, renewable
            energy, batteries, generators, or conventional fuels, the ecosystem is
            designed to strengthen productive capacity while building upon resources
            already available within each community.
          </p>
          <p>
            Further detail on how HydroSol fits the present energy ecosystem is given on
            the{" "}
            <Link
              href="/faq"
              className="font-semibold text-brand underline-offset-4 hover:text-leaf-deep hover:underline"
            >
              FAQ
            </Link>
            .
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
            Through one coordinated engineering platform, HydroSol supports productive
            households, agriculture, water systems, healthcare, education, manufacturing,
            mobility, and local enterprise. Individually these applications improve daily
            life; collectively they strengthen the economic, social, institutional, and
            environmental foundations of productive communities.
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
        note="The HydroSol Ecosystem establishes the engineering foundation. The next chapter demonstrates how this architecture is translated into practice through Smart Productive Communities, Regional Production Centers, and coordinated productive infrastructure."
      />
    </>
  );
}
