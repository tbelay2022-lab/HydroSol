import type { Metadata } from "next";
import { BadgeCheck, Cog, Hammer } from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { Figure17 } from "@/components/Figure17";
import { FigureFrame } from "@/components/FigureFrame";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose } from "@/components/Section";
import { OpportunityStats } from "@/components/OpportunityStats";

export const metadata: Metadata = {
  title: "Opportunity & Finance",
  description:
    "A USD 100+ billion opportunity: from productive continuity to scalable impact across approximately eighty countries.",
};

const model = [
  {
    title: "Regional Processing Centers",
    body: "RPCs support coordination, regeneration, servicing, training, quality assurance, logistics management, and ecosystem development — connecting local deployment with broader operational networks while contributing to workforce development, enterprise creation, local manufacturing participation, and regional capability building.",
  },
  {
    title: "Circular Regeneration",
    body: "A circular-regeneration approach designed to support recovery, reuse, regeneration, and redeployment. Rather than treating resources as disposable, the platform seeks to maintain materials within productive circulation — supporting operational continuity, resource efficiency, environmental responsibility, and long-term ecosystem sustainability.",
  },
  {
    title: "Progressive Scaling",
    body: "Implementation may begin through pilots, demonstrations, validation programs, and early deployments before expanding toward broader operational ecosystems. Scaling is viewed not as a single event, but as a structured process of capability development and ecosystem expansion.",
  },
  {
    title: "Partnerships for Impact",
    body: "Successful implementation will depend upon partnerships among governments, investors, manufacturers, development institutions, universities, humanitarian organizations, local enterprises, and communities — supporting local ownership, capability development, and shared value creation.",
  },
];

const validation = [
  {
    icon: BadgeCheck,
    text: "Technical review and positive assessment by an established multinational infrastructure-development organization",
  },
  {
    icon: Cog,
    text: "Collaboration with a seasoned multi-patent engineer with extensive experience in product design, manufacturing systems, and practical deployment",
  },
  {
    icon: Hammer,
    text: "Prototype development activities have commenced as part of preparation for pilot deployment and operational validation",
  },
];

const stairOffsets = ["lg:mr-[16%]", "lg:mx-[8%]", "lg:ml-[16%]"];

