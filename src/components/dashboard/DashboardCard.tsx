type DashboardCardProps = {
  title: string;
  children: React.ReactNode;
};

export default function DashboardCard({
  title,
  children,
}: DashboardCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <h2 className="mb-6 text-lg font-semibold text-white">
        {title}
      </h2>

      {children}
    </div>
  );
}