import React from "react";
import ClickedTestimonial from "./ClickedTestimonial";

const Testimonials = () => {
  const array = [
    {
      desc: "desc123",
      href: "https://www.linkedin.com/in/yossicohn",
      img_src:
        "https://media-exp1.licdn.com/dms/image/C4E03AQGAozyEAWTcmw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=FrFidy5wyIM7PlCs7d6936hy5S0Fr-q7Kaoge5KhmRc"
    }
  ];

  const items = array.map(item => (
    <ClickedTestimonial
      desc={item.desc}
      href={item.href}
      img_src={item.img_src}
    />
  ));

  return (
    <div>
      Testimonials - why margin betweem image and description???? use bootstrap
      card ????
      {items}
    </div>
  );
};

export default Testimonials;
