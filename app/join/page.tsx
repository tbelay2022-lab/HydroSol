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

      <Section title="The Opportunity Before Us">
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
            another across every region of the world.
          </p>
          <p>
            These challenges cannot be addressed in isolation. They demand integrated
            thinking, sound engineering, scientific knowledge, institutional cooperation,
            and a shared commitment to sustainable progress.
          </p>
          <p>
            HydroSol was conceived from this understanding—not simply as another energy
            technology, but as{" "}
            <strong>
              an integrated engineering platform designed to transform interconnected
              challenges into interconnected prosperity.
            </strong>
          </p>
        </Prose>
      </Section>

      <Section tint title="A Journey of Research, Engineering, and Practical Experience">
        <Prose>
          <p>
            HydroSol is the culmination of years of engineering research, scientific
            investigation, systems innovation, and practical experience dedicated to
            addressing one fundamental question:
          </p>
        </Prose>
        <Reveal>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-gradient-to-r from-brand to-leaf p-px">
            <div className="rounded-[calc(1rem-1px)] bg-white px-7 py-8 text-center sm:px-10">
              <p className="display-font mx-auto max-w-2xl text-balance text-[21px] font-bold leading-normal text-navy sm:text-[24px]">
                How can productive energy become universally accessible, environmentally
                responsible, economically sustainable, and locally empowering?
              </p>
            </div>
          </div>
        </Reveal>
        <Prose>
          <p>
            The answer extends beyond technology alone. HydroSol integrates engineering,
            scientific knowledge, institutional collaboration, environmental stewardship,
            and productive development within a coherent operational framework.
          </p>
          <p>
            Guided by the constitutional principles of{" "}
            <strong>
              Productive Energy, Productive Continuity, Distributed Resilience, and
              Civilization Continuity
            </strong>
            , HydroSol demonstrates how engineering can create enduring value by
            strengthening resilience, expanding opportunity, and supporting sustainable
            development.
          </p>
          <p>
            Throughout this website, we have explored today&rsquo;s interconnected
            challenges, examined new approaches to productive infrastructure, and
            presented engineering principles intended to improve lives and create lasting
            value for present and future generations. That journey does not end here. It
            continues through learning, innovation, collaboration, and the shared belief
            that engineering should serve humanity.
          </p>
        </Prose>

      </Section>

      <Section title="Continue the Journey">
        <Prose>
          <p>
            Every enduring partnership begins with understanding. We encourage you to
            begin by exploring the{" "}
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
            , which introduce the HydroSol vision, constitutional doctrine, engineering
            principles, operational framework, and long-term objectives.
          </p>
          <p>
            Behind HydroSol stands a multidisciplinary engineering and development team
            committed to translating research, engineering excellence, and practical
            experience into solutions that strengthen productive communities and support
            sustainable development.
          </p>
          <p>
            We welcome dialogue with governments, public agencies, universities, research
            institutions, manufacturers, investors, financial institutions, development
            organizations, humanitarian agencies, non-governmental organizations (NGOs),
            entrepreneurs, infrastructure operators, community leaders, and
            implementation partners seeking practical pathways toward resilient
            infrastructure, productive energy, environmental stewardship, and sustainable
            economic opportunity.
          </p>
        </Prose>
      </Section>

      <Section tint title="An Open Call for a Shared Future">
        <Prose>
          <p>
            <strong>
              The demand is vast, the need urgent, and the human impact transformative.
            </strong>
          </p>
          <p>
            HydroSol invites partners across the public, private, academic, financial,
            and development sectors to collaborate in advancing practical engineering
            solutions that strengthen communities and expand sustainable opportunity.
          </p>
          <p>
            Whether your interest lies in research, investment, manufacturing, education,
            policy, or implementation, we welcome the opportunity to transform innovative
            ideas into practical solutions that deliver lasting human benefit.
          </p>
          <p>
            <strong>
              Together, let us co-develop, co-own, and scale a model that proves
              sustainable innovation can begin anywhere and belong to everyone.
            </strong>
          </p>
        </Prose>

        <Reveal>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[15px] font-medium text-navy">
            Contact the HydroSol Development Team
          </p>
        </Reveal>
        <Stagger className="mx-auto mt-6 grid max-w-3xl gap-4 sm:grid-cols-2">
          {site.emails.map((email) => (
            <StaggerItem key={email.address}>
  <a
    href={`mailto:${email.address}`}
    className="hairline-card group flex h-full items-center gap-4 p-5 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(18,59,109,0.1)]"
  >
    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
      <Mail className="size-5" />
    </span>
    <span>
      <span className="block text-[12.5px] font-medium uppercase tracking-wide text-body/60">
        {email.label}
      </span>
      <span className="text-[14.5px] font-semibold text-navy">{email.address}</span>
    </span>
  </a>
</StaggerItem>
        <p className="mx-auto mt-6 text-center text-[14.5px] text-body">
          Website:{" "}
          <span className="font-semibold text-brand">www.hydrosol.energy</span>
        </p>
      </Section>

      <Section title="Engineering Should Improve Lives">
        <Prose>
          <p>
            Engineering is ultimately measured not only by what it creates, but by the
            lives it improves and the future it helps to shape.
          </p>
          <p>
            Every generation inherits challenges. Every generation also inherits the
            opportunity—and the responsibility—to solve them.
          </p>
          <p>
            Through research, engineering, partnership, and shared purpose, we can
            strengthen communities, restore the environment, expand productive
            opportunity, and contribute to a future that is more resilient, more
            prosperous, and more sustainable.
          </p>
          <p>
            <strong>
              Together, let us transform interconnected challenges into interconnected
              prosperity.
            </strong>
          </p>
        </Prose>

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
