import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
export const metadata: Metadata = { title: "Corporate & Intellectual Property", description: "Protecting Innovation While Enabling Progress" };
export default function Page() { return <><PageHero eyebrow="HydroSol Today" title="CORPORATE & INTELLECTUAL PROPERTY" subtitle="PROTECTING INNOVATION WHILE ENABLING PROGRESS"/><Section><div className="mx-auto max-w-3xl space-y-6 text-[15.5px] leading-relaxed text-body"><div className="space-y-2"><p><strong>HydroSol Technologies LLC:</strong> Formation in Progress</p><p><strong>U.S. Provisional Patent Application:</strong> Filing in Final Preparation</p></div><p>HydroSol continues to protect appropriate intellectual property and proprietary know-how as it advances toward validation and commercialization.</p><p>Material developments will be reported when appropriate.</p><Link href="/today" className="inline-block pt-3 font-semibold text-brand hover:text-leaf-deep">← Back to HydroSol Today</Link></div></Section></>; }
