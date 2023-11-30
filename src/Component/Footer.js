import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <Link to={"/skills"}>Skills</Link>
            </li>

            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-links">
          <h3>Social Links</h3>
          <ul>
            <li>
              <a href="#home">Tiktok</a>
            </li>
            <li>
              <a href="#skills">Facebook</a>
            </li>
            <li>
              <a href="#projects">Github</a>
            </li>
            <li>
              <a href="#contacts">X</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copy">&copy; Copy right all reserved. Made by me. ❤️</div>
    </footer>
  );
}

export default Footer;
