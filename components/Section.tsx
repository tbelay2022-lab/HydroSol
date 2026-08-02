import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function Section({
  eyebrow,
  title,
  children,
  tint = false,
  center = false,
}: {
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  tint?: boolean;
  center?: boolean;
}) {
  return (
    <section className={tint ? "bg-mist" : "bg-white"}>
      <div className="container-x py-10 sm:py-14">
        {(eyebrow || title) && (
          <Reveal>
            <div
              className={
                center ? "mx-auto max-w-2xl text-center" : "mx-auto max-w-3xl"
              }
            >
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="section-heading mt-3 text-balance">{title}</h2>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="display-font mx-auto mt-12 max-w-3xl text-[20px] font-bold leading-snug text-brand first:mt-0">
      {children}
    </h3>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mt-6 max-w-3xl space-y-5 text-[16px] leading-[1.7] text-body sm:text-[18px] [&_strong]:font-semibold [&_strong]:text-navy">
      {children}
    </div>
  );
}

export function PullQuote({ lines }: { lines: string[] }) {
  return (
    <Reveal>
      <div className="relative mx-auto my-10 max-w-4xl pl-7 sm:pl-9">
        <span
          className="absolute bottom-1 left-0 top-1 w-[3px] rounded-full bg-gradient-to-b from-brand to-leaf"
          aria-hidden
        />
        {lines.map((l) => (
          <p
            key={l}
            className="display-font text-pretty text-[22px] font-bold leading-[1.3] text-navy sm:text-[27px]"
          >
            {l}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
