import React from "react";
// import Search from "../components/Search";
import { CgSearch } from "react-icons/cg";
// import doctor from "../assets/doctor.svg";

const docinfo = [
  {
    name: "John Doe",
    specialization: "surgeon",
    address: "area, city, state",
  },
  {
    name: "John Doe",
    specialization: "surgeon",
    address: "area, city, state",
  },
  {
    name: "John Doe",
    specialization: "surgeon",
    address: "area, city, state",
  },
  {
    name: "John Doe",
    specialization: "surgeon",
    address: "area, city, state",
  },
];

export default function Doctors() {
  return (
    <section className="">
      <div className="flex ">
        <div className="mx-auto">
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
      </div>
      {docinfo.map((doc) => (
        <div className="flex flex-row shadow bg-white rounded-3xl w-full h-44 lg:h-52 mt-10 min-w-fit">
          <div className=" px-5 ">
            <img src="/doctor.svg" className="h-40 w-40 lg:w-52 lg:h-52" />
          </div>
          <div className="flex flex-col lg:flex-row w-full pt-5 ml-5">
            <div className="flex flex-col  pt-5">
              <span className="text-lg lg:text-2xl text-cyan-900">
                {doc.name}
              </span>
              <span className="lg:mt-2 text-sm lg:text-base">
                {doc.specialization}
              </span>
              <span className="mt-2 lg:mt-5 text-sm lg:text-base">
                {doc.address}
              </span>
              
            </div>
            <button className="ml-auto mt-auto h-10 bg-slate-400 rounded p-2 lg:mr-10 lg:mb-10 m-5">
              Book
            </button>
            </div>
        </div>
      ))}
      <div className="p-10"/>
    </section>
  );
}
