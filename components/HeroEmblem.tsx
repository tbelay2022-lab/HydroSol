"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const droplets = [
  { left: "22%", size: 9, delay: 0, duration: 8, drift: 14 },
  { left: "70%", size: 7, delay: 2.6, duration: 9.5, drift: -10 },
  { left: "46%", size: 5, delay: 5.2, duration: 7.5, drift: 8 },
];

/**
 * Animated brand centerpiece for the home hero.
 * Ring pulses + rising droplets are centered on the emblem (≈40% from the
 * top of the logo image), not the wordmark below it.
 */
export function HeroEmblem() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute right-2 top-1/2 hidden w-[330px] -translate-y-1/2 select-none lg:block xl:right-20 xl:w-[385px]"
      aria-hidden
    >
      {/* soft ambient glow — white so the emblem lifts off the blue wash */}
      <div
        className="absolute left-1/2 top-[40%] size-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.85), rgba(255,255,255,0.35) 55%, transparent 72%)",
        }}
      />

      {/* pulsing power rings */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`absolute left-1/2 top-[40%] size-[290px] rounded-full border ${
              i === 1 ? "border-leaf/35" : "border-brand/40"
            }`}
            style={{ x: "-50%", y: "-50%" }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [0.6, 1.85], opacity: [0, 0.32, 0] }}
            transition={{
              duration: 6.5,
              delay: i * 2.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

      {/* rising droplets — a quiet water motif around the emblem */}
      {!reduce &&
        droplets.map((d, i) => (
          <motion.span
            key={i}
            className="absolute top-[62%] rounded-full bg-gradient-to-b from-brand/50 to-leaf/40 blur-[1px]"
            style={{ left: d.left, width: d.size, height: d.size }}
            initial={{ y: 30, x: 0, opacity: 0 }}
            animate={{ y: -190, x: d.drift, opacity: [0, 0.55, 0.45, 0] }}
            transition={{
              duration: d.duration,
              delay: d.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

      {/* the logo — floating, with a gentle sway and breath */}
      <motion.div
        animate={
          reduce
            ? undefined
            : { y: [0, -14, 0], rotate: [0, 1.1, 0, -1.1, 0], scale: [1, 1.015, 1] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/logo-hero.png"
          alt=""
          width={500}
          height={455}
          priority
          className="h-auto w-full opacity-[0.45] drop-shadow-[0_18px_40px_rgba(15,95,168,0.18)]"
        />
      </motion.div>
    </div>
  );
}
