import React from "react";
import { get } from "../../browserUtils/api";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { API_HOST } from "../../config";
import Cookie from "universal-cookie"

export default function ArticlePage({stack, author}) {
  return (
    <section className="bg-white">
      <NavBar />
      <article dangerouslySetInnerHTML={{__html: stack.content}} className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-4 lg:mx-auto lg:my-16 block">
      </article>
      <section className="flex justify-center">
        <div className="w-full lg:w-1/3 p-8">
          <section className="border rounded p-10">
            <figure className="flex justify-center">
              <img
                className="rounded-full w-24 h-24"
                src={author?.profile_photo?.url}
              />
            </figure>

            <p className="text-center mt-2">{author.name}</p>
          </section>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export async function getServerSideProps(ctx){
  let cookie = new Cookie(ctx.req.headers.cookies)
  let jwt = cookie.get("jwt")
  let stackResp = await get(`${API_HOST}/stacks?slug=${ctx.params.slug}`, jwt)
  let stack = await stackResp.json()
  return {
    props: {
      stack : stack[0],
      author: stack[0].author
    }
  }
}
