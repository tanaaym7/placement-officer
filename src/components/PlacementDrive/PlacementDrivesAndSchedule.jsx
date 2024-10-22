import { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Edit,
  CalendarIcon,
  X,
} from "lucide-react";

function InterviewSchedule() {
  const [centerDate, setCenterDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const dateRange = [-2, -1, 0, 1, 2].map((offset) =>
    addDays(centerDate, offset)
  );

  const interviews = [
    { time: "09:00 - 11:00", candidates: ["Adam Fernando", "Jason", "Emily"] },
    { time: "11:00 - 13:00", candidates: ["Adam Fernando", "Jason", "Emily"] },
    { time: "13:00 - 15:00", candidates: ["Adam Fernando", "Jason", "Emily"] },
    { time: "15:00 - 17:00", candidates: ["Adam Fernando", "Jason", "Emily"] },
    { time: "17:00 - 19:00", candidates: ["Adam Fernando", "Jason", "Emily"] },
  ];

  const scrollDates = (direction) => {
    const newDate =
      direction === "forward" ? addDays(centerDate, 5) : subDays(centerDate, 5);
    setCenterDate(newDate);
    setSelectedDate(newDate);
  };

  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      setCenterDate(date);
      setIsCalendarOpen(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto  ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-xl font-bold">Interview Schedule</CardTitle>
        <div className="flex space-x-2">
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-purple-600"
              >
                <CalendarIcon className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                defaultMonth={selectedDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-purple-600"
          >
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollDates("backward")}
            className="text-purple-600"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {dateRange.map((date, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center w-10 h-10 rounded-full ${
                format(date, "yyyy-MM-dd") ===
                format(selectedDate, "yyyy-MM-dd")
                  ? "bg-purple-600 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
              onClick={() => handleDateSelect(date)}
            >
              <span className="text-xs">{format(date, "EEE")}</span>
              <span className="text-sm font-semibold">
                {format(date, "dd")}
              </span>
            </button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => scrollDates("forward")}
            className="text-purple-600"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div>
          <h3 className="font-semibold text-center text-gray-800">
            {format(selectedDate, "MMMM d, yyyy")}
          </h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            15 Candidates
          </p>
          {interviews.map((interview, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-24 text-sm font-medium text-gray-600">
                {interview.time.split(" - ")[0]}
              </div>
              <div className="flex-grow bg-gray-100 rounded-md p-2 flex items-center space-x-2">
                <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
                <div className="flex -space-x-2 mr-2">
                  {interview.candidates.map((candidate, i) => (
                    <Avatar key={i} className="w-6 h-6 border-2 border-white">
                      <AvatarImage
                        src={`/placeholder.svg?text=${candidate[0]}`}
                      />
                      <AvatarFallback>{candidate[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  {interview.candidates.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function PlacementDrivesAndSchedule() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const placementDrives = [
    {
      company: "Google Technology Company",
      college: "Computer College",
      designation: "Software Engineer",
      package: "20-29K Yearly",
      driveDate: "23rd June 2024",
      applyBefore: "23rd June 2024",
    },
    {
      company: "Microsoft Corporation",
      college: "Tech Institute",
      designation: "Data Scientist",
      package: "25-35K Yearly",
      driveDate: "25th June 2024",
      applyBefore: "24th June 2024",
    },
    {
      company: "Amazon Web Services",
      college: "Engineering University",
      designation: "Cloud Architect",
      package: "30-40K Yearly",
      driveDate: "27th June 2024",
      applyBefore: "26th June 2024",
    },
    {
      company: "Apple Inc.",
      college: "Design Academy",
      designation: "UX Designer",
      package: "22-32K Yearly",
      driveDate: "29th June 2024",
      applyBefore: "28th June 2024",
    },
    {
      company: "Facebook",
      college: "Social Media Institute",
      designation: "Full Stack Developer",
      package: "28-38K Yearly",
      driveDate: "1st July 2024",
      applyBefore: "30th June 2024",
    },
  ];

  const cardsPerPage = 3;
  const totalPages = Math.ceil(placementDrives.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentDrives = placementDrives.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6  min-h-screen relative ">
      {/* Toggle button for Interview Schedule on smaller screens */}

      <Button
        variant="outline"
        className="ml-auto  lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Interview Schedule
      </Button>

      {/* Placement Drives List */}
      <Card className="flex-1 ">
        <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0 pb-6">
          <CardTitle className="text-xl font-bold">
            List of Placement Drives
          </CardTitle>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input className="pl-8 pr-4 py-2 w-full" placeholder="Search" />
            </div>
            <Select defaultValue="upcoming">
              <SelectTrigger className="w-full sm:w-[120px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="past">Past</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {currentDrives.map((drive, index) => (
            <Card key={index} className="mb-4 shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt={drive.company}
                      />
                      <AvatarFallback>{drive.company[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{drive.company}</h3>
                      <p className="text-sm text-gray-500">{drive.college}</p>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="text-purple-600 bg-purple-100 hover:text-purple-800 hove:bg-purple-50"
                  >
                    View Details
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Designation</p>
                    <p className="font-medium">{drive.designation}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Package</p>
                    <p className="font-medium">{drive.package}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Drive Date</p>
                    <p className="font-medium">{drive.driveDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Apply Before</p>
                    <p className="font-medium">{drive.applyBefore}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="flex items-center justify-between mt-4">
            <Button
              variant="outline"
              size="sm"
              className="text-gray-600"
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <span className="text-sm text-gray-500">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="text-gray-600"
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Interview Schedule */}
      <div
        className={`w-full  lg:w-1/3 fixed lg:relative top-0 right-0 h-full z-40 transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 bg-black/80"
            : "translate-x-full lg:translate-x-0"
        }`}
      >
        <Button
          variant="destructive"
          size="icon"
          className="absolute top-4 right-4 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-4 w-4" />
        </Button>
        <div className="overflow-y-auto h-full flex items-center justify-center">
          <InterviewSchedule />
        </div>
      </div>
    </div>
  );
}
