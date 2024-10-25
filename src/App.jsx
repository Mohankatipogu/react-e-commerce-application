import React from "react";
import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import CountiesFooter from "./Footer";
// import Navbar from "./navbar";
// import Footer from "./Footer";
function App(){
  return <div>
      {/* <Navbar></Navbar> */}
      <Navbar></Navbar>
       <Outlet></Outlet> 
      {/* <CountiesFooter></CountiesFooter> */}
  </div>
}
export default App;