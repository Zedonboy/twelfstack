import React from "react";
import Head from "next/head";
export default function CustomAudio() {
  return (
    <div id="audio-container" className="flex ">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css"
      />
      {/* <Head>
        <script
          src="https://kit.fontawesome.com/12eed36e44.js"
          crossorigin="anonymous"
        ></script>
      </Head> */}
      <audio className="hidden" src="" preload="metadata" loop></audio>
      <div className="w-2/5 h-12 border"></div>
      <div className="flex w-24 h-24 rounded-full justify-center items-center border-2 border-blue-600">
        <div>
        <i className="uil uil-play text-4xl"></i>
        </div>
      </div>
      <div className="w-2/5 h-12 border"></div>
    </div>
  );
}
