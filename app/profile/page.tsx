import React from "react";
// import doctor from "../assets/doctor.svg";

const profileinfo = {
  name: "John Doe",
  specialization: "surgeon",
  address: "area, city, state",
  "blood group": "o positive",
};

const uploaddata = [
  {
    data: "data",
    reportname: "data",
    file: "data",
  },
  {
    data: "data",
    reportname: "data",
    file: "data",
  },
  {
    data: "data",
    reportname: "data",
    file: "data",
  },
];
export default function Profile() {
  return (
    <section id="profile" className="">
      <div className="flex flex-col pt-10 lg:pt-20 lg:flex-row">
        <img src="/doctor.svg" className="w-56 my-10 lg:w-56 lg:mx-10" />
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
          <div className="flex flex-col gap-2 rounded bg-slate-200 m-3 shadow-md p-1">
            <span>{info.data}</span>
            <span>{info.reportname}</span>
            <span>{info.file}</span>
          </div>
        ))}
        <button className="bg-slate-500 rounded text-white p-2 h-fit w-fit ml-auto mb-5 mx-5 shadow-lg">
          Upload Report
        </button>
      </div>
    </section>
  );
}
