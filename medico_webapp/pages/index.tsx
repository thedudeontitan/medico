import Login from "../src/login"
import Home from "../src/home"
import Profile from "../src/profile";
import Appointment from "../src/appointment";
import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(()=>import("../src/navigation/navbar"),{ssr:false})

export default function App() {
    return (
      <div  id="container" className="bg-slate-100 h-screen">
        {/* <Login/> */}
        <Navbar/>
        
        <Home/>
        {/* <Profile/> */}
        {/* <Appointment/> */}
      </div>
  )
}