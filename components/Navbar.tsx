"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

const menuLinks = [{ label: "Home", href: "/" }, ...nav];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        open
          ? "bg-transparent"
          : scrolled
            ? "border-b border-line/70 bg-white/85 shadow-[0_1px_20px_rgba(18,59,109,0.06)] backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      <div className="container-x relative z-10 flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="HydroSol — Home">
          <Image
            src="/emblem.png"
            alt="HydroSol logo"
            width={40}
            height={40}
            priority
            className="h-10 w-auto"
            style={{ width: "auto" }}
          />
          <span
            className={`display-font text-[19px] font-bold tracking-tight transition-colors ${
              dark ? "text-white" : "text-navy"
            }`}
          >
            Hydro<span className="text-leaf">Sol</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[14px] font-medium transition-colors ${
                  active ? "text-brand" : "text-navy/70 hover:text-navy"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-brand to-leaf"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-[14px] font-semibold text-white transition-all hover:bg-leaf hover:shadow-[0_8px_24px_rgba(76,175,80,0.35)]"
          >
            Get in Touch
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`transition-colors lg:hidden ${dark ? "text-white" : "text-navy"}`}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="navy-panel fixed inset-0 z-0 flex flex-col overflow-y-auto lg:hidden"
          >
            <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />

            <nav className="container-x relative flex flex-1 flex-col justify-center gap-0 pb-8 pt-20">
              {menuLinks.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{
                      delay: 0.06 + i * 0.055,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center gap-4 border-b border-white/10 py-3.5"
                    >
                      <span
                        className={`display-font w-7 text-[12px] font-bold tracking-wider ${
                          active ? "text-leaf" : "text-white/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`display-font text-[25px] font-semibold leading-tight tracking-tight ${
                          active ? "gradient-text" : "text-white"
                        }`}
                      >
                        {item.label}
                      </span>
                      <ArrowUpRight
                        className={`ml-auto size-5 ${
                          active ? "text-leaf" : "text-white/25"
                        }`}
                      />
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.06 + menuLinks.length * 0.055, duration: 0.5 }}
                className="pt-7"
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-[15.5px] font-semibold text-white transition-colors active:bg-brand-deep"
                >
                  Get in Touch
                  <ArrowUpRight className="size-4.5" />
                </Link>
                <p className="display-font mt-7 text-center text-[13px] font-medium leading-relaxed text-white/40">
                  {site.motto}
                  <span className="block text-white/25">{site.secondary}</span>
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
