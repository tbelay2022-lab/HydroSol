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
  "info@hydrosol.energy": "General Enquiries",
  "partners@hydrosol.energy": "Partnerships",
  "invest@hydrosol.energy": "Investment & Finance",
  "technology@hydrosol.energy": "Engineering & Technology",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        tintBelow
        eyebrow="Contact & Engagement"
        title="Contact the HydroSol Team"
        subtitle="Connect with HydroSol"
        lede="Whether you are interested in engineering collaboration, independent validation, pilot projects, manufacturing partnerships, strategic investment, or implementation initiatives, we welcome the opportunity to begin a conversation."
      />

      <section className="bg-mist">
        <div className="container-x pb-10 pt-3 sm:pb-14 sm:pt-4">
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-[16px] leading-[1.7] text-body sm:text-[17px]">
              HydroSol welcomes enquiries from governments, universities, research
              institutions, manufacturers, development organizations, investors,
              engineering professionals, and communities seeking collaboration,
              validation, deployment, or implementation opportunities.
            </p>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-8 max-w-2xl text-center text-[15px] font-medium text-navy">
              Contact the HydroSol team through the following addresses:
            </p>
          </Reveal>

          <Stagger className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
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
            <p className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-2.5 text-center text-[15px] font-semibold text-navy">
              <span className="grid size-9 place-items-center rounded-lg bg-leaf-soft text-leaf-deep">
                <Globe className="size-4.5" />
              </span>
              Website:&nbsp;
              <span className="text-brand">www.hydrosol.energy</span>
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
