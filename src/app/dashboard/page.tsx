import KpiGrid from "@/components/dashboard/KpiGrid";

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Marketing Dashboard
        </h1>

        <p className="mt-3 text-slate-600">
          Přehled výkonu marketingových kampaní.
        </p>
      </div>

      <KpiGrid />
    </section>
  );
}