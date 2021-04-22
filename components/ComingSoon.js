import React from "react";

export default function ComingSoon() {
  return (
    <div className="border-2 rounded-md max-w-md relative h-auto lg:h-48 w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://tailwindcss.com/img/card-left.jpg")',
        }}
        title="Woman holding a mug"
      ></div>
      <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal">
        <div className="mb-8 opacity-50">
          <p className="text-xs text-grey-dark flex items-center">
            <svg
              className="text-grey w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div className="text-black font-bold text-base mb-2">
            Build Happy Life
          </div>
          <p className="text-grey-darker text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex items-center">
          <a
            href="#"
            class="border-t border-r border-l hover:bg-green-600 focus:bg-green-800 hover:text-gray-100 focus:text-gray-100 px-4 py-2 font-semibold rounded"
          >
            Read
          </a>
        </div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent via-white to-white w-full h-full flex justify-center items-center"></div>
      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full flex justify-center items-center">
        <button className="hover:underline font-semibold text-green-600 opacity-100">
          Coming Soon in a Week time
        </button>
      </div>
    </div>
  );
}
