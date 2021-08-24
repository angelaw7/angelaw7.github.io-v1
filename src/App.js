import React from "react";
import Title from "./sections/Title";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import styled from "styled-components";

const PageContainer = styled.div`
  max-width: 1024px;
  margin: auto;
  padding: 64px;
`;

const App = () => {
  return (
    <>
      <Title />
      <PageContainer>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </PageContainer>
    </>
  );
};

export default App;
