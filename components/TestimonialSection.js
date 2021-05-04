import React from "react";
import TestimonialItem from "./TestimonialItem";

let angle = [1,2,3,4]
export default function TestimonialSection() {
  return (
    <section className="bg-navy-dark dark:bg-gray-800 mt-10">
      <h1 className="text-2xl text-center tracking-tight font-bold text-gray-900 sm:text-3xl md:text-4xl">
        <span className="block xl:inline text-gray-300">
          What are <span className="text-green-600">People</span> saying?
        </span>{" "}
      </h1>
      <section style={{
          scrollbarWidth: "none"
      }} className="mt-5 overflow-x-auto overflow-hidden flex">
          {angle.map((v,i) => (
              <div key={i} className="flex-shrink-0 p-2">
                  <TestimonialItem/>
              </div>
          ))}
      </section>
    </section>
  );
}
