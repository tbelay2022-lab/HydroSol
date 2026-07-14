import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { chapters } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

/**
 * Chapter transition band — closes every chapter page and leads the
 * reader to the next step of the HydroSol journey.
 */
export function NextChapter({
  current,
  note,
}: {
  /** Chapter number of the CURRENT page, e.g. "01" */
  current: string;
  /** Optional closing line shown above the link */
  note?: string;
}) {
  const idx = chapters.findIndex((c) => c.number === current);
  const next = chapters[idx + 1];
  if (!next) return null;

  return (
    <section className="border-t border-line bg-white">
      <div className="container-x py-12 sm:py-14">
        <Reveal>
          {note && (
            <p className="mx-auto max-w-2xl text-center text-[16px] leading-[1.7] text-body sm:text-[17px]">
              {note}
            </p>
          )}
          <Link
            href={next.href}
            className="group mx-auto mt-8 flex max-w-3xl items-center justify-between gap-6 rounded-2xl border border-line bg-mist p-6 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white hover:shadow-[0_16px_40px_rgba(18,59,109,0.1)] sm:p-8"
          >
            <div>
              <p className="eyebrow">Continue the journey</p>
              <p className="display-font mt-2 text-[22px] font-bold leading-tight text-navy sm:text-[26px]">
                <span className="mr-3 text-brand/50">{next.number}</span>
                {next.label}
              </p>
              <p className="mt-2 max-w-xl text-[14.5px] leading-relaxed text-body/90">
                {next.blurb}
              </p>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-white transition-all group-hover:bg-leaf">
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
