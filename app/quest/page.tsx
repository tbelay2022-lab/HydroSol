import type { Metadata } from "next";
import {
  Globe2,
  Landmark,
  Leaf,
  Sprout,
  TrendingUp,
  Zap,
} from "lucide-react";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, SubHeading, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The Quest",
  description:
    "Humanity's continuing search for sustainable development — decades of progress, the gap that remains, and the need for an integrative framework.",
};

const fronts = [
  {
    icon: Zap,
    title: "Energy",
    body: "Energy programs seek to expand electricity access through grid extension, renewable energy, mini-grids, and decentralized solutions.",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    body: "Agricultural initiatives promote improved farming methods, irrigation, mechanization, storage, and food security.",
  },
  {
    icon: Leaf,
    title: "Environment",
    body: "Environmental programs encourage afforestation, ecosystem restoration, sustainable resource management, carbon reduction, and climate adaptation.",
  },
  {
    icon: Landmark,
    title: "Infrastructure",
    body: "Infrastructure investments improve transportation, communications, healthcare facilities, schools, and public services.",
  },
  {
    icon: TrendingUp,
    title: "Economy",
    body: "Economic development programs strengthen entrepreneurship, financial inclusion, local manufacturing, skills development, and employment opportunities.",
  },
  {
    icon: Globe2,
    title: "Global Frameworks",
    body: "International frameworks, including the Sustainable Development Goals, continue to encourage integrated approaches that seek inclusive, resilient, and environmentally responsible development.",
  },
];

const alone = [
  "Energy access alone may not create sustainable livelihoods.",
  "Agricultural improvements alone may not overcome infrastructure limitations.",
  "Environmental restoration alone may not generate local economic opportunity.",
];

const connected = [
  "Reliable energy strengthens agriculture.",
  "Agriculture supports local enterprise.",
  "Enterprise generates employment.",
  "Employment improves education and healthcare access.",
  "Healthy ecosystems strengthen water security and long-term resilience.",
  "Infrastructure enables all of these systems to function together.",
];

export default function QuestPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 02 · The HydroSol Journey"
        title="The Quest"
        subtitle="Humanity's Continuing Search for Sustainable Development"
      />

      <Section>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-02-humanitys-quest.jpg"
            alt="Humanity's Quest — a global journey toward sustainable development: a worldwide commitment, global progress, the remaining gap, and the need for integration"
            caption="Humanity's quest — from individual solutions to connected systems. From progress to prosperity for all."
            width={1432}
            height={955}
            priority
          />
        </div>
        <Prose>
          <p>
            The challenges facing communities across the world have never gone unnoticed.
            For decades, governments, universities, research institutions, development
            finance institutions, entrepreneurs, humanitarian organizations, the private
            sector, and the United Nations system have invested enormous effort in
            improving lives through science, technology, policy, and international
            cooperation.
          </p>
          <p>
            These collective efforts have produced significant achievements. Millions of
            people have gained access to electricity, healthcare, education, clean water,
            improved agriculture, communications, and economic opportunity. International
            agreements and global initiatives have also strengthened environmental
            protection, climate action, and sustainable development.
          </p>
          <p>
            These accomplishments deserve recognition. The productive continuity of the
            platform begins by{" "}
            <strong>acknowledging and respecting this remarkable body of work.</strong>
          </p>
        </Prose>
      </Section>

      <Section tint title="Progress Across Multiple Fronts">
        <Prose>
          <p>
            Around the world, numerous initiatives continue to address important
            development priorities.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {fronts.map((f) => (
            <StaggerItem key={f.title}>
              <div className="hairline-card group h-full p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)]">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <f.icon className="size-5" />
                </span>
                <p className="mt-5 text-[15px] leading-relaxed text-body">{f.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            Together, these efforts have transformed countless communities and continue
            to shape a more sustainable future.
          </p>
        </Prose>
      </Section>

      <Section title="The Remaining Gap">
        <Prose>
          <p>
            Despite decades of progress, approximately{" "}
            <strong>2.3 billion people</strong> continue to live beyond the reach of
            integrated productive infrastructure. Many reside in rural and peri-urban
            communities where individual interventions have improved lives, yet
            interconnected productive systems remain limited. Many communities continue
            to experience limited productive infrastructure beyond the last mile.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-8 grid max-w-3xl gap-2.5">
          {alone.map((a) => (
            <StaggerItem key={a}>
              <div className="flex h-full items-start gap-3.5 rounded-xl border border-line bg-white px-5 py-3.5">
                <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <p className="text-[15px] leading-relaxed text-body">{a}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            Likewise, isolated investments in water, healthcare, education, or enterprise
            often depend upon complementary systems that may not yet exist.
          </p>
          <p>
            As a result, communities frequently experience progress in one area while
            continuing to face constraints in others.{" "}
            <strong>The challenge therefore becomes one of integration.</strong>
          </p>
        </Prose>
      </Section>

      <Section tint title="From Individual Solutions to Connected Systems">
        <Prose>
          <p>
            Experience increasingly demonstrates that communities function as
            interconnected systems.
          </p>
        </Prose>
        <Stagger className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
          {connected.map((c, i) => (
            <StaggerItem key={c}>
              <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-white px-5 py-4">
                <span className="display-font grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-[12.5px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-snug text-body">{c}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            When these relationships are considered collectively, development becomes
            more than the delivery of individual services.{" "}
            <strong>It becomes the strengthening of productive communities.</strong>
          </p>
        </Prose>
      </Section>

      <Section title="The Need for an Integrative Framework">
        <Prose>
          <p>
            Although inspired by the realities of underserved communities across the
            Global South, HydroSol has been intentionally designed as a globally
            adaptable productive energy platform capable of serving diverse geographic,
            economic, and social environments.
          </p>
          <p>
            HydroSol&rsquo;s productive energy concept is founded upon a simple
            observation.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "Communities do not experience their challenges one at a time.",
            "They experience them simultaneously.",
          ]}
        />
        <Prose>
          <p>
            Consequently, sustainable progress increasingly depends upon solutions
            capable of reinforcing multiple sectors together rather than addressing each
            independently.
          </p>
          <p>
            This observation does not replace the valuable work already being undertaken
            across the world. Rather, it seeks to complement those efforts by providing
            an integrative framework through which productive energy can support broader
            community development.
          </p>
        </Prose>

        <SubHeading>The question therefore becomes:</SubHeading>
        <Reveal>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl bg-gradient-to-r from-brand to-leaf p-px">
            <div className="rounded-[calc(1rem-1px)] bg-white px-7 py-8 text-center sm:px-10">
              <p className="display-font mx-auto max-w-2xl text-balance text-[21px] font-bold leading-normal text-navy sm:text-[24px]">
                Can productive energy serve not only households, but also agriculture,
                water systems, education, healthcare, local enterprise, and community
                resilience within one coordinated framework?
              </p>
              <p className="mt-4 text-[15px] text-body">
                That question forms the foundation of the{" "}
                <strong className="font-semibold text-brand">
                  HydroSol Productive Energy Platform.
                </strong>
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <NextChapter
        current="02"
        note="The next chapter introduces this framework and explains how productive energy can become an enabling system for integrated community development."
      />
    </>
  );
}
