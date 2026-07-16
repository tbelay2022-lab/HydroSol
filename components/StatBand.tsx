import { CountUp } from "@/components/CountUp";

const stats = [
  {
    render: () => <CountUp to={2.3} decimals={1} suffix="B" />,
    label: "people still live beyond reliable productive infrastructure",
  },
  {
    render: () => <CountUp to={6} />,
    label: "interconnected development challenges — one integrated journey",
  },
  {
    render: () => <CountUp to={100} prefix="US$" suffix="B+" />,
    label: "productive infrastructure market opportunity",
  },
];

export function StatBand() {
  return (
    <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-8 sm:p-10">
          <p className="display-font text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {s.render()}
          </p>
          <p className="mt-3 text-[14px] leading-snug text-ink/60">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
