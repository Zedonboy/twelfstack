/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Popover } from "@headlessui/react";
export default function NavBar() {
  return (
    <header>
      <nav className="bg-navy-dark flex-col flex px-8">
        <section className="flex justify-between py-4">
          <div>
            <span className="logo-text">TwelfStack</span>
          </div>
          <div>
          <Popover>
            {({ open }) => (
              <>
                <Popover.Button className="border lg:hidden border-green-500 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </Popover.Button>
              </>
            )}
          </Popover>
          </div>
          

          <div className="lg:flex items-center hidden space-x-4">
            <div
              style={{ width: "420px" }}
              className="rounded-full flex py-2 px-4 bg-navy-light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                placeholder="Search"
                className="focus:outline-none w-full text-gray-400 ml-1 bg-transparent"
              ></input>
            </div>
            <figure className="h-8 w-8 rounded-full">
              <img
                className="rounded-full border-2 border-blue-400"
                src="https://picsum.photos/id/1/50/50"
              />
            </figure>
          </div>
        </section>
        <div className="border-t-2 border-navy-light" />
        <ul className="flex overflow-x-auto py-4 space-x-6">
          <li className="pr-8 border-r flex-shrink-0 border-gray-500">
            <a
              href="#"
              className="border active text-gray-400 text-sm hover:border-blue-200 border-blue-600 rounded-full w-24 py-2 px-6"
            >
              Home
            </a>
          </li>
          <li className="flex-shrink-0">
            <a
              href="#"
              className="border text-gray-400 text-sm hover:border-blue-200 border-blue-600 rounded-full w-24 py-2 px-6"
            >
              Funke
            </a>
          </li>
          <li className="flex-shrink-0">
            <a
              href="#"
              className="border text-gray-400 text-sm hover:border-blue-200 border-blue-600 rounded-full w-24 py-2 px-6"
            >
              Google
            </a>
          </li>
          <li className="flex-shrink-0">
            <a
              href="#"
              className="border text-gray-400 text-sm hover:border-blue-200 border-blue-600 rounded-full w-24 py-2 px-6"
            >
              Don Jazzy
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
