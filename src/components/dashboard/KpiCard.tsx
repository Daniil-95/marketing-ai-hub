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
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold">
        {value}
      </h3>

      <span
        className={`mt-3 inline-block text-sm font-medium ${
          isPositive
            ? "text-green-600"
            : "text-red-600"
        }`}
      >
        {change}
      </span>
    </div>
  );
}