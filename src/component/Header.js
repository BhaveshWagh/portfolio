import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between shadow-xl p-5 ">
      <div className="p-2">
        <p className="text-3xl">
          <Link to="/">Bhavesh Wagh</Link>
        </p>
      </div>
      <div className="">
        <ul className="flex gap-4 p-2 ">
          <li className="hover:bg-gray-300  px-4 py-2 rounded-lg cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <Link to="/project">Project</Link>
          </li>
          <li className="hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-gray-300 px-4 py-2 rounded-lg cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
