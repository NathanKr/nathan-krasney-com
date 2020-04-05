import React from "react";
import "./ClickedTestimonial.css"

const ClickedTestimonial = ({ img_src, desc, href ,testimonial_category}) => {
  return (
    <div className="ClickedTestimonial">
      <p>{testimonial_category}</p>
      <a href={href}>
        <img src={img_src} className="img-fluid img-thumbnail" alt="testImg"/>
      </a>
      <p>{desc}</p>
    </div>
  );
};

export default ClickedTestimonial;
