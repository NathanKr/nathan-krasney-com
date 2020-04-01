import React from "react";
import "./Footer.css";
import udemy from "../icons/udemy-icon.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-rights">
        © 2020 NATHAN KRASNEY. ALL RIGHTS RESERVED.
      </div>
      <div className="Footer-icons">
        <a href="https://github.com/NathanKr">
          <i className="fa fa-github fa-icon"></i>
        </a>
        <a href="https://www.linkedin.com/in/nathankrasney">
          <i className="fa fa-linkedin fa-icon"></i>
        </a>
        <a href="https://www.youtube.com/channel/UChOjjkqtxDPixwU7IFC1YHw">
          <i className="fa fa-youtube fa-icon"></i>
        </a>
        <a href="https://www.udemy.com/user/nathan-krasney/">
          <img src={udemy} alt="udemy-icon" className="fa-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
