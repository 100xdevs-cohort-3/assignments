import React from "react";

function Contact() {
  return (
    <div className="w-full bg-primary text-white ">
      <div className="py-20 flex flex-col justify-center items-center gap-5">
        <p className="text-lg uppercase tracking-widest">
          35,000+ Already Joined
        </p>
        <h1 className="font-semibold text-3xl max-w-md text-center">
          Stay up-to-date with what we're doing
        </h1>
        <form className="flex gap-3">
          <input
            type="text"
            placeholder="Enter your email address"
            className="bg-white rounded-md p-2 px-4 text-gray-500 outline-none"
          />
          <button
            type="submit"
            className="cursor-pointer bg-secondary py-3 px-6 rounded-md text-white shadow-xl font-semibold"
          >
            Contact Us
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
