import React, { useState } from "react";
import { get, post } from "../../browserUtils/api";
import Layout from "../../components/Layout";
import Stack from "../../components/Stack";
import { API_HOST } from "../../config";
import Cookie from "universal-cookie"

let angle = [1, 2, 3];
export default function NewsLetterPage({
  stacks,
  authUser,
  subscribedBefore,
  author,
}) {
  let jwt;
  let [subscribeBefore, setSubscribeBefore] = useState(subscribedBefore);
  let [emailSub, setEmailSub] = useState(false);
  let [showSub, setShowSub] = useState(false)
  return (
    <Layout>
      <main className="px-4 md:px-32 lg:px-64 bg-navy-dark">
        <section className="flex items-center">
          <figure>
            <img className="object-cover w-12 h-12 md:w-24 md:h-24 rounded-full border-4 border-[#0E63F4]" src={`${author?.profile_photo?.url}`}/>
          </figure>
          <section className="ml-4 flex flex-col space-y-1">
            <p className="text-white font-semibold text-xl">{author?.name}</p>
            <p className="text-gray-600 text-sm font-light">{author?.title}</p>
            <p className="text-white text-sm font-semibold">{author?.desc}</p>
          </section>
        </section>
        <section className="flex py-8 border-b border-[#0E63F4] flex-col space-y-3">
          <section className="bg-[#1C2E50] p-3 rounded">
            <p className="text-sm text-white">{author?.status}</p>
          </section>
          <button onClick={e => {
            setShowSub(true)
          }} className="bg-[#0E63F4] hover:bg-[#083788] text-white font-bold rounded py-3">Subscribe</button>
          <button className="border-2 border-[#0E63F4] font-bold hover:border-[#083788] hover:text-[#083788] rounded py-3 text-[#0E63F4]">What would you like to share with me?</button>
        </section>
        <section className="py-8 flex flex-col">
          {stacks.map(s => {
            <Stack data={s}/>
          })}
         
        </section>
      </main>
      {showSub ? (
        <section className="fixed flex items-center px-2 md:px-64 bg-black bg-opacity-50  top-0 bottom-0 right-0 left-0">
        <section className="w-full h-auto md:h-[70vh] flex flex-col">
          <section>
            <button onClick={e => {
              setShowSub(false)
            }} className="float-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-500"
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
          <section className="rounded-lg flex flex-col p-8 h-full  bg-opacity-100 w-full bg-white">
            <h1 className="font-bold text-2xl text-center text-[#0E63F4] pb-4">
              Subscription Plans
            </h1>
            <section className="flex h-full flex-col md:flex-row">
              <section className="w-full md:w-1/3 rounded-lg mx-2 justify-between border-2 px-6 pb-6 pt-12 flex flex-col border-[#0E63F4]">
                <div>
                  <p className="font-bold text-center text-4xl text-[#0E63F4]">
                    N465.00
                  </p>
                  <p className="text-[#0E63F4] text-center font-bold">
                    One-time
                  </p>
                </div>

                <p className="font-light text-navy-light text-center">
                  Pay this Amount
                </p>
                <button className="bg-[#0E63F4] rounded py-2 text-white font-light">
                  Pay
                </button>
              </section>
              <section className="w-full md:w-1/3 rounded-lg mx-2 justify-between border-2 px-6 pb-6 pt-12 flex flex-col border-[#0E63F4]">
                <div>
                  <p className="font-bold text-center text-4xl text-[#0E63F4]">
                    N465.00
                  </p>
                  <p className="text-[#0E63F4] text-center font-bold">
                    One-time
                  </p>
                </div>

                <p className="font-light text-navy-light text-center">
                  Pay this Amount
                </p>
                <button className="border-[#0E63F4] border rounded py-2 text-[#0E63F4] font-light">
                  Pay
                </button>
              </section>
              <section className="w-full md:w-1/3 rounded-lg mx-2 justify-between border-2 px-6 pb-6 pt-12 flex flex-col border-[#0E63F4]">
                <div>
                  <p className="font-bold text-center text-4xl text-[#0E63F4]">
                    N465.00
                  </p>
                  <p className="text-[#0E63F4] text-center font-bold">
                    One-time
                  </p>
                </div>

                <p className="font-light text-navy-light text-center">
                  Pay this Amount
                </p>
                <button className="border-[#0E63F4] border rounded py-2 text-[#0E63F4] font-light">
                  Pay
                </button>
              </section>
            </section>
          </section>
        </section>
      </section>

      ) : null}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  // let cookie = new Cookie(ctx.req.headers.cookie)
  // let jwt = cookie.get("jwt")
  // let authorResp = await get(`${API_HOST}/authors?slug=${ctx.params.slug}`)
  // let author = await authorResp.json()
  // let nl = author[0]["news_letters"][author[0]["news_letters"].length - 1]
  // let stackResp = await get(`${API_HOST}/stacks?author.id=${author[0].id}`)
  // let stacks = await stackResp.json()
  // let subB4 = false
  // if(nl) {
  //   let subResp = await get(`${API_HOST}/email-subcriptions/subscribedBefore/${nl.id}`, jwt)
  //   subB4 = (await subResp.json()).message
  // }
  
  return {
    props: {
      authUser: true,
      subscribedBefore: true,
      stacks: angle,
      author: {name : ""},
    },
  };
}
