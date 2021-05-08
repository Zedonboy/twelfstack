import React, { useEffect, useRef } from "react";
import Editorjs from "@editorjs/editorjs";
import Header from "@editorjs/header";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Marker from "@editorjs/marker";
import Personality from "@editorjs/personality";
import Quote from "@editorjs/quote";
import Image from "@editorjs/simple-image";
import Table from "@editorjs/table";
import Underline from "@editorjs/underline";
import Warning from "@editorjs/warning";

export default function New() {
  const EditorInstance = useRef(null);
  useEffect(() => {
    let ed = new Editorjs({
      holder: "editor",
      inlineToolbar: true,
      placeholder: "Type here(press Shift+Enter to enter new line)",
      tools: {
        heading: Header,
        code: Code,
        delimiter: Delimiter,
        embed: Embed,
        link: Link,
        list: List,
        marker: Marker,
        personality: Personality,
        quote: Quote,
        image: Image,
        table: Table,
        underline: Underline,
        warning: Warning,
      },
    });

    EditorInstance.current = ed;
  }, []);
  return (
    <section>
      <div className="flex flex-col px-4 py-2 lg:px-32 lg:py-16">
        <div className="block lg:flex justify-between">
          <span className="logo-text">TwelfStack Editor</span>
          <div className="flex space-x-2 ">
            <a
              href="#"
              className="bg-blue-500 rounded mt-2 lg:mt-0 shadow-sm w-full lg:w-auto flex justify-center hover:bg-blue-700 px-8 py-2 text-xl text-white"
            >
              <p className="text-center">Publish</p>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <div className="-mx-3 md:flex mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              
              <input
                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Title"
              />
              
            </div>
          </div>
        </div>
      </div>
      <section className="flex">
        <div className="w-0 lg:w-1/6"></div>
        <div
          id="editor"
          className="w-full prose lg:prose-lg xl:prose-xl lg:w-5/6 p-2"
        ></div>
        <div className="w-0 lg:w-1/6"></div>
      </section>
    </section>
  );
}
