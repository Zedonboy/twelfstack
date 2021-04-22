import React from "react";

export default function PrimaryBtn(prop) {
  return (
    <div className="rounded-md shadow">
      <button
      {...prop}
        href="#"
        className="flex items-center justify-center border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
      >
      </button>
    </div>
  );
}
