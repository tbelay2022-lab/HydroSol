"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeftRight,
  Droplets,
  Flag,
  Leaf,
  ShieldCheck,
  Sprout,
  Store,
  Zap,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const ecosystem = [
  { label: "Productive Energy", icon: Zap },
  { label: "Food Systems", icon: Sprout },
  { label: "Water Security", icon: Droplets },
  { label: "Local Enterprises", icon: Store },
  { label: "Environmental Stewardship", icon: Leaf },
  { label: "Infrastructure Resilience", icon: ShieldCheck },
];

const enablers = [
  "Women & Youth Participation",
  "Skills Development",
  "Entrepreneurship",
  "Community Ownership",
  "Cooperatives",
  "Local Manufacturing",
];

const outcomes = [
  "Productive Continuity",
  "Employment Creation",
  "Economic Participation",
  "Poverty Reduction",
  "Environmental Restoration",
  "Community Prosperity",
];

export function Figure17() {
  const reduce = useReducedMotion();
  return (
    <Reveal>
      <div className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_2px_24px_rgba(18,59,109,0.06)]">
        <div className="navy-panel px-6 py-6 text-white sm:px-10">
          <p className="eyebrow !text-leaf">Smart Productive Villages</p>
          <h3 className="display-font mt-2 text-xl font-bold sm:text-2xl">
            The 500-Household Kushet Development Model
          </h3>
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          {/* Ecosystem flow */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="eyebrow !text-ink/40">Horizontal Ecosystem Flow</p>
            <p className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink/45">
              <ArrowLeftRight className="size-3.5 text-brand" />
              Each system reinforces the others
            </p>
          </div>
          <Stagger className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ecosystem.map((item) => (
              <StaggerItem key={item.label}>
                <div className="group flex h-full items-center gap-3.5 rounded-2xl border border-brand/20 bg-brand-soft/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/45 hover:bg-brand-soft">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white text-brand-deep shadow-[0_1px_6px_rgba(15,95,168,0.18)]">
                    <item.icon className="size-5" />
                  </span>
                  <span className="text-[14px] font-semibold leading-snug text-ink">
                    {item.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Enablers */}
          <p className="eyebrow mt-10 !text-ink/40">Enablers</p>
          <Stagger className="mt-5 flex flex-wrap gap-2.5">
            {enablers.map((e) => (
              <StaggerItem key={e}>
                <span className="inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-leaf-soft px-4 py-2 text-[13px] font-medium text-leaf-deep">
                  <span className="size-1.5 rounded-full bg-leaf" aria-hidden />
                  {e}
                </span>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Outcomes journey */}
          <div className="mt-10 flex items-baseline justify-between gap-x-6 gap-y-1">
            <p className="eyebrow !text-ink/40">Outcomes</p>
            <p className="text-[12.5px] font-medium text-ink/45">
              Six drivers, one destination
            </p>
          </div>
          <div className="mt-6 grid gap-x-12 lg:grid-cols-2">
            {[outcomes.slice(0, 3), outcomes.slice(3)].map((group, col) => (
              <Stagger className="relative" key={col}>
                <span
                  className="absolute bottom-5 left-[15px] top-5 w-px bg-gradient-to-b from-brand/50 via-brand/30 to-leaf/60"
                  aria-hidden
                />
                {group.map((o, i) => (
                  <StaggerItem key={o} className="relative">
                    <div className="flex items-center gap-4 py-2.5">
                      <span className="display-font relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-brand/30 bg-white text-[12px] font-bold text-brand-deep shadow-[0_1px_6px_rgba(15,95,168,0.15)]">
                        {col * 3 + i + 1}
                      </span>
                      <span className="text-[15px] font-semibold text-ink">{o}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            ))}
          </div>

          {/* Straight arrow from step 6 down to the culminating outcome */}
          <div className="mt-2 grid gap-x-12 lg:grid-cols-2">
            <div className="hidden lg:block" aria-hidden />
            <div className="relative h-10">
              <span
                className="absolute left-[15px] top-0 h-6 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-brand/40 to-leaf"
                aria-hidden
              />
              <ArrowDown
                className="absolute left-[15px] top-[18px] size-5 -translate-x-1/2 text-leaf"
                strokeWidth={2.5}
                aria-hidden
              />
            </div>
          </div>

          {/* Culminating outcome */}
          <Reveal delay={0.1}>
            <div className="navy-panel relative overflow-hidden rounded-2xl px-6 py-7 text-white sm:px-8">
              <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
              <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-5 sm:text-left">
                <motion.span
                  className="grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-leaf text-white shadow-[0_0_26px_rgba(76,175,80,0.45)]"
                  animate={reduce ? undefined : { scale: [1, 1.07, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Flag className="size-6" />
                </motion.span>
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-leaf">
                    The Culminating Outcome · 07
                  </p>
                  <p className="display-font mt-1 text-2xl font-bold sm:text-[26px]">
                    Sustainable Development
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Key message */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-brand to-leaf p-px">
            <div className="rounded-[calc(1rem-1px)] bg-white px-5 py-4 sm:px-6">
              <p className="text-[14.5px] leading-relaxed text-ink/75">
                <span className="font-semibold text-ink">Key message: </span>
                Connecting energy, food systems, environmental stewardship, infrastructure
                resilience, and economic opportunity to build productive and prosperous
                communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
