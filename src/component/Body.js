import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div>
        <img className="w-1/3 m-auto py-6" src="../../hero.svg" alt="hero" />

        <p className="text-gray-500 text-center text-3xl font-bold">
          I'm Bhavesh Wagh, I'm the
          <span class="text-green-400"> Front-End Web Developer</span>
        </p>
      </div>

      <section className="text-center p-20  my-10 mx-36 bg-gray-100 rounded-3xl">
        <p className="text-2xl texg font-bold">Technologies</p>
        <p className="pt-5">
          I'm familiar with
          <span class="font-bold px-1 text-xl">
            Reactjs, Javascript, Redux-Toolkit, Python, Tailwind-CSS, SQL, HTML,
            CSS, & Git
          </span>
          and Web Hosting.
        </p>
      </section>

      <section className="text-center p-10 mx-36  rounded-3xl border  my-10">
        <p className="text-2xl texg font-bold">Projects</p>
        <p className="pt-5 text-xl">
          I like to showcase my work and thus, you can see my projects hosted
          online.
        </p>
        <div className="pt-8">
          <button className="px-4 py-2 text-xl rounded-lg cursor-pointer bg-green-600 text-white">
            <Link to="/project">See Projects</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Body;
