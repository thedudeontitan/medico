import React from "react";
// import doctor from "../assets/doctor.svg";
import Image from "next/image";

const profileinfo = {
  name: "John Doe",
  specialization: "surgeon",
  address: "area, city, state",
  "blood group": "o positive",
};

const uploaddata = [
  {
    id: "1",
    reportname: "report Name",
    date: "18 May 2023",
    file: "file link",
  },
  {
    id: "2",
    reportname: "report Name",
    date: "18 May 2023",
    file: "file link",
  },
  {
    id: "3",
    reportname: "report Name",
    date: "18 May 2023",
    file: "file link",
  },
];
export default function Profile() {
  return (
    <section id="profile" className="">
      <div className="flex flex-col lg:flex-row">
        <Image
          src="/doctor.svg"
          className="w-56 my-10 mx-auto lg:w-56 lg:mx-10"
          width={50}
          height={40}
          alt="doctor image"
        />
        <div className="flex w-full">
          <div className="bg-white w-full mx-auto mt-5 h-fit rounded-lg shadow flex flex-col p-2 gap-y-2">
            <span className="">Name: {profileinfo.name}</span>
            <span className="">Address: {profileinfo.address}</span>
            <span className="">blood group: {profileinfo["blood group"]}</span>
            <span className="">{profileinfo["blood group"]}</span>
            <span className="">{profileinfo["blood group"]}</span>
            <span className="">{profileinfo["blood group"]}</span>
            <span className="">{profileinfo["blood group"]}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-lg w-full h-fit shadow-md ">
        <span className="p-3 text-xl">Medical History</span>
        {uploaddata.map((info) => (
          <div
            key={info.id}
            className="flex flex-col gap-2 rounded bg-slate-200 m-3 shadow-md p-3 text-lg"
          >
            <div className="flex w-full">
              <span>{info.reportname}</span>
              <span className="ml-auto">{info.date}</span>
            </div>
            <button className="w-fit bg-slate-100 rounded-lg py-1 px-2 ">
              Download File
              {/* {info.file} */}
            </button>
          </div>
        ))}
        <div className="ml-auto my-5 mx-5 flex gap-5 ">
          <button className="bg-slate-500 rounded text-white p-2 h-fit w-fit shadow-lg">
            Upload Report
          </button>
          <button className="bg-slate-500 rounded text-white p-2 h-fit w-fit shadow-lg">
            Share Report
          </button>
        </div>
      </div>
    </section>
  );
}
