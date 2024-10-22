import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal, ChevronDown } from "lucide-react";

const students = [
  {
    id: 1,
    stNo: 3,
    name: "Kevin D Fernando",
    courses: "English",
    specialisation: "BSc",
    empIndex: 205006065,
  },
  {
    id: 2,
    stNo: 3,
    name: "Kevin D Fernando",
    courses: "English",
    specialisation: "BSc",
    empIndex: 205006065,
  },
  {
    id: 3,
    stNo: 3,
    name: "Kevin D Fernando",
    courses: "English",
    specialisation: "BSc",
    empIndex: 205006065,
  },
  {
    id: 4,
    stNo: 3,
    name: "Kevin D Fernando",
    courses: "English",
    specialisation: "BSc",
    empIndex: 205006065,
  },
  {
    id: 5,
    stNo: 3,
    name: "Kevin D Fernando",
    courses: "English",
    specialisation: "BSc",
    empIndex: 205006065,
  },
];

export default function TopStudents() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">Top Students</CardTitle>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Student List</h3>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              Sort By <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>St No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Courses</TableHead>
                <TableHead>Specialisation</TableHead>
                <TableHead>Emp Index</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{student.stNo}</TableCell>
                  <TableCell className="font-medium">{student.name}</TableCell>
                  <TableCell>{student.courses}</TableCell>
                  <TableCell>{student.specialisation}</TableCell>
                  <TableCell>{student.empIndex}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
