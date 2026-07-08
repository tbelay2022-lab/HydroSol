import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="ink-panel relative overflow-hidden pb-20 pt-40 text-white sm:pb-24 sm:pt-48">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative">
        <Reveal>
          <p className="eyebrow !text-leaf">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display-font mt-4 max-w-3xl text-balance text-4xl font-bold leading-[1.06] sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {lede && (
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-pretty text-[17px] leading-relaxed text-white/75">
              {lede}
            </p>
          </Reveal>
        )}
        {children && <Reveal delay={0.22}>{children}</Reveal>}
      </div>
    </section>
  );
}
