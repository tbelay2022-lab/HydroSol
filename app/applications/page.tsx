import type { Metadata } from "next";
import {
  Bus,
  Droplets,
  Flame,
  GraduationCap,
  HeartPulse,
  Sprout,
  Store,
  Users,
} from "lucide-react";
import { PrimaryButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FigureFrame } from "@/components/FigureFrame";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose } from "@/components/Section";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Where HydroSol creates productive continuity: clean cooking, agriculture, water access, SMEs, healthcare, education, productive mobility, and community development.",
};

const applications = [
  {
    icon: Flame,
    title: "Clean Cooking",
    body: "Supporting reliable cooking energy that can reduce dependence on unsustainable fuel harvesting, help lessen pressure on forests and fragile ecosystems, and strengthen household well-being and productive activity.",
  },
  {
    icon: Sprout,
    title: "Agriculture & Food Systems",
    body: "Supporting irrigation, processing, storage, transportation, and value-added agricultural activities that contribute to food security, improved productivity, healthier soils, and rural prosperity.",
  },
  {
    icon: Droplets,
    title: "Water Access",
    body: "Supporting water pumping, treatment, storage, and distribution systems that contribute to public health, agricultural productivity, and community development.",
  },
  {
    icon: Store,
    title: "Small & Medium Enterprises",
    body: "Supporting workshops, retailers, service providers, cooperatives, and local manufacturers through productive-energy services that strengthen business continuity, employment creation, and local economic growth.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Services",
    body: "Supporting reliable energy services for healthcare delivery, refrigeration, diagnostics, communications, lighting, and continuity of patient care.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "Supporting learning environments through lighting, communications, digital tools, educational infrastructure, and expanded access to knowledge and opportunity.",
  },
  {
    icon: Bus,
    title: "Productive Mobility",
    body: "Supporting transport and mobility services that connect people, goods, and enterprises to markets, employment opportunities, healthcare, education, and broader economic participation.",
  },
  {
    icon: Users,
    title: "Community Development",
    body: "Supporting thriving communities where productive energy, food systems, ecological stewardship, infrastructure resilience, enterprise development, and economic opportunity reinforce one another.",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Applications"
        title="Where HydroSol Creates Productive Continuity"
        lede="One platform, many applications — supporting the productive activities through which communities build livelihoods, resilience, and prosperity."
      />

      <Section>
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((a) => (
            <StaggerItem key={a.title}>
              <div className="hairline-card group h-full p-6 hover:-translate-y-1.5 hover:border-leaf/50 hover:shadow-[0_16px_40px_rgba(7,34,47,0.1)]">
                <span className="grid size-12 place-items-center rounded-2xl bg-leaf-soft text-leaf-deep transition-colors group-hover:bg-leaf group-hover:text-white">
                  <a.icon className="size-6" />
                </span>
                <h3 className="display-font mt-5 text-[17px] font-bold leading-snug text-ink">
                  {a.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink/60">{a.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section eyebrow="The Ecosystem View" title="One Platform. Many Applications." tint>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
          <div>
            <Prose>
              <p>
                By strengthening these connections, communities may be better positioned
                to reduce poverty, improve environmental conditions, create local
                employment, support afforestation and land restoration efforts, and expand
                opportunities for future generations.
              </p>
              <p>
                The objective is not simply energy deployment. The objective is helping
                communities build productive, resilient, and increasingly prosperous
                futures. HydroSol views productive continuity as a practical foundation
                upon which communities can strengthen livelihoods, restore environmental
                resilience, expand economic opportunity, and progressively break recurring
                cycles of poverty.
              </p>
            </Prose>
          </div>
          <FigureFrame
            src="/figures/fig12-applications-ecosystem.png"
            alt="Infographic: the HydroSol applications ecosystem"
            caption="The applications ecosystem — from essential services to productive communities."
            width={1254}
            height={1254}
            priority
          />
        </div>
      </Section>

      <CtaBand
        title="From applications to opportunity"
        lede="Explore the scale of the opportunity — and the implementation model designed to reach it."
      >
        <PrimaryButton href="/opportunity">Explore Opportunity & Finance</PrimaryButton>
      </CtaBand>
    </>
  );
}
