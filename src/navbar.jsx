import React, { useState } from "react";
import logo from "./images/LOGO.png";
import { RxDropdownMenu } from "react-icons/rx";
import ComponentWrapper from "./components/Shared/Wrappers/ComponentWrapper";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/" },
    { name: "Services", route: "/" },
    { name: "Blog", route: "/" },
    { name: "FAQ", route: "/" },
    { name: "Contact", route: "/" },
  ];
  const toggleHandler = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <ComponentWrapper style={`relative bg-[#0D0D0D]`}>
      <div className="bg-transparent flex items-center justify-between w-full h-[90px]">
        <div>
          <img src={logo} alt="Logo" className="h-[80px] w-[196.81px]" />
        </div>
        <div className="hidden md:flex items-center justify-start gap-8">
          {menu.map((item, index) => {
            return (
              <a className="text-white text-base " href={item.route}>
                {item.name}
              </a>
            );
          })}
        </div>

        <RxDropdownMenu
          className={`h-[40px] w-[40px] md:hidden inline-block text-white ${
            toggle && "text-yellow-500"
          }`}
          onClick={toggleHandler}
        />
      </div>
      {toggle && (
        <div className="absolute h-[100vh] flex flex-col items-center bg-[#0D0D0D] top-0 gap-8 p-4 z-10">
          {menu.map((item, index) => {
            return (
              <a className="text-white text-base" href={item.route}>
                {item.name}
              </a>
            );
          })}
          <button className="text-red-500" onClick={toggleHandler}>
            close
          </button>
        </div>
      )}
    </ComponentWrapper>
  );
}
export default Navbar;
