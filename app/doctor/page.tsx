import React from "react";
import { CgSearch } from "react-icons/cg";
import Image from "next/image";

const docinfo = [
  {
    id:"1",
    name: "John Doe",
    specialization: "surgeon",
    address: "area, city, state",
  },
  {
    id:"2",
    name: "John Doe",
    specialization: "surgeon",
    address: "area, city, state",
  },
  {
    id:"3",
    name: "John Doe",
    specialization: "surgeon",
    address: "area, city, state",
  },
  {
    id:"4",
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
        <div key={doc.id} className="flex flex-row shadow bg-white rounded-3xl w-full h-44 lg:h-52 mt-10 min-w-fit">
          <div className=" px-5 ">
            <Image src="/doctor.svg" className="lg:w-52 lg:h-52" width={40} height={40} alt="doctor image" />
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
    </section>
  );
}
