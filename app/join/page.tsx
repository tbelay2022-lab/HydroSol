import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PrimaryButton, GhostButton } from "@/components/Buttons";
import { CtaBand } from "@/components/CtaBand";
import { FigureFrame } from "@/components/FigureFrame";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join the Mission",
  description:
    "Transforming interconnected challenges into interconnected prosperity — an open call for a shared future.",
};

const emailRoles: Record<string, string> = {
  "info@hydrosol.energy": "General Enquiries",
  "partners@hydrosol.energy": "Partnerships",
  "invest@hydrosol.energy": "Investment & Finance",
  "technology@hydrosol.energy": "Engineering & Technology",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 6 · The HydroSol Journey"
        title="Join the Mission"
        subtitle="Transforming Interconnected Challenges into Interconnected Prosperity"
        lede="“The greatest achievements of engineering are measured not only by technological advancement, but by their enduring contribution to humanity, productive communities, and the stewardship of our shared planet.”"
      />

      <Section compactTop title="The Journey Continues">
        <div className="mx-auto mb-12 max-w-4xl">
          <FigureFrame
            src="/figures/hs2-08-transformation.jpg"
            alt="The Transformation — from today's interconnected challenges to tomorrow's Smart Productive Village through the HydroSol journey"
            caption="From Today's World to Tomorrow's Smart Productive Village"
            width={1432}
            height={894}
            priority
          />
        </div>
        <Prose>
          <p>
            Humanity faces interconnected challenges unlike any in history. Energy
            insecurity, environmental degradation, water scarcity, food insecurity,
            infrastructure deficits, and economic inequality increasingly reinforce one
            another across regions and societies worldwide.
          </p>
          <p>
            Addressing these challenges requires more than individual technologies or
            isolated initiatives. It requires integrated thinking, engineering excellence,
            scientific knowledge, institutional cooperation, and a shared commitment to
            sustainable progress.
          </p>
          <p>
            The journey presented throughout this website does not conclude here. It
            continues through collaboration, practical implementation, continuous
            learning, and responsible innovation. The next chapter will be shaped by the
            partnerships we build and the actions we take together.
          </p>
        </Prose>
      </Section>


      <Section title="Building the Future Together">
        <Prose>
          <p>
            We invite you to explore the{" "}
            <Link
              href="/white-paper"
              className="font-semibold text-brand underline-offset-4 hover:text-leaf-deep hover:underline"
            >
              HydroSol White Paper
            </Link>{" "}
            and the{" "}
            <Link
              href="/faq"
              className="font-semibold text-brand underline-offset-4 hover:text-leaf-deep hover:underline"
            >
              Frequently Asked Questions (FAQ)
            </Link>
            , which present the vision, constitutional doctrine, engineering principles,
            operational framework, and long-term objectives that underpin this initiative.
          </p>
          <p>
            We welcome collaboration with governments, public agencies, municipalities,
            universities, research institutions, engineering organizations, manufacturers,
            infrastructure operators, entrepreneurs, investors, commercial banks,
            development finance institutions (DFIs), multilateral development banks,
            climate finance institutions, carbon market and carbon credit organizations,
            development organizations, humanitarian agencies, non-governmental
            organizations (NGOs), philanthropic foundations, private-sector partners,
            cooperatives, civil society organizations, and implementation partners
            committed to advancing productive energy, resilient infrastructure,
            environmental stewardship, and sustainable development.
          </p>
          <p>
            Whether your interest lies in research, engineering, manufacturing, education,
            public policy, investment, climate finance, carbon markets, enterprise
            development, infrastructure deployment, technology transfer, environmental
            restoration, capacity building, or implementation, we welcome the opportunity
            to explore practical partnerships that transform innovative ideas into
            measurable and lasting human benefit.
          </p>
          <p>
            The challenges before us are shared. The solutions must be shared as well.
            Through collaboration among governments, industry, academia, financial
            institutions, development partners, and communities, we can accelerate the
            transition from innovation to implementation—and from implementation to
            sustainable prosperity.
          </p>
        </Prose>
      </Section>

      <Section tint title="A Shared Commitment">
        <Prose>
          <p>
            Every generation inherits challenges. Every generation also inherits the
            opportunity—and responsibility—to solve them.
          </p>
          <p>
            Together, let us co-develop, co-own, and scale a model that demonstrates
            sustainable innovation can begin anywhere and benefit everyone.
          </p>
          <p>
            Together, we can illuminate homes, power farms, schools, healthcare facilities,
            workshops, and small enterprises; strengthen water and food security; create
            meaningful employment; and expand opportunities for resilient and sustainable
            prosperity across the Global South—and wherever reliable infrastructure is
            needed most.
          </p>
          <p>
            HydroSol is not the destination. It is an invitation—to collaborate, to
            innovate, and to help build a more productive, resilient, and sustainable
            future together.
          </p>
        </Prose>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[15px] font-medium text-navy">
            Contact the HydroSol Development Team
          </p>
        </Reveal>
        <Stagger className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
          {site.emails.map((email) => (
            <StaggerItem key={email}>
              <a
                href={`mailto:${email}`}
                className="hairline-card group flex h-full items-center gap-4 p-5 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(18,59,109,0.1)]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block text-[12.5px] font-medium uppercase tracking-wide text-body/60">
                    {emailRoles[email]}
                  </span>
                  <span className="text-[14.5px] font-semibold text-navy">{email}</span>
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mx-auto mt-6 text-center text-[14.5px] text-body">
          Website:{" "}
          <span className="font-semibold text-brand">www.hydrosol.energy</span>
        </p>
        <PullQuote
          lines={[
            "Power Everywhere. For Everyone.",
            "Productive Communities. Prosperous Futures.",
          ]}
        />
      </Section>


      <CtaBand
        title="Contact the HydroSol Development Team"
        lede="Whether your interest lies in research, investment, manufacturing, education, policy, or implementation, we welcome the opportunity to begin a conversation."
      >
        <PrimaryButton href="/contact">Contact HydroSol</PrimaryButton>
        <GhostButton href="/publications" onDark>
          HydroSol Publications
        </GhostButton>
      </CtaBand>
    </>
  );
}
