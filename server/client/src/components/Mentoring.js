import React from "react";
import "./Mentoring.css";
import codeReviewIcon from "../icons/code-review.png";
import internetIcon from "../icons/internet.png";
import manualIcon from "../icons/manual.png";
import partnershipHandshakeIcon from "../icons/partnership-handshake.png";
import professionalIcon from "../icons/professional.png";
import qaIcon from "../icons/qa.png";
import { Helmet } from "react-helmet";

const Mentoring = () => {
  return (
    <div className="Mentoring">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Junior web developer, join my mentoring program in the way to your first job as junior web developer. Contact me for more info"
        />
      </Helmet>
      <div className="Mentoring-container">
        <h1 className="Mentoring-title">So...</h1>
        <p className="Mentoring-description">
          You are out of college \ bootcamp and you are looking for a job as
          junior web developer. You are good but you are struggling to get a job
          .You need professional help from someone that have experience and have
          been there. I have been there and i am here as a mentor to help you :
        </p>

        <div className="Mentoring-icons-container">
          <div className="icon-container">
            <img
              className="icon-container-img"
              src={codeReviewIcon}
              alt="Icon"
            />
            <p className="icon-container-para">Code Reviews</p>
          </div>
          <div className="icon-container">
            <img className="icon-container-img" src={qaIcon} alt="Icon" />
            <p className="icon-container-para">Q&A Sessions</p>
          </div>
          <div className="icon-container">
            <img className="icon-container-img" src={manualIcon} alt="Icon" />
            <p className="icon-container-para">
              Develpment projects guiding (final , self)
            </p>
          </div>
          <div className="icon-container">
            <img
              className="icon-container-img"
              src={professionalIcon}
              alt="Icon"
            />
            <p className="icon-container-para">
              What and how to learn and get professional
            </p>
          </div>
          <div className="icon-container">
            <img
              className="icon-container-img"
              src={partnershipHandshakeIcon}
              alt="Icon"
            />
            <p className="icon-container-para">Tips for getting a job</p>
          </div>
          <div className="icon-container">
            <img className="icon-container-img" src={internetIcon} alt="Icon" />
            <p className="icon-container-para">Deploy your app to the cloud </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentoring;

// {
/* <p>............ use collapse ??? </p>
You are out of college \ bootcamp and you are looking for a job as junior web developer. You are
good but you are struggling to get a job .You need professional help from someone that
have experience and have been there . I have been there and i am here as a
mentor to help you
<ol>
  <li>Code reviews</li>
  <li>Q&A sessions</li>
  <li>Develpment projects guiding (final , self)</li>
  <li>What and how to learn and get professional</li>
  <li>Tips for getting a job</li>
  <li>Deploy your app to the cloud </li>
</ol> */
// }
