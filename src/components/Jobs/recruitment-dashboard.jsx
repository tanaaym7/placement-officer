import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import AddCompanyPopup from "./add-company-popup";
import JobDetailsSidePanel from "./job-details-side-panel";
import { FcGoogle } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";

const companies = [
  {
    id: 1,
    name: "Google",
    logo: <FcGoogle className="h-10 w-10" />,
    recruiterName: "Kevin De Alwis",
    recruiterEmail: "kevin394@gmail.com",
    recruiterMobile: "+945 5959969",
    openings: 23,
    shortlisted: 23,
    interviewed: 23,
    offered: 23,
  },
  {
    id: 2,
    name: "Meta",
    logo: <FaMeta className="h-10 w-10 text-blue-500" />,
    recruiterName: "Kevin De Alwis",
    recruiterEmail: "kevin394@gmail.com",
    recruiterMobile: "+945 5959969",
    openings: 23,
    shortlisted: 23,
    interviewed: 23,
    offered: 23,
  },
];

const jobDetails = {
  title: "Senior UI/UX Designer",
  company: "Google",
  package: "5 Lac Per Annum",
  location: "India, Bangalore",
  driveDate: "13 Aug 2018",
  applyBefore: "13 Aug 2018",
  programs: [
    "B. Tech (Production)",
    "B. Tech (Production)",
    "B. Tech (Production)",
  ],
  cgpa: "6.5",
  previousBacklog: "2",
  applicants: 154,
  matched: 14,
  about:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.",
  skills: [
    "Product Design",
    "UI/UX Design",
    "Prototyping",
    "Interaction Design",
  ],
  preferredQualifications: [
    "5 Years of Work experience is needed for work experience",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum.",
    "Lorem Ipsum is simply dummy",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum",
    "5 Years of Work experience is needed for work experience",
  ],
};

export default function RecruitmentDashboard() {
  const [showAddCompanyPopup, setShowAddCompanyPopup] = useState(false);
  const [showJobDetails, setShowJobDetails] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const statsCards = [
    { title: "Openings", key: "openings" },
    { title: "Shortlisted", key: "shortlisted" },
    { title: "Interviewed", key: "interviewed" },
    { title: "Offered", key: "offered" },
  ];

  const StatsCard = ({ title, value }) => (
    <Card className="bg-gray-50">
      <CardHeader className="p-4">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              List of Recruiting Companies
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              You have 2 Notifications
            </p>
          </div>
          <Button
            onClick={() => setShowAddCompanyPopup(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Add Company
          </Button>
        </div>
        <div className="space-y-6">
          {companies.map((company) => (
            <Card
              key={company.id}
              className="hover:shadow-md transition-shadow duration-200"
            >
              <CardContent className="p-6">
                <div className="py-2">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center space-x-2">
                      {company.logo}
                      <span className="text-lg font-semibold">
                        {company.name}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Recruiter Name</p>
                      <p className="text-base font-semibold">
                        {company.recruiterName}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Recruiter Email</p>
                      <p className="text-base font-semibold">
                        {company.recruiterEmail}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">
                        Recruiter Mobile No.
                      </p>
                      <p className="text-base font-semibold">
                        {company.recruiterMobile}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        variant="outline"
                        className="border-purple-600 text-purple-600 "
                        onClick={() => {
                          setSelectedJob(jobDetails);
                          setShowJobDetails(true);
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="h-[2px] w-full bg-gray-200 my-4"></div>

                <div className="mt-6 grid grid-cols-4 gap-4 w-3/5 mx-auto">
                  {statsCards.map((stat) => (
                    <StatsCard
                      key={stat.key}
                      title={stat.title}
                      value={company[stat.key]}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      {showAddCompanyPopup && (
        <AddCompanyPopup onClose={() => setShowAddCompanyPopup(false)} />
      )}
      {showJobDetails && (
        <JobDetailsSidePanel
          job={selectedJob}
          onClose={() => {
            setShowJobDetails(false);
            setSelectedJob(null);
          }}
        />
      )}
    </div>
  );
}
