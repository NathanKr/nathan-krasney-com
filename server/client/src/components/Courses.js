import React from "react";
import "./Courses.css";
import { onlineCourses, bootcampCourses } from "./CoursesData.js";
import { Helmet } from "react-helmet";

const Courses = () => {
  return (
    <div className="Courses">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Join my unique online web development courses and web development bootcamp. Learn the concepts of web development and learn to learn. Contact me for more info"
        />
      </Helmet>
      <div className="Courses-main-container">
        <h1 className="Courses-online-title">Online Courses</h1>

        <div className="Courses-online-container coursesInnerContainer">
          {onlineCourses}
        </div>

        <h1 className="Courses-online-title">Bootcamps</h1>

        <div className="Courses-bootcamps-container coursesInnerContainer">
          {bootcampCourses}
        </div>
      </div>
    </div>
  );
};

export default Courses;
