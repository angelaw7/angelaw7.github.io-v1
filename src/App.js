import React from "react";
import Title from "./sections/Title";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Title />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
