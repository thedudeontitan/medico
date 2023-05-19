import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgSearch } from "react-icons/cg";

const profileinfo = {
  name: "John Doe",
  specialization: "surgeon",
  address: "area, city, state",
  "blood group": "o positive",
};

export default function Home() {
  return (
    <section className="">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-600 to-transparent opacity-75 transform origin-bottom-left skew-y-12 translate-y-1/2"></div>
      </div>
      <div className=" flex flex-col lg:flex-row items-center max-h-screen">
        <div className="flex flex-col gap-5 items-center lg:items-start pt-10">
          <span className="text-7xl font-medium">
            Platform for all your medical needs
          </span>
          <span className="text-xl">
            Book appointments with your local doctors and share you medical info
            with just a click.
          </span>
          <div className="flex flex-col lg:flex-row gap-4">
            <button className="bg-slate-900 w-40 px-2 py-3 rounded-md text-xl text-white shadow-md hover:bg-opacity-70 transition-all">
             <Link href="/doctor">Find Doctor</Link>
              
            </button>
            {/* <button
                  className="bg-slate-400 w-40 px-2 py-3 rounded-md text-xl shadow-md hover:bg-opacity-70 transition-all"
                >
                  Create Safe
                </button> */}
          </div>
        </div>
        <Image
          src="/docimg.png"
          width={370}
          height={100}
          alt="doctor"
          className="ml-auto"
        />
      </div>
      {/* <div className="flex">
        <div className="mx-auto flex flex-row">
          <input
            className="bg-slate-50 h-12 w-60 lg:w-96 rounded pl-5 mt-5"
            placeholder="Search"
          />
          <button className="bg-slate-700 text-white text-xl w-12 ml-2 rounded mt-5">
            <CgSearch className="m-auto" />
          </button>
        </div>
      </div>
      <div className="shadow bg-white rounded-3xl w-full h-60 my-10"></div>
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-10">
        <div className="shadow bg-white rounded-3xl w-full h-60 "></div>
        <div className="shadow bg-white rounded-3xl w-full h-60"></div>
        <div className="shadow bg-white rounded-3xl w-full h-60"></div>
      </div> */}
    </section>
  );
}
