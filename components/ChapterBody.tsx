import Image from "next/image";
import { Section } from "@/components/Section";

export function ChapterBody({ lines, figure, figureAlt, noOverlap = false }: { lines: string[]; figure?: string; figureAlt?: string; noOverlap?: boolean }) {
  return <Section><div className={`${noOverlap ? "mt-0" : "-mt-14 sm:-mt-20"} mx-auto max-w-3xl space-y-5`}>{figure && <div className="mb-10 overflow-hidden rounded-2xl"><Image src={figure} alt={figureAlt ?? ""} width={1600} height={900} className="h-auto w-full" /></div>}
    {lines.map((line, i) => {
      const numbered = /^\d+\.\s/.test(line);
      const caps = line.length < 110 && line === line.toUpperCase() && /[A-Z]/.test(line);
      const flow = line.includes("\u2192") || line.includes(" | ");
      if (numbered) return <h2 key={i} className="display-font pt-5 text-[23px] font-bold text-navy sm:text-[27px]">{line}</h2>;
      if (caps) return <h3 key={i} className="display-font pt-3 text-[17px] font-bold tracking-wide text-brand">{line}</h3>;
      if (flow) return <p key={i} className="display-font rounded-xl bg-brand-soft px-5 py-4 text-center text-[15px] font-semibold leading-relaxed text-navy">{line}</p>;
      return <p key={i} className="text-[16px] leading-[1.8] text-body">{line}</p>;
    })}
  </div></Section>;
}









