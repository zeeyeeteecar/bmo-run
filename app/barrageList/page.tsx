import React from "react";
import BarrageListBlock from "./components/BarrageListBlock";
import BarrageAdd from "./components/BarrageAdd";

export default function BarrageList() {
  return (
    <div className="flex justify-center text-center items-center w-screen h-screen bg-slate-100">
      <div className="w-[1500px] h-[800px] flex flex-row  space-x-8">
        <BarrageAdd />
        <BarrageListBlock />
      </div>
    </div>
  );
}
