import Login from "../src/login"
import Home from "../src/home"
// import Navbar from "../src/navigation/navbar"
// import Navbarlg from "../src/navigation/navbarlg";
import React,{useEffect,useState} from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(()=>import("../src/navigation/navbar"),{ssr:false})

export default function App() {
    return (
      <div  id="container">
        {/* <Login/> */}
        {/* <Home/> */}
        
        <Navbar/>
      </div>
  )
}