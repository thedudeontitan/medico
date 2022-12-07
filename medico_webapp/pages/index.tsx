import Login from "../src/login"
import Home from "../src/home"
import Navbar from "../src/navigation/navbar"
import Navbarlg from "../src/navigation/navbarlg";

export default function App() {
  let width = window.innerWidth;
     if (width > 768){
  return (
      <div  id="container">
        {/* <Login/> */}
        {/* <Home/> */}
        
        <Navbarlg/>
      </div>
  )}
  else{
    return (
      <div  id="container">
        {/* <Login/> */}
        {/* <Home/> */}
        
        <Navbar/>
      </div>
  )}
}
