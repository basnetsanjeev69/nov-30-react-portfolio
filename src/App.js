import React from "react";
import "./style.scss";
import { images } from "./assets/img/index";
import projectImg from "./assets/img/project.png";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Banner from "./Component/Banner";
import Skill from "./Component/Skill";
import Projects from "./Component/Projects";
import AboutMe from "./Component/AboutMe";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import FloatingIcon from "./Component/FloatingIcon";

function App() {
  return (
    <div className="wrapper">
      {/* <!-- Nav --> */}
      <Header />
      {/* <!-- Hero --> */}
      <Hero />
      {/* <!-- Banner --> */}
      <Banner />
      {/* <!-- Skills --> */}
      <Skill />
      {/* <!-- Projects --> */}
      <Projects />
      {/* <!-- About Me --> */}
      <AboutMe />

      {/* <!-- Get in Touch --> */}
      <Contact />

      {/* <!-- footer --> */}
      <Footer />
      {/* <!-- Floating Icon --> */}
      <FloatingIcon git />
    </div>
  );
}

export default App;
