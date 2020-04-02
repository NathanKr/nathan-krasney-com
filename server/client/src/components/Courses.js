import React from "react";
import "./Courses.css";
import coursesPagePic from "../images/coursesPage-pic.jpg";
import coursesPagePicbootcamp from "../images/coursesPage-pic-2.jpg";

const Courses = () => {
  return (
    <div className="Courses">
      <div className="Courses-main-container">
        <h1 className="Courses-online-title">Online Courses</h1>

        <div className="Courses-online-container coursesInnerContainer">
          <div className="Course-online-1 courseOnline">
            <div className="course-img">
              <img src={coursesPagePic} alt="coursePic" />
              <a
                href="https://www.udemy.com/course/learn-react-in-a-better-way/?referralCode=4299350292063C517597"
                className="course-btn-enroll"
              >
                Enroll
              </a>
            </div>
            <div className="course-name-text">
              <p>Learn React In a Better Way</p>
            </div>
          </div>

          <div className="Course-online-2 courseOnline">
            <div className="course-img">
              <img src={coursesPagePic} alt="coursePic" />
              <a
                href="https://www.udemy.com/course/learn-react-hooks-in-a-better-way/?referralCode=B2E5AC5DE2762AB8A667"
                className="course-btn-enroll"
              >
                Enroll
              </a>
            </div>
            <div className="course-name-text">
              <p>Learn React Hooks in a Better Way</p>
            </div>
          </div>

          <div className="Course-online-3 courseOnline">
            <div className="course-img">
              <img src={coursesPagePic} alt="coursePic" />
              <a
                href="https://www.udemy.com/course/deploy-your-node-express-app-to-the-cloud/?referralCode=69772F332A34A0921636"
                className="course-btn-enroll"
              >
                Enroll
              </a>
            </div>
            <div className="course-name-text">
              <p> Deploy your Node\Express App to the Cloud</p>
            </div>
          </div>
        </div>

        <h1 className="Courses-online-title">Bootcamps</h1>

        <div className="Courses-bootcamps-container coursesInnerContainer">
          <div className="Course-bootcamp Course-bootcamp-1 courseOnline">
            <div className="course-img">
              <img src={coursesPagePicbootcamp} alt="coursePic" />
              {/* <a
                href="https://www.udemy.com/course/learn-react-in-a-better-way/?referralCode=4299350292063C517597"
                className="course-btn-enroll"
              >
                Enroll
              </a> */}
            </div>
            <div className="course-name-text">
              <p>Web Develpment Bootcamps (Front \ Fullstack)</p>
            </div>

            <div className="bootcamp-details text-center">
              <h3>FullStack Bootcamp</h3>
              <p>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
            </div>
          </div>

          <div className="Course-bootcamp-2 courseOnline">
            <div className="Course-bootcamp course-img">
              <img src={coursesPagePicbootcamp} alt="coursePic" />
              {/* <a
                href="https://www.udemy.com/course/learn-react-in-a-better-way/?referralCode=4299350292063C517597"
                className="course-btn-enroll"
              >
                Enroll
              </a> */}
            </div>
            <div className="Course-bootcamp course-name-text">
              <p>Web Develpment Bootcamps (Front \ Fullstack)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

// {/* <p>
//     ................. need to say אני מאמין in general and something for
//     each sbject ............ use collapse ??? ............ use images ???
//   </p>
//   <h3>Online courses</h3>
//   <ol>
//     <li>
//       <a href="https://www.udemy.com/course/learn-react-in-a-better-way/?referralCode=4299350292063C517597">
//         Learn React In a Better Way
//       </a>
//     </li>
//     <li>
//       <a href="https://www.udemy.com/course/learn-react-hooks-in-a-better-way/?referralCode=B2E5AC5DE2762AB8A667">
//         Learn React Hooks in a Better Way
//       </a>
//     </li>
//     <li>
//       <a href="https://www.udemy.com/course/deploy-your-node-express-app-to-the-cloud/?referralCode=69772F332A34A0921636">
//         Deploy your Node\Express App to the Cloud
//       </a>
//     </li>
//   </ol>
//   <h3>web develpment bootcamps (front \ fullstack)</h3>
//   <ol>
//     <li>Online bootcamp</li>
//     <li>Onsite bootcamp</li>
//   </ol> */}
