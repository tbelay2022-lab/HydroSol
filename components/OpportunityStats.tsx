import { Globe2, TrendingUp, Users } from "lucide-react";
import { CountUp } from "@/components/CountUp";

const stats = [
  {
    icon: Users,
    render: () => <CountUp to={2.3} decimals={1} suffix="B+" className="gradient-text" />,
    label: "people facing productive-energy constraints",
  },
  {
    icon: Globe2,
    render: () => <CountUp to={80} className="gradient-text" />,
    label: "countries across the Global South and beyond",
  },
  {
    icon: TrendingUp,
    render: () => (
      <CountUp to={100} prefix="USD " suffix="B+" className="gradient-text" />
    ),
    label: "combined market and development opportunity",
  },
];

export function OpportunityStats() {
  return (
    <div className="ink-panel relative overflow-hidden rounded-3xl">
      <div className="dot-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="p-8 sm:p-9">
            <span className="grid size-11 place-items-center rounded-xl bg-white/10 text-leaf">
              <s.icon className="size-5" />
            </span>
            <p className="display-font mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              {s.render()}
            </p>
            <p className="mt-3 text-[14px] leading-snug text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
