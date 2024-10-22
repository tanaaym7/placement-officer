import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { year: "2020", value: 15 },
  { year: "2021", value: 5 },
  { year: "2022", value: 10 },
  { year: "2023", value: 15 },
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = Math.min(width / 2, height / 2, 20);

  return (
    <g>
      {/* Individual bar background */}
      <rect
        x={x}
        y={0}
        width={width}
        height={200}
        fill="#f3f4f6"
        rx={radius}
        ry={radius}
      />
      {/* Actual bar */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

const CustomCursor = (props) => {
  const { x, y, width, height } = props;
  const customWidth = 52;
  const xOffset = (width - customWidth) / 2;

  return (
    <rect
      x={x + xOffset}
      y={y}
      width={customWidth}
      height={height}
      fill="rgba(0, 0, 0, 0.1)"
      stroke="rgba(1, 1, 1, 0.5)"
      rx={10}
      ry={10}
    />
  );
};

const TopPackagesChart = () => {
  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center">
          Top Packages Last 5 years
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-64 w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barSize={40}
            >
              <CartesianGrid
                horizontal={true}
                vertical={false}
                strokeDasharray="3 3"
                stroke="#e5e7eb"
              />
              <XAxis dataKey="year" axisLine={false} tickLine={false} />
              <YAxis
                axisLine={false}
                tickLine={false}
                ticks={[0, 5, 10, 15, 20]}
                domain={[0, 20]}
                tickFormatter={(value) => `${value}L`}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                cursor={<CustomCursor />}
              />
              <Bar dataKey="value" shape={<CustomBar />} fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TopPackagesChart;
