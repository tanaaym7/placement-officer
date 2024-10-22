import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#9D4EDD", "#F4F3F4"];

export default function PlacementPercentage() {
  const [year, setYear] = useState("2017");

  // New data object with different percentages for each year
  const yearData = {
    2017: { placed: 70, notPlaced: 30 },
    2018: { placed: 75, notPlaced: 25 },
    2019: { placed: 80, notPlaced: 20 },
  };

  // Generate chart data based on selected year
  const data = [
    { name: "Placed", value: yearData[year].placed },
    { name: "Not Placed", value: yearData[year].notPlaced },
  ];

  return (
    <Card className="size-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          Placement Percentage
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex justify-between gap-2 items-center">
          <div>
            <h3 className="text-2xl font-bold">Year Wise</h3>
            <p className="text-sm text-gray-500">
              In that showing acquired of skills related this student.
            </p>
          </div>
          <Select value={year} onValueChange={setYear}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2017">2017</SelectItem>
              <SelectItem value="2018">2018</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="h-[200px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
                style={{ outline: "none" }}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? COLORS[0] : "#f3f4f6"}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-4xl font-bold">{yearData[year].placed}%</p>
            <p className="text-sm text-gray-500">{year}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
