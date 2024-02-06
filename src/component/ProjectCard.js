import React from "react";
import { Link } from "react-router-dom";
import { GITHUB_LINK } from "../utils/constants";

const ProjectCard = () => {
  return (
    <div className="pt-10">
      <section className="text-center bg-gray-100 p-4 mx-36 mb-10 rounded-3xl">
        <h1 className="text-2xl font-bold p-4">
          Video Streaming App - YouTube Clone
        </h1>
        <p className="p-5 text-xl">
          This is a clone of the popular video-sharing platform YouTube,
          developed as a part of Akshay Saini's Namaste React course. It is
          built using modern front-end technologies, including React, Redux
          Toolkit, TailwindCSS, and other libraries.
        </p>
        <p className=" text-white">
          <span className="bg-gray-700 p-2 rounded-lg">
            <span className="font-bold ">Tech Stack</span>- React, Redux,
            TailwindCSS, Shimmer UI
          </span>
        </p>
        <div className="pt-5">
          <button className="bg-gray-800 text-white p-1 border border-gray-800 rounded-lg ">
            <Link to={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              View Source
            </Link>
          </button>
          <button className="border border-gray-800 p-1 mx-2 rounded-lg ">
            <Link to={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              live Demo
            </Link>
          </button>
        </div>
      </section>
      
      <section className="text-center border p-4 mx-36 mb-10 rounded-3xl">
        <h1 className="text-2xl font-bold p-4">
          Food ordering App - FoodiiFi (Swiggy-Clone)
        </h1>
        <p className="p-5 text-xl">
        The food ordering app project utilized Swiggy data for practice purposes and implemented dynamic routing, custom hooks, and code splitting using Parcel.js for optimal performance. Shimmer UI was utilized for real-time updates via APIs and asynchronous requests. The project helped expand knowledge in web development and provided valuable experience in building a user-friendly and practical application.
        </p>
        <p className=" text-white">
          <span className="bg-gray-700 p-2 rounded-lg">
            <span className="font-bold ">Tech Stack</span>- React, Redux,
            TailwindCSS, React-Router-Dom
          </span>
        </p>
        <div className="pt-5">
          <button className="bg-gray-800 text-white p-1 border border-gray-800 rounded-lg ">
            <Link to={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              View Source
            </Link>
          </button>
          <button className="border border-gray-800 p-1 mx-2 rounded-lg ">
            <Link to={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
              live Demo
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
