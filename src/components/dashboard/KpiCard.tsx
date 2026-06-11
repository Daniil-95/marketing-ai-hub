type KpiCardProps = {
  title: string;
  value: string;
  change: string;
};

export default function KpiCard({
  title,
  value,
  change,
}: KpiCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900 hover:shadow-[0_0_30px_rgba(139,92,246,0.08)]">
      <p className="text-sm font-medium text-zinc-400">
        {title}
      </p>

      <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
        {value}
      </h3>

      <span
        className={`mt-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
          isPositive
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-red-500/10 text-red-400"
        }`}
      >
        <span>{isPositive ? "↗" : "↘"}</span>
        {change}
      </span>
    </div>
  );
}