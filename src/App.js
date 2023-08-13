import React from "react";
import Navbar from "./Components/Navbar";
import Home from "../src/Components/Home";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <Home />
          <Projects />
          <Skills />
          <Contact />
      </div>
    </>
  );
}

export default App;
