import React from "react";
import "./Courses.css";
import { onlineCourses, bootcampCourses } from "./CoursesEngine";

const Courses = () => {
  return (
    <div className="Courses">
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
