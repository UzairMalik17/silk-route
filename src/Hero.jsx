import React from "react";
import Pin from "./images/Pin.png";
import Riga from "./images/Riga.png";
import Slider from "./images/Slider.png";
function Hero() {
  return (
    <div className="bg-heroImage bg-center bg-no-repeat bg-cover w-full h-[calc(100vh+6rem)]">
      <h1 className="font-anton text-white leading-[7.5rem] text-[5rem] absolute top-[13rem] left-[8.4375rem]">
        Immigration
        <br />
        Tailored
        <br />
        to You
      </h1>
      <img
        src={Pin}
        alt="Riga"
        className="w-[1.5625rem] h-[2.51875rem] absolute top-[21.875rem] left-[63.8125rem]"></img>
      <img
        src={Riga}
        alt="Riga"
        className="w-[1.75rem] h-[1.375rem] absolute top-[24.39375rem] left-[63.8125rem]"></img>
      <img
        src={Slider}
        alt="Slider"
        className="w-[68.875rem] h-[2.0625rem] pb-2 absolute top-[42.934375rem] left-[10.6275rem]"></img>
    </div>
  );
}

export default Hero;
