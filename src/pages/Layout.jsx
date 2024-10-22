import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-[#f8fafc]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
