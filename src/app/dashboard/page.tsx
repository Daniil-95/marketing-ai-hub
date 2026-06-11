import KpiGrid from "@/components/dashboard/KpiGrid";
import DashboardCard from "@/components/dashboard/DashboardCard";
import TrafficChart from "@/components/dashboard/TrafficChart";
import RevenueChart from "@/components/dashboard/RevenueChart";
import ConversionChart from "@/components/dashboard/ConversionChart";
import ResultsTable from "@/components/dashboard/ResultsTable";

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
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

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-400">
          Období: <span className="font-medium text-white">Leden – Červen 2026</span>
        </div>
      </div>

      <KpiGrid />

      <div className="mt-10 space-y-6">
        <DashboardCard title="Graf návštěvnosti">
          <TrafficChart />
        </DashboardCard>

        <div className="grid gap-6 lg:grid-cols-2">
          <DashboardCard title="Náklady vs Obrat">
            <RevenueChart />
          </DashboardCard>

          <DashboardCard title="Vývoj konverzí">
            <ConversionChart />
          </DashboardCard>
        </div>

        <DashboardCard title="Výsledky kampaní">
          <ResultsTable />
        </DashboardCard>
      </div>
    </section>
  );
}