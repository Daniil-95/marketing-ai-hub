import { chartData } from "@/data/dashboard-data";

export default function ResultsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="border-b border-zinc-800 text-sm text-zinc-400">
            <th className="pb-3">Měsíc</th>
            <th className="pb-3">Návštěvy</th>
            <th className="pb-3">Konverze</th>
            <th className="pb-3">PNO</th>
          </tr>
        </thead>

        <tbody>
          {chartData.map((row) => (
            <tr
              key={row.month}
              className="border-b border-zinc-800/50 transition-colors hover:bg-zinc-900/50"
            >
              <td className="py-4">{row.month}</td>

              <td className="py-4">
                {row.visits.toLocaleString("cs-CZ")}
              </td>

              <td className="py-4">
                {row.conversions}
              </td>

              <td className="py-4">
                {row.pno} %
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}