import React from "react";
import AuthorCard from "../components/AuthorCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import TestimonialSection from "../components/TestimonialSection";
import Head from "next/head"
import NavBar from "../components/NavBar";
import Layout from "../components/Layout";
const angle = [
  {
    name: "Erica Nlewedim",
    photo:
      "https://bbnaijadaily.com/wp-content/uploads/2020/07/Erica-BBNaija-2.jpg",
    desc: "BBN Star",
    verified: true,
  },
  {
    name: "Don Jazzy",
    photo:
      "https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900https://netstorage-legit.akamaized.net/images/vllkytsf4r9248hqc.jpg?imwidth=900",
    desc: "BBN Star",
    verified: false,
  },
  {
    name: "Funke Akindele",
    photo:
      "https://guardian.ng/wp-content/uploads/2020/07/images__01-640x360.jpg",
    desc: "Hollywood Actress",
    verified: false,
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
  {
    name: "Declan Nnadozie",
    photo:
      "https://pbs.twimg.com/profile_images/1359636165469614082/tZaML7rE_400x400.jpg",
    desc: "Developer himself 🥳",
    verified: true,
  },
];

export default function Index() {
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
      <section className="h-40 lg:h-80 w-full relative">
          <section className="w-full h-full flex flex-col justify-center">
            <h1 className="text-gray-300 text-center text-4xl font-semibold">Create, subscribe and</h1>
            <h1 className="text-gray-300 text-center text-4xl font-semibold">manage any newsletter</h1>
            <h1 className="text-gray-300 text-center text-4xl font-semibold">of your choice</h1>
          </section>
        </section>
        <section className="bg-navy-dark flex flex-col dark:bg-gray-800 mt-10">
          <h1 className="text-gray-200 font-bold text-3xl">Bussiness</h1>
        <section style={{
          scrollbarWidth: "none"
        }} className="flex space-x-4 overflow-x-auto">
          {angle.map((v, i) => (
            <div key={i} className="w-full flex-shrink-0 md:w-1/5">
              <AuthorCard data={v} />
            </div>
          ))}
        </section>
        <div className="flex justify-center items-center">
          <a
            href="/reads"
            className="p-2 mt-4 text-green-300 hover:text-green-600 border border-green-300 hover:border-green-600 rounded flex items-center justify-center"
          >
            More
          </a>
        </div>
      </section>
      <section className="bg-navy-dark flex flex-col dark:bg-gray-800 mt-10">
          <h1 className="text-gray-200 font-bold text-3xl">Entertainment</h1>
        <section style={{
          scrollbarWidth: "none"
        }} className="flex space-x-4 overflow-x-auto">
          {angle.map((v, i) => (
            <div key={i} className="w-full flex-shrink-0 md:w-1/5">
              <AuthorCard data={v} />
            </div>
          ))}
        </section>
        <div className="flex justify-center items-center">
          <a
            href="/reads"
            className="p-2 mt-4 text-green-300 hover:text-green-600 border border-green-300 hover:border-green-600 rounded flex items-center justify-center"
          >
            More
          </a>
        </div>
      </section>
      <section className="bg-navy-dark flex flex-col dark:bg-gray-800 mt-10">
          <h1 className="text-gray-200 font-bold text-3xl">Free to read</h1>
        <section style={{
          scrollbarWidth: "none"
        }} className="flex space-x-4 overflow-x-auto">
          {angle.map((v, i) => (
            <div key={i} className="w-full flex-shrink-0 md:w-1/5">
              <AuthorCard data={v} />
            </div>
          ))}
        </section>
        <div className="flex justify-center items-center">
          <a
            href="/reads"
            className="p-2 mt-4 text-green-300 hover:text-green-600 border border-green-300 hover:border-green-600 rounded flex items-center justify-center"
          >
            More
          </a>
        </div>
      </section>

      <section className="bg-blue-500 p-12 mt-4">
        <p className="text-gray-300 text-4xl font-bold">Join our team today</p>
        <p className="text-gray-300 text-4xl font-bold">and become one of the</p>
        <p className="text-gray-300 text-4xl font-bold">best writers!</p>
      </section>
      <TestimonialSection />
      <section className="flex justify-center">
        <Newsletter />
      </section>
        
    </Layout>
  );
}
