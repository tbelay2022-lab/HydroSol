import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { OpportunityStats } from "@/components/OpportunityStats";
import { PageHero } from "@/components/PageHero";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "Opportunity & Investment",
  description:
    "Building partnerships for sustainable development — a potential market exceeding US$100 billion, addressed through one collaborative framework.",
};

export default function OpportunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 5 · The HydroSol Journey"
        title="Opportunity & Investment"
        subtitle="Building Partnerships for Sustainable Development"
        lede="Lasting transformation is achieved through collaboration, not technology alone."
      />

      <Section>
        <Prose>
          <p>
            The opportunity extends far beyond technology itself. More than{" "}
            <strong>2.3 billion people</strong> across the Global South continue to lack
            access to the productive infrastructure needed to build resilient local
            economies. Meeting these needs represents one of the largest sustainable
            development opportunities of the twenty-first century, with HydroSol
            addressing a potential market exceeding <strong>US$100 billion</strong>{" "}
            across productive energy, water, agriculture, healthcare, education,
            enterprise, mobility, and supporting infrastructure.
          </p>
        </Prose>
        <div className="mx-auto mt-12 max-w-4xl">
          <OpportunityStats />
        </div>
        <Prose>
          <p>
            HydroSol is built on the belief that sustainable development is the result of
            coordinated partnerships. No single organization, institution, or technology
            can address the interconnected challenges of energy, water, food security,
            healthcare, education, enterprise, mobility, and environmental stewardship in
            isolation.
          </p>
        </Prose>
      </Section>

      <Section tint title="One Collaborative Framework">
        <div className="mt-4 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Prose>
            <p>
              The HydroSol Ecosystem brings together governments, universities, research
              institutions, manufacturers, investors, development finance institutions,
              engineering partners, non-governmental organizations, and local communities
              within one collaborative framework. Each partner contributes unique
              expertise, resources, and capabilities while working toward a shared
              objective:{" "}
              <strong>building productive, resilient, and prosperous communities.</strong>
            </p>
            <p>
              At the center of this ecosystem is the HydroSol Platform, supported by{" "}
              <strong>Regional Processing Centers (RPCs)</strong> that coordinate
              manufacturing, technical services, cartridge lifecycle management,
              engineering training, quality assurance, digital monitoring, and continuous
              operational improvement. Together, these capabilities ensure that
              distributed productive-energy systems remain reliable, scalable, and
              sustainable throughout their operational life.
            </p>
          </Prose>
          <FigureFrame
            src="/figures/hs2-06-partnership-ecosystem.jpg"
            alt="The HydroSol Partnership Ecosystem — governments, universities, manufacturers, investors, NGOs, development finance institutions, communities, and engineering partners"
            caption="The Partnership Ecosystem — collective innovation, shared responsibility, and continuous development."
            width={1432}
            height={784}
          />
        </div>
        <Prose>
          <p>
            This collaborative model strengthens local capacity by encouraging knowledge
            transfer, workforce development, entrepreneurship, and regional industrial
            participation. Rather than creating long-term dependence, the HydroSol
            Ecosystem is designed to help communities build the technical capability and
            institutional resilience needed to manage and expand their own productive
            infrastructure.
          </p>
          <p>
            The HydroSol Ecosystem therefore represents more than a network of partners.{" "}
            <strong>
              It is a framework for collective innovation, shared responsibility, and
              continuous development.
            </strong>
          </p>
          <p>
            By combining engineering excellence with institutional cooperation, the
            HydroSol Ecosystem creates an environment where technology becomes a catalyst
            for economic opportunity, environmental stewardship, and enduring community
            prosperity.
          </p>
        </Prose>

        <PullQuote
          lines={["Shared Vision.", "Shared Responsibility.", "Shared Prosperity."]}
        />
        <p className="mx-auto max-w-3xl text-center text-[16px] font-medium italic text-brand sm:text-[17px]">
          Engineering Together for a Sustainable Future
        </p>
      </Section>

      <NextChapter current="05" />
    </>
  );
}
