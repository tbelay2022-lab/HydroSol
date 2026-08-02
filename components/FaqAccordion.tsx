"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqSections } from "@/lib/faq";
import { Reveal } from "@/components/Reveal";

export function FaqAccordion() {
  const [open, setOpen] = useState<string | null>("0-0");

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      {faqSections.map((section, si) => (
        <Reveal key={section.title}>
          <div>
            <div className="flex items-baseline gap-3">
              <span className="display-font text-[13px] font-bold text-brand">
                {String(si + 1).padStart(2, "0")}
              </span>
              <h2 className="display-font text-xl font-bold text-ink sm:text-2xl">
                {section.title}
              </h2>
            </div>
            <div className="mt-5 overflow-hidden rounded-2xl border border-line bg-white">
              {section.items.map((item, ii) => {
                const id = `${si}-${ii}`;
                const isOpen = open === id;
                return (
                  <div key={id} className={ii > 0 ? "border-t border-line" : ""}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left transition-colors hover:bg-mist sm:px-7 sm:py-5"
                    >
                      <span
                        className={`text-[15.5px] font-semibold leading-snug ${
                          isOpen ? "text-brand-deep" : "text-ink"
                        }`}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25 }}
                        className={`grid size-7 shrink-0 place-items-center rounded-full border ${
                          isOpen
                            ? "border-brand bg-brand text-white"
                            : "border-line text-ink/50"
                        }`}
                      >
                        <Plus className="size-4" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-7">
                            <p className="text-[15px] leading-relaxed text-ink/70">
                              {item.a}
                            </p>

                            {"tables" in item &&
                              item.tables?.map((table) => (
                                <div key={table.title} className="mt-6">
                                  <p className="display-font text-[15px] font-bold text-navy">
                                    {table.title}
                                  </p>
                                  <div className="mt-3 overflow-x-auto rounded-xl border border-line">
                                    <table className="w-full min-w-[560px] border-collapse text-left text-[13.5px]">
                                      <thead>
                                        <tr className="bg-brand-soft">
                                          {table.headers.map((h) => (
                                            <th
                                              key={h}
                                              scope="col"
                                              className="border-b border-line px-4 py-3 align-bottom font-semibold text-navy"
                                            >
                                              {h}
                                            </th>
                                          ))}
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {table.rows.map((row) => (
                                          <tr
                                            key={row[0]}
                                            className="border-b border-line last:border-0 odd:bg-white even:bg-mist"
                                          >
                                            {row.map((cell, ci) => (
                                              <td
                                                key={cell}
                                                className={`px-4 py-3 align-top leading-snug ${
                                                  ci === 0
                                                    ? "font-semibold text-navy"
                                                    : "text-ink/70"
                                                }`}
                                              >
                                                {cell}
                                              </td>
                                            ))}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                  {"note" in table && table.note && (
                                    <p className="mt-2 text-[12.5px] italic text-ink/55">
                                      {table.note}
                                    </p>
                                  )}
                                </div>
                              ))}

                            {"closing" in item && item.closing && (
                              <p className="mt-6 text-[15px] leading-relaxed text-ink/70">
                                {item.closing}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
