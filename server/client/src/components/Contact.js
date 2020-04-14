import React from "react";
import "./Contact.css";
import mailIcon from "../icons/mail.png";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="Contact">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Contact me for details on online react courses, web development bootcamps and mentoring program for junior web developers"
        />
      </Helmet>

      <div className="Contact-container">
        <div className="Contact-img-container">
          <img src={mailIcon} alt="imgIcon" className="Contact-img" />
        </div>

        <div className="Contact-info-container">
          <span className="Contact-info-span">
            Email:
            <span className="Contact-email">natankrasney@gmail.com</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
