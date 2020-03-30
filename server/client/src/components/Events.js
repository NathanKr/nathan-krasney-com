import React from "react";
import Event from "./Event";
import {
  service_category_course,
  service_category_qa
} from "../logic/serviceCategories";

const Events = () => {
  const events = [
    {
      startDt: Date.now(),
      type: service_category_course,
      desc: "some description of the course"
    },
    {
      startDt: Date.now(),
      type: service_category_qa,
      desc: "some description of the q&a session"
    }
  ];
  const elements = events.map((item, index) => (
    <Event
      key={index}
      startDt={item.startDt}
      type={item.type}
      desc={item.desc}
    />
  ));

  return <div>{elements}</div>;
};

export default Events;
