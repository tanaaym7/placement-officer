import EmployDistributionChart from "@/components/Home/EmployDistribution";
import PlacementPercentage from "@/components/Home/PlacementPercentage";
import StudentDistribution from "@/components/Home/StudentDistribution";
import TopPackagesChart from "@/components/Home/TopPackagesChart";
import TopRecruiter from "@/components/Home/TopRecruiter";
import TopStudents from "@/components/Home/TopStudents";
import WelcomeComponent from "@/components/Home/WelcomeComponent";
import YearWisePlacements from "@/components/Home/YearWisePlacements";

const Home = () => {
  return (
    <div className="px-12">
      <WelcomeComponent />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
        <StudentDistribution />
        <EmployDistributionChart />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 py-6">
        <div className="w-full sm:w-[calc(30%-0.5rem)]">
          <PlacementPercentage />
        </div>
        <div className="w-full sm:w-[calc(70%-0.5rem)]">
          <YearWisePlacements />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 py-6">
        <div className="w-full sm:w-[calc(40%-0.5rem)]">
          <TopPackagesChart />
        </div>
        <div className="w-full sm:w-[calc(60%-0.5rem)]">
          <TopRecruiter />
        </div>
      </div>
      <TopStudents />
    </div>
  );
};

export default Home;
