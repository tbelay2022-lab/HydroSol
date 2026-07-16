import { TrendingUp, Users } from "lucide-react";
import { CountUp } from "@/components/CountUp";

const stats = [
  {
    icon: Users,
    render: () => <CountUp to={2.3} decimals={1} suffix="B" className="gradient-text" />,
    label: "people seeking reliable productive infrastructure across the Global South",
  },
  {
    icon: TrendingUp,
    render: () => (
      <CountUp to={100} prefix="US$" suffix="B+" className="gradient-text" />
    ),
    label: "market opportunity across the productive infrastructure ecosystem",
  },
];

export function OpportunityStats() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-line bg-white shadow-[0_16px_48px_rgba(18,59,109,0.07)]">
      <div className="dot-grid-light pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="p-8 sm:p-9">
            <span className="grid size-11 place-items-center rounded-xl bg-leaf-soft text-leaf-deep">
              <s.icon className="size-5" />
            </span>
            <p className="display-font mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {s.render()}
            </p>
            <p className="mt-3 text-[14px] leading-snug text-body/80">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
