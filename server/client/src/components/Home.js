import React from "react";
import "./Home.css";
import EventsSlide from "./EventsSlide";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="Home">
      <Helmet>
        <title>Nathan Krasney | Web Development Courses & Mentoring</title>
        <meta
          name="description"
          content="Learn web development in a unique and effective way .Junior web developer - join our special mentoring program. Contact me for more info"
        />
      </Helmet>
      <EventsSlide />
      <div className="Home-primary">
        <h1 className="Home-text">
          Web Development <br /> Courses & <br /> Mentoring
        </h1>
        <div className="Home-red-bar"></div>
      </div>
    </div>
  );
};

export default Home;
