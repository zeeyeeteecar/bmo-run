"use client";
import React from "react";
import { TiDelete } from "react-icons/ti";

export default function BarrageDel({ barrageID, delBarrage }: any) {

  function delBarrage_local(e: any) {
    const barrageID = e.target.value;
    const shouldRemove = confirm(
      "are you sure you want to delete?" + barrageID
    );
    if (shouldRemove) {
      delBarrage();
    } else {
      e.preventDefault();
      return null;
    }
  }
  
  return (
    <>
      <button
        type="submit"
        name={"barrageID"}
        value={barrageID}
        className="  hover:bg-blue-400 h-[30px] hover:border-blue-400 text-blue-200 border-0 border-slate-200 px-4 rounded-full"
        onClick={(e) => delBarrage_local(e)}
      >
        <TiDelete width={40}  />
      </button>
    </>
  );
}
