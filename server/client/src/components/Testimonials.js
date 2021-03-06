import React from "react";
import { testimonial_category_bootcamp } from "../logic/testimonialCategories";
import "./Testimonials.css";
import { Helmet } from "react-helmet";

const Testimonials = () => {
  const array = [
    {
      testimonial_category: testimonial_category_bootcamp,
      name: "Tamrat Bayeh",
      job: "Frontend Developer / Wix",
      desc: `Good week Nathan. 
        I wanted to update you that I, Yaakov and Avshalom, have started working
        today at Wix.
        I also wanted to thank you for the courses at UDEMY
        and for the help you gave ,so thank you very much :)`,
      href: "https://www.linkedin.com/in/tamrat-bayeh-6b1b53192/",
      img_src: "images/tamrat.jpg",
    },
    {
      testimonial_category: testimonial_category_bootcamp,
      name: "mazal gevyan",
      job: "Fullstack Web Developer / Aman Group",
      desc:
        ' "Hi Nathan , How are you ? As you know i have signed a working contract and i am allready working for two weeks. Thanks to you i have passed these weeks without the fears i had at the begining. I want to thank you for the support and tools that you have gave us throughout the bootcamp. The way that you have thought me was very helpfull. I have no doubt that you are an excellent lecturer "',
      href: "https://www.linkedin.com/in/mazal-gevyan/",
      // img_src: "../images/mazal.jpg",
      img_src: "images/mazal.jpg"
    },
    {
      testimonial_category: testimonial_category_bootcamp,
      name: "aliza zeru",
      job: "Web Developer / BriefCam",
      desc:
        ' "Nathan, it is all thanks to you. You are an amazing teacher !!! After one and a half month on the new job i can say that you have realy gave me all the tools that i need to cope with any challange. Huge thanks !!!" ',
      href: "https://www.linkedin.com/in/aliza-zeru-5a2876149/",
      img_src: "images/aliza.jpg"
    },
    {
      testimonial_category: testimonial_category_bootcamp,
      name: "batchen itbarach",
      job: "Full Stack Web Developer / Rimonim Insurance Agency",
      desc:
        ' "Hi Nathan, i want to inform that i got a job, today was my first day. Thanks to all the tools that we have acquired from you during the bootcamp my integration into the job was relatively smooth. Thank you very much ! I could have not asked for a better lecturer than you " ',
      href: "https://www.linkedin.com/in/batchen-itbarach/",
      img_src:
        "images/batchen.jpg",
    },
    {
      testimonial_category: testimonial_category_bootcamp,
      name: "Chaim Ochs",
      job: "Web Developer / Thoughtful_Question",
      desc:
        ' "This was one of the best cources I have ever taken. The pace and explanations were incredibly easy to follow. Everything important about React was covered and Nathan explained every little detail so well that anyone can understand it and gain a good understanding. I have learned a lot from this course, and I hope that Nathan will add others in the future" ',
      href:
        "https://www.linkedin.com/in/chaim-ochs-3089b563/?originalSubdomain=il",
      img_src:
      "images/chaim.jpg",
    },
    {
      testimonial_category: testimonial_category_bootcamp,
      name: "Łukasz Franczyk",
      job: "Starszy Programista Salesforce / Accenture",
      desc:
        "'Very great course. I've learned React in a really fast way. Exercises after each lesson gives a lot. Response from a teacher is really quick. :)' ",
      href: "https://www.linkedin.com/in/%C5%82ukasz-franczyk-b76333146/",
      img_src:
      "images/lukasz.jpg",
    },
  ];

  const items = array.map((item, index) => (
    <div key={index} className="Testimonials-container">
      <div className="Testimonials-inner-container">
        <div className="Testimonials-inner-container-img">
          <a href={item.href}>
            <img
              src={item.img_src}
              alt="imgTest"
              className="Testimonials-inner-img"
            />
          </a>
          <h4 className="Testimonials-inner-name">{item.name}</h4>
          <small className="Testimonials-inner-job">{item.job}</small>
        </div>

        <p className="Testimonials-inner-desc">{item.desc}</p>
      </div>
    </div>
  ));

  return (
    <div className="Testimonials">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Check what web developers think about Nathan Krasney. Contact me for any question"
        />
      </Helmet>
      <h1 className="Testimonials-title">Success stories from students</h1>
      {items}
    </div>
  );
};

export default Testimonials;
