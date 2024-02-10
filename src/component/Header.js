import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <div className="flex justify-center md:justify-between bg-white shadow-xl flex-wrap  md:flex-nowrap p-5 sticky top-0">
      <div className="p-2">
        <p className="text-3xl font-bold text-slate-800">
          <Link to="/">Bhavesh Wagh</Link>
        </p>
      </div>
      <div className="flex">
        <ul className=" flex gap-4 p-2 justify-center ">
          <li
            className={` px-4 py-2 rounded-lg cursor-pointer ${
              location.pathname === "/" ? "bg-gray-300" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={` px-4 py-2 rounded-lg cursor-pointer ${
              location.pathname === "/project"
                ? "bg-gray-300 text-semibold"
                : ""
            }`}
          >
            <Link to="/project">Project</Link>
          </li>
          <li
            className={` px-4 py-2 rounded-lg cursor-pointer ${
              location.pathname === "/about" ? "bg-gray-300" : ""
            }`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={` px-4 py-2 rounded-lg cursor-pointer ${
              location.pathname === "/contact" ? "bg-gray-300" : ""
            }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
