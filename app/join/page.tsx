import type { Metadata } from "next";
import {
  Banknote,
  Building2,
  Cog,
  FlaskConical,
  Globe2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Landmark,
  Store,
  Users,
} from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose } from "@/components/Section";

export const metadata: Metadata = {
  title: "Join the HydroSol Community",
  description:
    "HydroSol welcomes engagement from organizations and individuals interested in productive-energy solutions, community development, and sustainable prosperity.",
};

const participants = [
  { label: "Investors & Financial Partners", icon: Banknote },
  { label: "Governments & Public Institutions", icon: Landmark },
  { label: "Development Finance Institutions", icon: Building2 },
  { label: "United Nations Agencies & International Organizations", icon: Globe2 },
  { label: "Manufacturers & Technology Providers", icon: Cog },
  { label: "Universities & Research Institutions", icon: GraduationCap },
  { label: "Development & Humanitarian Organizations", icon: HeartHandshake },
  { label: "Foundations & Philanthropic Organizations", icon: HandHeart },
  { label: "Cooperatives & Community Organizations", icon: Users },
  { label: "Private-Sector Enterprises", icon: Store },
  { label: "Pilot & Demonstration Partners", icon: FlaskConical },
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join"
        title="Join the HydroSol Community"
        lede="HydroSol welcomes engagement from organizations and individuals interested in productive-energy solutions, community development, environmental stewardship, economic participation, and sustainable prosperity."
      />

      <Section eyebrow="Participation" title="Who Can Participate?">
        <Stagger className="mt-10 flex flex-wrap justify-center gap-4">
          {participants.map((p) => (
            <StaggerItem
              key={p.label}
              className="flex w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="hairline-card group flex flex-1 items-center gap-4 p-5 hover:-translate-y-1 hover:border-leaf/50 hover:shadow-[0_14px_36px_rgba(7,34,47,0.1)]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf-soft text-leaf-deep transition-colors group-hover:bg-leaf group-hover:text-white">
                  <p.icon className="size-5" />
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-ink">
                  {p.label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section tint>
        <Prose>
          <p>
            Whether your interest involves implementation, investment, research,
            manufacturing, deployment, policy, validation, or collaboration — the HydroSol
            team welcomes the opportunity to engage.
          </p>
        </Prose>
      </Section>

      <CtaBand
        title="Ready to engage?"
        lede="Reach the HydroSol team directly, read the full framework, or start with the most common questions."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
        <GhostButton href="/white-paper" onDark>
          Download White Paper
        </GhostButton>
        <GhostButton href="/faq" onDark>
          Read FAQ
        </GhostButton>
      </CtaBand>
    </>
  );
}
