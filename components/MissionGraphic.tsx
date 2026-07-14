"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Home,
  Sprout,
  Store,
  Users,
  Zap,
} from "lucide-react";

const CENTER = 160;

const NODES = [
  { icon: Home, x: 160, y: 44, label: "Households" },
  { icon: Sprout, x: 262, y: 101, label: "Agriculture" },
  { icon: Store, x: 262, y: 219, label: "Enterprise" },
  { icon: HeartPulse, x: 160, y: 276, label: "Healthcare" },
  { icon: GraduationCap, x: 58, y: 219, label: "Education" },
  { icon: Users, x: 58, y: 101, label: "Community" },
];

const pct = (v: number) => `${(v / 320) * 100}%`;

export function MissionGraphic() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-line bg-mist px-6 py-10">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(15,95,168,0.14), rgba(76,175,80,0.06) 55%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto aspect-square w-full max-w-[340px]">
        <svg
          viewBox="0 0 320 320"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="mg-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0090d8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#48c030" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {NODES.map((n) => (
            <line
              key={n.label}
              x1={CENTER}
              y1={CENTER}
              x2={n.x}
              y2={n.y}
              stroke="url(#mg-line)"
              strokeWidth="1.25"
            />
          ))}

          {!reduce &&
            [0, 1].map((i) => (
              <motion.circle
                key={`ring-${i}`}
                cx={CENTER}
                cy={CENTER}
                fill="none"
                stroke="#0090d8"
                strokeWidth="1"
                initial={{ r: 34, opacity: 0 }}
                animate={{ r: [34, 150], opacity: [0.4, 0] }}
                transition={{
                  duration: 4.5,
                  delay: i * 2.25,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}

          {!reduce &&
            NODES.map((n, i) => (
              <motion.circle
                key={`pulse-${n.label}`}
                r="3"
                fill={i % 2 === 0 ? "#0090d8" : "#48c030"}
                initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
                animate={{
                  cx: [CENTER, n.x],
                  cy: [CENTER, n.y],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.4,
                  delay: 0.4 * i,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
              />
            ))}
        </svg>

        {/* Energy core */}
        <motion.div
          className="absolute left-1/2 top-1/2 grid size-[62px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gradient-to-br from-brand to-leaf-deep text-white shadow-[0_0_30px_rgba(15,95,168,0.5)]"
          animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Zap className="size-6" />
        </motion.div>

        {/* Community nodes */}
        {NODES.map((n) => (
          <div
            key={n.label}
            className="absolute grid size-[46px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl border border-line bg-white text-brand-deep shadow-[0_2px_10px_rgba(18,59,109,0.07)]"
            style={{ left: pct(n.x), top: pct(n.y) }}
            title={n.label}
          >
            <n.icon className="size-5" />
          </div>
        ))}
      </div>

      <p className="relative mt-4 max-w-[260px] text-center text-[13px] leading-snug text-ink/50">
        Productive energy reaching every corner of community life.
      </p>
    </div>
  );
}
