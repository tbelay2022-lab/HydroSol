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
      <div className="container-x py-16 sm:py-24">
        {(eyebrow || title) && (
          <Reveal>
            <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="display-font mt-3 text-balance text-3xl font-bold leading-tight text-ink sm:text-4xl">
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 max-w-3xl space-y-5 text-[16.5px] leading-[1.8] text-ink/75 [&_strong]:font-semibold [&_strong]:text-ink">
      {children}
    </div>
  );
}

export function PullQuote({ lines }: { lines: string[] }) {
  return (
    <Reveal>
      <div className="relative my-12 max-w-3xl pl-7 sm:pl-9">
        <span
          className="absolute bottom-1 left-0 top-1 w-[3px] rounded-full bg-gradient-to-b from-brand to-leaf"
          aria-hidden
        />
        {lines.map((l, i) => (
          <p
            key={l}
            className={`display-font text-balance text-2xl font-bold leading-[1.22] sm:text-[30px] ${
              i === lines.length - 1 ? "gradient-text" : "text-ink"
            }`}
          >
            {l}
          </p>
        ))}
      </div>
    </Reveal>
  );
}
