import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, SubHeading, Prose, PullQuote } from "@/components/Section";
import { StatBand } from "@/components/StatBand";

export const metadata: Metadata = {
  title: "The Global Challenge",
  description:
    "Powering productive communities in a changing world — approximately 2.3 billion people still live beyond reliable productive infrastructure, particularly across the Global South.",
};

const chain = [
  ["Energy", "influences agriculture."],
  ["Agriculture", "influences livelihoods."],
  ["Livelihoods", "influence environmental stewardship."],
  ["Environmental conditions", "influence water availability."],
  ["Infrastructure", "influences economic participation."],
  ["Economic opportunity", "influences community resilience."],
];

export default function ChallengePage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 01 · The HydroSol Journey"
        title="The Global Challenge"
        subtitle="Powering Productive Communities in a Changing World"
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <FigureFrame
            src="/figures/hs2-01-global-challenge.jpg"
            alt="The Global Challenge — six interconnected development challenges: energy constraints, environmental degradation, food and water insecurity, infrastructure limitations, limited economic opportunity, and community vulnerability"
            caption="Six interconnected development challenges — interconnected challenges require integrated solutions."
            width={1254}
            height={1254}
            priority
          />
        </div>

        <div className="mx-auto max-w-3xl">
          <Prose>
            <p>
              Humanity has made remarkable progress over the past century. Scientific
              discoveries, technological innovation, industrial development, and
              international cooperation have transformed the lives of billions of people.
              Electricity reaches cities that once lived in darkness, modern
              transportation connects continents, digital technologies have
              revolutionized communication, and advances in medicine, agriculture, and
              education continue to improve human well-being.
            </p>
            <p>
              Yet despite these achievements, a significant portion of the world&rsquo;s
              population remains excluded from the benefits of modern development. Today,
              approximately <strong>2.3 billion people</strong> still live beyond
              reliable productive infrastructure, particularly across the Global South,
              where limited energy, water, transport, healthcare, education, and
              enterprise opportunities continue to constrain prosperity.
            </p>
            <p>
              Across much of the Global South — including Africa, South Asia, Latin
              America, the Caribbean, and underserved regions elsewhere — millions of
              households, farms, schools, clinics, workshops, and small enterprises
              continue to face persistent constraints that limit productivity,
              opportunity, and long-term prosperity. These challenges are particularly
              evident beyond the <strong>&ldquo;last mile,&rdquo;</strong> where
              infrastructure becomes increasingly limited, communities become more
              isolated, and access to reliable productive services declines.
            </p>
            <p>
              The six interconnected development challenges illustrated above form the
              foundation of the HydroSol journey. Together they shape productivity,
              resilience, and long-term prosperity, particularly in underserved
              communities beyond the last mile.
            </p>
          </Prose>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <StatBand />
        </div>
      </Section>

      <Section
        tint
        eyebrow="An Interconnected Reality"
        title="These Six Challenges Rarely Exist Independently"
      >
        <div className="mx-auto mt-10 max-w-4xl">
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {chain.map(([head, rest], i) => (
              <StaggerItem key={head}>
                <div className="flex h-full items-center gap-4 rounded-xl border border-line bg-white px-5 py-4">
                  <span className="display-font grid size-8 shrink-0 place-items-center rounded-full bg-brand-soft text-[12.5px] font-bold text-brand">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] leading-snug text-body">
                    <strong className="font-semibold text-navy">{head}</strong> {rest}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <p className="mt-7 text-center text-[16px] font-medium italic text-brand">
            Each element affects the others.
          </p>
        </div>

        <Prose>
          <p>
            For this reason, addressing only one challenge at a time often produces
            important but limited outcomes. Sustainable development increasingly requires
            approaches that recognize the interconnected nature of communities and seek
            solutions that reinforce multiple dimensions simultaneously.
          </p>
        </Prose>

        <SubHeading>More Than an Energy Problem</SubHeading>
        <Prose>
          <p>
            The productive energy platform begins from this understanding. The challenge
            is not simply to provide more energy.
          </p>
        </Prose>
        <PullQuote
          lines={[
            "The challenge is to strengthen the conditions that allow communities",
            "to become increasingly productive, resilient, and prosperous.",
          ]}
        />
        <Prose>
          <p>
            This understanding forms the foundation of the journey presented throughout
            this website.
          </p>
        </Prose>
      </Section>

      <NextChapter
        current="01"
        note="The next chapter explores humanity's continuing search for integrated development solutions and the lessons learned from decades of innovation, research, and international cooperation."
      />
    </>
  );
}
