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
  return (
    <Layout>
      <section className="px-2 lg:px-12">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="relative w-full h-36 bg-navy-dark mb-16">
            {/* <div className="absolute inset-0 rounded-lg overflow-hidden bg-red-200">
              <img
                className="w-full object-cover h-full lg:h-auto"
                src="https://images.unsplash.com/photo-1543794327-59a91fb815d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=200&q=80"
                alt=""
              />
              <div className="absolute inset-0 backdrop backdrop-blur-10 bg-gradient-to-b from-transparent to-black"></div>
            </div> */}
            <div className="flex space-x-6 transform translate-x-6 translate-y-8">
              <div className="w-36 h-36 rounded-lg shadow-lg overflow-hidden">
                <img src={author?.profile_photo?.url} alt="" />
              </div>
              <div className="text-white">
                <h3 className="font-bold">{author.name}</h3>
                <div className="text-sm opacity-60">{author.desc}</div>
                <div className="mt-8 text-gray-400">
                  <div className="flex items-center space-x-2 text-xs">
                    <span>
                      {authUser ? (
                        <>
                          {subscribeBefore ? (
                            <button
                              disabled
                              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-600"
                            >
                             Subscribed
                            </button>
                          ) : (
                            <button
                              disabled
                              onClick={async (e) => {
                                post(
                                  `${API_HOST}/email-subcriptions`,
                                  null,
                                  jwt
                                ).then((r) => {
                                  if (r.ok) {
                                    setSubscribeBefore(true);
                                  }
                                });
                              }}
                              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                              Subscribe
                            </button>
                          )}
                        </>
                      ) : null}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 lg:px-12 flex flex-col">
        <section className="flex mt-8 flex-wrap">
          {stacks.map((v) => (
            <div className="w-full p-2 lg:w-1/3">
              <Stack data={v} />
            </div>
          ))}
          {/* <div className="w-full p-2 lg:w-1/3">
            <ComingSoon />
          </div> */}
        </section>
      </section>
      {!authUser ? (
        <section className="mt-10">
          <div className="w-full bg-navy-dark px-5 text-gray-800 font-light">
            <div className="w-full max-w-6xl mx-auto pb-5">
              <div className="-mx-3 md:flex items-center">
                <div className="px-3 md:w-2/3 mb-10 md:mb-0">
                  <h1 className="text-6xl md:text-8xl text-gray-300 font-bold mb-5 leading-tight">
                    Stay <br className="hidden md:block" />
                    updated.
                  </h1>
                  <h3 className="text-gray-300 mb-7 leading-tight">
                    Subscribe now to read {author.name}
                  </h3>
                  <div>
                    <span className="inline-block w-40 h-1 rounded-full bg-green-500" />
                    <span className="inline-block w-3 h-1 rounded-full bg-green-500 ml-1" />
                    <span className="inline-block w-1 h-1 rounded-full bg-green-500 ml-1" />
                  </div>
                </div>
                <div className="px-3 md:w-1/3">
                  <form>
                    <div className="flex mb-3">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      {emailSub ? (
                        <section className="p-4 bg-green-200 border rounded">
                          <p className="text-sm text-green-500">
                            Subscribed Successfully
                          </p>
                        </section>
                      ) : null}

                      <input
                        id="subscriberEmail"
                        type="email"
                        className="w-full bg-navy-light text-gray-300 -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-navy-light outline-none focus:border-green-500"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <button
                        onClick={(e) => {
                          e.target.disabled = true;
                          let elm = document.getElementById("subscriberEmail");
                          post(`${API_HOST}/email-subcription`, {
                            email: elm.value,
                          })
                            .then((r) => {
                              if (r.ok) {
                                setEmailSub(true);
                                setTimeout(() => {
                                  setEmailSub(false);
                                }, 3000);
                              }
                            })
                            .finally(() => {
                              e.target.disabled = false;
                            });
                        }}
                        className="block w-full bg-green-500 hover:bg-green-700 focus:bg-green-700 transition-colors text-white rounded-lg px-3 py-2 font-semibold"
                      >
                        Subscribe now.
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  let cookie = new Cookie(ctx.req.headers.cookie)
  let jwt = cookie.get("jwt")
  let authorResp = await get(`${API_HOST}/authors?slug=${ctx.params.slug}`)
  let author = await authorResp.json()
  let nl = author[0]["news_letters"][author[0]["news_letters"].length - 1]
  let stackResp = await get(`${API_HOST}/stacks?author.id=${author[0].id}`)
  let stacks = await stackResp.json()
  let subB4 = false
  if(nl) {
    let subResp = await get(`${API_HOST}/email-subcriptions/subscribedBefore/${nl.id}`, jwt)
    subB4 = (await subResp.json()).message
  }
  
  return {
    props: {
      authUser: true,
      subscribedBefore: subB4,
      stacks,
      author: author[0],
    },
  };
}
