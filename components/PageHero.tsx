import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-wash relative overflow-hidden pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div className="dot-grid-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative flex flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="chapter-title mt-4 max-w-4xl text-balance">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.14}>
            <p className="chapter-subtitle mt-4 max-w-3xl text-balance">{subtitle}</p>
          </Reveal>
        )}
        {lede && (
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-[17px] leading-[1.7] text-body">
              {lede}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.26}>{children}</Reveal>}
      </div>
    </section>
  );
}
