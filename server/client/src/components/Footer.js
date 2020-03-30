import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="Footer">
      <div>
        © 2020 NATHAN KRASNEY. ALL RIGHTS RESERVED.
      </div>
      <div>
        <a href="https://www.linkedin.com/in/nathankrasney">
          <i className=" fa fa-linkedin"></i>
        </a>
        <a href="https://github.com/NathanKr">
          <i className=" fa fa-github"></i>
        </a>
        <a href="https://www.youtube.com/channel/UChOjjkqtxDPixwU7IFC1YHw">
          <i className="fa fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
