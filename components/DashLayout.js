import React, { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
const links = [
  {
    name: "home",
    display: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    href: "/dashboard",
  },
  {
    name: "profile",
    display: "Profile",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    href: "/dashboard/profile",
  },
];
export default function DashLayout({ name, children }) {
  const [open, setOpen] = useState(false);
  return (
    <main className="flex">
      <aside className="hidden lg:flex relative flex-col items-center w-1/4 h-screen bg-gray-50">
        <div className="p-8 w-full border">
          <div className="flex shadow rounded w-full h-14 p-1">
            <figure className="w-12">
              <img
                className="h-full w-full"
                src="https://picsum.photos/id/1/50/50"
              />
            </figure>
            <div className="ml-2">
              <p>Oris Kelvin</p>
              <p className="font-semibold text-xs text-gray-500">Author</p>
            </div>
          </div>
        </div>

        <ul className="db-sidenav mt-4 px-2 space-y-1 w-full">
          {links.map((v, i) => (
            <li key={i} className={`${v.name === name ? "active" : null}`}>
              {v.icon}
              <a href={v.href}>{v.display}</a>
            </li>
          ))}
        </ul>
        <div className="w-full p-16">
          <a href="#" className="rounded text-white bg-blue-500 px-6 py-2">
            Logout
          </a>
        </div>
      </aside>
      <Transition
        show={open}
        as={Fragment}
        enter="transition-transform duration-500"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <aside className="transform lg:flex absolute top-0 bottom-0 left-0 w-5/6 flex-col items-center h-screen bg-gray-50">
          <div className="p-8 w-full border">
            <div className="float-right">
              <button onClick={e => {
                setOpen(false)
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex shadow rounded w-full h-14 p-1">
              <figure className="w-12">
                <img
                  className="h-full w-full"
                  src="https://picsum.photos/id/1/50/50"
                />
              </figure>
              <div className="ml-2">
                <p>Oris Kelvin</p>
                <p className="font-semibold text-xs text-gray-500">Author</p>
              </div>
            </div>
          </div>

          <ul className="db-sidenav mt-4 px-2 space-y-1 w-full">
            {links.map((v, i) => (
              <li key={i} className={`${v.name === name ? "active" : null}`}>
                {v.icon}
                <a href={v.href}>{v.display}</a>
              </li>
            ))}
          </ul>
          <div className="w-full p-16">
            <a href="#" className="rounded text-white bg-blue-500 px-6 py-2">
              Logout
            </a>
          </div>
        </aside>
      </Transition>
      <section className="w-full lg:w-3/4 flex flex-col">
        <div className="p-2 lg:hidden">
          <button
            onClick={(e) => {
              setOpen(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
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
          </button>
        </div>
        {children}
      </section>
    </main>
  );
}
