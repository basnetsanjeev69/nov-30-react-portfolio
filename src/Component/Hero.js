import React from "react";
import { images } from "../assets/img/index";

function Hero() {
  return (
    <section className="section1" id="hero">
      <div className="hero">
        <div className="left">
          <div className="name">Hi, I am Sanjeev Basnet</div>
          <div className="tag">Software Engineer</div>
          <div className="sub-tag">I love coding and teaching</div>
          <a href={images.projectImg} download>
            <button>
              Download CV
              <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
        <div className="right">
          <img src={images.userImg} alt="User" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
