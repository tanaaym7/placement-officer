import { PiStudentDuotone } from "react-icons/pi";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoSparkles } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";

const StatBox = ({ icon: Icon, label, value, color }) => (
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex items-center gap-8 mb-4">
      <div className={`p-3 rounded-xl bg-${color}-100`}>
        <Icon size={24} className={`text-${color}-500`} />
      </div>
      <span className="text-lg font-semibold text-gray-600">{label}</span>
    </div>
    <div className="h-px w-full bg-gray-300 mb-4"></div>
    <p className="text-4xl font-bold text-gray-800">{value}</p>
  </div>
);

export default function WelcomeComponent() {
  return (
    <div className="py-6">
      <p className="text-3xl font-bold mb-2 flex items-center">
        Welcome Back Brandon
        <img
          src="./smiling.gif"
          alt="profile"
          className="w-10 h-10 rounded-full ml-2"
        />
      </p>
      <p className="text-md text-gray-600 mb-6">You have 2 Notifications</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatBox
          icon={PiStudentDuotone}
          label="Student Count"
          value="107"
          color="blue"
        />
        <StatBox
          icon={FaBookOpenReader}
          label="No of Course Offered"
          value="13"
          color="red"
        />
        <StatBox
          icon={IoSparkles}
          label="No of Specializations"
          value="107"
          color="green"
        />
        <StatBox
          icon={FaUserTie}
          label="Overall employability index"
          value="107"
          color="purple"
        />
      </div>
    </div>
  );
}
