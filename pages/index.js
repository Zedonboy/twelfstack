import React from "react";
import AuthorCard from "../components/AuthorCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import TestimonialSection from "../components/TestimonialSection";
import Head from "next/head"
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
];

export default function Index() {
  return (
    <section>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Next.js PWA Example</title>

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
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Hero />
      <section className="bg-white flex flex-col dark:bg-gray-800 px-4 lg:px-9 mt-10">
        <h1 className="text-2xl text-center tracking-tight font-bold text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">
            Listen to.&nbsp;Read from.&nbsp;Vibe to.&nbsp;
          </span>{" "}
          <span className="block text-green-600">your Faves</span>
        </h1>
        <section className="flex flex-wrap">
          {angle.map((v, i) => (
            <div key={i} className="p-2 w-full md:w-1/5">
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
      <TestimonialSection />
      <section className="flex justify-center">
        <Newsletter />
      </section>
      <Footer />
    </section>
  );
}
