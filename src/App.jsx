import React from "react";
import Navbar from "./navbar";
import Hero from "./Hero";
import Body from "./Body";
import Bio from "./Bio";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
      <Bio />
      <Footer />
    </div>
  );
}

export default App;
