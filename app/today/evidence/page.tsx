import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
export const metadata: Metadata = { title: "Evidence & Validation", description: "From Development To Measured Evidence" };
export default function Page() { return <><PageHero eyebrow="HydroSol Today" title="EVIDENCE & VALIDATION" subtitle="FROM DEVELOPMENT TO MEASURED EVIDENCE"/><Section><div className="mx-auto max-w-3xl space-y-6 text-[15.5px] leading-relaxed text-body"><p>HydroSol distinguishes between engineering progress and validated evidence.</p><div className="space-y-2"><p><strong>Engineering Development:</strong> Advanced</p><p><strong>Integrated Field Validation:</strong> Pending</p></div><p><strong>Demonstrate → Measure → Validate → Learn → Improve</strong></p><p>Measured results will be reported as evidence becomes available.</p><Link href="/today" className="inline-block pt-3 font-semibold text-brand hover:text-leaf-deep">← Back to HydroSol Today</Link></div></Section></>; }
