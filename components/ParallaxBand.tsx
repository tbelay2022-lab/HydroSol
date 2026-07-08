"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

/**
 * Full-bleed parallax statement band: the image scrolls slower than the
 * page (window-into-a-deeper-layer effect), with a statement overlaid.
 */
export function ParallaxBand({
  src,
  alt,
  eyebrow,
  lines,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  lines: [string, string];
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative h-[62vh] min-h-[440px] overflow-hidden bg-ink"
    >
      <motion.div
        style={reduce ? undefined : { y }}
        className="absolute inset-x-0 -top-[14%] h-[128%]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          quality={82}
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25"
        aria-hidden
      />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="container-x relative flex h-full items-center">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow !text-leaf">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-font mt-4 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[44px]">
              {lines[0]}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="display-font mt-2 text-balance text-3xl font-bold leading-tight sm:text-4xl md:text-[44px]">
              <span className="gradient-text">{lines[1]}</span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
