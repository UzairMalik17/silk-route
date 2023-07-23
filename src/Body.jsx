import React from "react";
import Arrow from "./images/arrow.png";
import ComponentWrapper from "./components/Shared/Wrappers/ComponentWrapper";
function Body() {
  return (
    <ComponentWrapper style={`bg-[#FF0F7A] py-[2.5rem]`}>
      <div className="font-anton text-delayedYellow text-center text-[3.75rem]">
        <h1>Thinking of starting anew in the EU?</h1>
      </div>
      <div className="flex pt-[4rem] justify-between">
        <div className="w-full lg:w-1/2 lg:pl-[15rem] font-sansNarrow text-justify">
          <span className="text-delayedYellow">
            Silk Route is here to help.{" "}
          </span>
          <span className="text-white">
            {" "}
            We’re confident in saying we’re one of the best residency programs
            in Europe, and here’s why. We create companies tailored to each
            individual in our care–businesses that establish residency in the
            European Union and ensure long term success. But the genius of our
            business model is that we make this process a luxury experience for
            you{" "}
          </span>
          <span className="text-delayedYellow">
            (full details available on our services page).
          </span>
        </div>
        <div className="hidden w-1/2 px-[3rem] lg:block">
          <img src={Arrow} alt="vector4"></img>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="hidden w-1/2 px-[3rem] scale-x-[-1] lg:block">
          <img src={Arrow} alt="vector4"></img>
        </div>
        <div className="w-full lg:w-1/2 lg:pr-[15rem] font-sansNarrow text-justify">
          <span className="text-white">
            Our team of experts know the immigration process inside and out.
            Their objective is to take the fear out of the unknown because let’s
            be honest; uprooting your life to start over in a new country is
            daunting to say the least. Trusting Silk Route eliminates the
            anxiety, confusion, and uncertainty of immigration so all that’s
            left for you to think about is the excitement of new beginnings.
          </span>
        </div>
      </div>
      <div className="font-anton text-delayedYellow pt-[2rem] text-center text-[2rem]">
        <h1>
          Are you ready to unlock the possibilities of a new life in the EU?{" "}
        </h1>
        <h1 className="font-sansNarrow text-center text-springGreen pt-[3rem] text-[1.5rem]">
          Click here to begin your journey
        </h1>
      </div>
    </ComponentWrapper>
  );
}
export default Body;
