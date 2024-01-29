import React from "react";
import { prisma } from "../../lib/db";

async function listBarrage() {
  "use server";
  return await prisma.tbl_BMORun2024_Barrage.findMany();
}

export default async function BarrageList() {
  const barrages = await listBarrage();

  console.log(listBarrage());
  return (
    <div className="w-[1000px] h-[800px] bg-white text-slate-700 border-0 flex flex-col ">
      <div className="w-full h-[50px] overflow-x-auto  border-0 flex flex-row">
        <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-lg font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[50px] ">
          No.
        </span>
        <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] ">
          F Name
        </span>
        <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] ">
          Lname
        </span>
        <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] ">
          Org
        </span>
        <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[100px] ">
          Amount
        </span>
        <span className="block flex-1 px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap ">
          Created At
        </span>
      </div>

      {barrages &&
        barrages.map((barrage: any, key: number) => {
          return (
            <div key={key}>
              <div className="w-full h-[50px] overflow-x-auto  border-0 flex flex-row hover:text-blue-400">
                <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm  text-left  border-l-2 border-r-0 whitespace-nowrap w-[50px] hover:text-blue-400">
                  {barrage.ID}
                </span>
                <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm  text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] hover:text-blue-400">
                  {barrage.donor_Fname}
                </span>
                <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm  text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] hover:text-blue-400">
                  {barrage.donor_Lname}
                </span>
                <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] hover:text-blue-400">
                  {barrage.donor_Org}
                </span>
                <span className=" block px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm text-left  border-l-2 border-r-0 whitespace-nowrap w-[100px] hover:text-blue-400">
                  {barrage.donor_Amount}
                </span>
                <span className="block flex-1 px-4 bg-gray-50 text-gray-700 align-middle py-3 text-sm text-left  border-l-2 border-r-0 whitespace-nowrap hover:text-blue-400">
                  {barrage.createdAt}
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
