import React from "react";
import "./ClickedTestimonial.css"

const ClickedTestimonial = ({ img_src, desc, href }) => {
  return (
    <div className="ClickedTestimonial">
      <a href={href}>
        <img src={img_src} class="img-fluid img-thumbnail"/>
      </a>
      <p>{desc}</p>
    </div>
  );
};

export default ClickedTestimonial;
