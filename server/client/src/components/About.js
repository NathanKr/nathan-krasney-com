import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About">
      <div style={{ width: "70%" }}>
        <img src="images/profile.jpg" />
        <h4>Nathan Krasney</h4>
        <p>CTO , Developer , Lecturer and Mentor</p>
        <p>
          I am doing software development for almost 25 years.
          I have my own business for software development and teaching
          courses for the last 8 years.
          I have led 3 successful web full-stack bootcamps.
          I have 3 online courses on udemy using my unique way of teaching.
          All of this gives me the experience and capabilities required to
          mentor junior web developer in the way to first programming job
        </p>
      </div>
    </div>
  );
};

export default About;
