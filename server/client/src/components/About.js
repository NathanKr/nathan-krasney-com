import React from "react";
import "./About.css";
import nathanProfile from '../images/nathan-profile.jpg';
// import nathanProfile2 from '../images/nathan-profile-2.jpg';

import nathanStandPic from '../images/nathan-stand-pic.png';
import nathanStandPic2 from '../images/nathan-stand-pic-2.png';
import nathanStandPic3 from '../images/nathan-stand-pic-3.png';

const About = () => {
  return (
    <div className="About">
      <div className="About-img">
        <img src={nathanProfile} alt="img"/>
      </div>

      <div className="About-description">
        <h1 className="About-description-title">Nathan Krasney</h1>
        <h4 className="About-description-subtitle">
          CTO , Developer , Lecturer and Mentor
        </h4>

        <p className="About-description-details">
          I am doing software development for almost 25 years.
          I have my own business for software development and teaching
          courses for the last 8 years.
          I have led 3 successful web full-stack bootcamps.
          I have 3 online courses on udemy using my unique way of teaching.
          All of this gives me the experience and capabilities required to
          mentor junior web developer in the way to first programming job
        </p>

        <div className="About-description-images">
          <div className="About-description-img-1 img">
            <img src={nathanStandPic} alt="img"/>
          </div>
          <div className="About-description-img-1 img">
            <img src={nathanStandPic2} alt="img"/>
          </div>
          <div className="About-description-img-1 img">
            <img src={nathanStandPic3} alt="img"/>
          </div>
        </div>
      </div>
      {/* <div style={{ width: "70%" }}>
        <p style={{ color: "red" }}>
          sometimes it take 0.5 sec for the image to show up , should it be
          imported as done{" "}
          <a href="https://create-react-app.dev/docs/adding-images-fonts-and-files/">
            here
          </a>{" "}
          ???
        </p>
        <img src="images/profile.jpg" alt=""/>
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
      </div> */}
    </div>
  );
};

export default About;
