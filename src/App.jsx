import React from "react";
import Navbar from "./components/navbar/Navbar";
import Classwork from "./components/classwork/Classwork";
import Footer from "./components/footer/Footer";
import Project from "./components/project/Project";
import Card from "./components/card/Card";
import Skills from "./components/Skills/Skills";
import Folio from "./components/folio/Folio";
import Practice from "./components/hooks/Practice";
import FectchData from "./components/hooks/FectchData";
import FetchWithAxios from "./components/hooks/FetchWithAxios";

function App() {
  return (
    <>
      <div>
        <h1>Welcome to react class.</h1>
        <Navbar />
        <Classwork />
        <Project />
        <Footer />
        <Card />
        <Skills />
        <Practice />
        {/* <FectchData /> */}
        <FetchWithAxios />
        {/* <Folio/> */}
      </div>
    </>
  );
}

export default App;
