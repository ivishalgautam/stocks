"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { rupee } from "@/hooks/Intl";

// Mock data for the chart
const data = [
  { date: "2024-01-01", price: 35.2 },
  { date: "2024-02-01", price: 37.5 },
  { date: "2024-03-01", price: 36.8 },
  { date: "2024-04-01", price: 38.9 },
  { date: "2024-05-01", price: 40.2 },
  { date: "2024-06-01", price: 41.5 },
  { date: "2024-07-01", price: 42.5 },
  { date: "2024-08-01", price: 35.2 },
  { date: "2024-09-01", price: 62.5 },
  { date: "2024-10-01", price: 91.8 },
  { date: "2024-11-01", price: 38.9 },
  { date: "2024-01-12", price: 64.2 },
  { date: "2024-01-13", price: 34.5 },
  { date: "2024-01-14", price: 91.5 },
  { date: "2024-01-15", price: 51.5 },
  { date: "2024-01-17", price: 64.5 },
  { date: "2024-01-18", price: 78.5 },
  { date: "2024-01-19", price: 65.5 },
  { date: "2024-01-20", price: 42.5 },
];

export function UnlistedShareChart() {
  return (
    <ChartContainer
      config={{
        price: {
          label: "Share Price",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tickFormatter={(value) => new Date(value).toLocaleDateString()}
            tickMargin={10}
          />
          <YAxis
            tickFormatter={(value) => `${rupee.format(value.toFixed(2))}`}
            tickMargin={10}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="var(--color-price)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
