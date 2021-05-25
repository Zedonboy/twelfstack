import React from "react";
import { get } from "../../browserUtils/api";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { API_HOST } from "../../config";
import Cookie from "universal-cookie";
import Layout from "../../components/Layout";

export default function ArticlePage({ stack, author }) {
  return (
    <Layout>
      <main className="px-2 py-2 md:py-8 bg-navy-dark md:px-32 lg:px-64">
        <h1 className="font-extrabold text-4xl text-white">Lorem Title of Stack</h1>
        <section className="flex items-center mt-8">
          <figure>
            <img
              className="rounded-full w-16 h-16 object-cover border-2 border-[#0E63F4]"
              src="https://picsum.photos/id/1/400/400"
            />
          </figure>
          <section className="ml-4 flex flex-col space-y-1">
            <p className="text-white font-semibold text-xl">Erica Nlewidim</p>
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
        </section>
        <article className="stack mt-8">
          <img src="https://picsum.photos/id/1/400/400"/>
          <h2>Love ain site</h2>
          <p>
            Elit <a>cjshjvhjks</a>aliqua ipsum deserunt Lorem est eu esse consectetur culpa
            officia nisi pariatur. Adipisicing incididunt occaecat labore qui
            labore nulla sint culpa consequat minim proident. Veniam ullamco
            pariatur nulla mollit Lorem officia ad non tempor pariatur. Enim
            officia proident incididunt ex ea magna officia laborum aliqua Lorem
            consequat nulla. Dolor nostrud irure culpa consequat magna. Do elit
            exercitation ullamco sunt exercitation. Duis esse deserunt amet
            veniam ex laboris occaecat pariatur duis officia reprehenderit
            cillum. Elit irure esse cupidatat dolore cillum cupidatat incididunt
            exercitation dolore laboris anim. Commodo eiusmod enim cupidatat
            esse consequat mollit sint duis et proident. Minim consectetur duis
            laboris enim.
          </p>
        </article>
        <section className="rounded-lg flex justify-between items-center bg-[#0E63F4] p-12">
          <p className="text-white font-bold text-3xl">Can't read the post? <br/> Subscribe to start reading</p>
          <button className="text-navy-dark bg-white rounded px-8 py-3 text-sm font-bold">Subscribe</button>
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  // let cookie = new Cookie(ctx.req.headers.cookies)
  // let jwt = cookie.get("jwt")
  // let stackResp = await get(`${API_HOST}/stacks?slug=${ctx.params.slug}`, jwt)
  // let stack = await stackResp.json()
  return {
    props: {
      stack: {},
      author: {},
    },
  };
}
