import React from "react";

const Contact = () => {
  return (
    <div className="grid my-10 bg-gray-100 mx-36 rounded-xl">
      <form className="m-auto mt-6 grid gap-4 w-1/3">
        <label>Email </label>
        <input type="text" />

        <label>Name </label>
        <input type="text" />

        <label>Message </label>
        <textarea cols="20" rows="10"></textarea>

        <button className="bg-gray-300 w-1/4 mb-8 rounded-lg p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
