import React from "react";

export default function Stack() {
  return (
    <div className="max-w-md h-auto bg-navy-light lg:h-48 w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://tailwindcss.com/img/card-left.jpg")',
        }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-navy-light lg:border-l-0 lg:border-t lg:border-grey-light bg-navy-light rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-xs text-gray-300 flex items-center">
            <svg
              className="text-gray-300 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-gray-300 font-bold text-base mb-2">
            Build Happy Life
          </div>
          <p className="text-gray-300 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 focus:bg-blue-800 hover:text-gray-100 focus:text-gray-100 px-4 py-2 font-semibold rounded"
          >
            Read
          </a>
        </div>
      </div>
    </div>
  );
}
