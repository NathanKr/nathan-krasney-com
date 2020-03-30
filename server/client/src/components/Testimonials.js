import React from "react";
import ClickedTestimonial from "./ClickedTestimonial";
import { testimonial_category_courses } from "../logic/testimonialCategories";

const Testimonials = () => {
  const array = [
    {
      testimonial_category: testimonial_category_courses,
      desc: "Nathan is a great lecturer, ....",
      href: "https://www.linkedin.com/in/yossicohn",
      img_src:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGAozyEAWTcmw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=FrFidy5wyIM7PlCs7d6936hy5S0Fr-q7Kaoge5KhmRc"
    }
  ];

  const items = array.map(item => (
    <ClickedTestimonial
      testimonial_category={item.testimonial_category}
      desc={item.desc}
      href={item.href}
      img_src={item.img_src}
    />
  ));

  return (
    <div>
      Testimonials -  use bootstrap card ????
      {items}
    </div>
  );
};

export default Testimonials;
