import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <>
      <script
        src="https://kit.fontawesome.com/12eed36e44.js"
        crossorigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />
      <footer className="bg-[#142C5A] px-2 py-2 md:px-12 md:py-8  flex flex-wrap">
        <section className="w-full md:w-1/2">
          <div className="w-full md:w-2/3">
            <p className="text-white font-bold text-xl">
              Join our mailing list
            </p>
            <p className="text-white font-light mt-3">
              Get updates on new creators and categories
            </p>
            <section className="p-0.5 pl-6 border-gray-500 flex mt-3 border rounded">
              <input
                className="bg-transparent text-white subscribe-input outline-none w-full text-lg"
                placeholder="E-mail address"
              />
              <button className="bg-[#0E63F4] hover:bg-[#083788] px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </section>

            <ul className="flex space-x-6 mt-8 text-[#0E63F4] font-bold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full flex items-end justify-center md:w-1/2">
          <section>
            <section className="flex space-x-6">
              <a href="/fb">
                <i className="fab text-[#06A8F3] fa-facebook-f"></i>
              </a>
              <a href="/twitter">
                <i className="fab text-[#06A8F3] fa-instagram"></i>
              </a>
              <a href="/instagram">
                <i className="fab text-[#06A8F3] fa-twitter"></i>
              </a>
            </section>
            <p className="text-white mb-3">Become one of our newsletter creators</p>
            <button className="mb-4 text-white text-sm px-6 py-2 border rounded border-white">
              Speak to a staff
            </button>
            <p className="text-white mb-4">Want to partner with us?</p>
            <button className="px-10 rounded py-3 hover:bg-[#083788] text-white text-sm bg-[#0E63F4]">
              Partner with us
            </button>
          </section>
        </section>
      </footer>
    </>
  );
}
