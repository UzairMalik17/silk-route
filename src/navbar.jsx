import React from "react";
import logo from "./images/LOGO.png";
import { RxDropdownMenu } from "react-icons/rx";

function Navbar(props) {
  const toggle = props.toggle;
  return (
    <nav>
      <div className="bg-transparent flex fixed w-full">
        <div className="pt-2 pl-[2rem] md:pl-24 pb-1.5">
          <img src={logo} alt="Logo" className="h-[82px] w-[196.81px]" />
        </div>
        <div className="hidden text-white md:pl[15rem] lg:pl-[18rem] xl:pl-[22.25rem] md:pr-24 h-[5.8125rem] w-[calc(100vw-12.3rem)] md:flex items-center justify-between font-sansNarrow">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Blogs</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
        </div>
        <button className="md:hidden absolute right-[2rem] pt-[1.5rem]">
          {" "}
          <RxDropdownMenu
            size={60}
            color={toggle === true ? "yellow" : "white"}
            onClick={props.navbarToggle}
          />
        </button>
      </div>
      {toggle && (
        <div className="bg-[#0D0D0D] block text-white md:hidden pt-[7rem] w-full text-center place-items-center mx-auto justify-between">
          <a className="block pb-4" href="#">
            Home
          </a>
          <a className="block pb-4" href="#">
            About Us
          </a>
          <a className="block pb-4" href="#">
            Services
          </a>
          <a className="block pb-4" href="#">
            Blogs
          </a>
          <a className="block pb-4" href="#">
            FAQ
          </a>
          <a className="block pb-4" href="#">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
