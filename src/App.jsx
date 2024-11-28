import React from "react";
import Navbar from "./components/navbar/Navbar";
import Classwork from "./components/classwork/Classwork";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
import Card from "./components/card/Card";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <div>
        {/* <h1>Welcome to react class.</h1> */}
        <Navbar />
        <Classwork />
        <Project />
        <Footer />
        <Card />
        <Skills />
      </div>
    </>
  );
}

export default App;
