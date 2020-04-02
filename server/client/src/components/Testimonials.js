import React from "react";
import ClickedTestimonial from "./ClickedTestimonial";
import { testimonial_category_bootcamp } from "../logic/testimonialCategories";
import './Testimonials.css'

const Testimonials = () => {
  const array = [
    {
      testimonial_category: testimonial_category_bootcamp,
      desc:
        "Hi Nathan , How are you ? As you know i have signed a working contract and i am allready working for two weeks. Thanks to you i have passed these weeks without the fears i had at the begining. I want to thank you for the support and tools that you have gave us throughout the bootcamp. The way that you have thought me was very helpfull. I have no doubt that you are an excellent lecturer",
      href: "https://www.linkedin.com/in/mazal-gevyan/",
      img_src:
        "https://media-exp1.licdn.com/dms/image/C5603AQHu-tEHAQMLhQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=NJzGe0pbFxyZ1eA7o1-ILa8spQPyXo_DkppwP8PoVmQ"
    },
    {
      testimonial_category: testimonial_category_bootcamp,
      desc:
        "Nathan, it is all thanks to you. You are an amazing teacher !!! After one and a half month on the new job i can say that you have realy gave me all the tools that i need to cope with any challange. Huge thanks !!!",
      href: "https://www.linkedin.com/in/aliza-zeru-5a2876149/",
      img_src:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF7WGqVFUEVAg/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=9FLY-Pb7T6j4t5Ab1QND1n9VV99ViDGoEt5M2XBNXXA"
    },
    {
      testimonial_category: testimonial_category_bootcamp,
      desc:
        "Hi Nathan, i want to inform that i got a job, today was my first day. Thanks to all the tools that we have acquired from you during the bootcamp my integration into the job was relatively smooth. Thank you very much ! I could have not asked for a better lecturer than you ",
      href: "https://www.linkedin.com/in/batchen-itbarach/",
      img_src:
        "https://media-exp1.licdn.com/dms/image/C4D03AQHvBVOOhThpcQ/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=-hurJGIKDBj_8Y3_F8u6nd-2MPS8pY_uBL_r1rvRqtk"
    }
  ];

  const items = array.map((item, index) => (
    <ClickedTestimonial
      key={index}
      testimonial_category={item.testimonial_category}
      desc={item.desc}
      href={item.href}
      img_src={item.img_src}
    />
  ));

  return (
    <div>
      <p style={{color:"red"}}>fix the problem - bacground size is not enough</p>
      <p>should i add name and position ??????</p>
      Testimonials - use bootstrap card ????
      {items}
    </div>
  );
};

export default Testimonials;
