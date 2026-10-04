import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "HydroSol Today",
  description: "HydroSol Today — the evolving public record of significant progress, evidence and institutional milestones.",
};

const destinations = [
  ["PROGRESS & MILESTONES", "From invention toward implementation.", "/today/progress"],
  ["EVIDENCE & VALIDATION", "From development to measured evidence.", "/today/evidence"],
  ["PROFESSIONAL PERSPECTIVES", "Perspectives received during development.", "/today/perspectives"],
  ["CORPORATE & INTELLECTUAL PROPERTY", "Protecting innovation while enabling progress.", "/today/corporate"],
] as const;

export default function HydroSolTodayPage() {
  return <>
    <PageHero eyebrow="HydroSol Today" title="FROM VISION TO EVIDENCE" />
    <Section>
      <div className="mx-auto max-w-4xl">
        <p className="text-[17px] leading-relaxed text-body"><strong className="text-navy">HydroSol Today</strong> provides the evolving public record of significant progress, evidence and institutional milestones, with periodic updates as HydroSol advances from development toward validation, commercialization and scale.</p>
        <p className="mt-5 text-[16px] leading-relaxed text-body">Show what is happening. Distinguish progress from evidence. Record what is learned.</p>
        <h2 className="display-font mt-12 text-[22px] font-bold text-navy">EXPLORE HYDROSOL TODAY</h2>
        <div className="mt-6 divide-y divide-line border-y border-line">
          {destinations.map(([title, description, href]) => (
            <div key={href} className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
              <p className="text-[15.5px] leading-relaxed text-body"><strong className="text-navy">{title}:</strong> {description}</p>
              <Link href={href} className="shrink-0 text-[14.5px] font-semibold text-brand hover:text-leaf-deep">Explore →</Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
    <Section tint>
      <div className="mx-auto max-w-4xl space-y-10">
        <div><h2 className="display-font text-[20px] font-bold text-navy">FOLLOW HYDROSOL</h2><p className="mt-3 text-[15.5px] leading-relaxed text-body">For ongoing activities, engagements, announcements and development updates, follow HydroSol on LinkedIn.</p><p className="mt-3 font-semibold text-brand">Follow the latest HydroSol developments on LinkedIn →</p></div>
        <div><h2 className="display-font text-[20px] font-bold text-navy">MEET THE HYDROSOL TEAM</h2><p className="mt-3 text-[15.5px] leading-relaxed text-body">For investment, partnerships, technology and general inquiries, connect directly with the HydroSol Team. <Link href="/contact" className="font-semibold text-brand hover:text-leaf-deep">Meet the HydroSol Team →</Link></p></div>
        <Link href="/" className="inline-block font-semibold text-brand hover:text-leaf-deep">← Home</Link>
      </div>
    </Section>
  </>;
}
