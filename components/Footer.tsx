import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { footerLinks, site } from "@/lib/site";

const moreLinks = [
  { label: "Publications", href: "/publications" },
  { label: "Executive White Paper", href: "/white-paper" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="navy-panel relative overflow-hidden text-white">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/emblem.png"
                alt="HydroSol logo"
                width={44}
                height={44}
                className="h-11 w-auto"
                style={{ width: "auto" }}
              />
              <span className="display-font text-[22px] font-bold">
                HydroSol<span className="align-super text-[11px] font-medium text-white/60">™</span>
              </span>
            </div>
            <p className="display-font mt-6 text-[20px] font-medium leading-snug text-white">
              {site.motto}
            </p>
            <p className="display-font text-[15px] font-medium text-white/60">
              {site.secondary}
            </p>
            <p className="mt-5 max-w-xs text-[13.5px] leading-relaxed text-white/50">
              {site.tagline}
            </p>
          </div>

          <div>
            <h3 className="eyebrow !text-white/50">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14.5px] text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow !text-white/50">Contact</h3>
            <ul className="mt-5 space-y-3">
              {site.emails.map((email) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 text-[14px] text-white/75 transition-colors hover:text-white"
                  >
                    <Mail className="size-3.5 text-leaf" />
                    {email}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
              {moreLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[13.5px] text-white/55 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="text-[13px] text-white/50">© 2026 HydroSol. All Rights Reserved.</p>
          <p className="text-[13px] italic text-white/50">{site.closing}</p>
          <p className="text-[13px] text-white/50">www.hydrosolpower.com</p>
        </div>
      </div>
    </footer>
  );
}
