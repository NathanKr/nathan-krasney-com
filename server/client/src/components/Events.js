import React, { useState, useEffect } from "react";
import Event from "./Event";
// import {
//   service_category_bootcamp,
//   service_category_qa,
// } from "../logic/serviceCategories";

import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState("");
  const eventsSlideJSON = "./data/eventSlide.json";

  const handleSetEventArray = (dataFetch) => {
    setEvents(dataFetch);
  };

  useEffect(() => {
    fetch(eventsSlideJSON)
      .then((response) => response.json())
      .then((data) => handleSetEventArray(data))
      .catch((err) => console.log(err));
  }, []);

  const elements =
    events &&
    events.map((item, index) => (
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


