import React, { useEffect, useState, Fragment } from "react";
import AuthorCard from "../components/AuthorCard";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import TestimonialSection from "../components/TestimonialSection";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Cookie from "universal-cookie";
import Layout from "../components/Layout";
import { get, post } from "../browserUtils/api";
import { API_HOST } from "../config";
import { Transition } from "@headlessui/react";
import StackAlt from "../components/StackAlt";
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

const scrollLeft = (catName = "") => {
  let id = catName.replace(" ", "-").toLowerCase().trim();
  let elm = document.querySelector(`#${id}`);
  if (elm) {
    let scrollOffset = window.innerWidth;
    elm.scrollBy({
      top: 0,
      left: scrollOffset,
      behavior: "smooth",
    });
  }
};

const scrollRight = (catName = "") => {
  let id = catName.replace(" ", "-").toLowerCase().trim();
  let elm = document.querySelector(`#${id}`);
  if (elm) {
    let scrollOffset = window.innerWidth;
    elm.scrollBy({
      top: 0,
      left: -scrollOffset,
      behavior: "smooth",
    });
  }
};

export default function Index({ categories, free, setting }) {
  const [showNews, setShowNews] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [mailListEmail, setMailListEmail] = useState(null);
  useEffect(() => {
    let elm = document.querySelector("#carousel");
    window.flickity = new Flickity(elm, {
      draggable: false,
      prevNextButtons: false,
      pageDots: false,
      autoPlay: 5000,
      fade: true,
    });

    setTimeout(() => {
      setShowSection(true);
      setShowNews(true);
    }, 3000);
  }, []);
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
        <title>{setting?.title}</title>

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
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity-fade@1/flickity-fade.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        ></link>
        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        <script src="https://unpkg.com/flickity-fade@1/flickity-fade.js"></script>
      </Head>
      <main className="px-4 pb-10 md:pb-40 md:px-12 bg-navy-dark">
        <section style={{
          backgroundImage: `url(${function(){
            let url = setting?.hero?.url
            if(url){
              if(url?.startsWith("http")) return url
              else return API_HOST+url
            } else return null
          }()})`
        }} id="carousel" className="h-40 md:h-80 w-full  relative">
          <section className="w-full h-full flex flex-col bg-navy-dark bg-opacity-60 items-center justify-center">
            <div className="typewriter">
              <h1 className="leading-relaxed text-gray-300 text-center text-xl md:text-4xl font-semibold">
                Subscribe to your faves
              </h1>
            </div>
          </section>
          <section className="w-full h-full bg-navy-dark bg-opacity-60 flex flex-col items-center justify-center">
            <div className="typewriter">
              <h1 className="leading-relaxed text-gray-300 text-center text-xl md:text-4xl font-semibold">
                Open Your mind faves
              </h1>
            </div>
          </section>
        </section>
        {categories.map((cat) => (
          <section className="relative bg-navy-dark flex flex-col dark:bg-gray-800 mt-10">
            <h1 className="text-gray-200 font-bold text-3xl">{cat.name}</h1>
            <div className="absolute flex space-x-2 top-0 right-2">
              <button
                onClick={(e) => {
                  scrollRight(cat.name);
                }}
                className="p-1 border text-[#0E63F4] border-[#0E63F4] rounded-full"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  scrollLeft(cat.name);
                }}
                className="p-1 border text-[#0E63F4] border-[#0E63F4] rounded-full"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <section
              id={cat.name.toLowerCase().replace(" ", "-").trim()}
              style={{
                scrollbarWidth: "none",
              }}
              className="flex space-x-4 mt-8 overflow-x-auto"
            >
              {cat.authors.map((v, i) => (
                <div key={i} className="w-1/2 flex-shrink-0 md:w-1/5">
                  <AuthorCard data={v} />
                </div>
              ))}
            </section>
          </section>
        ))}

        <section className="hidden bg-[#0E63F4] mt-10 rounded md:flex flex-wrap shadow p-2 md:p-12">
          <section className="w-full md:w-1/2">
            <p className="text-gray-300 text-4xl font-bold">
              Subscribe now to read
            </p>
            <p className="text-gray-300 mt-4 text-4xl font-bold">newsletters</p>
            <button className="mt-8 bg-blue-100 rounded px-6 py-2 shadow text-navy-dark text-sm font-semibold">
              Subscribe
            </button>
          </section>
          <section className="w-full flex items-end md:w-1/2">
            <section className="w-full pl-0 md:pl-24">
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

        <section className="relative bg-navy-dark flex flex-col dark:bg-gray-800 mt-10">
            <h1 className="text-gray-200 font-bold text-3xl">Free</h1>
            <div className="absolute flex space-x-2 top-0 right-2">
              <button
                onClick={(e) => {
                  scrollRight("free");
                }}
                className="p-1 border text-[#0E63F4] border-[#0E63F4] rounded-full"
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  scrollLeft("free");
                }}
                className="p-1 border text-[#0E63F4] border-[#0E63F4] rounded-full"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <section
              id="free"
              style={{
                scrollbarWidth: "none",
              }}
              className="flex space-x-4 mt-8 overflow-x-auto"
            >
              {free.map((v,i) => (
                <div key={i} className="w-1/2 flex-shrink-0 md:w-1/5">
                  <StackAlt data={v} />
                </div>
              ))}
            </section>
          </section>

      </main>
      {showSection ? (
        <section className="md:hidden fixed p-4 flex items-center justify-center top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.8)]">
          <Transition
            show={showNews}
            as={Fragment}
            enter="duration-500 ease-out"
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <section className="transition-transform transform scale-0 bg-[#0E63F4] rounded md:flex flex-wrap shadow p-2 md:p-12 mt-4">
              <section className="flex justify-end">
                <button
                  onClick={(e) => {
                    setShowNews(false);
                    setShowSection(false);
                  }}
                  className="text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </section>
              <section className="w-full md:w-1/2">
                <p className="text-white text-4xl text-center font-bold">
                  Subscribe to our Newsletter
                </p>
              </section>
              <section className="w-full mt-10 flex items-end md:w-1/2">
                <section className="w-full pl-0 md:pl-24">
                  <section className="bg-[#5E96F7] flex rounded p-1">
                    <input
                      id="subscribe-input-mobile"
                      onChange={(e) => {
                        setMailListEmail(e.target.value);
                      }}
                      className="subscribe-input px-6 py-2 outline-none text-white bg-transparent w-full"
                      placeholder="Enter Email"
                    />
                    <button
                      onClick={(e) => {
                        post("/mail-list-items", {
                          email: mailListEmail,
                        }).then((r) => {
                          if (r.ok) {
                            alert("You have been added to our mailing list");
                            setShowNews(false);
                            setShowSection(false);
                          }
                        });
                      }}
                      className="bg-blue-100 rounded px-6 py-2 shadow text-navy-dark text-sm font-semibold"
                    >
                      Proceed
                    </button>
                  </section>
                </section>
              </section>
            </section>
          </Transition>
        </section>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let cats = [];
  let freeStacks = [];
  let setting
  try {
    let resp = await get(`${API_HOST}/categories`);
    let siteResp = await get(`${API_HOST}/site-setting`)
    setting = await siteResp.json()
    let stacksResp = await get(`${API_HOST}/stacks?premium=true`)
    freeStacks = await stacksResp.json()
    let authorsResp = await get(`${API_HOST}/authors`)
    let authors = await authorsResp.json()
    let respCat = await resp.json();
    for (const c of respCat){
      let catAuthors = authors.filter(a => a.category.id === c.id) 
      c.authors = catAuthors
      cats.push(c)
    }
    
    
  } catch (err) {
    //
  }
  
  

  return {
    props: {
      categories: cats,
      free: freeStacks,
      setting
    },
  };
}
