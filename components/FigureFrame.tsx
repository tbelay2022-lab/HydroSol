"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function FigureFrame({
  src,
  alt,
  caption,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  const [open, setOpen] = useState(false);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onKey]);

  return (
    <>
      <Reveal>
        <figure className="group">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative block w-full overflow-hidden rounded-2xl border border-line bg-white p-3 text-left shadow-[0_2px_16px_rgba(18,59,109,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(18,59,109,0.12)] sm:p-4"
            aria-label={`Enlarge figure: ${caption}`}
          >
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={priority}
              className="h-auto w-full rounded-lg"
              sizes="(max-width: 768px) 100vw, 720px"
            />
            <span className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-[12px] font-medium text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
              <Maximize2 className="size-3.5" />
              Enlarge
            </span>
          </button>
          <figcaption className="mt-3 flex items-start gap-2 px-1 text-[13.5px] leading-snug text-ink/55">
            <span className="mt-[7px] h-px w-5 shrink-0 bg-gradient-to-r from-brand to-leaf" aria-hidden />
            {caption}
          </figcaption>
        </figure>
      </Reveal>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-h-full w-full max-w-6xl overflow-auto rounded-xl bg-white p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="h-auto w-full rounded-lg"
                sizes="100vw"
              />
              <p className="px-3 py-3 text-center text-[13px] text-ink/60">{caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
