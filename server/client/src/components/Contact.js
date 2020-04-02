import React from "react";
import "./Contact.css";
import mailIcon from '../icons/mail.png'

const Contact = () => {
  return (
    <div className="Contact">
      <div className="Contact-container">
        <h2>
        <span><img src={mailIcon} alt="mailIcon"/></span> 
        Contact me: 
        </h2>
        <h3>natankrasney@gmail.com</h3>
      </div>
    </div>
  );
};

export default Contact;
