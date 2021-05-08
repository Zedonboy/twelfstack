import React from "react";

export default function PostItem() {
  return (
    <article className="rounded text-gray-700 shadow bg-gray-50 p-4">
      <h1 className="font-semibold text-lg">Iintroduction to Life</h1>
      <p className="font-light overflow-ellipsis h-24 text-base">
        Reprehenderit aliqua eiusmod velit magna in non. Tempor ullamco aliquip
        aliquip amet deserunt fugiat duis laborum
      </p>
      <section className="flex justify-end space-x-2 p-2">
        <button onClick={e => {
          if(navigator.share){
            navigator.share({
              title: "Lorem Ipsum",
              url: "www.twelfstack.vercel.app"
            })
          }
        }} className="hover:text-blue-500 flex flex-col items-center">
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
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span className="text-xs">Share</span>
        </button>
        <button className="hover:text-blue-500 flex flex-col items-center">
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
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <span className="text-xs">Copy link</span>
        </button>
      </section>
    </article>
  );
}
