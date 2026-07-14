import type { Metadata } from "next";
import {
  Bus,
  Droplets,
  Home,
  Repeat,
  Sprout,
  Store,
} from "lucide-react";
import { Figure17 } from "@/components/Figure17";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "Applications Become Communities",
  description:
    "Productive energy in everyday life — how households, agriculture, water, health, education, enterprises, and mobility converge into the Smart Productive Village (Kushet).",
};

const applications = [
  {
    icon: Home,
    title: "Empowering Households",
    body: "Reliable productive energy supports cleaner cooking, improved household services, greater comfort, and increased opportunities for home-based economic activities. Households become active participants in development rather than passive consumers of energy.",
  },
  {
    icon: Sprout,
    title: "Strengthening Agriculture & Food Systems",
    body: "Agriculture remains the backbone of many developing economies. Productive energy supports irrigation, food processing, storage, refrigeration, mechanization, and value addition — strengthening food security while increasing farmer productivity and rural incomes.",
  },
  {
    icon: Droplets,
    title: "Supporting Water, Health & Education",
    body: "Water systems become more dependable. Healthcare facilities improve their operational capability. Schools gain access to modern learning environments and digital resources. Together, these services strengthen human capital while improving quality of life.",
  },
  {
    icon: Store,
    title: "Enabling Small & Medium Enterprises",
    body: "Productive energy enables workshops, processing facilities, refrigeration, service industries, manufacturing, and other income-generating activities. Women and youth particularly benefit from expanded opportunities for entrepreneurship, innovation, and local enterprise development.",
  },
  {
    icon: Bus,
    title: "Productive Mobility",
    body: "Agricultural products reach markets. Small businesses receive supplies. Communities improve access to education, healthcare, and commercial services. Productive mobility strengthens local productivity, economic development, and regional connectivity.",
  },
];

const kushet = [
  "Women become entrepreneurs.",
  "Youth become innovators.",
  "Farmers become value creators.",
  "Small enterprises expand.",
  "Schools become centers of learning and innovation.",
  "Healthcare services become more dependable.",
  "Natural resources are managed more sustainably.",
  "Local employment increases.",
  "Communities become increasingly resilient.",
];

const replicable = [
  "Each successful implementation contributes valuable experience for future communities.",
  "Each village becomes both a beneficiary and a source of learning.",
  "Each success strengthens confidence in broader replication.",
];

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 04 · The HydroSol Journey"
        title="From Applications to Productive Communities"
        subtitle="Productive Energy in Everyday Life"
      />

      <Section>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-04-applications-communities.jpg"
            alt="Applications become communities — homes, agriculture, SMEs, water, healthcare, education, and productive mobility combine into one integrated community"
            caption="Integrated applications. Connected communities. Sustainable prosperity."
            width={1432}
            height={955}
            priority
          />
        </div>
        <Prose>
          <p>
            The true value of productive energy is measured not by the technology itself,
            but by <strong>the opportunities it creates for people and communities.</strong>
          </p>
          <p>
            HydroSol therefore focuses on enabling productive activities that improve
            daily life while strengthening long-term community resilience. Across diverse
            environments, productive energy can contribute to households, agriculture,
            healthcare, education, water services, productive mobility, and small
            enterprises. Each application addresses an important need. Together, they
            create a foundation for sustainable local development.
          </p>
        </Prose>

        <Stagger className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-4">
          {applications.map((a) => (
            <StaggerItem
              key={a.title}
              className="flex w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="hairline-card group flex-1 p-6 hover:-translate-y-1.5 hover:border-leaf/50 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)]">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-leaf group-hover:text-white">
                  <a.icon className="size-5" />
                </span>
                <h3 className="display-font mt-5 text-[17px] font-bold leading-snug text-navy">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-body/90">{a.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tint eyebrow="Beyond Individual Applications" title="One Coordinated Ecosystem">
        <Prose>
          <p>
            Each application delivers important benefits individually. However, HydroSol
            achieves its greatest impact when these applications operate together within
            the same community. Productive energy becomes the common enabler that
            connects households, agriculture, water systems, healthcare, education, local
            enterprises, productive mobility, and environmental stewardship into one
            coordinated ecosystem.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "Development becomes more than the sum of individual projects.",
            "It becomes an integrated community system.",
          ]}
        />
      </Section>

      <Section
        eyebrow="The Smart Productive Village"
        title="The Kushet — Where Every Dimension of Local Life Is Strengthened"
      >
        <Prose>
          <p>
            HydroSol envisions communities where productive energy strengthens every
            dimension of local life simultaneously. The{" "}
            <strong>Smart Productive Village (Kushet)</strong> represents this vision.
            While particularly suited to rural and peri-urban communities across Africa,
            South Asia, Latin America, and the Caribbean, the framework is intentionally
            adaptable to underserved communities wherever productive infrastructure
            remains limited.
          </p>
          <p>
            Rather than introducing isolated technologies, the Kushet integrates
            productive energy with agriculture, water services, healthcare, education,
            local enterprise, productive mobility, environmental stewardship, and
            community infrastructure within one coordinated framework.
          </p>
        </Prose>

        <Stagger className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {kushet.map((k) => (
            <StaggerItem key={k}>
              <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf-soft px-4 py-2 text-[13.5px] font-medium text-leaf-deep">
                <span className="size-1.5 rounded-full bg-leaf" aria-hidden />
                {k}
              </span>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mx-auto mt-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-05-kushet.jpg"
            alt="The Smart Productive Village (Kushet) — productive energy integrated with homes, agriculture, water systems, healthcare, education, enterprises, mobility, and environmental stewardship"
            caption="The Smart Productive Village (Kushet) — a productive ecosystem where every system strengthens the other and everyone thrives."
            width={1432}
            height={955}
          />
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <Figure17 />
        </div>

        <Prose>
          <p>
            The Smart Productive Village therefore represents more than a technological
            deployment. It represents a productive ecosystem where interconnected systems
            reinforce one another and create opportunities that encourage families to
            prosper within their own communities.{" "}
            <strong>
              HydroSol measures success not simply by systems installed, but by
              productive communities strengthened.
            </strong>
          </p>
        </Prose>
      </Section>

      <Section tint eyebrow="A Replicable Development Model" title="Not a Single Demonstration">
        <Prose>
          <p>
            The Smart Productive Village is not intended as a single demonstration. It is
            designed as a practical model that can be adapted to different countries,
            cultures, and local circumstances.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-8 grid max-w-3xl gap-2.5">
          {replicable.map((r, i) => (
            <StaggerItem key={r}>
              <div className="flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-3.5">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf-deep">
                  <Repeat className="size-4" aria-hidden />
                  <span className="sr-only">{i + 1}</span>
                </span>
                <p className="text-[15px] leading-snug text-body">{r}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            The journey therefore moves naturally from community transformation to a
            larger question:{" "}
            <strong>
              How can this model be validated, financed, replicated, and scaled across
              thousands of communities?
            </strong>
          </p>
        </Prose>
      </Section>

      <NextChapter
        current="04"
        note="How can the Smart Productive Village be validated, financed, replicated, and scaled across thousands of communities? That question forms the focus of the next chapter."
      />
    </>
  );
}
