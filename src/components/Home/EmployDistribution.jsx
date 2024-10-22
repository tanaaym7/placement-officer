import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUpRight } from "lucide-react";

const data = [
  { course: "B.Sc", percentage: 65 },
  { course: "B.Tech", percentage: 40 },
  { course: "B.Com", percentage: 45 },
];

const DistributionBar = ({ course, percentage }) => (
  <div className="flex items-center space-x-4 mb-6">
    <div className="w-16 text-sm font-medium">{course}</div>
    <div className="flex-grow">
      <Progress
        value={percentage}
        className="h-6 bg-gray-200"
        indicatorColor="bg-purple-400"
      />
    </div>
    <div className="w-12 text-sm font-medium text-right">{percentage}%</div>
  </div>
);

const EmployDistributionChart = () => {
  const bestCourse = data.reduce((prev, current) =>
    prev.percentage > current.percentage ? prev : current
  );

  return (
    <Card className="w-full max-w-3xl py-6 ">
      <CardContent className="size-full flex flex-col gap-8">
        <div className="mb-6">
          <div className="text-sm text-gray-500">Best Emp ID Distribution</div>
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">{bestCourse.course}</div>
            <div className="flex items-center text-purple-500 bg-purple-100 rounded-md p-2">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              <span className="font-medium">
                {bestCourse.percentage.toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <DistributionBar
              key={index}
              course={item.course}
              percentage={item.percentage}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployDistributionChart;
