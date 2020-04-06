import React from "react";
import Event from "./Event";
import {
  service_category_bootcamp,
  service_category_qa,
} from "../logic/serviceCategories";

import "./Events.css";

const Events = () => {
  const events = [
    {
      // --- year , month 0-11 , day 1-..
      startDt: new Date(2020, 4, 30),
      showTime: false,
      type: service_category_bootcamp,
      title: "Web development MERN fullstack bootcamp",
      desc:
        "Learn from scratch HTML , CSS, JS, React, Node, Express, Node ,MongoDB",
      location: "Lod , Israel \\ Zoom",
    },
    {
      startDt: new Date(2020, 3, 16, 17),
      showTime: true,
      title: "Introducing the next MERN bootcamp - Q&A session",
      type: service_category_qa,
      desc:
        "No prior knowledge in programming is required. This session is free.",
      location: "Zoom",
    },
  ];
  const elements = events.map((item, index) => (
    <Event
      key={index}
      startDt={item.startDt}
      showTime={item.showTime}
      type={item.type}
      title={item.title}
      desc={item.desc}
      location={item.location}
    />
  ));

  return (
    <div className="Events">
      <h1 className="Events-title">Upcoming Events</h1>

      <div className="Events-container">{elements}</div>
    </div>
  );
};

export default Events;

// {elements}
