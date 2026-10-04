import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
export const metadata: Metadata = { title: "Professional Perspectives", description: "Perspectives Received During Development" };
export default function Page() { return <><PageHero eyebrow="HydroSol Today" title="PROFESSIONAL PERSPECTIVES" subtitle="PERSPECTIVES RECEIVED DURING DEVELOPMENT"/><Section><div className="mx-auto max-w-3xl space-y-6 text-[15.5px] leading-relaxed text-body"><p>HydroSol has benefited from professional dialogue and perspectives across different disciplines and regions during its development.</p><p>Selected perspectives may be published here when appropriate and with authorization.</p><p><strong>Professional perspectives inform the journey. Evidence determines technical validity.</strong></p><Link href="/today" className="inline-block pt-3 font-semibold text-brand hover:text-leaf-deep">← Back to HydroSol Today</Link></div></Section></>; }
