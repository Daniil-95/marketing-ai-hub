import KpiCard from "./KpiCard";
import { kpiData } from "@/data/dashboard-data";

export default function KpiGrid() {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {kpiData.map((item) => (
          <KpiCard
            key={item.title}
            title={item.title}
            value={item.value}
            change={item.change}
          />
        ))}
      </div>
    </section>
  );
}