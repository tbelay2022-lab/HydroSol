import type { Metadata } from "next";
import { FigureFrame } from "@/components/FigureFrame";
import { NextChapter } from "@/components/NextChapter";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section, Prose, PullQuote } from "@/components/Section";

export const metadata: Metadata = {
  title: "The Quest",
  description:
    "From challenge to innovation — how a simple but profound question led to the development of the HydroSol Platform.",
};

export default function QuestPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapter 2 · The HydroSol Journey"
        title="The Quest"
        subtitle="From Challenge to Innovation"
        lede="Every meaningful innovation begins by asking the right question."
      />

      <Section>
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
          <p>HydroSol began with a simple but profound challenge:</p>
        </Prose>

        <Reveal>
          <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-gradient-to-r from-brand to-leaf p-px">
            <div className="rounded-[calc(1rem-1px)] bg-white px-7 py-8 text-center sm:px-10">
              <p className="display-font mx-auto max-w-2xl text-balance text-[21px] font-bold leading-normal text-navy sm:text-[24px]">
                How can productive energy be made universally accessible, affordable,
                safe, and sustainable for every community, regardless of geography or
                infrastructure?
              </p>
            </div>
          </div>
        </Reveal>

        <Prose>
          <p>
            Answering that question required more than developing another energy
            technology. It demanded a new engineering philosophy—one that viewed energy
            not as an isolated commodity, but as{" "}
            <strong>
              the foundation of productive communities and sustainable development.
            </strong>
          </p>
          <p>
            Years of scientific research, systems engineering, experimentation, and
            practical field experience led to the development of the HydroSol Platform.
            Every stage of this journey was guided by a commitment to technical
            excellence, operational simplicity, environmental stewardship, and long-term
            community resilience.
          </p>
          <p>
            The result is an integrated productive-energy platform designed to work where
            conventional infrastructure is limited or unavailable. By combining
            engineering innovation with modular design, distributed deployment, and
            intelligent operational management, the HydroSol Platform enables communities
            to strengthen local capability, expand economic opportunity, and build
            resilient productive ecosystems.
          </p>
          <p>
            This journey continues today through collaboration with governments,
            universities, manufacturers, development institutions, investors, and
            communities that share a common vision for sustainable development.
          </p>
          <p>
            HydroSol is therefore not the destination of this journey.{" "}
            <strong>
              It is the platform that enables the next generation of productive
              communities.
            </strong>
          </p>
        </Prose>

        <PullQuote
          lines={[
            "Innovation begins with a question.",
            "Transformation begins with a shared commitment.",
          ]}
        />
        <p className="mx-auto max-w-3xl text-center text-[16px] font-medium italic text-brand sm:text-[17px]">
          Engineering the Future. Empowering Communities.
        </p>
      </Section>

      <NextChapter current="02" />
    </>
  );
}
