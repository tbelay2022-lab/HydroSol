import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function CtaBand({
  title,
  lede,
  children,
}: {
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section className="container-x pb-24 pt-4 sm:pb-28">
      <Reveal>
        <div className="navy-panel relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative">
            <h2 className="display-font mx-auto max-w-2xl text-balance text-3xl font-bold leading-tight sm:text-4xl">
              {title}
            </h2>
            {lede && (
              <p className="mx-auto mt-4 max-w-xl text-pretty text-[15.5px] leading-relaxed text-white/70">
                {lede}
              </p>
            )}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {children}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
