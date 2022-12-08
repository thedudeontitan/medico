import React from "react";
import {AiOutlineSearch} from "react-icons/ai";

export default function Home(){
    return(
        <section id="Home page" className="mx-5 lg:mt-12 lg:mx-64">
            <form className="flex flex-row justify-center lg:justify-end">
                <div className="relative mt-20 w-screen lg:mx-0 lg:w-auto">
                    {/* <AiOutlineSearch className="h-10 w-10"/> */}
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute w-6 h-6 text-gray-400 right-3 my-auto top-0 bottom-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </a>
                    <input 
                    type="text"
                    className="w-full lg:w-96 h-10 py-3 pl-2 pr-12 lg:h-14 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-slate-300" 
                    placeholder="Search for doctors" 
                    />
                </div>
            </form>
            <div>
                <div className="flex w-full h-56 shadow-lg rounded-md bg-white mt-10">
                    <h1 className="mx-5 text-lg mt-5">
                        Now with MEDICO book appointments for the best doctors in your area!
                    </h1>
                </div>
                
            </div>
        </section>
    )
}