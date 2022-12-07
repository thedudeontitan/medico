import React from "react";

export default function login(){
    return(
        <section id="login" className=" bg-slate-200 h-screen">
            <div className="flex">
                <h1 className="font-bold text-5xl text-center pt-10 mx-auto">
                    MEDICO
                </h1>
            </div>
                <div className="flex flex-col shadow-xl w-100 rounded-xl bg-white ml-28 mt-56">
                    <input className="w-96 h-10 p-5 my-3 self-center border-slate-400 border-x-2 border-y-2 rounded-lg" type='text' placeholder=" Enter email address"/>
                    <input className="w-96 h-10 p-5 my-3 self-center border-slate-400 border-x-2 border-y-2 rounded-lg" type='text' placeholder=" Enter password"/>
                    <button className="w-48 h-10 my-3 self-center text-slate-900 bg-slate-400 rounded-lg" >
                        Login
                    </button>
                    
                    <button className="w-48 h-10 my-3 self-center text-slate-900 bg-slate-400 rounded-lg" >
                        Register
                    </button>
                </div>
        </section>
    )
}