import type { Metadata } from "next";
import {
  Banknote,
  Building2,
  Cog,
  Factory,
  FlaskConical,
  Rocket,
  Users,
} from "lucide-react";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { OpportunityStats } from "@/components/OpportunityStats";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "Opportunity & Finance",
  description:
    "From vision to implementation — a significant global opportunity, partnership-driven implementation, and investment in productive communities.",
};

const pathway = [
  { icon: Cog, label: "Engineering Refinement" },
  { icon: FlaskConical, label: "Operational Validation" },
  { icon: Rocket, label: "Pilot Deployment" },
  { icon: Users, label: "Strategic Partnerships" },
  { icon: Building2, label: "Regional Expansion" },
  { icon: Factory, label: "Scalable Replication" },
];

const investment = [
  "Technology development",
  "Manufacturing capability",
  "Prototype validation",
  "Pilot deployment",
  "Regional processing capacity",
  "Local workforce development",
  "Monitoring systems",
  "Community implementation",
];

export default function OpportunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 05 · The HydroSol Journey"
        title="Opportunity & Finance"
        subtitle="From Vision to Implementation"
      />

      <Section>
        <Prose>
          <p>
            The vision of the Smart Productive Village is both ambitious and practical.
            Its purpose is not to remain a concept but to become a validated and scalable
            development model capable of supporting productive communities across diverse
            regions of the world.
          </p>
          <p>HydroSol therefore enters its next phase with a clear objective:</p>
        </Prose>
        <PullQuote
          lines={[
            "To translate engineering innovation into measurable social, economic,",
            "and environmental impact through responsible implementation,",
            "validation, and partnership.",
          ]}
        />
      </Section>

      <Section tint title="A Significant Global Opportunity">
        <Prose>
          <p>
            Across Africa, South Asia, Latin America, the Caribbean, and other parts of
            the Global South, an estimated <strong>2.3 billion people</strong> continue
            to seek reliable productive infrastructure capable of supporting households,
            agriculture, education, healthcare, water systems, and local enterprise.
          </p>
          <p>
            This represents one of the largest productive infrastructure opportunities of
            the twenty-first century. The productive infrastructure ecosystem serving
            these communities represents a market opportunity exceeding{" "}
            <strong>US$100 billion</strong>, spanning productive energy, manufacturing,
            agriculture, mobility, water systems, healthcare, education, digital
            services, and local enterprise development.
          </p>
        </Prose>
        <div className="mx-auto mt-12 max-w-4xl">
          <OpportunityStats />
        </div>
        <Prose>
          <p>
            HydroSol seeks to participate responsibly within this opportunity by{" "}
            <strong>
              enabling productive communities rather than merely supplying equipment.
            </strong>
          </p>
        </Prose>
      </Section>

      <Section title="Building Through Partnership">
        <div className="mt-4 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Prose>
            <p>
              No single institution can transform communities alone. HydroSol therefore
              embraces collaboration as a fundamental operating principle.
            </p>
            <p>
              As illustrated in the Partnership Ecosystem, HydroSol brings together
              governments, development finance institutions, universities, engineering
              and manufacturing partners, humanitarian organizations, private-sector
              innovators, investors, and local communities within a shared implementation
              framework. Each partner contributes unique expertise, resources, and
              experience, creating stronger pathways for implementation while fostering
              local ownership, long-term sustainability, and measurable community impact.
            </p>
          </Prose>
          <FigureFrame
            src="/figures/hs2-06-partnership-ecosystem.jpg"
            alt="The HydroSol Partnership Ecosystem — governments, universities, manufacturers, investors, NGOs, development finance institutions, communities, and engineering partners"
            caption="The Partnership Ecosystem — shared implementation, local ownership, and measurable community impact."
            width={1432}
            height={784}
          />
        </div>
      </Section>

      <Section tint title="The Next Phase">
        <Prose>
          <p>
            The HydroSol journey now moves from conceptual development toward practical
            implementation. The implementation pathway below illustrates how engineering
            refinement, operational validation, pilot deployment, strategic partnerships,
            regional expansion, and scalable replication come together within one
            coordinated framework. Each stage builds upon the previous one, transforming
            vision into measurable community impact through responsible, collaborative
            implementation.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pathway.map((p, i) => (
            <StaggerItem key={p.label}>
              <div className="hairline-card group flex h-full items-center gap-4 p-5 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(18,59,109,0.1)] sm:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <p.icon className="size-5" />
                </span>
                <div>
                  <p className="display-font text-[12px] font-bold tracking-wider text-brand/50">
                    STAGE {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[15px] font-semibold leading-snug text-navy">
                    {p.label}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mx-auto mt-12 max-w-2xl">
          <FigureFrame
            src="/figures/hs2-07-implementation-pathway.jpg"
            alt="The Implementation Pathway — vision, prototype, validation, pilot, regional deployment, replication, and global impact"
            caption="The Implementation Pathway — from vision to global impact. One journey, many partners, limitless impact."
            width={1024}
            height={1536}
          />
        </div>
      </Section>

      <Section title="Investment for Productive Communities">
        <Prose>
          <p>
            HydroSol seeks investment that supports lasting productive impact. Capital
            contributes not only to technology development but also to manufacturing
            capability, prototype validation, pilot deployment, regional processing
            capacity, local workforce development, monitoring systems, and community
            implementation.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-8 flex max-w-3xl flex-wrap gap-2.5">
          {investment.map((item) => (
            <StaggerItem key={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-4 py-2 text-[13.5px] font-semibold text-navy">
                <Banknote className="size-4 text-leaf-deep" aria-hidden />
                {item}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            <strong>
              Investment therefore becomes an investment in productive communities rather
              than simply in infrastructure.
            </strong>
          </p>
        </Prose>
      </Section>

      <Section tint title="An Invitation to a Shared Future">
        <Prose>
          <p>
            HydroSol believes that the world&rsquo;s greatest opportunities emerge when
            innovation serves humanity.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "The demand is substantial.",
            "The need remains urgent.",
            "The opportunity has the potential to be transformative.",
          ]}
        />
        <Prose>
          <p>
            HydroSol therefore invites governments, investors, engineering firms,
            manufacturers, universities, development institutions, humanitarian
            organizations, and community leaders to participate in building productive
            communities together.
          </p>
          <p>
            By combining engineering innovation with practical implementation, rigorous
            validation, and collaborative partnership, HydroSol seeks to demonstrate how
            productive energy can contribute to sustainable development at community
            scale.
          </p>
        </Prose>
      </Section>

      <NextChapter
        current="05"
        note="The journey has now moved from concept toward implementation. The next chapter extends an open invitation to those who wish to help shape that future."
      />
    </>
  );
}
