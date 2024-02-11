import React from "react";
import { Link } from "react-router-dom";
import {
  GITHUB_LINK,
  YOUTUBE_GIT_URL,
  TODO_GIT_URL,
  TODO_HOSTED_URL,
  MOVIE_GIT_URL,
  MOVIE_HOSTED_URL,
} from "../utils/constants";

const ProjectCard = () => {
  return (
    <div className="pt-10">
      <section className="text-center bg-gray-100 p-4 md:mx-36 mb-10 rounded-3xl">
        <h1 className="text-2xl font-bold p-4 text-slate-700">
          Video Streaming App - YouTube Clone
        </h1>
        <p className="p-5  md:text-xl">
          This is a clone of the popular video-sharing platform YouTube,
          developed as a part of Akshay Saini's Namaste React course. It is
          built using modern front-end technologies, including React, Redux
          Toolkit, TailwindCSS, and other libraries.
        </p>
        <p className=" ">
          <span className="  md:text-white  md:bg-gray-700 md:p-2 text:sm p-1 rounded-lg">
            <span className="font-bold  text:sm">Tech Stack</span> - React,
            Redux, TailwindCSS, Shimmer UI
          </span>
        </p>
        <div className="pt-5">
          <button className="bg-gray-800 text-white p-1 border border-gray-800 rounded-lg ">
            <Link
              to={YOUTUBE_GIT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
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

      <section className="text-center border p-4 md:mx-36 mb-10 rounded-3xl">
        <h1 className="text-2xl font-bold p-4 text-slate-700">
          Food ordering App - FoodiiFi (Swiggy-Clone)
        </h1>
        <p className="p-5  md:text-xl">
          The food ordering app project utilized Swiggy data for practice
          purposes and implemented dynamic routing, custom hooks, and code
          splitting using Parcel.js for optimal performance. Shimmer UI was
          utilized for real-time updates via APIs and asynchronous requests. The
          project helped expand knowledge in web development and provided
          valuable experience in building a user-friendly and practical
          application.
        </p>
        <p className=" ">
          <span className="md:text-white md:bg-gray-700 p-2 rounded-lg">
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

      <section className="text-center bg-gray-100 p-4 md:mx-36 mb-10 rounded-3xl">
        <h1 className="text-2xl font-bold p-4 text-slate-700">TODO APP</h1>
        <p className="p-5  md:text-xl">
          I developed a Todo App using React and efficiently managed the state
          through the{" "}
          <span
            className="
         font-bold"
          >
            CONTEXT API
          </span>
          . By implementing the Context API, I showcased my ability to maintain
          a scalable and well-organized state management system, enhancing the
          application's performance and maintainability. Add Todo's Delete &
          also Editable all the functionality works fine.
        </p>
        <p className=" ">
          <span className="  md:text-white  md:bg-gray-700 md:p-2 text:sm p-1 rounded-lg">
            <span className="font-bold  text:sm">Tech Stack</span> - React,
            Context API, & TailwindCSS
          </span>
        </p>
        <div className="pt-5">
          <button className="bg-gray-800 text-white p-1 border border-gray-800 rounded-lg ">
            <Link to={TODO_GIT_URL} target="_blank" rel="noopener noreferrer">
              View Source
            </Link>
          </button>
          <button className="border border-gray-800 p-1 mx-2 rounded-lg ">
            <Link
              to={TODO_HOSTED_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              live Demo
            </Link>
          </button>
        </div>
      </section>

      <section className="text-center border p-4 md:mx-36 mb-10 rounded-3xl">
        <h1 className="text-2xl font-bold p-4 text-slate-700">
          Movie Recommendation App
        </h1>
        <p className="p-5  md:text-xl">
          The food ordering app project utilized Swiggy data for practice I have
          developed a movies information web application using React, Redux, and
          SCSS. The application fetches data from The Movie Database (TMDb) API
          to provide comprehensive details about movies. By utilizing React, I
          built a responsive and interactive user interface that allows users to
          search for movies, view their details, and explore related
          information. The Redux library was incorporated to manage the
          application's state, enabling efficient data handling and seamless
          updates across different components. With Redux, I ensured a
          centralized data flow and implemented actions and reducers to handle
          user interactions and API requests.
        </p>
        <p className=" ">
          <span className="md:text-white md:bg-gray-700 p-2 rounded-lg">
            <span className="font-bold ">Tech Stack</span>- React, Redux,
            React-Router-Dom, Custome Hooks, SCSS
          </span>
        </p>
        <div className="pt-5">
          <button className="bg-gray-800 text-white p-1 border border-gray-800 rounded-lg ">
            <Link to={MOVIE_GIT_URL} target="_blank" rel="noopener noreferrer">
              View Source
            </Link>
          </button>
          <button className="border border-gray-800 p-1 mx-2 rounded-lg ">
            <Link to={MOVIE_HOSTED_URL} target="_blank" rel="noopener noreferrer">
              live Demo
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
