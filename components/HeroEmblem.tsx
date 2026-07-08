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
      {/* rotating light sweep */}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-[40%] size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(0,144,216,0.16) 70deg, transparent 140deg, rgba(72,192,48,0.11) 220deg, transparent 290deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        />
      )}

      {/* pulsing power rings */}
      {!reduce &&
        [0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className={`absolute left-1/2 top-[40%] size-[380px] rounded-full border ${
              i === 1 ? "border-leaf/20" : "border-brand/25"
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

      {/* orbiting energy orbs */}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-[40%] size-[440px]"
          style={{ x: "-50%", y: "-50%" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 rounded-full bg-[#35b6f2] opacity-70 shadow-[0_0_12px_3px_rgba(53,182,242,0.4)]" />
          <span className="absolute bottom-[12%] right-[6%] size-1.5 rounded-full bg-[#7ed957] opacity-65 shadow-[0_0_10px_2px_rgba(126,217,87,0.38)]" />
        </motion.div>
      )}

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
          className="h-auto w-full opacity-[0.13]"
        />
      </motion.div>
    </div>
  );
}
