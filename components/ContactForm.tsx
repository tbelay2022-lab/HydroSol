"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";

const interests = [
  "Partnership Discussion",
  "Investment Engagement",
  "Pilot / Demonstration",
  "Technical Briefing",
  "Research Collaboration",
  "Other Inquiry",
];

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-all placeholder:text-ink/35 focus:border-brand focus:ring-4 focus:ring-brand/15";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const org = String(data.get("org") ?? "");
    const email = String(data.get("email") ?? "");
    const interest = String(data.get("interest") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`${interest} — ${name}${org ? ` (${org})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${org}\nEmail: ${email}\nInterest: ${interest}\n\n${message}`,
    );
    window.location.href = `mailto:info@hydrosolpower.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-line bg-white p-10 text-center"
      >
        <span className="grid size-16 place-items-center rounded-full bg-leaf-soft">
          <CheckCircle2 className="size-8 text-leaf-deep" />
        </span>
        <h3 className="display-font mt-6 text-2xl font-bold text-ink">
          Your email app has opened
        </h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink/60">
          Review the pre-filled message and press send to reach the HydroSol team. You can
          also write directly to{" "}
          <a href="mailto:info@hydrosolpower.com" className="font-semibold text-brand-deep">
            info@hydrosolpower.com
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 text-[14px] font-semibold text-brand-deep hover:underline"
        >
          Compose another inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-line bg-white p-6 shadow-[0_2px_24px_rgba(18,59,109,0.06)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-[13.5px] font-semibold text-ink">
            Full Name
          </label>
          <input id="name" name="name" required placeholder="Your name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="org" className="mb-2 block text-[13.5px] font-semibold text-ink">
            Organization
          </label>
          <input id="org" name="org" placeholder="Company / institution" className={inputCls} />
        </div>
      </div>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-[13.5px] font-semibold text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@organization.org"
            className={inputCls}
          />
        </div>
        <div>
          <label
            htmlFor="interest"
            className="mb-2 block text-[13.5px] font-semibold text-ink"
          >
            Area of Interest
          </label>
          <select id="interest" name="interest" className={inputCls} defaultValue={interests[0]}>
            {interests.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-[13.5px] font-semibold text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your interest in HydroSol…"
          className={`${inputCls} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-4 text-[15.5px] font-semibold text-white transition-all hover:bg-leaf hover:shadow-[0_10px_28px_rgba(76,175,80,0.35)] sm:w-auto"
      >
        <Send className="size-4.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        Send an Inquiry
      </button>
      <p className="mt-4 text-[12.5px] leading-relaxed text-ink/45">
        Submitting opens your email application with the inquiry pre-filled, addressed to
        the HydroSol team.
      </p>
    </form>
  );
}
