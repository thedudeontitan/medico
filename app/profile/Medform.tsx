"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Medform() {
  const [startDate, setStartDate] = useState<any>();

  return (
    <div
      id="container"
      className="z-20 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="shadow-2xl bg-slate-500 text-white rounded-lg w-fit h-fit mx-5 lg:mt-10 lg:mx-80 p-5">
        <div className="flex flex-col">
          <form action="" className="flex flex-col gap-5">
            <span className="text-lg font-medium">
              Upload New Medical Record
            </span>
            <input
              type="text"
              className="rounded-md h-10 p-2 text-black"
              placeholder="Name"
            />
            <DatePicker
              placeholderText="Select Date "
              className="px-2 py-1 h-10 rounded-md"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
            <div>
              <button className="flex flex-row bg-slate-200 text-black items-center px-2 py-1 rounded-md gap-2 text-lg">
                <MdOutlineFileUpload />
                <span>Upload file</span>
              </button>
            </div>
            <div className="flex flex-row ml-auto gap-x-5">
              <button className="bg-slate-200 rounded-md px-2 py-1 text-black hover:bg-opacity-80">
                Cancel
              </button>
              <button className="bg-slate-200 rounded-md px-2 py-1 text-black hover:bg-opacity-80">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
