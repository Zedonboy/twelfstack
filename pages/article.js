import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function ArticlePage() {
  return (
    <section className="bg-white">
      <NavBar />
      <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-4 lg:mx-auto lg:my-16 block">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
      <section className="flex justify-center">
        <div className="w-full lg:w-1/3 p-8">
          <section className="border rounded p-10">
            <figure className="flex justify-center">
              <img
                className="rounded-full w-24 h-24"
                src="https://picsum.photos/id/1/200/300"
              />
            </figure>

            <p className="text-center mt-2">Erica Nlewedim</p>
          </section>
        </div>
      </section>
      <Footer />
    </section>
  );
}
