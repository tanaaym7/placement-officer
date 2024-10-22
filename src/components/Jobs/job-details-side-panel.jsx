import { X } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export default function JobDetailsSidePanel({ job, onClose }) {
  if (!job) {
    return null;
  }

  return (
    <div className="fixed inset-y-0 right-0 w-1/2 bg-white shadow-lg p-6 overflow-y-auto job-details-scrollbar">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Job Details</h2>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <div className="flex items-center mt-2">
            <FcGoogle className="h-8 w-8 mr-2" />
            <span className="font-medium">{job.company}</span>
          </div>
        </div>
        <Card>
          <CardContent className="p-4 grid grid-cols-4">
            <div>
              <p className="text-sm text-gray-500">Package</p>
              <p className="font-medium">{job.package}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Locations</p>
              <p className="font-medium">{job.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Drive Date</p>
              <p className="font-medium">{job.driveDate}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Apply before</p>
              <p className="font-medium">{job.applyBefore}</p>
            </div>
            <div className="col-span-4 mt-6">
              <p className="text-sm text-gray-500">Programs & Criteria</p>
            </div>

            {job.programs.map((program, index) => (
              <div key={index} className="">
                <p className="font-medium">{program}</p>
                <p className="text-sm font-medium">CGPA : {job.cgpa}</p>
                <p className="text-sm font-medium">
                  Previous Backlog : {job.previousBacklog}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="flex space-x-4">
          <div className="bg-gray-100 rounded-full px-4 py-2">
            <span className="font-medium">{job.applicants}</span> Applicants
          </div>
          <div className="bg-gray-100 rounded-full px-4 py-2">
            <span className="font-medium">{job.matched}</span> Matched
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <p className="text-sm">{job.about}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 rounded-full px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Preferred Qualification</h4>
          <ul className="list-disc list-inside text-sm">
            {job.preferredQualifications.map((qualification, index) => (
              <li key={index}>{qualification}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
