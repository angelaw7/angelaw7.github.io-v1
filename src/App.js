import React from "react";
import Title from "./sections/Title";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Experience from "./sections/Experience";

const App = () => {
  return (
    <>
      <Title />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
