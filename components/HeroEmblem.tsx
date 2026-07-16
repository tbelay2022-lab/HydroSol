"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated brand centerpiece for the home hero.
 * Ring pulses + orbiting orbs are centered on the emblem (≈40% from the
 * top of the logo image), not the wordmark below it.
 */
export function HeroEmblem() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute right-2 top-1/2 hidden w-[430px] -translate-y-1/2 select-none lg:block xl:right-16 xl:w-[500px]"
      aria-hidden
    >
      {/* soft ambient glow — white so the emblem lifts off the blue wash */}
      <div
        className="absolute left-1/2 top-[40%] size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.75), rgba(255,255,255,0.3) 55%, transparent 72%)",
        }}
      />

      {/* pulsing power rings */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`absolute left-1/2 top-[40%] size-[380px] rounded-full border ${
              i === 1 ? "border-leaf/30" : "border-brand/35"
            }`}
            style={{ x: "-50%", y: "-50%" }}
            initial={{ scale: 0.62, opacity: 0 }}
            animate={{ scale: [0.62, 1.28], opacity: [0, 0.3, 0] }}
            transition={{
              duration: 5,
              delay: i * 1.7,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

      {/* the logo, floating */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/logo-hero.png"
          alt=""
          width={500}
          height={455}
          priority
          className="h-auto w-full opacity-[0.24]"
        />
      </motion.div>
    </div>
  );
}
