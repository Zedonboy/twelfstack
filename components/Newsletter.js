import React from "react";

export default function Newsletter() {
  return (
    <div className="flex flex-col max-w-4xl md:h-56 rounded-lg shadow-lg overflow-hidden md:flex-row my-10">
      <div className="md:flex items-center justify-center md:w-1/2 md:bg-green-700">
        <div className="py-6 px-8 md:py-0">
          <h2 className="text-green-700 text-2xl font-bold md:text-green-100">
            Sign Up For Early Access
          </h2>
          <p className="mt-2 text-green-600 md:text-green-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur obcaecati odio
          </p>
        </div>
      </div>
      <div className="flex bg-navy-light items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-green-700">
        <form>
          <div className="flex flex-col rounded-lg overflow-hidden sm:flex-row">
            <input
              className="py-3 px-4 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-green-100"
              type="text"
              name="email"
              placeholder="Enter your email"
            />
            <button className="py-3 px-4 bg-green-700 text-green-100 font-semibold uppercase hover:bg-green-600">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
