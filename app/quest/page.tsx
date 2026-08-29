import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The Quest",
  description:
    "Searching for a better path — the journey that inspired HydroSol and the search for a practical engineering pathway toward productive, resilient, and sustainable communities.",
};

const alone = [
  "Energy access alone may not create sustainable livelihoods.",
  "Agricultural improvements alone may not overcome infrastructure limitations.",
  "Environmental restoration alone may not generate local economic opportunity.",
];

const chain = [
  "Energy influences agriculture.",
  "Agriculture influences livelihoods.",
  "Livelihoods influence environmental stewardship.",
  "Environmental conditions influence water security.",
  "Infrastructure influences economic participation.",
  "Economic opportunity strengthens community resilience.",
];

export default function QuestPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 2 · The HydroSol Journey"
        title="The Quest"
        subtitle="Searching for a Better Path"
        lede="“Every great engineering achievement begins not with an answer, but with the courage to ask a better question.”"
      />

      <Section compactTop>
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-02-humanitys-quest.jpg"
            alt="Humanity's Quest — a global journey toward sustainable development: a worldwide commitment, global progress, the remaining gap, and the need for integration"
            caption="Humanity's quest — from individual solutions to connected systems. From progress to prosperity for all."
            width={1370}
            height={898}
            priority
          />
        </div>
        <Prose>
          <p>
            Throughout history, humanity has transformed challenges into opportunities
            through science, engineering, innovation, and collaboration. Every generation
            has sought better ways to improve lives, strengthen communities, and create a
            more sustainable future.
          </p>
          <p>
            The challenge of enabling productive and sustainable development beyond the{" "}
            <strong>&ldquo;last mile&rdquo;</strong> is part of this continuing journey.
            It invites us not merely to expand existing solutions, but to ask whether the
            way we organize those solutions can itself be improved.
          </p>
        </Prose>
      </Section>

      <Section tint title="Progress Across Multiple Fronts">
        <Prose>
          <p>
            Around the world, governments, development institutions, businesses,
            researchers, and communities continue to advance important development
            priorities.
          </p>
          <p>
            Energy programs expand electricity access through grid extension, renewable
            energy, mini-grids, and decentralized solutions. Agricultural initiatives
            improve farming, irrigation, mechanization, storage, and food security.
            Environmental programs promote ecosystem restoration, sustainable resource
            management, carbon reduction, and climate adaptation. Infrastructure
            investments strengthen transportation, communications, healthcare, education,
            and public services, while economic development programs support
            entrepreneurship, financial inclusion, local manufacturing, skills
            development, and employment.
          </p>
          <p>
            International frameworks, including the Sustainable Development Goals,
            increasingly encourage integrated approaches to inclusive, resilient, and
            environmentally responsible development.
          </p>
          <p>
            Together, these efforts have transformed countless communities and continue
            to shape a more sustainable future.
          </p>
        </Prose>
      </Section>

      <Section title="The Remaining Gap">
        <Prose>
          <p>
            Yet despite decades of remarkable progress, approximately{" "}
            <strong>2.3 billion people</strong> continue to live beyond the reach of
            integrated productive infrastructure. Many reside in rural and peri-urban
            communities where individual interventions have improved lives, while
            interconnected productive systems remain limited.
          </p>
          <p>
            Experience suggests that individual advances, although valuable, cannot
            always overcome broader systemic constraints.
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
            Likewise, investments in water, healthcare, education, or enterprise often
            depend upon complementary systems that may not yet exist.
          </p>
          <p>
            Communities therefore experience progress in one area while continuing to
            face constraints in others.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "The challenge is no longer simply one of access.",
            "It is one of integration.",
          ]}
        />
      </Section>

      <Section tint title="An Interconnected Reality">
        <Prose>
          <p>Communities do not experience their challenges independently.</p>
        </Prose>
        <div className="mx-auto mt-8 max-w-4xl">
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {chain.map((c, i) => (
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
          <p className="mt-7 text-center text-[16px] font-medium italic text-brand">
            Each element influences the others.
          </p>
        </div>
        <Prose>
          <p>
            Addressing only one challenge at a time often produces important—but
            necessarily limited—outcomes. Sustainable development increasingly requires
            approaches that recognize communities as interconnected systems, where
            progress in one sector reinforces progress across many others.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "Development therefore becomes more than delivering individual services.",
            "It becomes the strengthening of productive communities.",
          ]}
        />
      </Section>

      <Section title="The Need for an Integrative Framework">
        <Prose>
          <p>This understanding inspired a different engineering question.</p>
          <p>
            Communities do not experience their challenges one at a time. They experience
            them simultaneously. <strong>Shouldn&rsquo;t their solutions also work together?</strong>
          </p>
          <p>
            HydroSol was conceived from the belief that{" "}
            <strong>Productive Energy</strong> can become an enabling system that
            supports water, agriculture, healthcare, education, enterprise, mobility,
            digital connectivity, environmental stewardship, and resilient local
            economies within one coordinated engineering framework.
          </p>
          <p>
            This perspective does not replace the valuable work already being undertaken
            around the world. Rather, it complements existing initiatives by providing an
            engineering architecture through which productive systems can reinforce one
            another and generate greater collective impact.
          </p>
          <p>The question therefore became:</p>
        </Prose>

        <Reveal>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-gradient-to-r from-brand to-leaf p-px">
            <div className="rounded-[calc(1rem-1px)] bg-white px-7 py-8 text-center sm:px-10">
              <p className="display-font mx-auto max-w-2xl text-balance text-[21px] font-bold leading-normal text-navy sm:text-[24px]">
                Can Productive Energy become the foundation upon which productive
                communities build lasting prosperity?
              </p>
              <p className="mt-4 text-[15px] text-body">
                That question became the beginning of the{" "}
                <strong className="font-semibold text-brand">HydroSol journey.</strong>
              </p>
            </div>
          </div>
        </Reveal>

        <PullQuote
          lines={[
            "Every challenge presents an opportunity.",
            "Every opportunity begins with a better question.",
          ]}
        />
      </Section>

      <NextChapter
        current="02"
        note="The search has led to an engineering framework. The next chapter introduces the HydroSol Ecosystem and explains how Productive Energy is translated into an integrated engineering platform for productive communities, resilient local economies, and sustainable development."
      />
    </>
  );
}
