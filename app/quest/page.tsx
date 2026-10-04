import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ChapterBody } from "@/components/ChapterBody";
import { chapterContent } from "@/lib/chapterContent";

const c = chapterContent[1];
export const metadata: Metadata = { title: c.title, description: c.subtitle };
export default function Page() { return <><PageHero eyebrow="Chapter 1" title={c.title} subtitle={c.subtitle} /><ChapterBody lines={[...c.lines]} /></>; }
