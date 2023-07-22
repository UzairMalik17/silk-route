import React from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import Body from "./Body";
import Bio from "./Bio";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  function toggleHandler() {
    toggle === true ? setToggle(false) : setToggle(true);
  }
  return (
    <div>
      <Navbar navbarToggle={toggleHandler} toggle={toggle} />
      <Hero />
      <Body />
      <Bio />
      <Footer />
    </div>
  );
}

export default App;
