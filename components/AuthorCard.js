import React from "react";
import Link from "next/link";
export default function AuthorCard({ data }) {
  return (
    <div className="border-gray-300 w-full border rounded overflow-hidden my-2">
      <img
        style={{
          height: "260px",
        }}
        className="w-full"
        src={data.photo}
        alt={data.name}
      />
      <div className="px-2 mt-4">
        <Link href="/newsletter">
          <a >
            {" "}
            <div className="font-medium flex items-center text-xl">
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
                </span>
              ) : null}
            </div>
            <p className="text-gray-600 text-sm">{data.desc}</p>
          </a>
        </Link>
      </div>
      <div className="py-4 px-4 justify-end flex">
        <button
          href="#"
          className="flex items-center p-2 justify-center border border-transparent text-xs font-medium rounded-md text-green-600 hover:bg-gray-200 focus:border-green-700"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
