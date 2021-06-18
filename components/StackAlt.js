export default function StackAlt({data}) {
    return (
        <a
      href={`/stack/${data?.slug}`}
      className="bg-navy-light block w-full border p-2 border-navy-light rounded overflow-hidden my-2"
    >
      <figure className="h-32 overflow-hidden overscroll-none lg:h-56 w-full">
        <img
          className="transition-transform transform scale-100 duration-500 ease-in-out hover:scale-110 w-full object-cover h-full"
          src={function(){
            let url = data?.cover?.url
            if(url){
              if(url?.startsWith("http")) return url
              else return API_HOST+url
            } else return null
          }()}//{data?.cover?.url}
          alt={data.title}
        />
      </figure>

      <div className="mt-4 relative flex justify-between">
        <div className="flex flex-col">
          <p className="font-semibold truncate flex items-center text-gray-300 text-sm lg:text-lg">
            {data.title}
            
          </p>
          <p className="text-gray-300 text-xs lg:text-base font-light">
          {/* {data?.desc?.substring(0,)} */}
          </p>
        </div>
        <div className="absolute top-0 right-0 bottom-0 flex flex-col h-full justify-end lg:justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </a>
    )
}