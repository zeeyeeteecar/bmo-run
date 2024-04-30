import React from "react";
import { redirect } from "next/navigation";
import { NextPage } from "next";

export default async function Login() {
  async function handle_Login(data: FormData) {
    "use server";

    const password = data.get("password")?.toString();

    if (password === process.env.LOGIN_PASSWORD) {
      redirect(`/barrageList`);
    } else {
      redirect(`/loginError`);
    }
  }

  return (
    <div className="w-screen h-screen grid  place-items-center bg-white">
      <section className="h-[500px] w-[1000px] bg-blue-300">
        <div className="container h-full px-20 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>

            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form action={handle_Login}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password"
                    className=" placeholder-slate-300 text-blue-600 p-2 w-full"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>

                <div className="mb-6 flex items-center justify-between"></div>

                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary border px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
