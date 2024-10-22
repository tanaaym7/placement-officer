import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Legend,
  Area,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
  { month: "May", income: 3, outcome: 6 },
  { month: "June", income: 4, outcome: 7 },
  { month: "July", income: 3.5, outcome: 8 },
  { month: "August", income: 5, outcome: 9 },
  { month: "September", income: 4.5, outcome: 8.5 },
  { month: "October", income: 6, outcome: 10 },
  { month: "November", income: 5.5, outcome: 11 },
  { month: "December", income: 5, outcome: 12 },
];

export default function TopRecruiter() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Top Recruiter</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            income: {
              label: "Income",
              color: "#9D4EDD",
            },
            outcome: {
              label: "Outcome",
              color: "#2377FC",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="25%" stopColor="#9D4EDD" stopOpacity={0.7} />
                  <stop offset="50%" stopColor="#9D4EDD" stopOpacity={0.5} />
                  <stop offset="75%" stopColor="#9D4EDD" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#9D4EDD" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorOutcome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="25%" stopColor="#2377FC" stopOpacity={0.7} />
                  <stop offset="50%" stopColor="#2377FC" stopOpacity={0.5} />
                  <stop offset="75%" stopColor="#2377FC" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#2377FC" stopOpacity={0.2} />
                </linearGradient>
              </defs>

              <Area
                type="monotone"
                dataKey="income"
                stroke="#9D4EDD"
                fillOpacity={0.8}
                fill="url(#colorIncome)"
              />
              <Area
                type="monotone"
                dataKey="outcome"
                stroke="#2377FC"
                fillOpacity={0.8}
                fill="url(#colorOutcome)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
