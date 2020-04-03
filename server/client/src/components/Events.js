import React from "react";
import Event from "./Event";
import {
  service_category_bootcamp,
  service_category_qa
} from "../logic/serviceCategories";

import './Events.css';

const Events = () => {
  const events = [
    {
      startDt: Date.now(),
      showTime : false,
      type: service_category_bootcamp,
      title: "Web development fullstack bootcamp",
      desc: "some description of the bootcamp"
    },
    {
      startDt: Date.now(),
      showTime : true,
      title: "Q&A session for junior web developers",
      type: service_category_qa,
      desc: "This session is public and free"
    }
  ];
  const elements = events.map((item, index) => (
    <Event
      key={index}
      startDt={item.startDt}
      showTime = {item.showTime}
      type={item.type}
      title={item.title}
      desc={item.desc}
    />
  ));

  return (
    <div className="Events">
      <h1 className="Events-title">Upcoming Events</h1>

      <div className="Events-container">
        { elements }
      </div>
    </div>
  ); 
};

export default Events;

// {elements}
