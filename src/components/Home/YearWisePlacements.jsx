import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

const placementData = [
  { year: "2019", students: 186, courses: 80 },
  { year: "2020", students: 305, courses: 200 },
  { year: "2021", students: 237, courses: 120 },
  { year: "2022", students: 73, courses: 190 },
  { year: "2023", students: 209, courses: 130 },
  { year: "2024", students: 214, courses: 140 },
];
const chartConfig = {
  students: {
    label: "students",
    color: "hsl(var(--chart-1))",
  },
  courses: {
    label: "courses",
    color: "hsl(var(--chart-2))",
  },
};
const YearWisePlacements = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center">
          Year Wise Placements
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0 mt-4">
        <ResponsiveContainer width="100%" height={250}>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={placementData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="year"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                padding={{ left: 30, right: 30 }}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="students"
                type="monotone"
                stroke={chartConfig.students.color}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
              <Line
                dataKey="courses"
                type="monotone"
                stroke={chartConfig.courses.color}
                strokeWidth={2}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default YearWisePlacements;
