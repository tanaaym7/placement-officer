// import { Link, useLocation } from "react-router-dom";

// const navItems = [
//   { to: "/", label: "Overview" },
//   { to: "/jobs", label: "Jobs" },
//   { to: "/students", label: "Students" },
//   { to: "/placement-drive", label: "Placement Drive" },
//   { to: "#", label: "Analyse" },
// ];

// const NavItem = ({ to, label, isActive }) => (
//   <li className="relative">
//     <Link
//       to={to}
//       className={`text-gray-700 hover:text-purple-600 ${
//         isActive ? "text-purple-600" : ""
//       }`}
//     >
//       {label}
//     </Link>
//     {isActive && (
//       <div className="absolute -bottom-1 left-0 w-full h-1 bg-purple-600 rounded-full"></div>
//     )}
//   </li>
// );

// const Navbar = () => {
//   const location = useLocation();

//   return (
//     <nav className="bg-white shadow-md">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-center py-3">
//           <div className="text-xl font-bold">
//             <Link to="/">
//               <img src="./logo.png" alt="logo" className="w-32" />
//             </Link>
//           </div>
//           <ul className="flex space-x-20">
//             {navItems.map((item) => (
//               <NavItem
//                 key={item.to}
//                 {...item}
//                 isActive={location.pathname === item.to}
//               />
//             ))}
//           </ul>
//           <div className="flex items-center space-x-4">
//             {/* Notification icon and profile picture */}
//             <div className="relative">
//               <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-purple-600"></span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//                 />
//               </svg>
//             </div>
//             <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/jobs", label: "Jobs" },
  { to: "/students", label: "Students" },
  { to: "/placement-drive", label: "Placement Drive" },
  { to: "#", label: "Analyse" },
];

const NavItem = ({ to, label, isActive, isOpen, onClick }) => (
  <li className="relative">
    <Link
      to={to}
      className={`text-gray-700 hover:text-purple-600 ${
        isActive ? "text-purple-600" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
    {isActive && !isOpen && (
      <div className="absolute -bottom-1 left-0 w-full h-1 bg-purple-600 rounded-full"></div>
    )}
  </li>
);

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md px-4 sm:p-0">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 ">
            <Link to="/">
              <img src="./logo.png" alt="logo" className="w-32" />
            </Link>
          </div>
          <div className="flex items-center ">
            <div className="hidden lg:block">
              <ul className="flex space-x-20">
                {navItems.map((item) => (
                  <NavItem
                    key={item.to}
                    {...item}
                    isActive={location.pathname === item.to}
                    isOpen={isOpen}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="p-1 rounded-full text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
              </button>
              <div className="ml-3 relative">
                <div>
                  <button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <Button variant="outline" onClick={toggleMenu}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavItem
                  key={item.to}
                  {...item}
                  isActive={location.pathname === item.to}
                  isOpen={isOpen}
                  onClick={closeMenu}
                />
              ))}
            </ul>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0 ">
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="profile picture"
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-none text-white">
                  Tom Cook
                </div>
                <div className="text-sm font-medium leading-none text-gray-400">
                  tom@example.com
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="ml-auto rounded-full"
              >
                <Bell className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
