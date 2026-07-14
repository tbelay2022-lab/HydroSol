import type { Metadata } from "next";
import { Globe, Mail } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
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
          <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="max-w-md text-[15.5px] leading-relaxed text-ink/70">
                  We welcome engagement from governments, development institutions, United
                  Nations agencies, international organizations, investors, manufacturers,
                  universities, research institutions, humanitarian organizations,
                  foundations, private-sector enterprises, community organizations, and
                  prospective pilot partners.
                </p>
              </Reveal>
              <Stagger className="mt-9 space-y-3">
                {site.emails.map((email) => (
                  <StaggerItem key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="hairline-card group flex items-center gap-4 p-5 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_12px_32px_rgba(18,59,109,0.09)]"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition-colors group-hover:bg-brand group-hover:text-white">
                        <Mail className="size-5" />
                      </span>
                      <span>
                        <span className="block text-[12.5px] font-medium uppercase tracking-wide text-ink/45">
                          {emailRoles[email]}
                        </span>
                        <span className="text-[15px] font-semibold text-ink">{email}</span>
                      </span>
                    </a>
                  </StaggerItem>
                ))}
                <StaggerItem>
                  <div className="flex items-center gap-4 p-5">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-leaf-soft text-leaf-deep">
                      <Globe className="size-5" />
                    </span>
                    <span className="text-[15px] font-semibold text-ink">
                      www.hydrosolpower.com
                    </span>
                  </div>
                </StaggerItem>
              </Stagger>
            </div>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>

          <Reveal>
            <p className="display-font mt-16 text-center text-[17px] font-medium text-ink/60">
              {site.motto} · {site.secondary}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
