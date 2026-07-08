import type { Metadata } from "next";
import { PrimaryButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FigureFrame } from "@/components/FigureFrame";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The Quest",
  description:
    "The productive-continuity question: can energy continuously support productive activity and long-term development?",
};

const cascade = [
  "When continuity is interrupted, productivity declines.",
  "When productivity declines, opportunity contracts.",
  "When opportunity contracts, vulnerability increases.",
];

const stairOffsets = ["lg:mr-[16%]", "lg:mx-[8%]", "lg:ml-[16%]"];

export default function QuestPage() {
  return (
    <>
      <PageHero
        eyebrow="The Quest"
        title="The Productive-Continuity Question"
        lede="Across many regions of the world, communities continue to face interconnected challenges involving poverty, infrastructure limitations, environmental stress, constrained economic opportunity, and unreliable energy services."
      />

      <Section>
        <div className="max-w-3xl">
          <Prose>
            <p>
              These challenges are often addressed individually. In practice, however,
              they frequently reinforce one another. Interruptions in energy services can
              affect agriculture, water access, enterprise operation, mobility, healthcare
              delivery, education, and broader economic participation.
            </p>
          </Prose>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative pl-6 sm:pl-8">
              <span
                className="absolute bottom-1 left-0 top-1 w-[3px] rounded-full bg-gradient-to-b from-brand to-leaf"
                aria-hidden
              />
              <p className="eyebrow !text-brand">The Central Question</p>
              <p className="display-font mt-4 text-[28px] font-bold leading-[1.15] text-ink sm:text-[34px]">
                Can energy continuously support productive activity and{" "}
                <span className="gradient-text">long-term development?</span>
              </p>
              <p className="mt-6 flex items-center gap-3 text-[14.5px] text-ink/55">
                <span
                  className="h-px w-8 shrink-0 bg-gradient-to-r from-brand to-leaf"
                  aria-hidden
                />
                This question forms the foundation of the HydroSol mission.
              </p>
            </div>
          </Reveal>

          <FigureFrame
            src="/figures/fig01-poverty-cycle.jpeg"
            alt="Infographic: the poverty–deforestation cycle and the opportunity pathway HydroSol seeks to enable"
            caption="The poverty–deforestation cycle — and the pathway HydroSol seeks to open through productive continuity."
            width={1433}
            height={786}
            priority
          />
        </div>
      </Section>

      <Section eyebrow="The Concept" title="Productive Continuity" tint>
        <Prose>
          <p>
            Productive Continuity is the ability of households, farms, enterprises,
            institutions, and communities to continuously create value through reliable
            access to productive-energy services.
          </p>
          <p>
            Cooking, agriculture, water systems, mobility, enterprise operation,
            healthcare delivery, education services, and local economic participation all
            depend upon continuity.
          </p>
        </Prose>
        <Stagger className="mt-10 space-y-4">
          {cascade.map((line, i) => (
            <StaggerItem key={line} className={stairOffsets[i]}>
              <div className="hairline-card group flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(7,34,47,0.1)] sm:p-6">
                <span className="display-font grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-[15px] font-bold text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                  {i + 1}
                </span>
                <p className="text-[15.5px] font-semibold leading-snug text-ink sm:text-[16.5px]">
                  {line}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Prose>
          <p>
            HydroSol seeks to support Productive Continuity through productive-energy
            systems designed for underserved and last-mile environments.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="Beyond Access" title="Why Energy Access Alone Is Not Enough">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <Prose>
              <p>
                Energy access remains important. However, energy access alone does not
                automatically create prosperity. Communities may gain access to energy
                while continuing to experience poverty, unemployment, limited enterprise
                growth, infrastructure constraints, and restricted economic participation.
              </p>
              <p>
                The challenge therefore extends beyond energy availability. The challenge
                is whether energy contributes to productive activity, local capability,
                enterprise creation, and long-term economic participation.
              </p>
              <p>
                <strong>HydroSol focuses on productive outcomes</strong> rather than
                energy consumption alone.
              </p>
            </Prose>
          </div>
          <FigureFrame
            src="/figures/fig03-poverty-to-prosperity.jpeg"
            alt="Infographic: from cycles of scarcity to cycles of prosperity"
            caption="From cycles of scarcity to cycles of prosperity — how HydroSol makes the shift possible."
            width={1432}
            height={955}
          />
        </div>
      </Section>

      <Section eyebrow="The Philosophy" title="Last-Mile-First" tint>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <FigureFrame
            src="/figures/fig02-last-mile-first.jpeg"
            alt="Infographic: the Last Mile First approach"
            caption="Last Mile First — starting where the need is greatest, building from the ground up."
            width={1432}
            height={955}
          />
          <div>
            <Prose>
              <p>
                HydroSol adopts a Last-Mile-First approach, prioritizing communities that
                are often the last to receive reliable infrastructure, productive-energy
                services, investment, and economic opportunity.
              </p>
              <p>
                These environments frequently experience the greatest interruptions to
                productive activity and therefore face some of the greatest barriers to
                economic participation and development.
              </p>
              <p>
                By beginning where needs are greatest, HydroSol seeks to support
                productive continuity, local capability, and inclusive development from
                the ground up.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      <Section eyebrow="The Scale" title="The Global South Challenge">
        <div className="mt-4 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl space-y-5 text-[16.5px] leading-[1.8] text-ink/75">
            <p>
              Across Africa, South Asia, Latin America, and other underserved regions,
              billions of people continue to face limitations in productive-energy
              services, infrastructure availability, climate resilience, and economic
              opportunity. These challenges affect households, farms, SMEs, clinics,
              schools, cooperatives, transport systems, and local economies.
            </p>
            <p>
              Around the world, governments, communities, universities, development
              institutions, humanitarian organizations, researchers, entrepreneurs, and
              private-sector organizations continue to work toward addressing these
              challenges. HydroSol seeks to contribute through a productive-energy
              framework centered on Productive Continuity, community participation, and
              distributed capability.
            </p>
          </div>
          <FigureFrame
            src="/figures/fig05-global-south-challenge.jpeg"
            alt="Infographic: the Global South productive-energy challenge"
            caption="The Global South productive-energy challenge — core constraints, affected segments, and the need for change."
            width={1432}
            height={955}
          />
        </div>
      </Section>

      <Section eyebrow="Interconnection" title="The Development Continuum" tint>
        <Prose>
          <p>
            Energy does not operate in isolation. Reliable productive-energy services
            influence agricultural productivity, water access, food systems, enterprise
            development, healthcare delivery, education, mobility, and local economic
            activity. These factors, in turn, influence environmental stewardship,
            ecological stability, infrastructure resilience, and community well-being.
          </p>
          <p>
            When one element weakens, the effects often spread throughout the system.
            Reduced productivity may contribute to poverty. Poverty may increase pressure
            on natural resources. Environmental degradation may reduce agricultural
            output. Declining productivity may further weaken economic opportunity and
            community resilience.
          </p>
          <p>
            HydroSol therefore views development as an interconnected continuum rather
            than a collection of isolated challenges. Its objective is to support
            productive continuity across the entire system, helping communities strengthen
            the connections between energy, food systems, ecological stability,
            infrastructure resilience, and economic participation.
          </p>
        </Prose>
      </Section>

      <Section eyebrow="The Stakes" title="The Scale of the Challenge">
        <Prose>
          <p>
            The challenge extends beyond energy. It includes livelihoods, productive
            activity, enterprise development, local capability, resilience, and economic
            participation.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "Communities prosper not because energy exists.",
            "Communities prosper when energy continuously supports productive activity.",
          ]}
        />
        <Prose>
          <p>
            For HydroSol, Productive Continuity is therefore not merely an energy
            objective. It is a development objective.
          </p>
        </Prose>
      </Section>

      <CtaBand
        title="From the question to the answer"
        lede="See how HydroSol responds — an integrated productive-energy ecosystem designed for productive continuity."
      >
        <PrimaryButton href="/platform">Explore The HydroSol Platform</PrimaryButton>
      </CtaBand>
    </>
  );
}
