"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { chartData } from "@/data/dashboard-data";

export default function TrafficChart() {
  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <LineChart
        data={chartData}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0,
        }}
      >
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
          width={40}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#18181b",
            border: "1px solid #3f3f46",
            borderRadius: "12px",
          }}
          labelStyle={{
            color: "#ffffff",
          }}
        />

        <Line
          type="monotone"
          dataKey="visits"
          stroke="#8b5cf6"
          strokeWidth={3}
          dot={false}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}