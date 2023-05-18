import React from "react";
import { CgSearch } from "react-icons/cg";

export default function Home() {
  return (
    <section className="">
      <div className="flex">
        <div className="mx-auto flex flex-row">
          <input
            className="bg-slate-50 h-12 w-60 lg:w-96 rounded mt-10 lg:mt-20 pl-5"
            placeholder="Search"
          />
          <button className="bg-slate-700 text-white text-xl w-12 ml-2 rounded mt-10 lg:mt-20">
            <CgSearch className="m-auto" />
          </button>
        </div>
      </div>
      <div className="shadow bg-white rounded-3xl w-full h-60 mt-10"></div>
      <div className="flex lg:flex-row flex-col lg:gap-5">
        <div className="shadow bg-white rounded-3xl w-full h-60 mt-10"></div>
        <div className="shadow bg-white rounded-3xl w-full h-60 mt-10"></div>
        <div className="shadow bg-white rounded-3xl w-full h-60 mt-10"></div>
      </div>
      <div className="p-10" />
    </section>
  );
}
