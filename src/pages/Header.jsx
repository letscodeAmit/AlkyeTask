import React, { useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    };

    if (isDrawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen, closeDrawer]);

  return (
    <nav className="md:block sticky top-12 z-10">
      <div className="flex items-center justify-between h-0 lg:h-16 mx-4 gap-4 md:mx-16">
        <div className="relative z-64 md:hidden ">
          <button
            className="menu-icon relative md:z-64 focus:outline-none"
            onClick={toggleDrawer}
          >
            <Menu size={36} color="white" strokeWidth={3} />
          </button>
        </div>

        <div className="hidden md:flex justify-between space-x-14 items-center text-white">
          <h1 className="font-medium text-base">PROJECTS</h1>
          <h1 className="font-medium text-base">EXPERTISE</h1>
          <h1 className="font-medium text-base">ABOUT US</h1>
          <h1 className="font-medium text-base">PEOPLE</h1>
        </div>

        <div className="flex-grow flex justify-center lg:mr-80 ">
          <img className="h-12 lg:h-28" alt="Logo" src="/Header_logo.png" />
        </div>

        <div className="hidden md:flex space-x-14 items-center text-white">
          <h1 className="font-medium text-base">CAREERS</h1>
          <h1 className="font-medium text-base">AU</h1>
        </div>

        <div className="border-b border-white mt-2"></div>
      </div>

      {isDrawerOpen && (
        <aside className="fixed top-0 left-0 z-40 h-screen w-full ">
          <div
            ref={drawerRef}
            className="absolute bg-slate-50  bg-opacity-90 space-y-4 py-7 pl-6 shadow-2xl top-0 left-0 text-black rounded-lg text-xs w-44 lg:hidden"
          >
            <button
              onClick={closeDrawer}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            <h1
              className="font-medium text-base cursor-pointer transition-colors duration-300 hover:text-[#F36F2B]"
              onClick={closeDrawer}
            >
              PROJECTS
            </h1>
            <h1
              className="font-medium text-base cursor-pointer transition-colors duration-300 hover:text-[#F36F2B]"
              onClick={closeDrawer}
            >
              EXPERTISE
            </h1>
            <h1
              className="font-medium text-base cursor-pointer transition-colors duration-300 hover:text-[#F36F2B]"
              onClick={closeDrawer}
            >
              ABOUT US
            </h1>
            <h1
              className="font-medium text-base cursor-pointer transition-colors duration-300 hover:text-[#F36F2B]"
              onClick={closeDrawer}
            >
              PEOPLE
            </h1>
            <h1
              className="font-medium text-base cursor-pointer transition-colors duration-300 hover:text-[#F36F2B]"
              onClick={closeDrawer}
            >
              CAREERS
            </h1>
            <h1
              className="font-medium text-base cursor-pointer transition-colors duration-300 hover:text-[#F36F2B]"
              onClick={closeDrawer}
            >
              AU
            </h1>
          </div>
        </aside>
      )}

      <div className="md:block hidden border-b border-b-slate-200 mt-8"></div>
    </nav>
  );
};

export default Header;
