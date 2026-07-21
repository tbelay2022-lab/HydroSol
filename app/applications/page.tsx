import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "From Platform to Productive Communities",
  description:
    "Deploying distributed productive energy — a distributed deployment model that places productive energy at the point of need, supported by Regional Processing Centers.",
};

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 4 · The HydroSol Journey"
        title="From Platform to Productive Communities"
        subtitle="Deploying Distributed Productive Energy"
        lede="Technology creates lasting value only when it is successfully deployed where people live, work, and build their futures."
      />

      <Section>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-05-kushet.jpg"
            alt="The Smart Productive Village (Kushet) — productive energy integrated with homes, agriculture, water systems, healthcare, education, enterprises, mobility, and environmental stewardship"
            caption="The Smart Productive Village (Kushet) — a productive ecosystem where every system strengthens the other and everyone thrives."
            width={1432}
            height={955}
            priority
          />
        </div>
        <Prose>
          <p>
            HydroSol transforms engineering innovation into practical community
            development through a distributed deployment model that places productive
            energy at the point of need. Rather than relying exclusively on large
            centralized infrastructure, the HydroSol Platform enables communities to
            establish local productive-energy systems that grow progressively with their
            economic, social, and environmental needs.
          </p>
          <p>
            Its modular architecture allows deployment at multiple scales—from individual
            households and small enterprises to schools, healthcare facilities,
            agricultural operations, industrial users, and entire productive communities.
            As local demand increases, additional HydroSol units can be integrated
            seamlessly without disrupting existing operations, creating a scalable
            pathway toward regional productive ecosystems.
          </p>
          <p>
            This distributed approach strengthens resilience by reducing dependence on
            distant energy supplies while expanding local capability, employment,
            entrepreneurship, and technical capacity. Energy is no longer viewed simply
            as a utility service, but as{" "}
            <strong>
              productive infrastructure that enables communities to create value, improve
              essential services, and build sustainable local economies.
            </strong>
          </p>
          <p>
            Supporting this transformation is the{" "}
            <strong>Regional Processing Center (RPC)</strong>, which serves as the
            operational hub for manufacturing support, cartridge lifecycle management,
            technical servicing, engineering training, digital monitoring, quality
            assurance, and continuous system improvement. Through the RPC network, the
            HydroSol Ecosystem combines decentralized deployment with coordinated
            engineering standards, ensuring reliability, safety, and long-term
            operational excellence.
          </p>
          <p>
            By integrating distributed productive energy with regional engineering
            support, HydroSol establishes an ecosystem capable of continuous learning,
            technological evolution, and sustainable expansion.
          </p>
          <p>
            The objective is not merely to deliver energy.{" "}
            <strong>
              The objective is to build productive communities that create opportunity,
              strengthen resilience, and sustain prosperity for generations.
            </strong>
          </p>
          <p>From today&rsquo;s world to tomorrow&rsquo;s Smart Productive Village.</p>
        </Prose>

        <PullQuote
          lines={[
            "Distributed Deployment.",
            "Regional Coordination.",
            "Sustainable Transformation.",
          ]}
        />
        <p className="mx-auto max-w-3xl text-center text-[16px] font-medium italic text-brand sm:text-[17px]">
          Building Productive Communities Through Distributed Engineering
        </p>
      </Section>

      <NextChapter current="04" />
    </>
  );
}
