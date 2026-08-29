import type { ReactNode } from "react";
import { HeroWaves } from "@/components/HeroWaves";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  lede,
  children,
  tintBelow = false,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  lede?: string;
  children?: ReactNode;
  /** Set when the section below the hero uses the light-gray background. */
  tintBelow?: boolean;
}) {
  return (
    <section className="hero-droplet relative overflow-hidden pb-4 pt-24 sm:pb-5 sm:pt-28">
      <div className="dot-grid-light pointer-events-none absolute inset-0" aria-hidden />
      <HeroWaves tint={tintBelow} />

      <div className="container-x relative flex flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="chapter-title mt-2 max-w-4xl text-balance text-[34px] sm:text-[42px]">
            {title}
          </h1>
        </Reveal>

        {subtitle && (
          <Reveal delay={0.14}>
            <p className="chapter-subtitle mt-2 max-w-3xl text-balance">
              {subtitle}
            </p>
          </Reveal>
        )}

        {lede && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-3 max-w-2xl text-pretty text-[16px] leading-[1.65] text-body sm:text-[17px]">
              {lede}
            </p>
          </Reveal>
        )}

        {children && <Reveal delay={0.26}>{children}</Reveal>}
      </div>
    </section>
  );
}