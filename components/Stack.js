import React, { useState } from "react";

export default function Stack({ data }) {
  
  return (
      <a href="/stack/undefined" className="flex py-8">
        <figure className=" w-1/3 md:w-1/5 pr-4">
          <img
            className="rounded border h-[7rem] border-[#0E63F4] w-full object-cover"
            src="https://picsum.photos/id/1/400/400"
          />
        </figure>
        <section className=" w-2/3 md:w-3/5 flex flex-col justify-between">
          <p className="text-white font-bold text-lg">
            Erica becomes beautiful
          </p>
          <p className="text-white text-sm py-2 truncate">
            Spreading the love of God. thanks to you my fucking
            fanssssssssssssssssssssssssssssssssssssdhjchdjshcjdshvjdvdhv
          </p>
          <section className="flex space-x-4">
            <section className="flex items-center text-gray-500 text-xs md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-5 md:w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
              </svg>
              <p>May 12</p>
            </section>
            <section className="flex items-center text-red-500 text-xs md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-5 md:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <p>200K</p>
            </section>
            <section className="flex items-center text-[#0E63F4] text-xs md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:h-5 md:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <p>1,002</p>
            </section>
          </section>
        </section>
      </a>
      
  );
}
