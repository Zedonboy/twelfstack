import React from "react";
import DashLayout from "../../components/DashLayout";
import PostItem from "../../components/PostItem";

export default function Dashboard() {
  return (
    <DashLayout name="home">
      <div className="w-full px-8 py-4 block lg:flex border-b border-grey justify-between">
          <div className="flex space-x-1">
            <div className="flex flex-col items-center">
              <p className="text-4xl font-light text-green-500">500</p>
              <p className="text-xs font-semibold">Subscribers</p>
            </div>
          </div>
          <a
            href="/dashboard/post/new"
            className="bg-blue-500 mt-2 lg:mt-0 w-full lg:w-auto flex justify-center items-center hover:bg-blue-700 px-8 py-2 text-xl text-white"
          >
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Create A Post
          </a>
        </div>
        <section className="flex flex-wrap">
          <div className="w-full lg:w-1/3 p-4">
            <PostItem />
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <PostItem />
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <PostItem />
          </div>
          <div className="w-full lg:w-1/3 p-4">
            <PostItem />
          </div>
        </section>
    </DashLayout>
  );
}
