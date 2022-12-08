import React from "react";
import {AiOutlineHome} from "react-icons/ai"
import {CgProfile} from "react-icons/cg"
import {RiStethoscopeFill} from "react-icons/ri"

export default function Navbar(){
    let width = window.innerWidth;
    if(width > 768){
        return(
            <section>
            <nav className="flex fixed top-0 left-0 right-0 bg-blue-400 h-14 z-10 w-full">
                    <div className="ml-5 lg:ml-64 my-auto text-xl lg:text-3xl font-bold">
                        <a href="/">MEDICO</a>
                    </div>
                    <ul className="flex font-bold ml-auto text-lg lg:text-xl mr-5 lg:mr-64">
                        <li className="mr-5 my-auto ">
                            <a href="/">Appointment</a>
                        </li>
                        <li className="my-auto">
                            <a href="/">Profile</a>
                        </li>
                    </ul>
            </nav>
        </section>
        )
    }
    else{
    return(
        <section>
            <div className="flex w-full h-12 bg-slate-600 ">
                <a href="/">
                    <h1 className="font-bold mt-2 text-lg ml-5">
                        MEDICO
                    </h1>
                </a>
            </div>
            <nav className="fixed bottom-0 left-0 right-0 h-12 z-10 shadow-2xl shadow-black">
                <ul className="flex flex-row  text-cyan-600">
                    <li className="mx-auto text-3xl p-2">
                        <a href="/"><RiStethoscopeFill/></a>
                    </li>
                    <li className="mx-auto text-3xl p-2">
                            <a href="/"><AiOutlineHome/></a>
                    </li>
                    <li className="mx-auto text-3xl p-2">
                        <a href="/"><CgProfile/></a>
                    </li>
                </ul>
            </nav>
        </section>
    )
    }

}