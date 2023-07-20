import React from "react";
import logo from "./images/LOGO.png";

function Navbar() {
  return (
    <nav className="bg-black  inline-flex w-screen fixed">
      <div className="pt-2 pl-24 pb-1.5">
        <img src={logo} alt="Logo" width="196.81px" height="82 px" />
      </div>
      <div className="text-white absolute top-0 left-[41.25rem] h-[5.8125rem] w-[40.3125rem] flex justify-center items-center text-center font-sansNarrow">
        <a href="#" className="mx-auto">
          Home
        </a>
        <a href="#" className="mx-auto">
          About Us
        </a>
        <a href="#" className="mx-auto">
          Services
        </a>
        <a href="#" className="mx-auto">
          Blogs
        </a>
        <a href="#" className="mx-auto">
          FAQ
        </a>
        <a href="#" className="mx-auto">
          Contact
        </a>
      </div>
    </nav>
  );
}
export default Navbar;
