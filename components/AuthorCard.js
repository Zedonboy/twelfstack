import React from "react";
import Link from "next/link";
export default function AuthorCard({ data }) {
  return (
    <a
      href={`/author/${data?.slug}`}
      className="bg-navy-light block w-full border p-2 border-navy-light rounded overflow-hidden my-2"
    >
      <figure className="h-32 overflow-hidden overscroll-none lg:h-56 w-full">
        <img
          className="transition-transform transform scale-100 duration-500 ease-in-out hover:scale-110 w-full object-cover h-full"
          src={data?.profile_photo?.url}
          alt={data.name}
        />
      </figure>

      <div className="mt-4 relative flex justify-between">
        <div className="flex flex-col">
          <p className="font-semibold truncate flex items-center text-gray-300 text-sm lg:text-lg">
            {data.name}
            {data.verified ? (
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 lg:h-5 lg:w-5"
                  viewBox="0 0 20 20"
                  fill="#3B82F6"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            ) : null}
          </p>
          <p className="text-gray-300 text-xs lg:text-base font-light">
            Business
          </p>
        </div>
        <div className="absolute top-0 right-0 bottom-0 flex flex-col h-full justify-end lg:justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
