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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/skills" element={<Skill />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
