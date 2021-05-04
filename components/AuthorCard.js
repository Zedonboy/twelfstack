import React from "react";
import Link from "next/link";
export default function AuthorCard({ data }) {
  return (
    <a href="/newsletter" className="bg-navy-light block w-full border p-2 border-navy-light rounded overflow-hidden my-2">
      <img
        style={{
          height: "260px",
        }}
        className="w-full"
        src={data.photo}
        alt={data.name}
      />
      <div className="mt-4 relative flex justify-between">
        <div className="flex flex-col">
          <p className="font-medium truncate flex items-center text-gray-300 text-xl">
          {data.name}
          {data.verified ? (
            <span className="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                viewBox="0 0 20 20"
                fill="#3B82F6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span> ) : null}
          </p>
         <p className="text-gray-300 font-light">Business</p>
         <p className="text-gray-300 font-medium text-sm">New google product</p>
        </div>
        <div className="absolute top-0 right-0 bottom-0 flex flex-col h-full justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500"
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
        </div>
      </div>
    </a>
  );
}
