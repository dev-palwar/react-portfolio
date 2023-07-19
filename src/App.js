import React from "react";
import Navbar from "./Components/Navbar";
import Home from "../src/Components/Home"
import Work from "../src/Components/Work"
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
