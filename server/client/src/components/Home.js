import React from "react";
import "./Home.css";
import EventsSlide from './EventsSlide';

const Home = () => {
  return (
    <div className="Home">
      <EventsSlide />
      <div className="Home-primary">
        <h1 className="Home-text">Web Development <br /> Courses & <br />  Mentoring</h1>
        <div className="Home-red-bar"></div>
      </div>
    </div>
  );
};

export default Home;
