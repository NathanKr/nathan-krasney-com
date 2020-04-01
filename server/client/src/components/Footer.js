import React from "react";
import "./Footer.css";
import udemy from "../icons/udemy-icon.png";
import github from "../icons/github.png";
import youtube from "../icons/youtube.png";
import linkedin from "../icons/linkedin-logo.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-rights">
        © 2020 NATHAN KRASNEY. ALL RIGHTS RESERVED.
      </div>
      <div className="Footer-icons">
        <a href="https://github.com/NathanKr">
          <img src={github} alt="udemy-icon" className="fa-icon" />
        </a>
        <a href="https://www.linkedin.com/in/nathankrasney">
          <img src={linkedin} alt="udemy-icon" className="fa-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UChOjjkqtxDPixwU7IFC1YHw">
          <img src={youtube} alt="udemy-icon" className="fa-icon" />
        </a>
        <a href="https://www.udemy.com/user/nathan-krasney/">
          <img src={udemy} alt="udemy-icon" className="fa-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
