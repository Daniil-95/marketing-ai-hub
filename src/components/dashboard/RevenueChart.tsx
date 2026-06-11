"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import { chartData } from "@/data/dashboard-data";

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData}>
        <CartesianGrid
          stroke="#27272a"
          strokeDasharray="3 3"
        />

        <XAxis
          dataKey="month"
          stroke="#a1a1aa"
          tickLine={false}
          axisLine={false}
        />

        <YAxis
          stroke="#a1a1aa"
          tickLine={false}
          axisLine={false}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#18181b",
            border: "1px solid #3f3f46",
            borderRadius: "12px",
          }}
        />

        <Legend />

        <Bar
          dataKey="costs"
          name="Náklady"
          radius={[6, 6, 0, 0]}
          fill="#8b5cf6"
        />

        <Bar
          dataKey="revenue"
          name="Obrat"
          radius={[6, 6, 0, 0]}
          fill="#10b981"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}