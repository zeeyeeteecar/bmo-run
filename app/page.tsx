import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen grid place-items-center bg-slate-50">
      <Link
        href="bmoRun"
        className="flex flex-col items-center bg-slate-600 border-gray-200 rounded-lg shadow md:flex-row h-[240px] hover:bg-gray-100 "
      >
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg ">
          <img className="rounded-t-lg" src="/image-1.jpg" alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-600">
              Welcome to BMO Run Barrage
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Click here to log in
            </p>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Log in
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
