import React from "react";
import AuthorCard from "../components/AuthorCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import TestimonialSection from "../components/TestimonialSection";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Cookie from "universal-cookie";
import Layout from "../components/Layout";
import { get } from "../browserUtils/api";
import { API_HOST } from "../config";
const angle = [
  {
    name: "Erica Nlewedim",
    profile_photo: {
      url: "https://bbnaijadaily.com/wp-content/uploads/2020/07/Erica-BBNaija-2.jpg",
    },
    desc: "BBN Star",
    verified: true,
  },
  {
    name: "Don Jazzy",
    profile_photo: {
      url: "https://bbnaijadaily.com/wp-content/uploads/2020/07/Erica-BBNaija-2.jpg",
    },
    desc: "BBN Star",
    verified: false,
  },
  {
    name: "Funke Akindele",
    profile_photo: {
      url: "https://bbnaijadaily.com/wp-content/uploads/2020/07/Erica-BBNaija-2.jpg",
    },
    desc: "Hollywood Actress",
    verified: false,
  },
  {
    name: "Declan Nnadozie",
    profile_photo: {
      url: "https://pbs.twimg.com/profile_images/1359636165469614082/tZaML7rE_400x400.jpg",
    },
    desc: "Developer himself 🥳",
    verified: true,
  },
  {
    name: "Declan Nnadozie",
    photo:
      "https://pbs.twimg.com/profile_images/1359636165469614082/tZaML7rE_400x400.jpg",
    desc: "Developer himself 🥳",
    verified: true,
  },
  {
    name: "Declan Nnadozie",
    photo:
      "https://pbs.twimg.com/profile_images/1359636165469614082/tZaML7rE_400x400.jpg",
    desc: "Developer himself 🥳",
    verified: true,
  },
  {
    name: "Declan Nnadozie",
    photo:
      "https://pbs.twimg.com/profile_images/1359636165469614082/tZaML7rE_400x400.jpg",
    desc: "Developer himself 🥳",
    verified: true,
  },
  {
    name: "Declan Nnadozie",
    photo:
      "https://pbs.twimg.com/profile_images/1359636165469614082/tZaML7rE_400x400.jpg",
    desc: "Developer himself 🥳",
    verified: true,
  },
];

export default function Index({ categories, free }) {
  return (
    <Layout className="bg-navy-dark">
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>TwelfStack</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#10B981" />
      </Head>
      <main className="px-4 pb-10 lg:pb-40 lg:px-9 bg-navy-dark">
        <section className="h-40 lg:h-80 w-full relative">
          <section className="w-full h-full flex flex-col justify-center">
            <h1 className="leading-relaxed text-gray-300 text-center text-xl lg:text-4xl font-semibold">
              Subscribe to <br />{" "}
              <span className="text-green-500"> Newsletters</span> from your{" "}
              <br />
              faves
            </h1>
          </section>
        </section>
        {categories.map((cat) => (
          <section className="bg-navy-dark flex flex-col dark:bg-gray-800 mt-10">
            <h1 className="text-gray-200 font-bold text-3xl">{cat.name}</h1>
            <section
              style={{
                scrollbarWidth: "none",
              }}
              className="flex space-x-4 overflow-x-auto"
            >
              {cat.stacks.map((v, i) => (
                <div key={i} className="w-1/2 flex-shrink-0 md:w-1/5">
                  <AuthorCard data={v} />
                </div>
              ))}
            </section>
            
          </section>
        ))}

        <section className="bg-[#0E63F4] rounded flex flex-wrap shadow p-2 lg:p-12 mt-4">
          <section className="w-full lg:w-1/2">
            <p className="text-gray-300 text-4xl font-bold">
              Subscribe now to read
            </p>
            <p className="text-gray-300 mt-4 text-4xl font-bold">newsletters</p>
            <button className="mt-8 bg-blue-100 rounded px-6 py-2 shadow text-navy-dark text-sm font-semibold">
              Subscribe
            </button>
          </section>
          <section className="w-full flex items-end lg:w-1/2">
            <section className="w-full pl-0 lg:pl-24">
              <p className="text-white mb-4 font-semibold text-lg">
                join our mailing list
              </p>
              <p className="font-light mb-4 text-white">
                Get updates on new creators and categories
              </p>
              <section className="bg-[#5E96F7] flex rounded p-1">
                <input
                  className="subscribe-input px-6 py-2 outline-none text-white bg-transparent w-full"
                  placeholder="Enter Email"
                />
                <button className="bg-blue-100 rounded px-6 py-2 shadow text-navy-dark text-sm font-semibold">
                  Proceed
                </button>
              </section>
            </section>
          </section>
        </section>

        {free.map((cat) => (
          <section className="bg-navy-dark flex flex-col dark:bg-gray-800 mt-10">
            <h1 className="text-gray-200 font-bold text-3xl">{cat.name}</h1>
            <section
              style={{
                scrollbarWidth: "none",
              }}
              className="flex space-x-4 overflow-x-auto"
            >
              {cat.stacks.map((v, i) => (
                <div key={i} className="w-1/2 flex-shrink-0 md:w-1/5">
                  <AuthorCard data={v} />
                </div>
              ))}
            </section>
            <div className="flex justify-center mt-20 items-center">
              <a href="/reads" className="flex font-bold text-sm text-[#0E63F4] hover:underline">
                <span>See more</span>
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </section>
        ))}
      </main>
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  // let resp = await get(`${API_HOST}/categories`)
  // let data = await resp.json()
  // let categories = []
  // let cookie = new Cookie(ctx.req.headers.cookie)
  // for (const c of data) {
  //   let resp = await get(`${API_HOST}/news-letters?category.id=${c.id}&_limit=10`, cookie.get("jwt"))
  //   c.stacks = await resp.json()
  //   if(c.stacks.length > 0) categories.push(c)
  // }

  return {
    props: {
      categories: [{ name: "Bussiness", stacks: angle }, {name : "Entertainment", stacks: angle}],
      free: [{ name: "Free", stacks: angle }],
    },
  };
}
