"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartData } from "@/data/dashboard-data";

export default function ConversionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
          </linearGradient>
        </defs>

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

        <Area
          type="monotone"
          dataKey="conversions"
          stroke="#8b5cf6"
          strokeWidth={3}
          fill="url(#conversionGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}