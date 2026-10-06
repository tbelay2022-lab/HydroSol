import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const journey = [
  {
    number: "2",
    title: "THE QUEST — WHY?",
    text: "Understanding poverty, the poverty cycle and the interconnected constraints through which deprivation can become mutually reinforcing, particularly at the last mile.",
    link: "/quest",
    label: "Explore The Quest",
  },
  {
    number: "3",
    title: "HYDROSOL PLATFORM — WHAT?",
    text: "HydroSol is a new Hydrogen-on-Demand invention developed as a Productive Energy response to the Quest. The energy capability travels to the user.",
    link: "/platform",
    label: "Explore the HydroSol Platform",
  },
  {
    number: "4",
    title: "SMART PRODUCTIVE KUSHET (LOCAL COMMUNITY) — PRODUCTIVE COMMUNITY",
    text: "Where Productive Energy connects with people, skills, resources and enterprise to strengthen productive capability and local value creation.",
    pathway: "Productive Energy → Productive Capability → Productive Community",
    link: "/applications",
    label: "Explore the Smart Productive Kushet",
  },
  {
    number: "5",
    title: "HYDROSOL ECOSYSTEM — SCALE",
    text: "Connecting productive communities through distributed, RPC-supported networks that can grow through:",
    pathway: "Replication → Clustering → Interconnection",
    link: "/opportunity",
    label: "Explore the HydroSol Ecosystem",
  },
  {
    number: "6",
    title: "PARTNERSHIP — SHARED ACTION",
    text: "Connecting investment, industry, strategic partners and market-development capabilities to move HydroSol from engineering readiness toward commercialization and responsible scale.",
    pathway: "Validate → Deploy → Commercialize → Invest → Scale",
    link: "/partnership",
    label: "Explore Partnership",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Authoritative HydroSol homepage visual */}
      <section className="relative overflow-hidden bg-white pt-28 sm:pt-32">
        <div className="mx-auto max-w-[680px]">
          <Reveal>
            <Image
              src="/figures/current-homepage.jpeg"
              alt="Welcome to HydroSol — An Innovative Energy Ecosystem"
              width={975}
              height={591}
              priority
              className="h-auto w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* 1. The Challenge */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="display-font text-2xl font-bold text-navy sm:text-3xl">
              1. THE CHALLENGE
            </h2>

            <div className="mt-6 space-y-5 text-[15.5px] leading-relaxed text-body sm:text-[16px]">
              <p>
                Across much of the Global South—including Africa, South Asia,
                Latin America, the Caribbean and underserved regions
                elsewhere—millions of households, farms, schools, clinics,
                workshops and small enterprises face interconnected constraints
                that limit{" "}
                <strong>
                  productivity, opportunity and long-term prosperity
                </strong>
                .
              </p>

              <p>
                These challenges extend beyond energy.{" "}
                <strong>
                  Water, agriculture, healthcare, education, infrastructure,
                  enterprise and mobility
                </strong>{" "}
                are interconnected, particularly at the last mile, where
                conventional systems may be unavailable, unreliable or
                unaffordable.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* HydroSol Journey */}
      <Section tint>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="display-font text-2xl font-bold text-navy sm:text-3xl">
              THE HYDROSOL JOURNEY
            </h2>

            <p className="mt-6 text-[14px] font-semibold leading-relaxed text-brand sm:text-[16px]">
              THE QUEST → HYDROSOL PLATFORM → SMART PRODUCTIVE KUSHET →
              HYDROSOL ECOSYSTEM → PARTNERSHIP → HYDROSOL TODAY
            </p>
          </div>
        </Reveal>
      </Section>

      {/* Journey gateway */}
      <Section>
        <div className="mx-auto max-w-4xl">
          {journey.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article
                className={`py-9 ${
                  index > 0 ? "border-t border-line" : ""
                }`}
              >
                <h2 className="display-font text-xl font-bold text-navy sm:text-2xl">
                  {item.number}. {item.title}
                </h2>

                <p className="mt-4 text-[15.5px] leading-relaxed text-body">
                  {item.text}
                </p>

                {item.pathway && (
                  <p className="mt-4 font-semibold leading-relaxed text-brand">
                    {item.pathway}
                  </p>
                )}

                <Link
                  href={item.link}
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-leaf-deep"
                >
                  {item.label}
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            </Reveal>
          ))}

          <Reveal>
            <article className="border-t border-line py-9">
              <h2 className="display-font text-xl font-bold text-navy sm:text-2xl">
                HYDROSOL TODAY — EVIDENCE &amp; PROGRESS
              </h2>

              <p className="mt-4 text-[15.5px] leading-relaxed text-body">
                The living public record of what HydroSol is demonstrating,
                measuring, validating, learning and achieving.
              </p>

              <p className="mt-4 font-semibold leading-relaxed text-brand">
                Show what is happening → Distinguish progress from evidence →
                Record what is learned
              </p>

              <Link
                href="/today"
                className="mt-5 inline-flex items-center gap-2 font-semibold text-brand transition-colors hover:text-leaf-deep"
              >
                Explore HydroSol Today
                <ArrowRight className="size-4" />
              </Link>
            </article>
          </Reveal>
        </div>
      </Section>
    </>
  );
}





