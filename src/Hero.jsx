import React from "react";
import ComponentWrapper from "./components/Shared/Wrappers/ComponentWrapper";
function Hero() {
  return (
    <div className="bg-heroImage bg-center bg-no-repeat bg-cover h-[calc(100vh-90px)]">
      <ComponentWrapper>
        <h1 className="font-anton text-[3.5rem] text-center sm:text-left text-white leading-[7.5rem] pt-16 md:text-[4.5rem]">
          Immigration
          <br />
          Tailored
          <br />
          to You
        </h1>
      </ComponentWrapper>
    </div>
  );
}

export default Hero;