export default function OpportunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Opportunity & Finance"
        title="From Productive Continuity to Scalable Impact"
        lede="HydroSol was conceived not only as a productive-energy platform, but also as a scalable framework capable of supporting productive continuity across diverse communities, sectors, and geographies."
      />

      <Section>
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-[16.5px] leading-[1.8] text-ink/75">
            The opportunity extends beyond energy generation. It includes livelihoods,
            enterprise development, local manufacturing, economic participation,
            infrastructure access, resilience, and sustainable development. HydroSol seeks
            to contribute to these outcomes through a distributed productive-energy
            ecosystem designed for practical deployment and progressive growth.
          </p>
        </Reveal>
        <div className="mt-12">
          <Reveal>
            <OpportunityStats />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-x-10 gap-y-6 text-[16.5px] leading-[1.8] text-ink/75 sm:grid-cols-2 [&_strong]:font-semibold [&_strong]:text-ink">
          <Reveal>
            <p>
              Across approximately eighty countries, more than 2.3 billion people continue
              to experience limitations in productive-energy access, productive
              infrastructure, and economic opportunity. These challenges affect households,
              farms, enterprises, healthcare facilities, educational institutions,
              cooperatives, transport systems, and local economies.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              The combined opportunity across clean cooking, productive agriculture, water
              systems, SMEs, mobility, local manufacturing, community services, and
              supporting infrastructure <strong>exceeds USD 100 billion</strong> — driven
              by growing demand for productive-energy services, expanding development
              initiatives, infrastructure modernization efforts, and increasing emphasis on
              resilience and sustainability.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <FigureFrame
            src="/figures/fig06-scale-of-opportunity.jpeg"
            alt="Infographic: the scale of the opportunity"
            caption="A massive development need. A transformational market opportunity."
            width={1432}
            height={955}
            priority
          />
          <FigureFrame
            src="/figures/fig15-why-now.jpeg"
            alt="Infographic: why now — six converging forces"
            caption="Why now — six converging forces creating unprecedented opportunity for productive-energy solutions."
            width={1432}
            height={955}
          />
        </div>
      </Section>

      <Section eyebrow="Implementation" title="The HydroSol Implementation Model" tint>
        <Prose>
          <p>
            HydroSol is designed as an operational ecosystem rather than a standalone
            technology deployment. Its implementation model combines distributed
            deployment, circular resource management, Regional Processing Centers,
            strategic partnerships, and progressive scaling pathways into a coordinated
            framework capable of supporting long-term growth.
          </p>
        </Prose>
        <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
          {model.map((m, i) => (
            <StaggerItem key={m.title}>
              <div className="hairline-card h-full p-7 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_16px_40px_rgba(7,34,47,0.1)] sm:p-8">
                <span className="display-font text-[13px] font-bold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-font mt-2 text-[19px] font-bold text-ink">
                  {m.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/65">{m.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <FigureFrame
            src="/figures/fig09-rpc-ecosystem.jpeg"
            alt="Infographic: the Regional Processing Center ecosystem"
            caption="The RPC ecosystem — one hub, many communities, shared prosperity."
            width={1432}
            height={955}
          />
          <FigureFrame
            src="/figures/fig11-circular-regeneration.png"
            alt="Infographic: the circular regeneration ecosystem"
            caption="Circular regeneration — keeping resources, value, and opportunity circulating within communities."
            width={1254}
            height={1254}
          />
        </div>
      </Section>

      <Section eyebrow="From Vision to Action" title="Validation & Technical Development">
        <Prose>
          <p>
            HydroSol now moves from framework development toward implementation. The
            priority is to translate concepts into measurable outcomes through pilot
            deployment, operational validation, strategic partnerships, RPC development,
            regional expansion, and international replication.
          </p>
        </Prose>
        <Stagger className="mt-10 space-y-4">
          {validation.map((v, i) => (
            <StaggerItem key={v.text} className={stairOffsets[i]}>
              <div className="hairline-card group flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(7,34,47,0.1)] sm:p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                  <v.icon className="size-5" />
                </span>
                <p className="text-[15px] leading-relaxed text-ink/75">{v.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section
        eyebrow="The Vision at Village Scale"
        title="Smart Productive Villages (Kushet)"
        tint
      >
        <Prose>
          <p>
            HydroSol envisions the emergence of productive, resilient, and increasingly
            self-sustaining communities built around local participation and productive
            continuity. At the village level, a community of approximately 500 households
            (kushet) may become a focal point for productive-energy services, agriculture,
            water systems, enterprise development, education, healthcare support, and
            local economic activity.
          </p>
          <p>
            As productive opportunities increase, communities may be better positioned to
            reduce pressure on fragile ecosystems, improve land management practices,
            support afforestation and environmental restoration efforts, strengthen
            agricultural productivity, and enhance long-term resilience.
          </p>
          <p>
            The objective is not simply energy deployment. The objective is to support
            thriving communities in which people are increasingly able to{" "}
            <strong>create opportunity where they live</strong> rather than being
            compelled to leave in search of it — in partnership with governments,
            communities, development institutions, universities, humanitarian
            organizations, and the private sector, supporting progress toward the
            Sustainable Development Goals and more prosperous futures.
          </p>
        </Prose>
        <div className="mt-12">
          <Figure17 />
        </div>
      </Section>

      <Section eyebrow="Coalition" title="Coalition for Productive Communities">
        <Prose>
          <p>
            HydroSol invites participation from organizations and individuals who share an
            interest in productive-energy solutions, economic participation, community
            development, and sustainable prosperity. Progress at scale requires
            collaboration.
          </p>
          <p>
            The opportunity is not simply to deploy technology. The opportunity is to help
            create conditions through which communities can strengthen livelihoods, expand
            opportunity, and pursue long-term prosperity.
          </p>
        </Prose>
      </Section>

      <CtaBand
        title="Join the HydroSol Community"
        lede="Investors, governments, institutions, manufacturers, researchers, and community organizations — the coalition is forming."
      >
        <PrimaryButton href="/join">Join the HydroSol Community</PrimaryButton>
        <GhostButton href="/contact" onDark>
          Contact HydroSol
        </GhostButton>
      </CtaBand>
    </>
  );
}
