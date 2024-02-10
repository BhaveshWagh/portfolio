import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-20 text-center">
      <div>
        <img
          className="w-1/4 m-auto "
          src="../../Bhavesh-s-Photo.png"
          alt="img"
        />
        <p className="text-gray-500 mt-10 text-center text-3xl font-bold">
          I'm Bhavesh Wagh, I'm the
          <span class="text-green-400"> Front-End Web Developer</span>
        </p>
      </div>

      <section className="mt-20 bg-gray-100 p-4 md:mx-36 mb-10 rounded-3xl">
        <div>
          <h1 className="text-2xl font-bold text-slate-700">Hire Me</h1>
          <article className="mt-2  md:text-xl p-5">
            <p className="mx-5 ">
              I'm Bhavesh Wagh. I'm a graduated computer engineering student.
              I'm interested in{" "}
              <span className="font-bold text-slate-900"> Full-stack </span> web
              development.
              <br />I have a solid understanding of
              <span className="font-bold text-slate-900">
                {" "}
                Python, JavaScript, React.js, HTML, CSS, Git, and SQL
              </span>
              . I am currently looking for a front-end engineer role both as an
              intern and full-time to increase my learning curve and gain more
              experience.
            </p>
          </article>
        </div>
      </section>

      <section className="text-center border p-4 md:mx-36 mb-10 rounded-3xl">
        <h1 className="text-2xl font-bold p-4 text-slate-700">Contact Me</h1>
        <p className="p-5 md:text-xl">
          The food ordering app project utilized Swiggy data for practice
          purposes and implemented dynamic routing, custom hooks, and code
          splitting using Parcel.js for optimal performance. Shimmer UI was
          utilized for real-time updates via APIs and asynchronous requests. The
          project helped expand knowledge in web development and provided
          valuable experience in building a user-friendly and practical
          application.
        </p>

        <div className="pt-5">
          <button className="bg-gray-800 text-white p-1 border border-gray-800 rounded-lg ">
            <Link to="/contact">Contact Me</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
