import React from "react";
import logo from "./images/LOGO.png";
import ComponentWrapper from "./components/Shared/Wrappers/ComponentWrapper";
function Footer() {
  const footer = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/" },
    { name: "Services", route: "/" },
    { name: "Blog", route: "/" },
    { name: "FAQ", route: "/" },
    { name: "Contact", route: "/" },
    { name: "Terms and Conditions", route: "/" },
    { name: "Privacy Policy", route: "/" },
  ];
  return (
    <ComponentWrapper
      style={`bg-[#0D0D0D] py-2 w-full font-sansNarrow text-white`}>
      <div>
        <div className="flex-col md:flex-row flex gap-4 md:items-center justify-between">
          <div className="md:w-3/12">
            <img src={logo} alt="Logo" className="h-[82px] w-[196.81px]" />
          </div>
          <div className="w-full md:w-9/12 flex-col gap-6 flex md:flex-row md:items-center justify-start">
            {footer.map((item, index) => {
              return <a href={item.route}>{item.name}</a>;
            })}
          </div>
        </div>
        <div>
          <p className="text-[1rem] w-full text-center">
            Silk Route. All rights reserved © 2023
          </p>
        </div>
      </div>
    </ComponentWrapper>
  );
}
export default Footer;
