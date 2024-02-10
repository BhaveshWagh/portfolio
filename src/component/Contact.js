import React from "react";
import { LINKEDIN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="grid my-10 p-10 text-center bg-gray-100 md:mx-36 rounded-xl">
    <h1 className="text-2xl font-bold text-slate-700 pb-10">Contact Me</h1>
      <p className="pb-5">
        <span className="font-bold">Email : </span> bhaveshbm2711@gmail.com
      </p>
      <p className="pb-5">
        <span className="font-bold">Linkedin : </span>
        <Link to={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          Bhavesh Wagh ( <span className="text-sm underline hover:text-blue-900">click me</span> )
        </Link>
      </p>
      <p className="pb-5">
        <span className="font-bold">Contact : </span> 7058857983
      </p>
    </div>
  );
};

export default Contact;

// <form className="m-auto mt-6 grid gap-4 w-1/3">
//         <label>Email </label>
//         <input type="text" />

//         <label>Name </label>
//         <input type="text" />

//         <label>Message </label>
//         <textarea cols="20" rows="10"></textarea>

//         <button className="bg-gray-300 w-1/4 mb-8 rounded-lg p-2">
//           Submit
//         </button>
//       </form>
