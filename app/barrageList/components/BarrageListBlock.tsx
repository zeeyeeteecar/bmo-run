import React from "react";
import { prisma } from "../../lib/db";
import { revalidatePath } from "next/cache";
import BarrageDel from "./BarrageDel";

//=============================================
async function listBarrage() {
  "use server";
  return await prisma.tbl_BMORun2024_Barrage.findMany();
}

//=============================================

async function delBarrage(data: FormData) {
  "use server";

  if (!data) {
    return;
  }

  const barrageID = data.get("barrageID")?.valueOf().toString();

  //console.log(barrageID);

  await prisma.tbl_BMORun2024_Barrage.delete({
    where: {
      ID: Number(barrageID),
    },
  });
  revalidatePath("/barrageList");
  //redirect("/barrageList");
}
//=============================================

export default async function BarrageList() {
  const barrages = await listBarrage();

  console.log(listBarrage());
  return (
    <div className="w-[1200px] h-[800px] bg-white text-slate-700 border-0 flex flex-col ">
      <div className="w-full h-[50px]  border-0 flex flex-row">
        <span className=" block px-4  text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[50px] ">
          No.
        </span>
        <span className=" block px-4  text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] ">
          F Name
        </span>
        <span className=" block px-4  text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] ">
          Lname
        </span>
        <span className=" block px-4  text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] ">
          Org
        </span>
        <span className=" block px-4  text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[100px] ">
          Amount
        </span>
        <span className="block px-4  text-gray-700 align-middle py-3 text-sm font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] ">
          Created At
        </span>
        <span className="block px-4 text-blue-700 bg-yellow-200 align-middle py-3 text-sm  font-semibold text-left  border-l-2 border-r-0 whitespace-nowrap w-[100px] ">
          Total: {barrages ? barrages.length.toString() : "0"}
        </span>
      </div>

      <div className="overflow-y-auto">
        <form action={delBarrage}>
          {barrages &&
            barrages.map((barrage: any, key: number) => {
              return (
                <div key={key} className=" hover:bg-yellow-100 ">
                  <div className="w-full h-[50px] overflow-x-auto  border-0 flex flex-row hover:text-blue-400 ">
                    <span className=" block px-4  text-gray-700 align-middle py-3 text-sm  text-left  border-l-2 border-r-0 whitespace-nowrap w-[50px] hover:text-blue-400">
                      {barrage.ID}
                    </span>
                    <span className=" block px-4  text-gray-700 align-middle py-3 text-sm  text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] hover:text-blue-400">
                      {barrage.donor_Fname}
                    </span>
                    <span className=" block px-4  text-gray-700 align-middle py-3 text-sm  text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] hover:text-blue-400">
                      {barrage.donor_Lname}
                    </span>
                    <span className=" block px-4  text-gray-700 align-middle py-3 text-sm text-left  border-l-2 border-r-0 whitespace-nowrap w-[200px] hover:text-blue-400">
                      {barrage.donor_Org}
                    </span>
                    <span className=" block px-4  text-gray-700 align-middle py-3 text-sm text-left  border-l-2 border-r-0 whitespace-nowrap w-[100px] hover:text-blue-400">
                      {barrage.donor_Amount}
                    </span>
                    <span className="block px-4  text-gray-700 align-middle py-3 text-sm text-left  border-l-2 border-r-0 whitespace-nowrap  w-[200px]  hover:text-blue-400">
                      {barrage.createdAt}
                    </span>
                    <div className="block px-4  text-gray-700 align-middle py-3 text-sm  text-left  border-l-2 border-r-0 whitespace-nowrap ">
                      <BarrageDel
                        delBarrage={delBarrage}
                        barrageID={barrage.ID.toString()}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
}
