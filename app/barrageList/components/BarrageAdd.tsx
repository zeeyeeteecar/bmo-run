import React from "react";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/db";
import moment from "moment";
import { revalidatePath } from "next/cache";

export default function BarrageAdd() {
  async function addBarrage(data: FormData) {
    "use server";

    const donor_Fname = data.get("donor_Fname")?.valueOf().toString();
    const donor_Lname = data.get("donor_Lname")?.valueOf().toString();
    const donor_Org = data.get("donor_Org")?.valueOf().toString();
    const donor_Amount = data.get("donor_Amount")?.valueOf().toString();
    const createdAt = moment().format("YYYY-MM-DD hh:mm:ss");

    await prisma.tbl_BMORun2024_Barrage.create({
      data: {
        donor_Fname: donor_Fname,
        donor_Lname: donor_Lname,
        donor_Org: donor_Org || undefined,
        donor_Amount: Number(donor_Amount) || undefined,
        createdAt: createdAt,
      },
    });
    revalidatePath("/barrageList");
    //redirect("/barrageList");
  }

  return (
    <div className="w-full h-full  border-0 flex flex-col ">
      <div className="w-full bg-white p-16">
        <form action={addBarrage}>
          <div className="flex flex-col space-x-2 space-y-2 p-4 border-2">
            <div className="border-2 w-full">
              {/* <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                First name
              </label> */}
              <input
                type="text"
                id="donor_Fname"
                name="donor_Fname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="First name"
                required
              />
            </div>
            <div className="border-2 w-full">
              {/* <label
                htmlFor="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Last name
              </label> */}
              <input
                type="text"
                id="donor_Lname"
                name="donor_Lname"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Last name"
                required
              />
            </div>
            <div className="border-2 w-full">
              {/* <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Company
              </label> */}
              <input
                type="text"
                id="donor_Org"
                name="donor_Org"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder="Company"
              />
            </div>

            <div className="border-2 w-full">
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Amount
              </label>
              <input
                type="number"
                id="donor_Amount"
                name="donor_Amount"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none focus:border-blue-500 block w-full p-2.5 "
                placeholder=""
              />
            </div>
          </div>

          <div className="flex items-start mb-6">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
