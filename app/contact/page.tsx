import type { Metadata } from "next";
import { Globe, Mail } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Engagement",
  description:
    "Connect with HydroSol — partnership discussions, pilot deployment opportunities, investor engagement, technical briefings, and institutional collaboration.",
};

const emailRoles: Record<string, string> = {
  "info@hydrosolpower.com": "General Information",
  "partners@hydrosolpower.com": "Strategic Partnerships",
  "invest@hydrosolpower.com": "Investment & Finance",
  "technology@hydrosolpower.com": "Technology & Engineering",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Engagement"
        title="Contact Information"
        subtitle="Connect with HydroSol"
        lede="For partnership, investment, technical, institutional, media, or research inquiries, please contact the HydroSol team directly."
      />

      <section className="bg-mist">
        <div className="container-x py-16 sm:py-24">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-[16px] leading-[1.7] text-body sm:text-[17px]">
              We welcome engagement from governments, development institutions, United
              Nations agencies, international organizations, investors, manufacturers,
              universities, research institutions, humanitarian organizations,
              foundations, private-sector enterprises, community organizations, and
              prospective pilot partners.
            </p>
          </Reveal>

          <Stagger className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
            {site.emails.map((email) => (
              <StaggerItem key={email}>
                <a
                  href={`mailto:${email}`}
                  className="hairline-card group flex h-full items-center gap-4 p-6 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_14px_36px_rgba(18,59,109,0.1)]"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Mail className="size-5" />
                  </span>
                  <span>
                    <span className="block text-[12.5px] font-medium uppercase tracking-wide text-body/60">
                      {emailRoles[email]}
                    </span>
                    <span className="text-[15px] font-semibold text-navy">{email}</span>
                  </span>
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal>
            <p className="mx-auto mt-10 flex items-center justify-center gap-2.5 text-[15px] font-semibold text-navy">
              <span className="grid size-9 place-items-center rounded-lg bg-leaf-soft text-leaf-deep">
                <Globe className="size-4.5" />
              </span>
              www.hydrosolpower.com
            </p>
          </Reveal>

          <Reveal>
            <p className="display-font mt-14 text-center text-[17px] font-medium text-navy/60">
              {site.motto} · {site.secondary}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
