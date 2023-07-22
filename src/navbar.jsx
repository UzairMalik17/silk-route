import React from "react";
import logo from "./images/LOGO.png";

function Navbar() {
  return (
    <nav className="bg-transparent flex fixed w-full">
      <div className="pt-2 pl-24 pb-1.5">
        <img src={logo} alt="Logo" className="h-[82px] w-[196.81px]" />
      </div>
      <div className="text-white md:pl[15rem] lg:pl-[18rem] xl:pl-[22.25rem] md:pr-24 h-[5.8125rem] w-[calc(100vw-12.3rem)] flex items-center justify-between font-sansNarrow">
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Blogs</a>
        <a href="#">FAQ</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;
