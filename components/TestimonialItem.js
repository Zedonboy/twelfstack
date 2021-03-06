import React from "react";

export default function TestimonialItem() {
  return (
    <div className="max-w-md py-4 px-8 bg-navy-light border border-gray-400 rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        />
      </div>
      <div>
        <h2 className="text-gray-300 text-3xl font-semibold">Design Tools</h2>
        <p className="mt-2 text-gray-300">
          I started using, TwelfStack. boom!!, my life turned around
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <a href="#" className="text-xl font-medium text-green-500">
          John Doe
        </a>
      </div>
    </div>
  );
}
