import React from "react";
import "./Contact.css";
import mailIcon from "../icons/mail.png";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-container">
        <div className="Contact-img-container">
          <img src={mailIcon} alt="imgIcon" className="Contact-img" />
        </div>

        <div className="Contact-info-container">
          <span className="Contact-info-span">
            Email:
            <span className="Contact-email">
              natankrasney@gmail.com
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

