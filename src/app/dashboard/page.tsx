import KpiGrid from "@/components/dashboard/KpiGrid";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-300">
          Marketing Analytics
        </span>

        <h1 className="mt-5 text-5xl font-bold tracking-tight">
          Marketing Dashboard
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Přehled výkonu marketingových kampaní, návštěvnosti,
          konverzí a návratnosti investic.
        </p>
      </div>

      <KpiGrid />

      <div className="space-y-6">
        <DashboardCard title="Graf návštěvnosti">
          <div className="h-[350px]" />
        </DashboardCard>

        <div className="grid gap-6 lg:grid-cols-2">
          <DashboardCard title="Náklady vs Obrat">
            <div className="h-[300px]" />
          </DashboardCard>

          <DashboardCard title="Vývoj konverzí">
            <div className="h-[300px]" />
          </DashboardCard>
        </div>

        <DashboardCard title="Výsledky kampaní">
          <div className="h-[250px]" />
        </DashboardCard>
      </div>
    </section>
  );
}