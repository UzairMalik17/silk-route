import React from "react";
import logo from "./images/LOGO.png";

function Navbar() {
  return (
    <nav className="bg-transparent  inline-flex fixed">
      <div className="pt-2 pl-24 pb-1.5">
        <img src={logo} alt="Logo" className="h-[82px] w-[196.81px]" />
      </div>
      <div className="text-white absolute top-0 left-[41.25rem] h-[5.8125rem] w-[40.3125rem] flex items-center justify-between font-sansNarrow">
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
