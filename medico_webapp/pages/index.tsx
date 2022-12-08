import Login from "../src/login"
import Home from "../src/home"
import Profile from "../src/profile";
// import Navbar from "../src/navigation/navbar"
import React,{useEffect,useState} from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(()=>import("../src/navigation/navbar"),{ssr:false})

export default function App() {
    return (
      <div  id="container">
        {/* <Login/> */}
        {/* <Home/> */}
        
        <Navbar/>
        <Profile/>
      </div>
  )
}