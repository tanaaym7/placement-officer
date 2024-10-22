import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState, useEffect, useRef } from "react";

const data = [
  { name: "B.COM", value: 30, color: "hsl(var(--chart-1))" },
  { name: "BA", value: 15, color: "hsl(var(--chart-4))" },
  { name: "English", value: 25, color: "hsl(var(--chart-2))" },
  { name: "B.COM", value: 20, color: "hsl(var(--chart-3))" },
  { name: "B.SC", value: 10, color: "hsl(var(--chart-5))" },
  { name: "B.COM", value: 30, color: "hsl(var(--chart-1))" },
  { name: "BA", value: 15, color: "hsl(var(--chart-4))" },
  { name: "English", value: 25, color: "hsl(var(--chart-2))" },
  { name: "B.COM", value: 20, color: "hsl(var(--chart-3))" },
  { name: "B.SC", value: 10, color: "hsl(var(--chart-5))" },
];

const chartConfig = {
  ...Object.fromEntries(
    data.map((item) => [item.name, { label: item.name, color: item.color }])
  ),
};

export default function StudentDistribution() {
  const [chartSize, setChartSize] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setChartSize(Math.min(width, height));
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const outerRadius = chartSize * 0.4;

  return (
    <div>
      <Card className="w-full max-w-3xl">
        <CardContent className="flex flex-col md:flex-row items-center justify-between">
          <div ref={containerRef} className="w-full md:w-1/2 aspect-square">
            <ChartContainer config={chartConfig} className="w-full h-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={outerRadius}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>
          <div className="w-full md:w-1/2 pl-4">
            <h3 className="text-2xl font-semibold mb-2">
              Student Subject List
            </h3>
            <p className="text-md text-gray-500 mb-6">
              In that showing acquired of skills related this student.
            </p>
            <div className="grid grid-cols-3 gap-y-4">
              {data.map((entry, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-sm font-medium">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
